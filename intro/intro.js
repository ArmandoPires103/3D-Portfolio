// Define the number of stars
const stars = 500;

// Loop to create each star
for (let i = 0; i < stars; i++) {
    // Create a new 'div' element for the star
    let star = document.createElement("div");

    // Assign a class name 'stars' to the star element
    star.className = 'stars';

    // Get random position coordinates for the star
    var xy = randomPosition();

    // Set the top, left, right, and bottom CSS properties for the star
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    star.style.right = xy[2] + 'px';
    star.style.bottom = xy[3] + 'px';

    // Append the star element to the body of the HTML document
    document.body.append(star);
}

// Function to generate random position coordinates
function randomPosition() {
    // Get the width and height of the window
    var y = window.innerWidth;
    var x = window.innerHeight;

    // Generate random X and Y coordinates within the window dimensions
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);

    // Return an array containing the random X and Y coordinates
    return [randomX, randomY];
}

// Event listener for the button with the id 'startButton'
document.getElementById('startButton').addEventListener('click', function() {
    // Redirect the user to another HTML file (mainpage.html in this case)
    window.location.href = '../mainpage/mainpage.html';
});
