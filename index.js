const hamburgerMenu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

// setting height of top-bar element to the same height as navbar to avoid using max-height so that animations work properly
const navbarHeight = navbar.clientHeight;
const topBar = document.querySelector(".top-bar");
topBar.style.height = `${navbarHeight}px`;

let expanded = false; // set to false initially
hamburgerMenu.addEventListener("click", () => {
  if (expanded) {
    navbar.style.height = "4rem"; // Adjust max-height here
  } else {
    navbar.style.height = "16rem"; // And here
  }
  navbar.classList.toggle("expanded");
  expanded = !expanded;
});
