// FETCH //

// Select the HTML element with the id "results" and store it in the variable "results"
const results = document.querySelector("#results");

// Define an asynchronous function named "asyncFetch" that takes a parameter called "value"
async function asyncFetch(value) {
    try {
        // Use the fetch function to make an asynchronous HTTP request to the Star Wars API
        const res = await fetch(`https://swapi.dev/api/${value}/`);

        // Check if the HTTP response is successful (status code 200-299)
        if (!res.ok) {
            // If not successful, throw an error with a message containing the HTTP status
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // If successful, parse the response body as JSON and store it in the variable "data"
        const data = await res.json();

        // Call the "displayResults" function with the retrieved data and the provided value
        displayResults(data, value);
    } catch (error) {
        // If an error occurs during the fetch or processing, log the error message to the console
        console.error('Error fetching data:', error.message);
    }
}

// DISPLAY FUNCTION //

function displayResults(data, value) {
    let output = "";
    //console.log(data);
    if (value === 'films') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity: 0.8;">
                    <h4 class="card-title text-center">${item.title}</h4>
                    <div class="card-content">
                        <span style="text-decoration: underline;">Producer</span>: ${item.producer}<br>
                        <span style="text-decoration: underline;">Director</span>: ${item.director}<br>
                        <span style="text-decoration: underline;">Release Date</span>: ${item.release_date}<br>
                        <p class="text-center">${item.opening_crawl}</p>
                    </div>
                </div>`;
            
        });
    }
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity: 0.8;">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration: underline;">Height</span>: ${item.height}<br>
                        <span style="text-decoration: underline;">Birth Year</span>: ${item.birth_year}<br>
                        <span style="text-decoration: underline;">Eye Color</span>: ${item.eye_color}<br>
                    </div>
                </div>`;
        });
    }
    if (value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity: 0.8;">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration: underline;">Capacity</span>: ${item.cargo_capacity}<br>
                        <span style="text-decoration: underline;">Model</span>: ${item.model}<br>
                        <span style="text-decoration: underline;">Vehicle Class</span>: ${item.vehicle_class}<br> <!-- Fix the typo here -->
                    </div>
                </div>`;
        });
    }
    // Set the innerHTML of the element with the id "results" to the generated output
    results.innerHTML = output;
}


// Add an event listener to the element with the id "buttons"
document.querySelector("#buttons").addEventListener("click", e => {
    // Call the asyncFetch function with the lowercase text content of the clicked button
    asyncFetch(e.target.textContent.trim().toLowerCase());
});

// SEARCH FUNCTION //

// Get references to the search button and search input elements using querySelector
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
    // When the button is clicked, execute this function

    // Get the trimmed value from the search input
    const searchTerm = searchInput.value.trim();

    // Check if the search term is not empty
    if (searchTerm !== '') {
        // If not empty, make an API request with the search term
        fetchDataFromAPI(searchTerm);
    } else {
        // If the search term is empty, show an alert message
        alert('Please enter a search term');
    }
});

// Define an asynchronous function named fetchDataFromAPI that takes a search term parameter
async function fetchDataFromAPI(searchTerm) {
    try {
        // Use the fetch function to make an asynchronous HTTP request to the Star Wars API
        const res = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);

        // Check if the HTTP response is successful (status code 200-299)
        if (!res.ok) {
            // If not successful, throw an error with a message containing the HTTP status
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // If successful, parse the response body as JSON and store it in the variable "data"
        const data = await res.json();

        // Call the "displayResults" function with the retrieved data and a specific value ('people')
        displayResults(data, 'people');

    } catch (error) {
        // If an error occurs during the fetch or processing, log the error message to the console
        console.error('Error fetching data:', error.message);
    }
}
