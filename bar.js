data = [
  {label:"United States of America", value:639},
  {label:"El Salvador", value:566},
  {label:"Turkmenistan", value:552},
  {label:"Thailand", value:549},
  {label:"Palau", value:522},
  {label:"Rwanda", value:511},
  {label:"Cuba", value:510},
  {label:"Maldives", value:499},
  {label:"Northern Mariana Islands (USA)", value:482},
  {label:"Virgin Islands (United Kingdom)", value:447},
  {label:"Bahamas", value:442},
  {label:"Grenada", value:429},
  {label:"Panama", value:412},
  {label:"Guam", value:411}
];

var div = d3.select("#graphContainer").append("div").attr("class", "toolTip");

var axisMargin = 100,
  margin = 20,
  valueMargin = 4,
  width = parseInt(d3.select('#graphContainer').style('width'), 10),
  height = parseInt(d3.select('#graphContainer').style('height'), 10),
  barHeight = (height-axisMargin-margin*2)* 0.4/data.length,
  barPadding = (height-axisMargin-margin*2)*0.6/data.length,
  data, bar, svg, scale, xAxis, labelWidth = 0;

max = d3.max(data, function(d) { return d.value; });

svg = d3.select('#barChart')
      .append("svg")
      .attr("width", width)
      .attr("height", height);

bar = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g");

bar.attr("class", "bar")
  .attr("cx",0)
  .attr("transform", function(d, i) {
      return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
  });

bar.append("text") // country labels
  .attr("class", "label")
  .attr("y", barHeight / 2)
  .attr("dy", ".35em") //vertical align middle
  .attr("dx", -valueMargin + labelWidth) //margin right
  .text(function(d){
      return d.label;
  }).each(function() {
  labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
});

scale = d3.scale.linear()
      .domain([0, max])
      .range([0, width - margin*2 - labelWidth]);

xAxis = d3.svg.axis()
      .scale(scale)
      .tickSize(-height + 2*margin + axisMargin)
      .orient("bottom");

bar.append("rect")
  .attr("transform", "translate("+labelWidth+", 0)")
  .attr("height", barHeight)
  .attr("width", function(d){
      return scale(d.value);
  });

bar.append("text") //bar labels
  .attr("class", "value")
  .attr("y", barHeight / 2)
  .attr("dx", -valueMargin + labelWidth) //margin right
  .attr("dy", ".35em") //vertical align middle
  .attr("text-anchor", "end")
  .text(function(d){
      return (d.value);
  })
  .attr("x", function(d){
      var width = this.getBBox().width;
      return Math.max(width + valueMargin, scale(d.value));
  });

svg.append("text")
  .attr("x", 425)
  .attr("y", 530)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Rate of Incarceration per 100,000")
  .style("font", "14px avenir")
  .style("fill", "#000000");

svg.append("text")
.attr("x", 700)
.attr("y", 10)
.attr("dy", "0em")
.style("font", "12px avenir")
.style("fill", "#000000")
.text("Source here");


bar.on("mousemove", function(d){
  div.style("left", d3.event.pageX+10+"px");
  div.style("top", d3.event.pageY-25+"px");
  div.style("display", "inline-block");
  div.html((d.label)+"<br>"+(d.value));
});

bar.on("mouseout", function(d){
  div.style("display", "none");
});

svg.insert("g",":first-child")
  .attr("class", "axisHorizontal")
  .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
  .call(xAxis);
