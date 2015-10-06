var org_colors = {"glocations": "#5296FF",
					"persons": "#3FD6E8",
					"organizations": "#09DBB6"};

var nodeLayer;
var linkLayer;

  var brush = d3.svg.brush()
    .x(context_time)
    .on("brushstart", brushbegin)
    .on("brush", brushed)
    .on("brushend", brushfinish);

var force;


function one_day(){
var one_day = time_scale(daily_format.parse("2014-01-02")) - time_scale(daily_format.parse("2014-01-01"));
return one_day;
}



function visualize(the_nodes, the_links){

  var svgElement = d3.select("svg");

  linkLayer = svgElement.append("g")
                            .attr("class", "linkLayer")
                            .attr("transform", "translate(" + margin.left + ",0)");

  nodeLayer = svgElement.append("g")
                            .attr("class", "nodeLayer")
                            .attr("transform", "translate(" + margin.left + ",0)");

  var font_max = time_scale.domain()[1] - time_scale.domain()[0];
  font_scale.domain([font_max, 1656253]);

force = d3.layout.force()
      .gravity(0.045)
      .charge(-50)
      .nodes(the_nodes)
      .links(the_links)
      .size([width-margin.left-margin.right, height]);

  force.start();

  var nodes = nodeLayer
  .selectAll(".article")
    .data(the_nodes.slice(0))
  .enter().append("g")
  .attr("transform", function(d){
    var offset = (one_day())/4.5;
    d.x = time_scale(new Date(daily_format(new Date(d["pub_date"])))) + offset;
    return "translate(" + d.x + "," + d.y + ")";
  })
  .attr("class", function(d){
    var the_date = " a" + daily_format(new Date(d.pub_date)).replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    return "article" + the_date + " a" + d["_id"];
  })
    .style("fill", "#ccc");

nodes.append("circle")
.attr("r", 1.5)
.attr("cy", 1.5)
.attr("cx", -5)
.attr("fill", function(d){ return section_scale(d["section_name"]); })
.attr("opacity", 0)


    nodes.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 3)
    .attr("width", function(d){ 
      var offset = one_day()/4.5;//subtract the amount the post is offset from its date poll
      var first_x = time_scale(new Date(daily_format(new Date(d["pub_date"]))));
      var second_x = time_scale(new Date(d["pub_date"]));
      if (second_x - first_x - offset < 0){
        return 1;
      } else {
        return second_x - first_x - offset;
      }
    })
    .attr("fill", function(d){ return section_scale(d["section_name"]); })
    .on("mouseover", function(d){
                      d3.select(this.parentNode).select("circle").attr("opacity", 1);
                      d3.selectAll(".a" + d["_id"] + ".artDots").select("circle").attr("stroke", "#aaa").attr("stroke-width", 1.5);
                    })
                    .on("mouseout", function(d){
                      d3.select(this.parentNode).select("circle").attr("opacity", 0);
                      d3.selectAll(".a" + d["_id"] + ".artDots").select("circle").attr("stroke", "none").attr("stroke-width", 0);
                    })


  var the_article = nodes.append("g")
                        .attr("transform", "translate(0,5)")
                        .append("foreignObject")
                        .attr("font-size", function(){
                          if (font_scale(time_scale.domain()[1] - time_scale.domain()[0]) < 1){
                              return 1;
                            } else {
                              return font_scale(time_scale.domain()[1] - time_scale.domain()[0]);
                            }
                        })
                        .attr("width", function(d){
                          d["width"] = one_day() - one_day()*0.25;
                          return one_day() - one_day()*0.25;
                        })
                        .attr("height", article_height)
                        .append("xhtml:div")
                        .attr("left", function(d){return d3.select(this.parentNode)[0][0].getBoundingClientRect()["left"] + "px";})
                        .attr("class", function(d){

                               var addedTerm = "";
                              if (the_selected_type == "all"){
                                addedTerm = "";
                              } else {
                                if (_.contains(d[the_selected_type], the_selected_term)){
                                  addedTerm = "";
                                } else {
                                  addedTerm = " collapsed";
                                }
                              }
                              return "parentDiv" + addedTerm;
                        });


  var nodeDiv = the_article.append("xhtml:div")
      .attr("class", function(d){
        return "nodeDiv";
      })

  nodeDiv.append("xhtml:div")
      .attr("class", "header")
      .html(function(d){ return "<h1>" + d["headline"]["main"] + "</h1>";})


  nodeDiv.filter(function(d){ return d["multimedia"].length > 0;})
          .append("xhtml:div")
          .attr("class", "miniImageHolder collapsed")
          .html(function(d){
            //last image is generally thumbnail, so let's be lazy
            return "<img src='" + (image_url_starter + d["multimedia"][d["multimedia"].length-1]["url"]) + "' alt='IMG'>";
          })

  nodeDiv.append("xhtml:div")
      .attr("class", "theBod")
      .html(function(d){
        var the_author = "";
        if (d["byline"]["original"] != undefined){
          the_author = "<h2>" + d["byline"]["original"] + "</h2>";
        } else {
           the_author = "";
        }


        var the_text = "";
        if(d["abstract"] != null){
          the_text = d["abstract"];
        } else if(d["lead_paragraph"] != null){
          the_text = d["lead_paragraph"];
        }
        return the_author + "<p>" + the_text + "</p>";
      })

    nodeDiv.append("xhtml:div")
      .attr("class", "clearer");

  var nodes_by_date = d3.nest()
                    .key(function(d){ return daily_format(new Date(d["pub_date"]));})
                    .entries(the_nodes);

  nodes.append("text")
      .attr("class", "theExtender")
      .attr("font-family", "FontAwesome")
      .text(function(d){
        if (d3.select(d3.select(d3.select(this.parentNode.childNodes)[0][0][2].childNodes)[0][0][0].childNodes[0]).classed("collapsed")){
          return "\uf065";
        }
        else{
          return "\uf066";
        }
      })
      .attr("fill", function(d){ return section_scale(d["section_name"]); })
      .attr("x", function(d){
        var offset = one_day()/4.5;//subtract the amount the post is offset from its date poll
        var first_x = time_scale(new Date(daily_format(new Date(d["pub_date"]))));
        var second_x = time_scale(new Date(d["pub_date"]));
        if (second_x - first_x - offset < 0){
          return 1;
        } else {
          return second_x - first_x - offset;
        }
      })
      .attr("font-size", function(){
                          if (font_scale(time_scale.domain()[1] - time_scale.domain()[0]) < 1){
                              return 1;
                            } else {
                              return font_scale(time_scale.domain()[1] - time_scale.domain()[0]);
                            }
                        })
      .attr("text-anchor", "end")
      .attr("dy", -3);

  var links = linkLayer.selectAll(".link")
              .data(the_links);

      links.enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", function(d){
        if (the_selected_type == "all"){
          return 1; 
        } else{
          if (d["type"] == the_selected_type){
            if (_.contains(d["source"][the_selected_type], the_selected_term) && _.contains(d["target"][the_selected_type], the_selected_term)){
              return 1;
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        }
      })
              

