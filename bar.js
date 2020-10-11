//------------------------SVG PREPARATION------------------------//
var width = 960;
var height = 500;
var adj = 20;
// we are appending SVG first
var svg = d3.select("#barChart").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-" + adj + " -"+ adj + " " + (width + adj) + " " + (height + adj))
    .style("padding", 5)
    .style("margin", 5)
    .classed("svg-content", true);

//-----------------------DATA PREPARATION------------------------//
var dataset = d3.csv("data.csv");
dataset.then(function(data) {
  data.map(function(d) {
    d.val = +d.val;
    return d;});
});
console.log(dataset);

//---------------------------BAR CHART---------------------------//

dataset.then(function(data) {  
  svg.selectAll("div")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function (d, i) {
    for (i>0; i < data.length; i++) {
        return i * 26;
    }
  })
  .attr("y", function (d) {
      return height - (d.val*10);
  })
  .attr("width", 25)
  .attr("height", function (d) {
      return d.val * 10;
  });
});
