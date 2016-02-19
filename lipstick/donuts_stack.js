function draw_brand_donuts(data){

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


    // var barSvg = d3.select(".donutSvg");

    // var bars = barSvg.selectAll("g")
    //             .data(brand_domain.domain())
    //             .enter()
    //             .append("g")
    //             .attr("transform", function(d, i){
    //                 return "translate(65," + (brand_domain(d) + 25) + ")";
    //             })

    //     bars.append("text")
    //                     .text(function(d){ return d;})
    //                     .attr("transform", "translate(-5, -13)")
    //                     .attr("text-anchor", "end");



    return nested_data;          
}

function update_brand_donuts(the_data, the_dictionary, the_scale, the_variable){

    // var data = [];


    // for (var i = 0; i < the_data.length; i++){
    //     the_data[i]["the_data"] = the_data[i][the_variable];
    //     for (var j = 0; j < the_data[i]["the_data"].length; j++){
    //         data.push([the_data[i]["key"], the_scale(the_data[i]["the_data"][j][0]), the_data[i]["the_data"][j][1]]);
    //     }
    // }

    // data = d3.nest()
    // 		.key(function(d){ return d["brand"]})
    // 		.entries(data);
    //D3 function to define the inner and outer radius of the donut
    var arc = d3.svg.arc()
    .outerRadius(75)
    .innerRadius(55);

    var svg = d3.select(".donutSvg");

   
   	var brand_group = svg.selectAll("g")
   						.data(the_data, function(d){ return d["key"]});

   	brand_group.enter()
   	.append("g");

   	if (donuts){
   		brand_group
   		.transition().duration(500)
   		.attr("transform", function(d, i){
   		return "translate(" + (i%6 * 195 + 150) + "," + (Math.floor(i/6) * 215 + 100) + ")";})
   	} else {
   		brand_group
   		.transition().duration(500)
   		.attr("transform", function(d, i){
   		return "translate(100," + (i * 50 + 100) + ")";})
   	}

   	var pie = d3.layout.pie().value(function(d){ return d[1];});

   	var arcs = brand_group.selectAll("path")
   				.data(function(d){ return pie(d["color_name"])});

   		if (donuts){
   			arcs.transition().duration(1000)
   			.delay(700)
   			.attr("d", arc)
   		} else {
   			// arcs.attr("opacity", function(d, i){ return i == 0 ? 1: 0;})
			arcs
   			.transition().duration(2000)
   			.attr("d", function(d, i){
   				var x1, y1, x2, y2;

   				if (i == 0){
                        myTotal = 0;
                    } else {
                    	
                        var myTotal = 0;
                        var the_brand = d3.select(this.parentNode).node()["__data__"];
                        var the_index = _.indexOf(the_brand[the_variable], d["data"]);

                        for (var j = 0; j < the_index; j++){
                        	myTotal = myTotal + the_brand[the_variable][j][1];
                        }

                    }
                x1 = myTotal; 
   				y1 = 0;
   				x2 = d["data"][1] + myTotal;
   				y2 = y1 + 20;


   				console.log(d3.select(this).attr("num_points")/8);

   				var shape_string = "M" + x2 + " " + y2 + " L " + x1 + " " + y2 + " L " + x1 + " " + y1 + " L " + x2 + " " + y1 + "Z";
   				return shape_string;
   			})
   		}

   		arcs.enter()
   		.append("path")
   		.attr("the_path", arc)
   		.attr("d", arc);

   		arcs
   		.attr("d", function(d){
   			var the_length = d3.select(this).node().getTotalLength();
   			var points = [];

   			// var first_x = d3.select(this).attr("the_path").split(" ", 1)[0].split("M")[1].split(",")[0];
   			// var first_y = d3.select(this).attr("the_path").split(" ", 1)[0].split("M")[1].split(",")[1].split("A")[0];
   			// var second_x = d3.select(this).attr("the_path").split(/[LM]/)[1].split(" ")[d3.select(this).attr("the_path").split(/[LM]/)[1].split(" ").length-1].split(",")[0];
   			// var second_y = d3.select(this).attr("the_path").split(/[LM]/)[1].split(" ")[d3.select(this).attr("the_path").split(/[LM]/)[1].split(" ").length-1].split(",")[1];
   			// var third_x = d3.select(this).attr("the_path").split(" ")[d3.select(this).attr("the_path").split(" ").length-1].split("Z")[0].split(",")[0];
   			// var third_y = d3.select(this).attr("the_path").split(" ")[d3.select(this).attr("the_path").split(" ").length-1].split("Z")[0].split(",")[1];

   			var num_points = Math.floor(the_length/3);
   			d3.select(this).attr("num_points", num_points);
   			var point_coords = [];
   			var path_string = "M";
   			for (var j = 0; j < num_points; j++){
   				var the_point = d3.select(this).node().getPointAtLength(j * 3);
   				point_coords.push([the_point["x"], the_point["y"]]);
   				path_string += the_point["x"];
   				if (j == num_points-1){
   					path_string += " " + the_point["y"] + "Z";
   				} else {
					path_string += " " + the_point["y"] + " L ";
   				}
   			}
   			return path_string;
   		})
   		.attr("fill", function(d){ return color_dictionary[d["data"][0]];})

}