var date_lines = nodeLayer.selectAll(".dateLine")
                  .data(nodes_by_date)
                  .enter()
                  .append("line")
                  .attr("class", "dateLine")
                  .attr("x1", function(d){
                    return time_scale(daily_format.parse(d.key));
                  })
                  .attr("x2", function(d){
                    return time_scale(daily_format.parse(d.key));
                  })
                  .attr("y1", height)
                  .attr("y2", function(d){
                    var memberNodes = d3.selectAll("g.article.a" + d.key.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
                      memberNodes = memberNodes.sort(function(a, b){
                      return a["y"] - b["y"];
                    })
                    if (d3.select(memberNodes[0][0]).data()[0] != undefined){
                      return d3.select(memberNodes[0][0]).data()[0]["y"];
                    } else {
                      return 0;
                    } 

                  })
                  .attr("stroke-width", 1)
                  .attr("stroke", "#ccc");

  var contextLayer = svgElement.append("g")
                    .attr("class", "context")
                    .attr("transform", "translate(" + margin.left + ", " + (height + 7) + ")");

  var circle_radius = 5;
  var circle_radius_padding = 2;

  contextLayer.append("g")
      .attr("class", "x brush")
      .call(brush)
    .selectAll("rect")
      .attr("y", -6)
      .attr("height", function(){
        return (context_section_legend.range()[context_section_legend.range().length-1] + 2) * (circle_radius + circle_radius_padding) * 2;
      });


  var timeline_articles = contextLayer.selectAll(".artDots")
              .data(the_nodes);

  timeline_articles.enter().append("g")
                            .attr("class", function(d){
                              return "a" + d["_id"] + " artDots";
                            })
                            .attr("transform", function(d){
                              //there's no way to clamp an ordinal array, so if a value is not in the domain, it will be auto inserted
                              //this way we check if the section value is in the domain
                              var row;
                              if (_.contains(context_section_legend.domain(), d["section_name"])){
                                row = context_section_legend(d["section_name"]);
                              } else {
                                row = context_section_legend.range()[context_section_legend.range().length-1] + 1;
                              }
                              return "translate(" + context_time(new Date(d["pub_date"])) + "," + (row * (circle_radius + circle_radius_padding) * 2) + ")";
                            });


  timeline_articles.append("circle")
                  .attr("r", function(d){
                    if (the_selected_type == "all"){
                                return circle_radius;
                              } else {
                                if (_.contains(d[the_selected_type], the_selected_term)){
                                  return circle_radius;
                                } else {
                                  return circle_radius/2;
                                }
                              }
                  })
                  .attr("fill", function(d){
                    return section_scale(d["section_name"]);
                  })
                  .on("mouseover", function(d){
                      d3.select(this).attr("stroke", "#aaa").attr("stroke-width", 1.5);
                      d3.selectAll(".a" + d["_id"] + ".article").select("circle").attr("opacity", 1);
                    })
                    .on("mouseout", function(d){
                      d3.select(this).attr("stroke", "none").attr("stroke-width", 0);
                      d3.selectAll(".a" + d["_id"] + ".article").select("circle").attr("opacity", 0);
                    })

  var context_legend_array = context_section_legend.domain().slice();
  context_legend_array.push("Other");

  var context_legend = contextLayer.selectAll(".sectionNameLines")
                            .data(context_legend_array);

      context_legend.enter()
                          .append("g")
                          .attr("class", "sectionNameLines")
                          .attr("transform", function(d){
                            if (_.contains(context_section_legend.domain(), d)){
                                row = context_section_legend(d);
                              } else {
                                row = context_section_legend.range()[context_section_legend.range().length-1] + 1;
                              }
                            return "translate(" + (-margin.left) + "," + (row * (circle_radius + circle_radius_padding) * 2 - (circle_radius + circle_radius_padding)) + ")";
                          });

      context_legend.append("text")
                    .text(function(d){ return d;})
                    .attr("fill", function(d){
                      return section_scale(d);
                    })
                    .attr("dy", circle_radius * 2)

      context_legend.append("line")
                    .attr("y1", 0)
                    .attr("y2", 0)
                    .attr("x1", 0)
                    .attr("x2", width)
                    .attr("fill", "none")
                    .attr("stroke", function(d, i){
                      if (i == 0){
                        return "#000";
                      } else {
                        return "#ccc";
                      }
                    })



  force.on("tick", function(e) {

    var q = d3.geom.quadtree(the_nodes),
      i = 0,
      n = the_nodes.length;

  while (++i < n) q.visit(collide(the_nodes[i]));

    nodeLayer.selectAll(".article")
        .attr("transform", function(d){
          var offset = one_day()/4.5;
          d.x = time_scale(new Date(daily_format(new Date(d["pub_date"])))) + offset;
          if (d.y <= 0){
            d.y = 1;
          }
          if (d.y >= height){            
            d.y = height-1;
          }
          return "translate(" + d.x + "," + d.y + ")";
        })

      nodeLayer.selectAll(".dateLine")
      .attr("y2", function(d){
                    var memberNodes = d3.selectAll("g.article.a" + d.key.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
                    memberNodes = memberNodes.sort(function(a, b){
                      return a["y"] - b["y"];
                    })
                    if (d3.select(memberNodes[0][0]).data()[0] != undefined){
                      return d3.select(memberNodes[0][0]).data()[0]["y"];
                    } else {
                      return 0;
                    } 

                  });
      linkLayer.selectAll(".link")
      .attr("d", function(d){
        var distance = Math.abs(d["source"].x - d["target"].x) * 0.1;
        return "M" + d["source"].x + " " + d["source"].y + " C " + d["source"].x + " " + (d["source"].y - distance) + ", " + d["target"].x + " " + (d["target"].y - distance) + ", " + d["target"].x + " " + d["target"].y;
      })
      .attr("stroke-dasharray", "2,5")
      .attr("stroke", function(d){
                      if (d["type"] == "themes"){
                        return "#073F7A";
                      } else {
                        return "#A81414";
                      }
                    })
  });

//from https://gist.github.com/natebates/273b99ddf86e2e2e58ff
function collide(node) {
  return function(quad, x1, y1, x2, y2) {
    var updated = false;
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
        y = node.y - quad.point.y,
        xSpacing = (quad.point.width + node.width) / 2,
        ySpacing = (quad.point.height + node.height) / 2,
        absX = Math.abs(x),
        absY = Math.abs(y),
        l,
        lx,
        ly;
      if (absX < xSpacing && absY < ySpacing) {
        l = Math.sqrt(x * x + y * y);
        lx = (absX - xSpacing) / l;
        ly = (absY - ySpacing) / l;
        // the one that's barely within the bounds probably triggered the collision
        if (Math.abs(lx) > Math.abs(ly)) {
          lx = 0;
        } else {
          ly = 0;
        }
        node.x -= x *= lx;
        node.y -= y *= ly;
        quad.point.x += x;
        quad.point.y += y;
        updated = true;
      }
    }
    return updated;
  };
}



}

