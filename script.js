document.addEventListener("DOMContentLoaded", () => {
  const scrollToNextSection = (currentSection) => {
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFirstSection = () => {
    const firstSection = document.querySelector(".section");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Add click event to each arrow icon
  document.querySelectorAll(".next-section-arrow").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const currentSection = arrow.closest(".section");
      scrollToNextSection(currentSection);
    });
  });

  // Add click event to last arrow icon
  document
    .querySelector(".first-section-arrow")
    .addEventListener("click", () => {
      scrollToFirstSection();
    });
});

// Smooth scroll for sidebar navigation
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
