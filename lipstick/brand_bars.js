function draw_brand_bars(data){

    var nested_data = d3.nest()
                        .key(function(d){ return d["brand"]})
                        .entries(data);

    nested_data = nested_data.sort(function(a, b){
        return b["values"].length - a["values"].length;
    })

    brand_bar_scale.domain([0, nested_data[0]["values"].length])
                    .range([0, (width - 150)])
    colour_order = count_all_colours(data);
    colour_order_scale.domain(colour_order).range(d3.range(colour_order.length));
    colour_order_scale.domain(colour_order).range(d3.range(colour_order.length));

    get_val_numbers(nested_data, "color_name", colour_order_scale);
    get_val_numbers(nested_data, "permanence", permanence_scale);
    get_val_numbers(nested_data, "review", grade_scale);
    get_val_numbers(nested_data, "user_rating", community_scale); 

    nested_data = nested_data.sort(function(a, b){
        return b["values"].length > a["values"].length ? 1 : b["values"].length < a["values"].length ? -1 : 0;
    })


    brand_domain.domain(_.pluck(nested_data, 'key'))
                .rangeBands([0, nested_data.length * 25])


    var barSvg = d3.select(".barSvg");

    var bars = barSvg.selectAll("g")
                .data(brand_domain.domain())
                .enter()
                .append("g")
                .attr("transform", function(d, i){
                    return "translate(65," + (brand_domain(d) + 25) + ")";
                })

        bars.append("text")
                        .text(function(d){ return d;})
                        .attr("transform", "translate(-5, -13)")
                        .attr("text-anchor", "end");



    return nested_data;          
}

function update_brand_bars(the_data, the_dictionary, the_scale, the_variable){

    var data = [];


    for (var i = 0; i < the_data.length; i++){
        the_data[i]["the_data"] = the_data[i][the_variable];
        for (var j = 0; j < the_data[i]["the_data"].length; j++){
            data.push([the_data[i]["key"], the_scale(the_data[i]["the_data"][j][0]), the_data[i]["the_data"][j][1]]);
        }
    }
    
    var svg = d3.select(".barSvg");

    var bars = svg.selectAll("rect")
                    .data(data, function(d, i){ return i});

        bars.exit().remove();

        bars.attr("y", function(d){
            return brand_domain(d[0]);
        })
        .attr("theBrand", function(d){ return d[0]});

        bars.transition().duration(500)
        .attr("x", function(d, i){ 
                    if (i == 0){
                        return 0;
                    } else {
                        var myTotal = 0;
                        var first_brand = _.find(data, function(brand){ return brand[0] == d[0]; });
                        var first_index = _.indexOf(data, _.find(data, first_brand));
                        if (i == first_index){
                            myTotal = 0;
                        } else {
                            for (var j = first_index; j < data.length; j++){
                                if (d != data[j]){
                                    myTotal = myTotal + brand_bar_scale(data[j][2]);
                                } else {
                                    break;
                                }
                            }
                        }
                        return myTotal;
                    }
                    })
                .attr("width", function(d){ 
                    return brand_bar_scale(d[2]);})
                .attr("fill", function(d){
                    var which_val;
                    for (var i = 0; i < the_scale.range().length; i++){
                        if (the_scale.range()[i] == d[1]){
                            which_val = the_scale.domain()[i];
                            break;
                        }
                    }
                 return the_dictionary[which_val];
                });

        bars.enter().append("rect")
        .attr("transform", "translate(75,0)")
        .attr("theBrand", function(d){ return d[0]})
        .attr("height", 15)
        .attr("y", function(d){
            return brand_domain(d[0]);
        })
        .attr("fill", function(d){
                    var which_val;
                    for (var i = 0; i < the_scale.range().length; i++){
                        if (the_scale.range()[i] == d[1]){
                            which_val = the_scale.domain()[i];
                            break;
                        }
                    }
                 return the_dictionary[which_val];
                })
        .transition().duration(500)
                    .attr("x", function(d, i){ 
                    if (i == 0){
                        return 0;
                    } else {
                        var myTotal = 0;
                        var first_brand = _.find(data, function(brand){ return brand[0] == d[0]; });
                        var first_index = _.indexOf(data, first_brand);
                        if (i == first_index){
                            myTotal = 0;
                        } else {
                            for (var j = first_index; j < data.length; j++){
                                if (d != data[j]){
                                    myTotal += brand_bar_scale(data[j][2]);
                                } else {
                                    break;
                                }
                            }
                        }
                        return myTotal;
                    }
                    })
                .attr("width", function(d){ 
                    return brand_bar_scale(d[2]);});

}