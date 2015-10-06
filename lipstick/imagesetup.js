var svg;
var main;
var lightness_bar;
var hue_bar;
var circles;
var base_rad = 250;

var hue_brush;
var light_brush;
var price_brush;
var saturation_brush;

var width = 1125;
var height = 540;

var color_dictionary = {
    "pink": "#FF6F82",
    "red": "#CC061C",
    "burgundy": "#7D111E",
    "orange": "orange",
    "plum": "plum",
    "purple": "#8B7DDC",
    "blue": "blue",
    "fuchsia": "#EC268F",
    "nude": "#EDA4A7",
    "black": "black",
    "grey": "grey",
    "white": "white",
    "yellow": "yellow",
    "green": "green"
}

var brand_bar_scale = d3.scale.linear();

var colour_order;
var colour_order_scale = d3.scale.ordinal();
var grade_scale = d3.scale.ordinal().domain(["F", "D-", "D", "D+", "C-", "C", "C+", "B-","B", "B+", "A-", "A", "A+", "-"])
                                    .range(d3.range(14));
var community_scale = d3.scale.ordinal().domain([1,2,3,4,5,0])
                                    .range(d3.range(6));


var width_scale = d3.scale.linear()
                        .domain([0, 360])
                        .range([0, width]);

var hue_scale = d3.scale.linear()
                        .domain([0, 360])
                        .range([0, width]);


var height_scale = d3.scale.linear()
                        .domain([0.85, 0])
                        .range([0, height]);

var light_scale = d3.scale.linear()
                        .domain([0.85, 0])
                        .range([0, height]);

var radius_scale = d3.scale.linear()
                        .range([3, 15]);

var xAxis = d3.svg.axis().scale(width_scale).orient("bottom"),
    xAxis2 = d3.svg.axis().scale(hue_scale).orient("bottom"),
    yAxis = d3.svg.axis().scale(height_scale).orient("left");
    yAxis2 = d3.svg.axis().scale(light_scale).orient("left");


var priceRange = d3.max(products, function(d){ return d["price"]});
var priceScale = d3.scale.linear()
                .domain([0, 100])
                .range([0, priceRange]);

var priceOunceRange = d3.extent(products.filter(function(d){return d["price_per_ounce"] != "NA";}), function(d){ return d["price_per_ounce"]});

var priceOunceScale = d3.scale.linear()
                .domain([0, 100])
                .range(priceOunceRange);


var radius_scale_alt = d3.scale.linear()
                        .domain(priceOunceRange)
                        .range([3, 15]);



var docHeight;
var docWidth;
var realWidth;

var ratio;
var leftOffset;

var slider;


