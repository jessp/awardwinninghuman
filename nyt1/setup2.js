var time_format = d3.time.format("%Y-%m-%dT%H:%M:%SZ");
var daily_format = d3.time.format("%Y-%m-%d");
var margin = {left:100, right:35, top:50, bottom:50};

var width = 1100; //width should match viewbox width
var height = 500 - margin.top - margin.bottom;
var font_scale = d3.scale.linear()
                .range([1,10]);

var time_scale = d3.time.scale()
                .range([0,width-margin.left-margin.right]);
var context_time = d3.time.scale()
                .range([0,width-margin.left-margin.right]);

var xAxis = d3.svg.axis().scale(time_scale).orient("bottom"),
    xAxis2 = d3.svg.axis().scale(context_time).orient("bottom");

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

var section_scale = d3.scale.category20();
var section_y_scale = d3.scale.ordinal().rangeBands([0,1000]);
var context_section_legend = d3.scale.ordinal();

var all_themes = [];

var the_selected_term = "";
var the_selected_type = "";

var article_width = 35;
var article_height = 45;

var image_url_starter = "http://graphics8.nytimes.com/";

var drawing_from_scratch = true;


window.onload = function(){
    visualize_v1_button = d3.select(".buttonV1");
    visualize_v2_button = d3.select(".buttonV2");

    query_text = d3.select(".inputText");
    from_range = d3.select(".fromBox");
    to_range = d3.select(".toBox");

    visualize_v1_button.on("click", function(){
        d3.select(".selectEntity").classed("hidden", false);
        visualizer_method = 0;
        doRequest();
    })

    visualize_v2_button.on("click", function(){
        d3.select(".selectEntity").classed("hidden", false);
        visualizer_method = 1;
        doRequest();
    })

    d3.select(".connectionsButton")
    .on("click", function(d){
        d3.select(".dimmer").classed("hidden", false);
        d3.select(".selectEntity").classed("hidden", false);
    })

    d3.select(".connectionsButton")
    .on("click", function(d){
        d3.select(".dimmer").classed("hidden", false);
        d3.select(".selectEntity").classed("hidden", false);
    })

    d3.select(".newSearchButton").classed("hidden", false);



}

function doRequest(){
        // d3.select(".dimmer").classed("hidden", true);
        d3.select(".initialInput").classed("hidden", true);
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
        // resize_scale(all_articles.length);
        organize_data(all_articles);
    }

}

function resize_scale(num_articles){
    time_scale.range([0, num_articles * 30]);
}


function organize_data(my_data){



    for (var i = 0; i < my_data.length; i++){
         var new_data = new Object();
        new_data = merge_options(new_data, my_data[i]);
        new_data["all_actors"] = [];
        new_data["themes"] = [];
        if (new_data["section_name"] == null){
            new_data["section_name"] = "None";
        }
        for (var j = 0; j < my_data[i]["keywords"].length; j++){
            if (my_data[i]["keywords"][j]["name"] == "subject"){
                new_data["themes"].push(my_data[i]["keywords"][j]["value"]);
            } else if (my_data[i]["keywords"][j]["name"] != "type_of_material"){
                new_data["all_actors"].push(my_data[i]["keywords"][j]["value"] + "*&*" + my_data[i]["keywords"][j]["name"]);

            }
        }
        data_by_actors.push(new_data);

    }


    var nested_result = d3.nest()
                        .key(function(d){ return d["actor"]})
                        .key(function(d){ return d["pub_date"]})
                        .entries(data_by_actors);

    
    for (var i = 0; i < nested_result.length; i++){
        nested_result[i]["values"] = nested_result[i]["values"].sort(function(a, b){
            return new Date(a["key"]) - new Date(b["key"]);
        })
    }

    nested_result = nested_result.sort(function(a, b){
        return new Date(a["values"][0]["key"]) - new Date(b["values"][0]["key"]);
    })

    time_scale.domain(d3.extent(my_data, function(d){ return new Date(time_format.parse(d["pub_date"]));}));
    context_time.domain(d3.extent(my_data, function(d){ return new Date(time_format.parse(d["pub_date"]));}));

    //reset domain so  it extends half a day before and half a day after date range
    context_time.domain([new Date(context_time.domain()[0].setDate(context_time.domain()[0].getDate()-1)), new Date(context_time.domain()[1].setDate(context_time.domain()[1].getDate()+1))])



    makeLegend(my_data, section_y_scale);
    makeLegendForSections(my_data, context_section_legend);
    context_section_legend.range(d3.range(context_section_legend.domain().length));


    var the_nodes = findLevels(nested_result);

    var the_links = calcLinks(the_nodes);

    makeLegend(the_nodes, section_scale);
    

    if (visualizer_method == 0){
        whatToFollow(the_nodes, the_links);
    } 
}

