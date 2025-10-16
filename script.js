// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fade-in animation trigger
window.addEventListener('load', () => {
  document.querySelector('main').style.opacity = '1';
});
