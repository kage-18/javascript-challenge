// from data.js
var tableData = data;

// YOUR CODE HERE!
function submitHandler(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = String(inputElement.property("value"));
};

d3.select("#filter-btn").on("click", submitHandler);
d3.select("form").on("submit", submitHandler);