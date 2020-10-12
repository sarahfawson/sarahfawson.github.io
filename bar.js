// const margin = { top: 40, bottom: 10, left: 120, right: 20 };
// const width = 800 - margin.left - margin.right;
// const height = 600 - margin.top - margin.bottom;

// // Creates sources <svg> element
// const svg = d3
//   .select("div#barChart2").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom);

// // Group used to enforce margin
// const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// // Global variable for all data
// // let data;
// //-----------------------DATA PREPARATION------------------------//
// var data = d3.csv("prisonRates_WPB.csv");
// data.then(function(data) {
//     data.map(function(d) {
//       d.val = +d.val;
//       return d;
//     });
//   });
//   console.log(data);

// // Scales setup
// const xscale = d3.scaleLinear().range([0, width]);
// const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

// // Axis setup
// const xaxis = d3.axisTop().scale(xscale);
// const g_xaxis = g.append("g").attr("class", "x axis");
// const yaxis = d3.axisLeft().scale(yscale);
// const g_yaxis = g.append("g").attr("class", "y axis");

// /////////////////////////

// // d3.json("weather.json").then((json) => {
// //   data = json;

// //   update(data);
// // });

// // data new method 
//     // Read in CSV
//     d3.csv("prisonRates_WPB.csv").then(function(rateData) {
//       console.log(rateData);

//       // parse data
//       rateData.forEach(function(data) {
//           data.Country = +data.Country;
//           data.Prison_Pop_Rate_WPBwebsite = +data.Prison_Pop_Rate_WPBwebsite;
//       });

// // end 

// function update(new_data) {
//   //update the scales
//   xscale.domain([0, d3.max(new_data, (d) => d.Prison_Pop_Rate_WPBwebsite)]);
//   yscale.domain(new_data.map((d) => d.Country));
//   //render the axis

//   g_xaxis.transition().call(xaxis);
//   g_yaxis.transition().call(yaxis);

//   // Render the chart with new data

//   // DATA JOIN use the key argument for ensurign that the same DOM element is bound to the same data-item
//   const rect = g
//     .selectAll("rect")
//     .data(new_data, (d) => d.Country)
//     .join(
//       // ENTER
//       // new elements
//       (enter) => {
//         const rect_enter = enter.append("rect").attr("x", 0);
//         rect_enter.append("title");
//         return rect_enter;
//       },
//       // UPDATE
//       // update existing elements
//       (update) => update,
//       // EXIT
//       // elements that aren't associated with data
//       (exit) => exit.remove()
//     );

//   // ENTER + UPDATE
//   // both old and new elements
//   rect
//     .transition()
//     .attr("height", yscale.bandwidth())
//     .attr("width", (d) => xscale(d.Country))
//     .attr("y", (d) => yscale(d.Country));

//   rect.select("title").text((d) => d.Country);
// }

// //interactivity
// d3.select("#filter-us-only").on("change", function () {
//   // This will be triggered when the user selects or unselects the checkbox
//   const checked = d3.select(this).property("checked");
//   if (checked === true) {
//     // Checkbox was just checked

//     // Keep only data element whose country is US
//     // const filtered_data = data.filter((d) => d.location.country === "US");

//     update(filtered_data); // Update the chart with the filtered data
//   } else {
//     // Checkbox was just unchecked
//     update(data); // Update the chart with all the data we have
//   }
// });


// // new new new
// const margin = { top: 40, bottom: 10, left: 120, right: 20 };
// const width = 800 - margin.left - margin.right;
// const height = 600 - margin.top - margin.bottom;

// // Creates sources <svg> element
// const svg = d3.select("#barChart2").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom);

// // Group used to enforce margin
// const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

// // Global variable for all data
// let data;

// // Scales setup
// const xscale = d3.scale.linear().range([0, width]);
// const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

// // Axis setup
// const xaxis = d3.axisTop().scale(xscale);
// const g_xaxis = g.append("g").attr("class", "x axis");
// const yaxis = d3.axisLeft().scale(yscale);
// const g_yaxis = g.append("g").attr("class", "y axis");

// /////////////////////////

// d3.json("data.json").then((json) => {
//   data = json;

//   update(data);
// });

