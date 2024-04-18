// Typing animation function
function typeText(element, text, speed = 175) {
  let i = 0;

  function type() {
      if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
      }
  }

  type();
}

// Initialize typing animation on page load
window.onload = function() {
  const descriptionElement = document.getElementById('description');
  const text = 'Yea, about that.'; // Initial text for the typing animation

  // Call the typing function with the description element, text, and typing speed
  typeText(descriptionElement, text, 175);
};

// Toggle dark mode
document.getElementById('toggleButton').addEventListener('click', function() {
  const body = document.body;
  const button = document.getElementById('toggleButton');
  const descriptionElement = document.getElementById('description');

  // Toggle dark mode class on body
  body.classList.toggle('dark-mode');

  // Update the button text based on the current mode
  button.textContent = body.classList.contains('dark-mode') ? '🌙' : '🔆';

  // Clear the current text content in the description section
  descriptionElement.textContent = '';

  // Restart the typing animation with the desired text
  const text = 'Yea, about that.';
  typeText(descriptionElement, text, 175);
});

// Navigation event handlers
document.getElementById('homeButton').addEventListener('click', function() {
  // Show Home content and hide Gallery content
  document.getElementById('homeContent').classList.add('current-page');
  document.getElementById('galleryContent').classList.remove('current-page');
});

document.getElementById('galleryButton').addEventListener('click', function() {
  // Show Gallery content and hide Home content
  document.getElementById('galleryContent').classList.add('current-page');
  document.getElementById('homeContent').classList.remove('current-page');
});
