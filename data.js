// "https://api.cricapi.com/v1/cricScore?apikey=ba2317ed-ba46-476d-a482-a97a533904bf"

let resultData; // Declare resultData outside the fetch callback

window
  .fetch(
    "https://api.cricapi.com/v1/cricScore?apikey=ba2317ed-ba46-476d-a482-a97a533904bf"
  )
  .then((result) => result.json())
  .then((result) => {
    console.log("We have the result", ...result.data);

    // Check if both elements are arrays before using concat

    resultData = result.data;

    displayData(); // Call displayData once the data is available
  })
  .catch((err) => {
    console.log("An error occurred. Please check your code", err);
  });

console.log(resultData);
// Function to display the data on the UI
function displayData() {
  const container = document.getElementById("data-container");

  // Clear existing content in the container
  container.innerHTML = "";

  // Loop through the array and create HTML elements
  resultData.forEach((item) => {
    // Create a div element to hold each item's information
    const itemDiv = document.createElement("div");

    // some basic styles to the div
    itemDiv.style.border = "3px solid #008000";
    itemDiv.style.borderRadius = "8px";
    itemDiv.style.padding = "15px";
    itemDiv.style.marginBottom = "10px";

    // Setting the innerHTML of the div with the item's information
    itemDiv.innerHTML = `
        <p>id: ${item.id}</p>
        <p>dateTimeGMT: ${item.dateTimeGMT}</p>
        <p>matchType: ${item.matchType}</p>
        <p>status: ${item.status}</p>
        <p>t1: ${item.t1}</p>
        <p>t1s: ${item.t1s}</p>
        <p>t2: ${item.t2}</p>
        <p>t2s: ${item.t2s}</p>
        <!-- Add other properties as needed -->
  
        <hr/> <!-- Adding a horizontal line for separation -->
      `;

    // Append the created div to the container
    container.appendChild(itemDiv);
  });
}

// Call the displayData function when the page is loaded
document.addEventListener("DOMContentLoaded", displayData);
