// Select the button element
const changeColorBtn = document.getElementById('changeColorBtn');

// Array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#57FF33', '#FF33A1'];

// Add event listener for the button click
changeColorBtn.addEventListener('click', function() {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the page
    document.body.style.backgroundColor = randomColor;
});
