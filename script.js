// Simple auto-scroll for testimonials
const slider = document.getElementById("testimonialSlider");
let scrollAmount = 0;

setInterval(() => {
  // Smooth scroll by one card width
  const cardWidth = slider.querySelector("div").offsetWidth + 16; // card width + gap
  scrollAmount += cardWidth;

  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // Reset to start
  }

  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
}, 3000);
