// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

function buildTable(date, city, state, country, shape, duration, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    tbody.html("");
    for (var i = 0; i < date.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(date[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(duration[i]);
      trow.append("td").text(comments[i]);
    }
  };

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(x => x.datetime === inputValue);
    console.log(filteredData);

    var date = filteredData.map(x => x.datetime);
    var city = filteredData.map(x => x.city);
    var state = filteredData.map(x => x.state);
    var country = filteredData.map(x => x.country);
    var shape = filteredData.map(x => x.shape);
    var duration = filteredData.map(x => x.durationMinutes);
    var comments = filteredData.map(x => x.comments);

    console.log(date)

    buildTable(date, city, state, country, shape, duration, comments)
});