window.onload = function() {

    // docWidth = window.innerWidth;
    // docHeight = window.innerHeight;
    // realWidth = docWidth * 0.75;
    // ratio = realWidth/1200;
    // d3.select(".svgHolder").style("width", docWidth * 0.75 + "px");
    // leftOffset = d3.select(".svgHolder")[0][0]["offsetLeft"];


    d3.selectAll(".closer").on("click", function(){
        d3.selectAll(".callout").classed("hidden", true);
    })

    hue_brush = d3.svg.brush()
    .x(hue_scale)
    .on("brush", brushed);

    light_brush = d3.svg.brush()
    .y(light_scale)
    .on("brush", brushed_light);

    svg = d3.select(".mainSvg");

    svg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width + 25)
    .attr("height", height);

    svg.append("g")
    .attr("class", "y axis big")
    .attr("transform", "translate(55,25)")
    .call(yAxis);

    main = svg
    .append("g")
    .attr("class", "main")
    .attr("transform", "translate(55,25)");

    lightness_bar = svg
    .append("g")
    .attr("transform", "translate(5,25)");

    svg.append("text")
    .attr("class", "xLabel")
    .attr("font-size", 24)
    .attr("y", 670)
    .attr("x", width/2 + 40)
    .attr("text-anchor", "middle")
    .text("Hue");

    svg.append("text")
    .attr("class", "yLabel")
    .attr("font-size", 24)
    .attr("y", height/2)
    .attr("x", 25)
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90 -0," + (height/2 + 50) + ")")
    .text("Lightness");

    hue_bar = svg
    .append("g")
    .attr("transform", "translate(65," + (height + 50) + ")");

    svg.append("g")
    .attr("class", "x axis big")
    .attr("transform", "translate(65," + (height + 25) + ")")
    .call(xAxis);

    hue_bar.append("g")
    .attr("class", "x axis mini")
    .attr("transform", "translate(0," + (15) + ")")
    .call(xAxis2);

    lightness_bar.append("g")
    .attr("class", "y axis mini")
    .attr("transform", "translate(0,0)")
    .call(yAxis2);

    lightness_bar.selectAll("rect")
    .data(d3.range(0,256))
    .enter()
    .append("rect")
    .attr("width", 15)
    .attr("height", width/256)
    .attr("x", 0)
    .attr("y", function(d, i){
        return i/256 * height;
    })
    .attr("fill", function(d,i){
        var theI = 255 - ((i/255) * 0.8 + 0.1) * 255;
        return d3.rgb(theI, theI, theI);
    })

    lightness_bar.append("g")
      .attr("class", "y brush")
      .call(light_brush)
    .selectAll("rect")
      .attr("y", 0)
      .attr("width", 15);

    hue_bar.selectAll("rect")
    .data(d3.range(0,360))
    .enter()
    .append("rect")
    .attr("width", (width + 2)/360)
    .attr("height", 15)
    .attr("x", function(d, i){
        return i/360 * width;
    })
    .attr("y", 0)
    .attr("fill", function(d,i){
        return d3.rgb(d3.hsl(i/360 * 360, 0.5, 0.5));
    })


    hue_bar.append("g")
      .attr("class", "x brush")
      .call(hue_brush)
    .selectAll("rect")
      .attr("y", 0)
      .attr("height", 15);

    radius_scale.domain([0, priceRange]);

    d3.selectAll(".avail").on("change", function(d){
        doAvailabilityCheck(d3.select(this).property("checked"), d3.select(this).attr("value"));
    })

    d3.selectAll(".brandCol").on("change", function(d){
        doBrandBarCheck(d3.select(this).attr("value"));
    })


    d3.select(".priceMin").html("$" + (0).toFixed(2));
    d3.select(".priceMax").html("$" + priceRange.toFixed(2));


    slider = d3.select('#range').call(d3.slider().axis(false).min(0).max(priceRange).value( [ 0, priceRange ] ).on("slide", function(evt, value) {
        d3.select(".priceMin").html("$" + value[0].toFixed(2));
        d3.select(".priceMax").html("$" + value[1].toFixed(2));
        doPriceCheck(value[0], value[1]);
    }))

    d3.select(".sizePrice")
    .on("change", function(d){
        d3.select(".sizePriceOunce").property("checked", false);
        doResizeCheck("product");
    })

    d3.select(".sizePriceOunce")
    .on("change", function(d){
        d3.select(".sizePrice").property("checked", false);
        doResizeCheck("ounce");
    })

    // d3.select()

    update_visual(products);
    update_brand_bars(products);
};

function update_visual(data){

    circles = main.selectAll("circle")
    .data(data);

    circles.enter()
    .append("circle");

    circles.attr("r", function(d){
        return radius_scale(d["price"]);
    })
    .attr("cx", function(d){
        return width_scale(360-d["hsl"][0]);
    })
    .attr("cy", function(d){
        return height_scale(d["hsl"][2]);
    })
    .attr("fill", function(d){
        return d3.rgb(d3.hsl(360-d["hsl"][0], d["hsl"][1], d["hsl"][2]));
    })
    .attr("stroke", function(d){
        if (d[2] == "P"){
            return "#000";
        } else {
            return "#444";
        }
        
    })
    .attr("stroke-width", 2)
    .attr("transform", "translate(10,0)")
    .attr("class", "theCircles")
    .on("click", function(d){
        // doClick(d);
    })

}

function brushed() {
  width_scale.domain(hue_brush.empty() ? hue_scale.domain() : hue_brush.extent());
  circles
  .attr("cx", function(d){
        return width_scale(360-d["hsl"][0]);
    })

  svg.select(".x.axis.big").call(xAxis);
}

function brushed_light() {
  height_scale.domain(light_brush.empty() ? light_scale.domain() : light_brush.extent());
  circles
  .attr("cy", function(d){
        return height_scale(d["hsl"][2]);
    })

  svg.select(".y.axis.big").call(yAxis);
}

function doAvailabilityCheck(tOrF, theVal){
    if (tOrF == true){
        circles.filter(function(d){
            return d[2] == theVal;
        }).transition().duration(500)
        .attr("opacity", 1);
    } else {
        circles.filter(function(d){
            return d[2] == theVal;
        }).transition().duration(500)
        .attr("opacity", 0);
    }
}

