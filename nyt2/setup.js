var time_format = d3.time.format("%Y-%m-%dT%H:%M:%SZ");

var time_scale = d3.time.scale()
                .range([0,800])


function xml_http_post(url, callback) {
            var req = false;
            try {
        // Firefox, Opera 8.0+, Safari
        req = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
    req.open("POST", url, true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            callback(req);
        }
    }
    req.send();
}

xml_http_post("/", function (req) {
            test_handle(req);
        })

function test_handle(the_req){
    var result = JSON.parse(the_req.responseText);
    var nested_result = d3.nest()
                        .key(function(d){ return d["actor"]})
                        .key(function(d){ return d["date"]})
                        .entries(result);

    nested_result = nested_result.sort(function(a, b){
       return b.values.length - a.values.length;
    })

    for (var i = 0; i < nested_result.length; i++){
        nested_result[i].values = nested_result[i].values.sort(function(a, b){
            return time_format.parse(a.key) - time_format.parse(b.key);
        })
    }

    time_scale.domain(d3.extent(result, function(d){ return new Date(time_format.parse(d["date"]));}));

    // visualize(nested_result);
    visualize_alt(nested_result);
}