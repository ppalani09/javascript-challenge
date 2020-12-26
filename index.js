// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("submit",runFilter);


// ------------- PASS DATE INPUT & RUN TABLE FILTER FUNCTION ------------- //

// Create the function to run for both events
function runFilter() {

  // ------------- GET DATE FROM FORM INPUT ------------- //

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var formInput = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = formInput.property("value");

  // Get table element reference
  var table = document.getElementById("ufo-table-body");

  // Clear old table
  for (i = 0; i < table.rows.length; i++) {
    
   
    table.deleteRow(i);
    console.log(i);

  };
  

  // Filter data per inputted form data
  let filteredData = tableData.filter(date => date.datetime === inputDate);

  console.log(filteredData);
  console.log(`Rows: ${filteredData.length}`);
  console.log(`Datetime: ${filteredData[0].Datetime}`);
  console.log(`City: ${filteredData[0].city}`);

  // Populate table with filtered data
  
  for (var i = 0; i < filteredData.length; i++) {
  
    row = table.insertRow(i);

    // for (var j = 0; j < 7; j++) {

      cell_datetime = row.insertCell(0);
      cell_datetime.innerHTML = filteredData[i].datetime;

      cell_city = row.insertCell(1);
      cell_city.innerHTML = filteredData[i].city;

      cell_state = row.insertCell(2);
      cell_state.innerHTML = filteredData[i].state;

      cell_country = row.insertCell(3);
      cell_country.innerHTML = filteredData[i].country;

      cell_shape = row.insertCell(4);
      cell_shape.innerHTML = filteredData[i].shape;

      cell_duration = row.insertCell(5);
      cell_duration.innerHTML = filteredData[i].duration;

      cell_comments = row.insertCell(6);
      cell_comments.innerHTML = filteredData[i].comments;

    // };

  };

};