function brushbegin(){
    force.stop();
     linkLayer.selectAll(".link")
     .transition().duration(200).attr("opacity", 0);
}

function brushfinish(){
   if (time_scale.domain()[1] - time_scale.domain()[0] < 400000000){
      d3.selectAll(".parentDiv:not(.collapsed)").selectAll(".miniImageHolder").filter(function(d){return this != null;}).classed("collapsed", false);
    } else {
      d3.selectAll(".parentDiv:not(.collapsed)").selectAll(".miniImageHolder").filter(function(d){return this != null;}).classed("collapsed", true);
    }

    nodeLayer.selectAll(".article")
    .attr("height", function(d){
        d["height"] = d3.select(this).select(".parentDiv").node().getBoundingClientRect()["height"] + 10;
        return d["height"];
    })

    nodeLayer.selectAll(".theExtender")
    .attr("font-size", function(){
                          if (font_scale(time_scale.domain()[1] - time_scale.domain()[0]) < 1){
                              return 1;
                            } else {
                              return font_scale(time_scale.domain()[1] - time_scale.domain()[0]);
                            }
                        })
    .attr("x", function(d){
        var offset = one_day()/4.5;//subtract the amount the post is offset from its date poll
        var first_x = time_scale(new Date(daily_format(new Date(d["pub_date"]))));
        var second_x = time_scale(new Date(d["pub_date"]));
        if (second_x - first_x - offset < 0){
          return 1;
        } else {
          return second_x - first_x - offset;
        }
      })
    .attr("text-anchor", "end")
    .attr("dy", -3)

    force.start();
    linkLayer.selectAll(".link")
    .transition().duration(200).attr("opacity", 1);

}

