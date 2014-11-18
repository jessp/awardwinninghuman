
var data_array = [];
var comb_array = [];

    function xml_http_post(url, data, callback) {
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
    req.send(data);
}

function load_page(val) {
    data_array = [];
    comb_array = [];
  
    var table = "submissions_table" 
    var data = val + "&" + table    
    xml_http_post("redditcluster.html", data, function (req) {
        test_handle(req);
    })

    var table = "comments_table" 
    var data = val + "&" + table    
    xml_http_post("redditcluster.html", data, function (req) {
        test_handle(req);
    })
   
    
}

function test_handle(req) {


    var tempArray = JSON.parse(req.responseText);

    comb_array.push(tempArray);

    Array.prototype.push.apply(data_array, tempArray);

    if (comb_array.length == 2){
    	draw();
    }
}




document.addEventListener("DOMContentLoaded", function() {
  load_page("adventuretime");
});

