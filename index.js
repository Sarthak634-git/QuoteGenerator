// Get references to HTML elements by their IDs
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

// Define the API URL for fetching random quotes
const apiURL = "http://api.quotable.io/random";

// Define an asynchronous function to get and display a random quote
async function getQuote() {
  try {
    // Display "Loading..." text on the button and disable it
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;

    // Display "Updating..." placeholders for the quote and author
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "~ Updating";

    // Fetch a random quote from the API
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    // Extract the quote content and author from the API response
    const quoteContent = data.content;
    const quoyeAuthor = data.author;

    // Display the fetched quote content and author
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~" + quoyeAuthor;

    // Reset the button text and enable it
    btnEl.innerText = "GET QUOTE";
    btnEl.disabled = false;
  } catch (error) {
    console.log("ERROR");

    // Display an error message for the quote and author
    quoteEl.innerText = "An error has occured, Plz try again later";
    authorEl.innerText = "Occurance of Error";
  }
}

// Call the getQuote function once to fetch and display an initial quote
getQuote();

// Add a click event listener to the button to fetch and display a new quote
btnEl.addEventListener("click", getQuote);
