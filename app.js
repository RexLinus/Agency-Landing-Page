// import components
const headerURL = "./components/header.html";
const testimonialURL = "./components/testimonial.html";
const videoPresentationURL = "./components/video-presentation.html";
const servicesURL = "./components/services.html";
const plansURL = "./components/plans.html";
const portfolioURL = "./components/portfolio.html";

const components = [
  headerURL,
  testimonialURL,
  videoPresentationURL,
  servicesURL,
  plansURL,
  portfolioURL,
];

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
  return fetch(url)
    .then((response) => response.text())
    .then((htmlContent) => {
      document.body.innerHTML += htmlContent;
    });
}

async function loadComponentsInOrder(urls) {
  for (const url of urls) {
    await importComponent(url);
  }
}

// add the components in order
loadComponentsInOrder(components);
