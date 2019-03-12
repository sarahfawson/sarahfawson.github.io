// from data.js
var tableData = data;

// references from index.html
var tbody = d3.select("#tbody");
var filterBtn = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var submit = d3.select("#filter-btn"); 
var inputDate = d3.select("#datetime");

// store the variables? do I need to loop here?
// var datetime = tableData.datetime;
// var city = tableData.city;
// var state = tableData.state;
// var country = tableData.country;
// var shape = tableData.shape;
// var durationMinutes = tableData.durationMinutes;
// var comments = tableData.comments;

//buld the table
// function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
//     var table = d3.select("#ufo-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < 100; i++) {
//       trow = tbody.append("tr");
//       trow.append("td").text(datetime[i]);
//       trow.append("td").text(city[i]);
//       trow.append("td").text(state[i]);
//       trow.append("td").text(country[i]);
//       trow.append("td").text(shape[i]);
//       trow.append("td").text(durationMinutes[i]);
//       trow.append("td").text(comments[i]);
//     }
//   }

//build table
function loadTableData(dataRows) {
// console.log('In Load Table Data');
document.getElementById('table-content').innerHTML="";
// alert('cLEARING TABLE');
// tbody.html("");
d3.select("tbody")
    .selectAll("tr")
    .data(dataRows)
    .enter()
    .append("tr")
    .html(function(tableData) {
    return `<td>${tableData.datetime}</td> 
            <td>${tableData.city.charAt(0).toUpperCase()+tableData.city.slice(1)}</td> 
            <td>${tableData.state.toUpperCase()}</td> 
            <td>${tableData.country.toUpperCase()}</td>
            <td>${tableData.shape.charAt(0).toUpperCase()+tableData.shape.slice(1)}</td> 
            <td>${tableData.durationMinutes}</td> 
            <td>${tableData.comments}</td>`;
    });     
}
loadTableData(tableData);

//click action
  submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(`Input Value: ${inputValue}`);
  
    // Create Filtered dataset based on InputValue entered by user
    if (inputValue) {
    var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
    console.log(`Filtering Data: ${filterdata}`);
   
    // Build new UFO Table with the filtered subset of UFO Sighting data
    // buildTable(filterdata);
    tbody.html("");
    loadTableData(filterdata);
  });