function brushed() {
  time_scale.domain(brush.empty() ? context_time.domain() : brush.extent());

    nodeLayer.selectAll(".article")
      .attr("transform", function(d){
          var offset = one_day()/4.5;
          d.x = time_scale(new Date(daily_format(new Date(d["pub_date"])))) + offset;
          return "translate(" + d.x + "," + d.y + ")";
      })

  nodeLayer.selectAll(".article")
      .select("foreignObject")
      .attr("width", function(d){
          d["width"] = one_day() - one_day()*0.25;
          return one_day() - one_day()*0.25;
        })
      .attr("font-size", function(){
    if (font_scale(time_scale.domain()[1] - time_scale.domain()[0]) < 1){
      return 1;
    } else {
      return font_scale(time_scale.domain()[1] - time_scale.domain()[0]);
    }
      })


  nodeLayer.selectAll(".article")
  .attr("height", function(d){
        d["height"] = d3.select(this).select(".parentDiv").node().getBoundingClientRect()["height"] + 10;
        return d["height"];
    })
      .select("rect")
     .attr("width", function(d){ 
      var offset = one_day()/4.5;//subtract the amount the post is offset from its date poll
      var first_x = time_scale(new Date(daily_format(new Date(d["pub_date"]))));
      var second_x = time_scale(new Date(d["pub_date"]));
      if (second_x - first_x - offset < 0){
        return 1;
      } else {
        return second_x - first_x - offset;
      }
    })

  nodeLayer.selectAll(".dateLine")
      .attr("x1", function(d){
        return time_scale(daily_format.parse(d.key));
      })
      .attr("x2", function(d){
        return time_scale(daily_format.parse(d.key));
      })

}

