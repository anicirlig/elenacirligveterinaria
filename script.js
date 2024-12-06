// Smooth Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Function to show or hide the scroll-to-top button
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

// Smooth scroll to top on button click
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
