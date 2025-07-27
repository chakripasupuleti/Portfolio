// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Dark/Light Mode Toggle
const toggle = document.getElementById('theme-toggle');

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
