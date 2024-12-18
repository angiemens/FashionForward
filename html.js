// Select the menu icon and navbar elements for mobile responsiveness
const menuIcon = document.getElementById('icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    const href = this.getAttribute('href');

    // Check if the link is an anchor link
    if (href.startsWith("#")) {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
    // If it's not an anchor link, allow normal navigation
  });
});
// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');

// Style for the scroll-to-top button
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.backgroundColor = '#000';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';

// Add button to the page
window.addEventListener('load', () => {
  document.body.appendChild(scrollToTopButton);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact form interaction (if any contact form exists in contacts.html)
const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset(); // Clear form after submission
  });
}

// Image hover effects for interactive gallery or images
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

// Interactive content reveal on scroll
const revealElements = document.querySelectorAll('.panel_box');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    } else {
      element.classList.remove('active');
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once to reveal elements already in view
