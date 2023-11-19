const results = document.querySelector("#results");

async function asyncFetch(value) {
    try {
        const res = await fetch(`https://swapi.dev/api/${value}/`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        displayResults(data, value);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

function displayResults(data, value) {
    let output = "";
    console.log(data);
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
                        <span style="text-decoration: underline;">Skin Color</span>: ${item.skin_color}<br>
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
    
    results.innerHTML = output;
}
document.querySelector("#buttons").addEventListener("click", e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
});

const form = document.getElementById('myForm');
const errorMessageElement = document.getElementById('errorMessage');




const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        // Make an API request with the search term
        fetchDataFromAPI(searchTerm);
    } else {
        // Handle empty search term
        alert('Please enter a search term');
    }
});

async function fetchDataFromAPI(searchTerm) {
    try {
        const res = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        displayResults(data, 'people');
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}