function doBrandBarCheck(theVal){
    console.log(theVal);
    if (theVal == "col"){

    } else if (theVal == "tempt"){
        var svg = d3.select(".barSvg");
        var bars = svg.selectAll("g")
        .datum(function(d){ return d["review"];})
        
        var rects = bars.selectAll("rect")
        .data(function(d){ return d;})

        rects
        .enter()
        .append("rect")

        rects
        .transition().duration(500)
        .attr("x", function(d, i){ 
                    if (i == 0){
                        return 0;
                    } else {
                        var thisBrand = d3.select(this.parentNode).attr("theBrand");
                        var thisData = _.find(nested_data, function(e){ return e["key"] == thisBrand})["color_name"];
                        var myTotal = 0;
                        for (var j = 0; j < i; j++){
                            // console.log(thisData[j][1]);
                            myTotal += brand_bar_scale(thisData[j][1]);
                            // myTotal += thisData[j][1] * 2;
                        }
                        return myTotal;
                        // return myTotal;
                    }
                    })
                .attr("width", function(d){ 
                    return brand_bar_scale(d[1]);})


    }
    // if (tOrF == true){
    //     circles.filter(function(d){
    //         return d[2] == theVal;
    //     }).transition().duration(500)
    //     .attr("opacity", 1);
    // } else {
    //     circles.filter(function(d){
    //         return d[2] == theVal;
    //     }).transition().duration(500)
    //     .attr("opacity", 0);
    // }
}

function doPriceCheck(minPrice, maxPrice, type){

    //between this and availability check, we're performing a nasty little trick
    //rather than check if the circle meets both criteria in order to be visible
    //here, we're toggling stroke and fill opacity and in availability check we're toggling overall opacity
    circles.filter(function(d){
            if (type == "ounce"){
                return d["price_per_ounce"] < minPrice || d["price_per_ounce"] > maxPrice;
            }
            else{
                return d["price"] < minPrice || d["price"] > maxPrice;
            }
        })
    .transition().duration(500)
    .attr("stroke-opacity", 0)
    .attr("fill-opacity", 0);

    circles.filter(function(d){
        if (type == "ounce"){
                return d["price_per_ounce"] >= minPrice && d["price_per_ounce"] <= maxPrice;
            }
            else{
            return d["price"] >= minPrice && d["price"] <= maxPrice;
             }
        })
    .transition().duration(500)
    .attr("stroke-opacity", 1)
    .attr("fill-opacity", 1);


}

function doClick(theData){
    d3.selectAll(".callout").classed("hidden", true);


    if (width_scale(360-theData[10]["h"]) < 550){
        d3.select(".callout1")
        .classed("hidden", false);

        d3.select(".callout1")
        .style("left", (width_scale(360-theData[10]["h"]) * ratio + 125 + leftOffset) + "px")
        .style("top", (height_scale(theData[10]["l"]) * ratio) + 50 + "px")



        d3.select(".callout1").select(".productName")
        .html(theData[0]);

        d3.select(".callout1").select(".brandName")
        .html(theData[1]);

        d3.select(".callout1").select(".priceName")
        .html("$" + theData[4]);

        d3.select(".callout1").select(".availName")
        .html(theData[2]);

        d3.select(".callout1").select(".theThumb")
        .attr("src", theData[3]);
    } else {
        d3.select(".callout2")
        .classed("hidden", false);

        d3.select(".callout2")
        .style("left", (width_scale(360-theData[10]["h"]) * ratio - 215 + leftOffset) + "px")
        .style("top", (height_scale(theData[10]["l"]) * ratio) + 50 + "px")

        d3.select(".callout2").select(".productName")
        .html(theData[0]);

        d3.select(".callout2").select(".brandName")
        .html(theData[1]);

        d3.select(".callout2").select(".priceName")
        .html("$" + theData[4]);

        d3.select(".callout2").select(".availName")
        .html(theData[2]);

        d3.select(".callout2").select(".theThumb")
        .attr("src", theData[3]);
    }

}

