// This script is no longer needed as the parallax and dynamic black and white effects are removed.
// You can delete this file if you wish.

/* Original script content:
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero-section");
  const mainContent = document.querySelector(".main-content");
  const heroHeight = heroSection.offsetHeight;
  const scrollPosition = window.scrollY;

  // Check if the main content has started to scroll over the hero section
  if (scrollPosition > heroHeight / 4) {
    // Adjust this threshold as needed
    heroSection.classList.add("scrolled");
  } else {
    heroSection.classList.remove("scrolled");
  }
});
*/
