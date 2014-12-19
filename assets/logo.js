		var s = Snap("#svgLogo");
		var width = 350;
		var height = 200;
		var rightLaurelX = width/2 + 67;
		var rightLaurelY = 90;
		var leftLaurelX = width/2 - 67;

		// var leftLaurelX = -width/2;
		var leftLaurelY = 90;
		var laurelsRight = s.path("M22.206-37.87 c18.5,10.932,30.277,27.406,30.277,45.833c0,30.857-33.021,56.236-75.337,59.288");
		var laurelsLeft = laurelsRight.clone();
		var fillColor = "#170D70";

		laurelsRight.transform("t" + rightLaurelX + "," + rightLaurelY);
		laurelsLeft.transform("t" + leftLaurelX + "," + rightLaurelY + "s-1,1");


		var leafOutlines = s.group(s.path("M-6.499-4.957c0,0,0,7.26,12.812,9.824 C6.313,4.867,3.324-5.811-6.499-4.957z"),
			s.path("M-6.499-4.957c0,0,0.964,0.858,2.39,2.074 c2.992,2.552,8.016,6.679,10.422,7.75"),
			s.path("M-1.622-4.349c0,0-2.301,0.781-2.486,1.467 c-0.185,0.685,0,2.838,0,2.838"),
			s.path("M-2.24,1.517c0,0-0.991-2.649-0.666-3.383 s3.628-1.26,3.628-1.26"),
			s.path("M-0.612,2.515c0,0-0.768-1.61-0.513-2.909 s3.411-1.443,3.411-1.443"),
			s.path("M0.722,3.164c0,0-0.555-1.182-0.167-2.215 s3.544-0.61,3.544-0.61"));

		leafOutlines.attr({
			stroke: fillColor,
			fill: "none",
			strokeWidth:0.4
		});

		leafOutlines.select("path:nth-child(1)")
		.attr({
			stroke: fillColor,
			fill: "none",
			strokeWidth:0.5
		});

		var rightLaurel = s.path("M22.206-37.87c0,0,0.54,0.333,1.554,0.956c0.507,0.312,1.131,0.697,1.866,1.149c0.712,0.488,1.53,1.049,2.447,1.677 c1.819,1.276,3.963,2.92,6.297,4.958c2.292,2.078,4.835,4.498,7.214,7.489c2.4,2.963,4.743,6.407,6.662,10.351 c1.92,3.937,3.399,8.38,4.097,13.125c0.707,4.748,0.628,9.757-0.31,14.723c-1.02,4.935-2.796,9.817-5.376,14.249 c-2.545,4.45-5.712,8.536-9.281,12.097c-3.553,3.579-7.443,6.698-11.433,9.363c-7.994,5.344-16.341,8.84-23.647,11.15 c-3.653,1.183-7.08,2-10.125,2.67c-3.053,0.637-5.737,1.084-7.955,1.391c-1.111,0.144-2.102,0.272-2.965,0.384 c-0.866,0.083-1.602,0.154-2.199,0.212c-1.195,0.114-1.832,0.174-1.832,0.174l-0.144-1.995c0,0,0.627-0.052,1.803-0.149 c0.588-0.049,1.313-0.11,2.165-0.181c0.85-0.099,1.826-0.214,2.92-0.342c2.185-0.274,4.83-0.682,7.841-1.271 c3.003-0.623,6.385-1.385,9.993-2.504c7.215-2.184,15.472-5.524,23.395-10.681c3.955-2.572,7.814-5.589,11.346-9.061 c3.548-3.454,6.703-7.424,9.253-11.757c2.585-4.316,4.383-9.078,5.445-13.91c0.978-4.847,1.121-9.799,0.481-14.473 c-0.63-4.685-2.035-9.093-3.889-13.015c-1.852-3.93-4.135-7.379-6.487-10.355c-2.329-3.004-4.833-5.447-7.093-7.547 c-2.302-2.061-4.423-3.729-6.223-5.025c-0.908-0.639-1.718-1.209-2.423-1.705c-0.729-0.461-1.349-0.854-1.851-1.172 C22.742-37.53,22.206-37.87,22.206-37.87z");
		rightLaurel.attr({fill: fillColor})
		var leftLaurel = rightLaurel.clone();
		leftLaurel.transform("t" + leftLaurelX + "," + rightLaurelY);

		rightLaurel.transform("t" + rightLaurelX + "," + rightLaurelY);

		var nameText = s.text(width/2, 57, "Jess Peter");
		nameText.attr({
			fontFamily: 'Dosis',
			fontSize: 14,
			textAnchor: 'middle',
			fill: fillColor
		});

		var midText = s.text(width/2, 76, "is an");
		midText.attr({
			fontFamily: 'Dosis',
			fontSize: 12,
			textAnchor: 'middle',
			fill: fillColor
		});

		var mainText = s.text(width/2, 107, "AWARD-WINNING");
		mainText.attr({
			fontFamily: 'Dosis',
			fontSize: 24,
			textAnchor: 'middle',
			fill: fillColor
		});

		var mainText2 = s.text(width/2, 140, "HUMAN");
		mainText2.attr({
			fontFamily: 'Dosis',
			fontSize: 24,
			textAnchor: 'middle',
			fill: fillColor
		});

		var rightLine = s.line(width/2 + 20, 73, width/2 + 77, 73)
		.attr({stroke: fillColor,
			fill: "none",
			strokeWidth: 0.3});

		var leftLine = s.line(width/2 - 20, 73, width/2 - 77, 73)
		.attr({stroke: fillColor,
			fill: "none",
			strokeWidth: 0.3});

		var rightLaurelGroup = s.group();
		rightLaurelGroup.append(rightLaurel);
		var pointerLeaf = leafOutlines.clone();
		var theBBox = pointerLeaf.getBBox();
		var insertPoint = laurelsRight.getPointAtLength(0);
		var leftPointerLeaf = pointerLeaf.clone();

		pointerLeaf.transform("T" + (insertPoint.x + rightLaurelX - theBBox.x - 3) + "," + (insertPoint.y + rightLaurelY - theBBox.y - 1) + "r-185" + "," + (theBBox.x) + "," + (theBBox.y));
		pointerLeaf.addClass("leaves");

		rightLaurelGroup.append(pointerLeaf);
		rightLaurelGroup.transform("s1.25");

		leftPointerLeaf.transform("T" + (insertPoint.x + leftLaurelX - theBBox.x - 3) + "," + (insertPoint.y + leftLaurelY - theBBox.y - 1) + "r-185" + "," + (theBBox.x) + "," + (theBBox.y));
		leftPointerLeaf.addClass("leaves");

		var leftLaurelGroup = s.group(); 

		leftLaurelGroup.append(leftLaurel);
		leftLaurelGroup.append(leftPointerLeaf);


		adjustMarkers(laurelsRight,9,leafOutlines, rightLaurelX, rightLaurelY, rightLaurelGroup);
		adjustMarkers(laurelsLeft,9,leafOutlines, leftLaurelX, rightLaurelY, leftLaurelGroup);

		leftLaurelGroup.transform("T" + -45 + "," + 0 + "s-1.25,1.25");


		setTimeout(function(){doFall();}, 500);

		leafOutlines.remove();
		laurelsRight.remove();
		laurelsLeft.remove();