function doResizeCheck(val){
if (val == "ounce"){
    d3.select("#range").remove();
    d3.select(".sliderHolder").append("div").attr("id", "range");
    d3.select('#range').call(d3.slider().axis(false).min(priceOunceRange[0]).max(priceOunceRange[1]).value( [ priceOunceRange[0], priceOunceRange[1] ] ).on("slide", function(evt, value) {
        d3.select(".priceMin").html("$" + value[0].toFixed(2));
        d3.select(".priceMax").html("$" + value[1].toFixed(2));
        doPriceCheck(value[0], value[1], "ounce");
    }))
    d3.select(".priceMin").html("$" + priceOunceRange[0].toFixed(2));
    d3.select(".priceMax").html("$" + priceOunceRange[1].toFixed(2));
    circles.transition().duration(500)
    .attr("r", function(d){
        if (d["price_per_ounce"] == "NA"){
            return 0;
        } else{
            return radius_scale_alt(d["price_per_ounce"]);
        }
    })
} else {
    d3.select("#range").remove();
    d3.select(".sliderHolder").append("div").attr("id", "range");
    d3.select('#range').call(d3.slider().axis(false).min(0).max(priceRange).value( [ 0, priceRange ] ).on("slide", function(evt, value) {
        d3.select(".priceMin").html("$" + value[0].toFixed(2));
        d3.select(".priceMax").html("$" + value[1].toFixed(2));
        doPriceCheck(value[0], value[1], "product");
    }))
    d3.select(".priceMin").html("$" + (0).toFixed(2));
    d3.select(".priceMax").html("$" + priceRange.toFixed(2));
    circles.transition().duration(500)
    .attr("r", function(d){
        return radius_scale(d["price"]);
    })
}
}

function update_brand_bars(data){
    var svg = d3.select(".barSvg");

    var nested_data = d3.nest()
                        .key(function(d){ return d["brand"]})
                        .entries(data);

    nested_data = nested_data.sort(function(a, b){
        return b["values"].length - a["values"].length;
    })
    console.log(nested_data);

    brand_bar_scale.domain([0, nested_data[0]["values"].length])
                    .range([0, (width - 150)])
    colour_order = count_all_colours(data);
    colour_order_scale.domain(colour_order).range(d3.range(colour_order.length));
    colour_order_scale.domain(colour_order).range(d3.range(colour_order.length));

    get_val_numbers(nested_data, "color_name", colour_order_scale);
    get_val_numbers(nested_data, "permanence");
    get_val_numbers(nested_data, "review", grade_scale);
    get_val_numbers(nested_data, "user_rating", community_scale);



    var bars = svg.selectAll("g")
                .data(nested_data)
                .enter()
                .append("g")
                .attr("theBrand", function(d){ return d["key"]})
                .attr("transform", function(d, i){
                    return "translate(100," + (i * 25) + ")";
                })

    var brand_text = bars.append("text")
                        .text(function(d){ return d["key"];})
                        .attr("transform", "translate(-5, -13)")
                        .attr("text-anchor", "end")

    var indiv_bars = bars.datum(function(d){ return d["color_name"];})
                .selectAll("rect")
                .data(function(d){ return d;})
                .enter()
                .append("rect")
                .attr("x", function(d, i){ 
                    if (i == 0){
                        return 0;
                    } else {
                        var thisBrand = d3.select(this.parentNode).attr("theBrand");
                        var thisData = _.find(nested_data, function(e){ return e["key"] == thisBrand})["color_name"];
                        var myTotal = 0;
                        for (var j = 0; j < i; j++){
                            // console.log(thisData[j][1]);
                            myTotal += brand_bar_scale(thisData[j][1]);
                            // myTotal += thisData[j][1] * 2;
                        }
                        return myTotal;
                        // return myTotal;
                    }
                    })
                .attr("width", function(d){ 
                    return brand_bar_scale(d[1]);})
                .attr("height", 15)
                .attr("fill", function(d){
                 return color_dictionary[d[0]];});
                
}

function get_val_numbers(the_data, value, scale){
    for (var i = 0; i < the_data.length; i++){
        var values = _.countBy(_.pluck(the_data[i]["values"], value), _.identity);
        values = objToArray(values);
        if (scale != undefined){
            values = values.sort(function(a, b){
                return scale(a[0]) - scale(b[0]);
            })
        }
        the_data[i][value] = values;
    }
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

function count_all_colours(arr){
    var vals = _.countBy(_.pluck(arr, "color_name"), _.identity);
    vals = objToArray(vals);
    vals = vals.sort(function(a, b){
        return b[1] - a[1];
    })
    for (var i = 0; i < vals.length; i++){
        vals[i] = vals[i][0];
    }
    return vals;
}
