function buildTour(the_Data){

	var theme_occurences = countOccur(all_themes);

	var sortable_occurences = [];

	for (var occurance in theme_occurences){
      sortable_occurences.push([occurance, theme_occurences[occurance]])
	}

	sortable_occurences.sort(function(a, b) {return b[1] - a[1]});

	var theme_div = d3.select(".themesOverlay");

	var themes = theme_div.selectAll(".themeDiv")
							.data(sortable_occurences);

	themes.enter()
	.append("div")
	.attr("class", "themeDiv")
	.html(function(d){
		var string = "<span>" + d[0] + " (" + d[1] + ")</span>"
		return string;
	})

}


//from http://stackoverflow.com/a/28832203/3899852
function countOccur(arr) {
   return arr.reduce(function(countMap, word) {countMap[word] = ++countMap[word] || 1;return countMap}, {});
}