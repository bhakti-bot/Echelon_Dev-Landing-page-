// Toggle menu for mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 60; // adjust if your navbar is taller
      const topPos = target.offsetTop - offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth"
      });
    }
  });
});
// Scroll Up Button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show button after scrolling down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Scroll to top when button clicked
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Animate sections when they come into view
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show"); // remove when out of view
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  
  // Change button icon
  if(body.classList.contains("dark-theme")) {
    themeBtn.textContent = "☀️"; // light mode icon
  } else {
    themeBtn.textContent = "🌙"; // dark mode icon
  }
});
