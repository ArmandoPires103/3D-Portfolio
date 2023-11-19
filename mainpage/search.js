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
    // Your existing displayResults function
}

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function () {
    asyncFetch(searchBar.value);
});