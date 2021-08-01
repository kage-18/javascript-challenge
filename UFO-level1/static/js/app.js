// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function submitHandler(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = String(inputElement.property("value"));
    tbody.html("");

    tableData.filter(date => date["datetime"] === inputValue).forEach((sighting) => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach((values) => {
          var cell = row.append("td");
          cell.text(values);
        });
      });
};

d3.select("#filter-btn").on("click", submitHandler);
d3.select("form").on("submit", submitHandler);