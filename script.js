// Select all buttons
const toolButtons = document.querySelectorAll('.tool-btn');

// Add click event listener to each button
toolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const toolUrl = button.getAttribute('data-url');
    window.open(toolUrl, '_blank'); // Open the tool in a new tab
  });
});