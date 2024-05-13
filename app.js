const hamIcon = document.querySelector(".ham-icon");
const navLinks = document.querySelector(".nav-links");

hamIcon.addEventListener("click", () => {
  navLinks.classList.toggle("transformed");
});
