const hamburgerMenu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

// setting height of top-bar element to the same height as navbar to avoid using max-height so that animations work properly
const navbarHeight = navbar.clientHeight;
const topBar = document.querySelector(".top-bar");
topBar.style.height = `${navbarHeight}px`;

let expanded = false; // set to false initially
hamburgerMenu.addEventListener("click", () => {
  if (expanded) {
    navbar.style.height = "4rem";
    logo.style.fontSize = "1.5rem";
    logo.style.marginLeft = "0";
    logo.style.marginTop = "0";
  } else {
    navbar.style.height = "20rem";
    logo.style.fontSize = "2rem";
    logo.style.marginLeft = "1rem";
    logo.style.marginTop = "1rem";
  }
  navbar.classList.toggle("expanded");
  expanded = !expanded;
});