function whatToFollow(nodes, links){
    var the_topics = _.countBy(_.flatten(_.pluck(nodes, "all_actors")), _.identity);
    var the_themes = _.countBy(_.flatten(_.pluck(nodes, "themes")), _.identity);
    the_themes = objToArray(the_themes);
    the_themes = the_themes.filter(function(d){
        return d[1] > 1;
    })
    the_themes = the_themes.sort(function(a, b){ return b[1] - a[1];})
    
    the_topics = objToArray(the_topics);
    the_topics = the_topics.filter(function(d){
        return d[1] > 1;
    })
    the_topics = the_topics.sort(function(a, b){ return b[1] - a[1];})
    
    displaySelections(the_topics, the_themes, nodes, links);
    
}


function objToArray(obj){
var arr = [];
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        arr.push([key, obj[key]]);
    }
};
return arr;
}

function displaySelections(my_topics, my_themes, my_nodes, my_links){
    var themeList = d3.select(".themeList");
    themeList.selectAll("li")
    .data(my_themes)
    .enter()
    .append("li")
    .html(function(d){ return d[0].split("*&*")[0] + " (" + d[1] + ")";})
    .on("click", function(d){
        the_selected_term = d[0];
        the_selected_type = "themes";
        if (drawing_from_scratch){
            visualize(my_nodes, my_links);
            drawing_from_scratch = false;
        } else {
            reselectLinks();
        }
        closeThemeModal();
    })

    var entityList = d3.select(".entityList");

    entityList.selectAll("li")
    .data(my_topics)
    .enter()
    .append("li")
    .html(function(d){ return d[0].split("*&*")[0] + " (" + d[1] + ")";})
    .on("click", function(d){
        the_selected_term = d[0];
        the_selected_type = "all_actors";
        if (drawing_from_scratch){
            visualize(my_nodes, my_links);
            drawing_from_scratch = false;
        } else {
            reselectLinks();
        }
        closeThemeModal();
    })

    d3.select(".allAccordian")
    .on("click", function(d){
        the_selected_term = "all";
        the_selected_type = "all";
        if (drawing_from_scratch){
            visualize(my_nodes, my_links);
            drawing_from_scratch = false;
        } else {
            reselectLinks();
        }
        closeThemeModal();
    })


}

function closeThemeModal(){
    d3.select(".dimmer").classed("hidden", true);
    d3.select(".selectEntity").classed("hidden", true);
}

function makeLegend(nodes, legend){
    legend.domain(_.uniq(_.pluck(nodes, 'section_name')));
}

function makeLegendForSections(nodes, legend){
    var section_names = objToArray(_.countBy(_.pluck(nodes, 'section_name')),_.identity).filter(function(d){ return d[1] > 3});
    section_names = section_names.sort(function(a, b){
        return b[1] - a[1];
    })  

    for (var i = 0; i < section_names.length; i++){
        section_names[i] = section_names[i][0];
    }
    legend.domain(section_names);
}

function calcLinks(theNodes){
    var links = [];
    for (var i = 0; i < theNodes.length; i++){
        getLink(theNodes, i, "all_actors", links);
        getLink(theNodes, i, "themes", links);
    }
    return links;
}

function getLink(nodeArray, index, attribute, linkArray){
    for (var j = 0; j < nodeArray[index][attribute].length; j++){
            var matches = nodeArray.filter(function(d){
                return _.contains(d[attribute], nodeArray[index][attribute][j]) && (d["_id"] !== nodeArray[index]["_id"]);
            })
            if (matches.length > 0){
                matches.sort(function(a, b){
                    return new Date(a["pub_date"]) - new Date(b["pub_date"]);
                })
                var link = new Object();
                link["type"] = attribute;
                link["source"] = nodeArray[index];
                link["target"] = matches[0];
                linkArray.push(link);
            }
        }
}




function findLevels(theData){
    var final_data = [];


    for (var i = 0; i < theData.length; i++){
        for (var j = 0; j < theData[i]["values"].length; j++){
            var newEntry = theData[i]["values"][j]["values"][0];
            newEntry["level"] = section_y_scale(theData[i]["values"][j]["values"][0]["section_name"]);
            newEntry["name"] = "a" + theData[i]["values"][j]["values"][0]["_id"] + theData[i]["values"][j]["values"][0]["section_name"].split("*&*")[0].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"");
            newEntry["x"] = time_scale(new Date(theData[i]["values"][j]["values"][0]["pub_date"]));
            newEntry["x2"] = function(){return this["x"] + article_width/2 };
            newEntry["width"] = article_width/2 ;
            newEntry["height"] = article_height ;
            newEntry["saved_x"] = time_scale(new Date(theData[i]["values"][j]["values"][0]["pub_date"]));
            newEntry["y"] = section_y_scale(theData[i]["values"][j]["values"][0]["section_name"]);
            newEntry["y2"] = function(){return this["y"] + this["height"] };
            newEntry["height"] = article_height ;
            newEntry["relevance"] = Math.random() * 300 + 100;
            newEntry["radius"] = 50;
            // newEntry["fixed"] = true;
            final_data.push(newEntry);
        }
    }

    return final_data;
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
