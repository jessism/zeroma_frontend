// Intersection Observer options
const options = {
  root: null, // use viewport
  rootMargin: '0px',
  threshold: 0.1 // trigger when 10% of element is visible
};

export const initScrollAnimations = () => {
  // Get all elements with 'animate' class
  const animatedElements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element enters viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        
        // Stop observing after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Start observing each animated element
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}; 