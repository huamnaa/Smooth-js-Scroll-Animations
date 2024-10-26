// script.js
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      threshold: 0.1 
    };
  
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); 
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);
  
    animatedElements.forEach(el => observer.observe(el));
  });






  
  