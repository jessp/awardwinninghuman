	window.onload = function() {

	$('.mod-class').slick({
		dots: true,
		arrows: true,
		setPosition: 0
	});

	$(".reveal-modal").on("opened.fndtn.reveal", function() {
    	$(".mod-class").slick("setPosition", 0);
	});



	//arc stuff
	var arcSvg = d3.selectAll(".arcBg");
	var numArcs = 75;
	var arcData = [];
	arcData = genData(numArcs);
	var colorForArcs = genGreys(numArcs, 100, 175);

	var arcScale = d3.scale.linear()
					.domain([0.01,0.99])
					.range([250,500]);

	var pi = Math.PI;
  	var numSecs = 360/numArcs;

  	var subArc = d3.svg.arc()
  	.innerRadius(0)
  	.outerRadius(function(d){
  		return arcScale(d);
  	})
  	.startAngle(function(d, i){
  		 return i*numSecs * (pi/180);
  	})
  	.endAngle(function(d, i){
  		return (i+1)*numSecs * (pi/180); 
  	});

  	var subArcPath = arcSvg.selectAll(".subArcPath")
			  .data(arcData, function(d, i){
			  	return i;
			  });

	subArcPath.enter()
	.append("path")
	.attr("class","subArcPath")
	.attr("fill", function(d, i){
		return d3.rgb(colorForArcs[i], colorForArcs[i], colorForArcs[i]); 
	})
	.attr("d", subArc)
	.attr("stroke", "#000")
	.attr("stroke-width", 1)
	.attr("transform", "translate(400,450)");

	//bar stuff
	var barNum = 5;
	var barData = [];
	barData = genData(barNum);

	var barSvg = d3.selectAll(".barChart")
	// .attr("width", 800).attr("height", 800);

	var bars = barSvg.selectAll(".rects")
					.data(barData, function(d, i){ return i});

					bars
					.enter()
					.append("rect")
					.attr("class", "rects")
					.attr("x", function(d, i){
						return i * 10 + 100;
					})
					.attr("y", function(d){
						return 535 - (d * 50);
					})
					.attr("fill", "#fff")
					.attr("stroke", "#000")
					.attr("width", 5)
					.attr("height", function(d){
						return d * 50;
					});

	var fakeAxis = barSvg.append("rect")
					.attr("width", 50)
					.attr("height", 3)
					.attr("y", 550)
					.attr("x", 98)
					.attr("fill", "#fff")
					.attr("stroke", "#000");

	var recursionSvg = d3.selectAll(".pieBg").append("g")
						.attr("transform", "translate(60,75) rotate(90 400,400)");



	recur(recursionSvg, 185, 200, 400, 450, 600, 0, 0);
	drawPie(d3.selectAll(".pieFace"), 200, 255, 400, 120, 100, 100, 7);
	// drawPie(d3.selectAll(".pieBg"), 200, 240, 400, 400, true, 500);


	animateArcs();
	animateBars();

	function drawPie(theSvg, colorRangeA, colorRangeB, translateA, translateB, theRad, ind, slices){
	var rander = Math.floor(Math.random() * ((ind * 200) - ind) + ind);
	var rand = Math.floor(Math.random() * ((ind * 20) - ind) + ind);
	var theClass = "a" + rander + "b" + ind + "b" + rand;
		// pie stuff
	var pieSlices = slices;
	var pieData = [];
	pieData = genData(pieSlices);
	var pieRadius = theRad;
	var pieColor = [];
	pieColor = genGreys(pieSlices, colorRangeA, colorRangeB);

	var pie = d3.layout.pie()
    .value(function(d) { return d; })
    .sort(null);

	var pieArc = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(pieRadius);


	var pieSvg = theSvg;

	  var path = pieSvg.datum(pieData).selectAll("." + theClass)
      .data(pie);

      path
    .enter().append("path")
    .attr("class", theClass)
      .attr("fill", function(d, i) {
       return d3.rgb(pieColor[i], pieColor[i], pieColor[i]); 
   })
      .attr("stroke", "#000")
      .attr("stroke-width", 2.5)
      .attr("d", pieArc)
      .attr("transform", "translate(" + translateA + "," + translateB + ")")
      .each(function(d, i) { 
      	this._current = d;
      });

      if (pieSlices == 7){
      	animatePie(pieData, pieSlices, pieSvg, pie, pieArc, theClass);
      }

  }


	function animatePie(theData, theSlices, theSvg, thePie, theArc, theClass) {

	theData = genData(theSlices);
	path = theSvg.datum(theData).selectAll("." + theClass)
      .data(thePie);

    path
    .transition().duration(1000)
      .attrTween("d", arcTween)
      // .attr("transform", "translate(400,120)")
      .delay(500)
     	.call(endall, function(){
			animatePie(theData, theSlices, theSvg, thePie, theArc, theClass);
		});

		function arcTween(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) {
		    return theArc(i(t));
		  };
		}

	}

	function animateArcs() {
		arcData = genData(numArcs);
		subArcPath = arcSvg.selectAll(".subArcPath")
			  .data(arcData, function(d, i){
			  	return i;
			  });

		subArcPath.transition()
		.duration(1250)
		.attr("d", subArc)
		.call(endall, function(){
			animateArcs();
		});

	}

	function animateBars() {
		barData = genData(barNum);

		bars.data(barData, function(d, i){ return i;});

		bars.transition()
		.duration(1000)
		.attr("y", function(d){
						return 535 - (d * 50);
					})
		.attr("height", function(d){
						return d * 50;
					})
		.call(endall, function(){
			animateBars();
		});




	}


	//from http://stackoverflow.com/questions/10692100/invoke-a-callback-at-the-end-of-a-transition
function endall(transition, callback) { 
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
  } 

 

function recur(theSvg, colorRangeA, colorRangeB, translateA, translateB, theRad, index, inc) {
	
	if(index > 0) {
		drawPie(theSvg, colorRangeA, colorRangeB, translateA, translateB, theRad/2, index, 3);
	}

	colorRangeA = colorRangeA - 45;
	colorRangeB = colorRangeB - 45;	
	if (index < 5 ){
		var number = 3;
		for (var i = 0; i < number; i++){
			var theX2 = (theRad ) * Math.cos((i/number * 360) * Math.PI/180) + translateA;
			var theY2 = (theRad ) * Math.sin((i/number * 360) * Math.PI/180) + translateB;
			recur(theSvg, colorRangeA, colorRangeB, theX2, theY2, theRad/2, index + 1, i);
		}
	} 

}




function genData(numVals){
		var tempArray = [];
		for (var i = 0; i < numVals; i++){
			tempArray.push(Math.random());
		}
		return tempArray;
	}

function genGreys(numVals, min, max){
		var tempArray = [];
		for (var i = 0; i < numVals; i++){
			tempArray.push(Math.floor(Math.random()* (max - min + 1)) + min);
		}
		return tempArray;
	}

}