function adjustMarkers(thePath, spacing, theSymbol, xAdjust, yAdjust, theGroup){
	var totalPathLength = Snap.path.getTotalLength(thePath);
	for (var i = 0; i < spacing; i++){
		var thePt = thePath.getPointAtLength((i+0.4)/spacing * totalPathLength);
		var leaves = leafOutlines.clone();
		var theBBox = leaves.getBBox();
		leaves.transform("T" + (thePt.x + xAdjust - theBBox.x) + "," + (thePt.y + yAdjust - theBBox.y)
			+ "r" + ((1 - (i/spacing))*-90 - (1 - (i/spacing))*45) + "," + (theBBox.x) + "," + (theBBox.y));
		theGroup.append(leaves);
		var thePt = thePath.getPointAtLength((i+0.6)/spacing * totalPathLength * 0.9);
		var oppLeaves = leaves.clone();
		oppLeaves.transform("T" + (thePt.x + xAdjust + theBBox.x) + "," + (thePt.y + yAdjust - theBBox.y) + "s-1,1"
			+ "r" + ((1 - (i/spacing))*-40 - ((i/spacing))*140) + "," + (theBBox.x) + "," + (theBBox.y));
		theGroup.append(oppLeaves);

		leaves.addClass("leaves");
		oppLeaves.addClass("leaves");
	}

}


function doFall(){
	var allLeaves = s.selectAll(".leaves");

	for (var i = 0; i < allLeaves.length; i++){

		var theX = allLeaves[i].getBBox().x;
		var theY = allLeaves[i].getBBox().y;
		var transformString = allLeaves[i].transform().string;
		allLeaves[i].transform(transformString + "s0.1,0.1,-6,-6");

		allLeaves[i].animate({transform: transformString + " s1"}, Math.random() * 1250 + 1000);
		
	}

}