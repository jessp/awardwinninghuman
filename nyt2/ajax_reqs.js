var time_format = d3.time.format("%Y-%m-%dT%H:%M:%SZ");
var time_scale = d3.time.scale()
                .range([0,800])

var request_string = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var api_key = "&api-key=048cdc414bcc96df5946c6da1e0507ee:16:70037536";
var request_url;
var httpRequest;
var page_num = 0;

var visualize_v1_button;
var visualize_v2_button;

var query_text;
var from_range;
var to_range;
var still_returning = true;
var all_articles = [];
var data_by_actors = [];
var visualizer_method;

var all_themes = [];

window.onload = function(){
	visualize_v1_button = d3.select(".buttonV1");
	visualize_v2_button = d3.select(".buttonV2");

	query_text = d3.select(".inputText");
	from_range = d3.select(".fromBox");
	to_range = d3.select(".toBox");

	visualize_v1_button.on("click", function(){
		visualizer_method = 0;
		doRequest();
	})

	visualize_v2_button.on("click", function(){
		visualizer_method = 1;
		doRequest();
	})



}

function doRequest(){
		d3.select(".dimmer").classed("hidden", true);
		d3.select(".requestModal").classed("hidden", true);
		var the_text = query_text.node().value;
		//dates done like this to make it easy to sort from low to high to prevent errors later
		var the_dates = [];
		the_dates[0] = from_range.node().value.replace(/-/g,"");
		the_dates[1] = to_range.node().value.replace(/-/g,"");

		request_url = request_string + the_text + "&begin_date=" + the_dates[0] + "&end_date=" + the_dates[1] + api_key + "&page=" + page_num + "&callback=svc_search_v2_articlearch";
		makeCorsRequest('GET', request_url);	
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(method, url) {


  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var response = xhr.responseText;
    handleResponse(response);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

function handleResponse(text){
	var interval;
	var docs = JSON.parse(text);
	if (page_num < 50){
	// if (page_num < 2){
		if (docs["response"]["docs"].length == 10){
			page_num++;
			if (page_num % 8==0){
				interval = window.setTimeout(doRequest, 1000);
			} else {
				doRequest();
			}
		}
		if (docs["response"]["docs"].length > 0){
			all_articles = all_articles.concat(docs["response"]["docs"]);
		}
		if (docs["response"]["docs"].length < 10){
			still_returning = false;
		}

	} else {
		still_returning = false;
	}

	if (still_returning == false){
		organize_data(all_articles);
	}

}


function organize_data(my_data){

	for (var i = 0; i < my_data.length; i++){
		for (var j = 0; j < my_data[i]["keywords"].length; j++){
			if (my_data[i]["keywords"][j]["name"] != "subject" && my_data[i]["keywords"][j]["name"] != "type_of_material"){
				var new_data = new Object();
				var the_actor = my_data[i]["keywords"][j]["value"] + "*&*" + my_data[i]["keywords"][j]["name"];
				new_data["actor"] = "";
				new_data["actor"] = the_actor;

				var other_actors = my_data[i]["keywords"].filter(function(d){
					return d["name"] != "subject" && d["name"] != "type_of_material" && d["value"] != my_data[i]["keywords"][j]["value"];
				})

				var themes = my_data[i]["keywords"].filter(function(d){
					return d["name"] == "subject";
				})

				var reduced_themes = [];

				for (var theme = 0; theme < themes.length; theme++){
					all_themes.push(themes[theme]["value"]);
					reduced_themes.push(themes[theme]["value"]);
				}



				for (var k = 0; k < other_actors.length; k++){
					other_actors[k] = other_actors[k]["value"] + "*&*" + other_actors[k]["name"];
				}
				new_data["other_actors"] = other_actors;
				new_data["themes"] = reduced_themes;

				new_data = merge_options(new_data, my_data[i]);

				data_by_actors.push(new_data);

			}
		}
	}


	var nested_result = d3.nest()
                        .key(function(d){ return d["actor"]})
                        .key(function(d){return d["pub_date"]})
                        .entries(data_by_actors);

    

    nested_result = nested_result.sort(function(a, b){
       return b.values.length - a.values.length;
    })

     for (var i = 0; i < nested_result.length; i++){
        nested_result[i].values = nested_result[i].values.sort(function(a, b){
            return time_format.parse(a.key) - time_format.parse(b.key);
        })
    }

    time_scale.domain(d3.extent(my_data, function(d){ return new Date(time_format.parse(d["pub_date"]));}));


    if (visualizer_method == 0){
    	visualize_alt(nested_result);
    } else {
    	visualize(nested_result);
    }
}

//http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function pluck(arr,key){
  var newArr = [];
  for (var i = 0, x = arr.length; i < x; i++){
    if (arr[i].hasOwnProperty(key)){
      newArr.push(arr[i].key)
    }
  }
  return newArr;
}
