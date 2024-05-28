// import components
const headerURL = "./components/header.html";
const testimonialURL = "./components/testimonial.html";
const videoPresentation = "./components/video-presentation.html";
const servicesURL = "./components/services.html";
const portfolioURL = "./components/portfolio.html";

// ham menu functionality
setTimeout(() => {
  const hamIcon = document.querySelector(".ham-icon");
  const navLinks = document.querySelector(".nav-links");
  hamIcon.addEventListener("click", () => {
    navLinks.classList.toggle("transformed");
    document.body.classList.toggle("overflow-hidden");
  });
}, 2000);

// function to the components to the index.html page
function importComponent(url) {
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((htmlContent) => {
      document.body.innerHTML += htmlContent;
    });
}

// add the components in order
importComponent(headerURL);
importComponent(testimonialURL);
importComponent(videoPresentation);
importComponent(servicesURL);
importComponent(portfolioURL);
