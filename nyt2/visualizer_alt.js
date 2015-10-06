function visualize_alt(data){
	svgHeight = d3.select("svg").node()["height"]["animVal"]["value"];
	svgWidth = d3.select("svg").node()["width"]["animVal"]["value"];

	var eventRad = 7;
	// var gap = 30;
	var gap = 50;

	var margins = {"left": 150, "top": 50, "right": 25, "bottom":25};

	d3.select(".theSvg").attr("viewBox", function(d){return "0 0 1000 " + ((data.length * gap) + 50)});

	var theSvgParent = d3.select(".theSvg");

	var theSvg = theSvgParent
					.append("g")
					.attr("transform", "translate(" + margins.left + "," + margins.top + ")");

	var theSvgForCircles = theSvgParent
					.append("g")
					.attr("transform", "translate(" + margins.left + "," + margins.top + ")");

	var groups = theSvg.selectAll(".actors")
				.data(data, function(d){return d["key"];});

	groups.enter()
			.append("g")
			.attr("class", "actors")
			.attr("transform", function(d, i){ return "translate(0," + (i * gap) + ")";})



	groups.append("text")
	.text(function(d){ return d["key"].split("*&*")[0];})
	.attr("transform", "translate(-125,6)");

	groups.append("line")
			.attr("x1", 0)
			.attr("x2", 830)
			.attr("y1", eventRad/2)
			.attr("y2", eventRad/2)
			.attr("transform", "translate(-30,0)")
			.attr("stroke-width", 1)
			.attr("stroke", function(d){return org_colors[d["key"].split("*&*")[1]]})
			.style("stroke-dasharray", "5,7");


	var eventTimes = groups.selectAll(".times")
					.data(function(d){ return d["values"]});

				eventTimes.enter()
				.append("g")
				.attr("class", "times")
				.attr("theI", function(d, i){return i;});

	var eventsForLinks = eventTimes.selectAll(".eventsForLinks")
							.data(function(d){ return d["values"];})

				eventsForLinks.enter()
						.append("g")
						// .attr("id", function(d){
						// 	var id_string = "";
						// 	var altered_themes = [];
						// 	var themes = "";

						// 	if (d["themes"] != undefined){

						// 	for (var i = 0; i < d["themes"].length; i++){
						// 			var theme = "a" + d["themes"][i].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"");
						// 			altered_themes.push(theme);
						// 		}

						// 		themes = altered_themes.join(" " +d["web_url"].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,""));

						// 		var preExist = d3.selectAll("#" + d["web_url"].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,""));
						// 		if (preExist[0].length == 0){
						// 			id_string += d["web_url"].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"");
						// 		}

						// 		return id_string;

						// 	} 

						// })
						.attr("class", function(d){
						 return "eventsForLinks " + d["web_url"].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"") + " a" + d["actor"].split("*&*")[0].replace(/[|'"? \.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"") + " a" + d["other_actors"].length;
						})
						.attr("transform", function(d){ return "translate(" + time_scale(time_format.parse(d["pub_date"])) + ",0)";})


		var eventLinks = eventsForLinks.filter(function(d){ 
										return d["other_actors"].length > 0;
									})
							.selectAll("path")
							.data(function(d){ return d["other_actors"];})

				eventLinks.enter()
				.append("path")
				.attr("d", function(d, i){
						var theVal = d3.select(this.parentNode.parentNode).attr("theI");
						var startY;
						var stringStart;
						var stringMiddle;
						var stringEnd;
						var this_grandaddy = d3.select(this.parentNode.parentNode.parentNode).node().transform["animVal"][0]["matrix"]["f"];
						var connecters = d3.select(this.parentNode).node().classList[1];
						var connecter = d3.select("." + connecters + ".a" + d.split("*&*")[0].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,""))[0][0];
						var theOtherVal = d3.select(connecter.parentNode).attr("theI");

						var other_grandaddy = connecter.parentNode.parentNode.transform["animVal"][0]["matrix"]["f"];
						var endY;

						endY = other_grandaddy - this_grandaddy + eventRad/2 - 20;

						startY = eventRad/2 - 20;

						if (other_grandaddy > this_grandaddy){
							stringStart = "M" + (eventRad) + " " + (startY) + " L" + (eventRad + 7) + " " + (startY) + " Q " + (eventRad + 7 + 5) + " " + (startY) + " " + (eventRad + 7 + 5) + " " + (startY + 5);
							stringMiddle = " L " + (eventRad + 7 + 5) + " " + (endY - 5);
						} else {
							stringStart = "M" + (eventRad) + " " + (startY) + " L" + (eventRad + 7) + " " + (startY) + " Q " + (eventRad + 7 + 5) + " " + (startY) + " " + (eventRad + 7 + 5) + " " + (startY - 5);
							stringMiddle = " L " + (eventRad + 7 + 5) + " " + (endY + 5);
						}

						stringEnd = " Q " + (eventRad + 7 + 5) + " " + endY + " " + (eventRad + 7) + " " + endY + " L" + eventRad + " " + endY;
					
						var string = stringStart + stringMiddle + stringEnd;

						return string;

				})
				.attr("stroke-width", 1)
				.attr("fill", "none")
				.attr("stroke", function(d){ 
					if (type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]] != undefined){
						return type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]][1];
					} else {
						return "#000";
					} })
				.attr("stroke-dasharray", function(){ 
					var totalLength = this.getTotalLength();
					return totalLength + " " + totalLength; })
				.attr("stroke-dashoffset", function(){return this.getTotalLength();});


	var circle_groups = theSvgForCircles.selectAll(".circleactors")
				.data(data, function(d){return d["key"];});

	circle_groups.enter()
			.append("g")
			.attr("class", "circleactors")
			.attr("transform", function(d, i){ return "translate(0," + (i * gap) + ")";})

	var circleeventTimes = circle_groups.selectAll(".circletimes")
					.data(function(d){ return d["values"]});

				circleeventTimes.enter()
				.append("g")
				.attr("theI", function(d, i){return i;})
				.attr("class", "circletimes");


	var eventsForCircles = circleeventTimes.selectAll("eventsForCircles")
							.data(function(d){ return d["values"];})

	eventsForCircles.enter()
						.append("g")
						.attr("class", function(d){ return "eventsForCircles " + d["web_url"].replace(/[|'"\.,-\/#!$%\^&\*;:{}=\-_`~()? ]/g,"") + "circ";})
						.attr("transform", function(d){ return "translate(" + time_scale(time_format.parse(d["pub_date"])) + ",0)";})
						.attr("thePrevRad", function(){return eventRad/2 + 3 + Math.random() * eventRad})


	eventsForCircles.append("line")
							.attr("x1", eventRad/2)
							.attr("x2", eventRad/2)
							.attr("y1", eventRad/2)
							.attr("y2", eventRad/2)
							.attr("stroke", "#000")
							.attr("stroke-width", 2)


	eventsForCircles.append("circle")
							.attr("r", eventRad/2)
							.attr("cx", eventRad/2)
							.attr("cy", eventRad/2)
							.attr("fill", "#000")


	var eventTicks = eventsForCircles.append("circle")
							.attr("class", "innerCircle")
							.attr("r", function(){
								var theRad = d3.select(this.parentNode).attr("thePrevRad");
								return theRad;
							})
							.attr("cx", eventRad/2)
							.attr("cy", eventRad/2)
							.attr("fill", function(d){ 
								if (type_symbol_dict[d["type_of_material"]] != undefined){
									return type_symbol_dict[d["type_of_material"]][1];
								} else {
									return "#ccc";
								}
							})
							.attr("fill-opacity", 0.8);


	var transparentRectangles = eventsForCircles.append("rect")
							.attr("x", eventRad/2-10)
							.attr("y", -15)
							.attr("width", 20)
							.attr("height", 30)
							.attr("opacity", 0)
							.attr("cursor", "pointer")
							.on("mouseover", function(d){


								var relatives = d3.selectAll("." + d["web_url"].replace(/[|'"\.,-\/#!$%\^&\*;:{}=\-_`~() ?]/g,"") + "circ");

								var brothers = relatives.select(".innerCircle");

								brothers.transition()
								.duration(500)
								.attr("cy", eventRad/2 - 20);

								var lines = relatives.selectAll("line");
								lines.transition().duration(500)
								.attr("y2", eventRad/2 - 20);

								var theText = relatives.selectAll(".typeIcon").transition()
												.duration(500)
												.attr("dy", eventRad/2 + 3.5 - 20);

								var linkSym = relatives.selectAll(".linkSym").transition()
												.duration(500)
												.attr("dy", function(d){
													var theRad = d3.select(this.parentNode).attr("thePrevRad");
													return -theRad - 20;
												})


								var brotherLinks = d3.selectAll("." + "eventsForLinks" + "." + d["web_url"].replace(/[|'"\.,-\/#!$%\^&\*;:{}=\-_`~()? ]/g,"")).select("path");
								
								brotherLinks.transition().duration(1000).delay(500)
								.ease("linear")
        						.attr("stroke-dashoffset", 0);

								var theY = this.parentNode.parentNode.parentNode.transform.animVal[0]["matrix"]["f"];
								var theX = this.parentNode.parentNode.getBBox()["x"];
								
								doPopUp(d, theX, theY);
							})
							.on("mouseout", function(d){
								var relatives = d3.selectAll("." + d["web_url"].replace(/[|'"\.,-\/#!$%\^&\*;:{}=\-_`~()? ]/g,"") + "circ");

								var brothers = relatives.select(".innerCircle");

								brothers.transition()
								.delay(700)
								.duration(500)
								.attr("cy", eventRad/2);

								var lines = relatives.selectAll("line");
								lines.transition().duration(500).delay(700)
								.attr("y2", eventRad/2);

								var theText = relatives.selectAll(".typeIcon").transition()
												.delay(700)
												.duration(500)
												.attr("dy", eventRad/2 + 3.5)

								var linkSym = relatives.selectAll(".linkSym").transition()
												.delay(700)
												.duration(500)
												.attr("dy", function(d){
													var theRad = d3.select(this.parentNode).attr("thePrevRad");
													return -theRad;
												})

								var brotherLinks = d3.selectAll("." + "eventsForLinks" + "." + d["web_url"].replace(/[|'"\.,-\/#!$%\^&\*;:{}=\-_`~()? ]/g,"")).select("path");
								
								brotherLinks.transition().duration(700)
								.attr("stroke-dashoffset", function(){return this.getTotalLength();});
								// .attr("stroke-width", 1);

								closePopUp();
							})


	var eventIcons = eventsForCircles.append("text")
									.attr("class", "typeIcon")
									.attr('font-family', 'FontAwesome')
									.attr("font-size", "0.6em")
									.attr("text-anchor", "middle")
									.attr("x", eventRad/2)
									.attr("dy", eventRad/2 + 3.5)
									.attr("fill-opacity", 0.8)
									.attr("fill", "#fff")
								    .text(function(d) {
								    	if (section_symbol_dict[d["section_name"]] == undefined){
								    		return "\uf12a";
								    	} else{
								    		return section_symbol_dict[d["section_name"]]; 
								    	}})
								.attr("pointer-events", "none");

	var linkSymbols = eventsForCircles.filter(function(d){
										return d["other_actors"].length > 0;
									}).append("text")
									.attr('font-family', 'FontAwesome')
									.attr("font-size", "0.45em")
									.attr("class", "linkSym")
									.attr("dy", function(d){
										var theRad = d3.select(this.parentNode).attr("thePrevRad");
										return -theRad;
									})
									.attr("fill", "#666")
									.text("\uf0c1");

	buildTour(data);

}

