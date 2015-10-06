var org_dictionary = {"Russia": "country", "Putin": "person", "Snowden": "person", "Medvedev": "person", "Navalny": "person", "Serdyukov": "person", "Syria": "country", "Ukraine": "country", "Alyokhina": "person", "Magnitsky": "person", "Tchaikovsky": "person", "Nabiullina": "person", "Assange": "person", "Iran": "country", "Yanukovich": "person", "Pakhomov": "person", "Belarus": "country", "Kazakhstan": "country", "web_Urlashov": "person", "McFaul": "person", "Poland": "country", "Guriev": "person", "Berezovsky": "person", "Filin": "person", "Greece": "country", "Kozlov": "person", "Romney": "person", "Sobchak": "person", "Surgutneftegaz": "organization", "Prokhorov": "person", "Tolokonnikova": "person", "Romanova": "person", "Obama": "person", "Knopfler": "person", "Akunin": "person", "Schmidt": "person", "Zuckerberg": "person", "Rosneft": "organization"};

var org_colors = {"glocations": "#5296FF",
					"persons": "#3FD6E8",
					"organizations": "#09DBB6"}

var type_symbol_dict = {"Blog":["\uf0f9", "#00119C"],
					"Brief":["\uf1ba", "#A6086B"],
					"News":["\uf19c", "#CC7921"],
					"Letter":["\uf06c", "#97A600"],
					"Op-Ed":["\uf091", "#069C63"],
					"Obituary":["\uf0f4", "#104A52"],
					"Video":["\uf134", "#521036"],
					"Paid Death Notice": ["\uf21e", "#222"],
					"Review": ["\uf123", "#A8113C"],
					"Front Page": ["\uf1ea", "#2F2475"],
					"Article": ["\uf1ea", "#2F2475"]}



var section_symbol_dict = {"World":"\uf0ac",
					"U.S.":"\uf19c",
					"Travel":"\uf072",
					"Technology":"\uf109",
					"Sports":"\uf1e3",
					"Opinion":"\uf0e5",
					"Magazine":"\uf02d",
					"Business Day":"\uf0f2",
					"Business": "\uf0f2",
					"Arts": "\uf1fc"}

var svgHeight;
var svgWidth;