// function update(new_data) {
//   //update the scales
//   xscale.domain([0, d3.max(new_data, (d) => d.temperature)]);
//   yscale.domain(new_data.map((d) => d.location.city));
//   //render the axis
//   g_xaxis.transition().call(xaxis);
//   g_yaxis.transition().call(yaxis);

//   // Render the chart with new data

//   // DATA JOIN use the key argument for ensurign that the same DOM element is bound to the same data-item
//   const rect = g
//     .selectAll("rect")
//     .data(new_data, (d) => d.location.city)
//     .join(
//       // ENTER
//       // new elements
//       (enter) => {
//         const rect_enter = enter.append("rect").attr("x", 0);
//         rect_enter.append("title");
//         return rect_enter;
//       },
//       // UPDATE
//       // update existing elements
//       (update) => update,
//       // EXIT
//       // elements that aren't associated with data
//       (exit) => exit.remove()
//     );

//   // ENTER + UPDATE
//   // both old and new elements
//   rect
//     .transition()
//     .attr("height", yscale.bandwidth())
//     .attr("width", (d) => xscale(d.temperature))
//     .attr("y", (d) => yscale(d.location.city));

//   rect.select("title").text((d) => d.location.city);
// }

//interactivity
// d3.select("#filter-us-only").on("change", function () {
//   // This will be triggered when the user selects or unselects the checkbox
//   const checked = d3.select(this).property("checked");
//   if (checked === true) {
//     // Checkbox was just checked

//     // Keep only data element whose country is US
//     const filtered_data = data.filter((d) => d.location.country === "US");

//     update(filtered_data); // Update the chart with the filtered data
//   } else {
//     // Checkbox was just unchecked
//     update(data); // Update the chart with all the data we have
//   }
// });

// another new one 
var margin = {top: 54, right: 60, bottom: 107, left: 88},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// var margin = { top: 40, bottom: 10, left: 120, right: 20 },
//     width = 800 - margin.left - margin.right,
//     height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear().range([0, width]);

var y = d3.scale.ordinal().rangeRoundBands([0, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
		.ticks(10);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
    
var svg = d3.select("#barChart2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("text")
    .attr("x", 0)
    .attr("y", -35)
    .attr("dy", "0.71em")
    .attr("fill", "#000")
    .text("Rate of Incarceration Worldwide 2019")
    .style("font", "23px avenir")
    .style("fill", "#000000");
  
    svg.append("text")
    .attr("x", -69)
    .attr("y", -8)
    .attr("dy", "0.71em")
    .attr("fill", "#000")
    .text("Category")
    .style("font", "12px avenir")
    .style("fill", "#000000")
    .style("font-weight", "bold");
  
    svg.append("text")
    .attr("x", 0)
    .attr("y", 400)
    .attr("dy", "0em")
    .style("font", "12px avenir")
    .style("fill", "#000000")
    .text("This visualization depicts the rate of incarceration in countries from highest to lowest around the world ");
  
     svg.append("text")
    .attr("x", 0)
    .attr("y", 400)
    .attr("dy", "1em")
    .style("font", "12px avenir")
    .style("fill", "#000000")
    .text("and suicide were observed less frequently.");
     
     svg.append("text")
    .attr("x", 0)
    .attr("y", 400)
    .attr("dy", "3em")
    .style("font", "12px avenir")
    .style("fill", "#000000")
    .text("By Sarah Fawson")
    .style("font-weight", "bold");
  

d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
      d.count = +d.count;
      return d;
          
}, function(error, data) {
      
  if (error) throw error;
    });
	
  data.sort(function(a,b){ return b.count- a.count});
  
 	x.domain([0, 4000]);
  y.domain(data.map(function(d) {return d.category; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Value ($)");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
  		.attr("y", function(d) { return y(d.category); })
      .attr("width", function(d) { return x(d.count);} )
      .attr("height", 13);
  
   svg.append("text")
    .attr("x", 350)
    .attr("y", 370)
    .attr("dy", "0.71em")
    .attr("fill", "#000")
    .text("Number of Records")
    .style("font", "12px avenir")
    .style("fill", "#000000")
    .style("font-weight", "bold");
});
