document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      // Remove active class from all nav links
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");

      // Hide all sections
      sections.forEach(sec => sec.classList.remove("active"));

      // Show target section
      targetSection.classList.add("active");
    });
  });
});