function visualize(data){
	svgHeight = d3.select("svg").node()["height"]["animVal"]["value"];
	svgWidth = d3.select("svg").node()["width"]["animVal"]["value"];

	var eventRad = 7;
	// var gap = 30;
	var gap = 55;

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
						.attr("class", function(d){
							var altered_themes = [];

							for (var i = 0; i < d["themes"].length; i++){
								var theme = "a" + d["themes"][i].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"");
								altered_themes.push(theme);
							}

							var themes = altered_themes.join(" ");
							return themes + " eventsForLinks " + d["web_url"].replace(/[|'"\.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"") + " a" + d["actor"].split("*&*")[0].replace(/[|'"? \.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"") + " a" + d["other_actors"].length;
						})
						.attr("transform", function(d){ return "translate(" + time_scale(time_format.parse(d["pub_date"])) + ",0)";})


var eventLinks = eventsForLinks.filter(function(d){ 
										return d["other_actors"].length > 0;
									})
							.selectAll("path")
							.data(function(d){ return d["other_actors"];})

				eventLinks.enter()
				.append("path");

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

						if (theOtherVal%2 == 0){
							endY = other_grandaddy - this_grandaddy + eventRad/2 - gap/4;
						} else {
							endY = other_grandaddy - this_grandaddy + eventRad/2 + gap/4;
						}
						
						if (theVal%2 == 0){
							startY = eventRad/2 - gap/4;
						} else {
							startY = eventRad/2 + gap/4;
						}

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
						.attr("class", function(d){ return "eventsForCircles " + d["web_url"].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"") + "circ";})
						.attr("transform", function(d){ return "translate(" + time_scale(time_format.parse(d["pub_date"])) + ",0)";})


	eventsForCircles.append("line")
							.attr("x1", eventRad/2)
							.attr("x2", eventRad/2)
							.attr("y1", eventRad/2)
							.attr("y2", function(d, i){
								var theVal = d3.select(this.parentNode.parentNode).attr("theI");
								if (theVal%2 == 0){
									return eventRad/2 - gap/4;
								} else {
									return eventRad/2 + gap/4;
								}
								return eventRad/2})
							.attr("stroke", "#000")
							.attr("stroke-width", 2)


	eventsForCircles.append("circle")
							.attr("r", eventRad/2)
							.attr("cx", eventRad/2)
							.attr("cy", eventRad/2)
							.attr("fill", "#000")


	var eventTicks = eventsForCircles.append("circle")
							.attr("class", "innerCircle")
							.attr("r", eventRad)
							.attr("cx", eventRad/2)
							.attr("cy", function(d, i){
								var theVal = d3.select(this.parentNode.parentNode).attr("theI");
								if (theVal%2 == 0){
									return eventRad/2 - gap/4;
								} else {
									return eventRad/2 + gap/4;
								}
								return eventRad/2})
							.attr("fill", "#ccc")
							.attr("stroke-width", 1.5)
							// .attr("stroke", function(d){console.log(d); return org_colors[org_dictionary[d["actor"]]]})
							.attr("stroke", function(d){ 
								if (type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]] != undefined){
									return type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]][1];
								} else {
									return "#000";
								} })
							.on("mouseover", function(d){
								var brothers = d3.selectAll("." + d["web_url"].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"") + "circ").select(".innerCircle");

								brothers.transition()
								.duration(500)
								.attr("r", eventRad + 2);

								var brotherLinks = d3.selectAll("." + "eventsForLinks" + "." + d["web_url"].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"")).select("path");
								
								brotherLinks.transition().duration(500)
								.attr("stroke-width", 1.75);

								var theY = this.parentNode.parentNode.parentNode.transform.animVal[0]["matrix"]["f"];
								var theX = this.parentNode.parentNode.getBBox()["x"];
								
								doPopUp(d, theX, theY);
							})
							.on("mouseout", function(d){
								var brothers = d3.selectAll("." + d["web_url"].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"") + "circ").select(".innerCircle");

								brothers.transition()
								.duration(500)
								.attr("r", eventRad);

								var brotherLinks = d3.selectAll("." + "eventsForLinks" + "." + d["web_url"].replace(/[|'" \.,-\/#!$%?\^&\*;:{}=\-_`~()? ]/g,"")).select("path");
								
								brotherLinks.transition().duration(500)
								.attr("stroke-width", 1);

								closePopUp();
							})


	var eventIcons = eventsForCircles.append("text")
									.attr('font-family', 'FontAwesome')
									.attr("font-size", "0.6em")
									.attr("text-anchor", "middle")
									.attr("x", eventRad/2)
									.attr("dy", function(d, i){
								var theVal = d3.select(this.parentNode.parentNode).attr("theI");
								if (theVal%2 == 0){
									return eventRad/2 - gap/4 + 3.5;
								} else {
									return eventRad/2 + gap/4 + 3.5;
								}
								return eventRad/2})
									// .attr("dy", 7)
									// .attr("fill", function(d){return org_colors[org_dictionary[d["actor"]]] })
									.attr("fill", function(d){ 
											if (type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]] != undefined){
												return type_symbol_dict[d3.select(this.parentNode).data()[0]["type_of_material"]][1];
											} else {
												return "#000";
										} })
									// .text(function(d) {return type_symbol_dict[d["type"]]; }); 
								    .text(function(d) {
								    	if (section_symbol_dict[d["section_name"]] == undefined){
								    		return "\uf12a";
								    	} else{
								    		return section_symbol_dict[d["section_name"]]; 
								    	}})
								.attr("pointer-events", "none");

	buildTour(data);
									


}

function doPopUp(theData, theX, theY){
var vals = theData["other_actors"];
for (var i = 0; i < vals.length; i++){
	vals[i] = vals[i].split("*&*")[0];
}

theX = theX * svgWidth/1000;
theY = theY * svgHeight/600;

if (theX < svgWidth*0.6){
	theX = theX + 250;
} else {
	theX = theX - 150;
}
	
var thePopUp = d3.select(".popUp");

thePopUp.classed("hidden", false);
thePopUp.style("left", theX + "px");
thePopUp.style("top", theY + "px");

thePopUp.select(".content").html(theData["snippet"]);
thePopUp.select(".theTitle").html(theData["headline"]["main"]);
thePopUp.select(".theAuthor").html(theData["author"]);

if (vals.length == 0){
	thePopUp.select(".otherActors").html("None");
} else {
	thePopUp.select(".otherActors").html(vals.join(', '));
}


}

function closePopUp(){
	d3.selectAll(".popUp").classed("hidden", true);

}