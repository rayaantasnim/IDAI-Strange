document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".special-div, .section");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    sections.forEach((sec, index) => {
      const rect = sec.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;

      // Check if section is in viewport
      if (top < windowHeight * 0.8 && bottom > 0) {
        sec.classList.add("visible");
      } else {
        sec.classList.remove("visible");
      }
    });
  }

  // Run on scroll and on load
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});