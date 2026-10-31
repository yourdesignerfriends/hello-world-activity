/* I am selecting the retro arcade button and the main heading from the DOM */
const arcadeButton = document.getElementById('arcade-btn');
const mainHeading = document.querySelector('h1');

/* I am initializing a counter variable to track user clicks */
let coinCount = 0;

/* I am adding an event listener to handle clicks without injecting direct inline styles */
arcadeButton.addEventListener('click', function() {
    coinCount++;
    arcadeButton.textContent = `PLAYER READY (${coinCount})`;
    
    /* I am toggling a CSS class to alter the visual appearance through CSS rules */
    mainHeading.classList.toggle('alt-color');
});