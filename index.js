const hamburgerMenu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

let expanded = false; // set to false initially
hamburgerMenu.addEventListener("click", () => {
  if (expanded) {
    navbar.style.maxHeight = "4rem"; // Adjust max-height here
  } else {
    navbar.style.maxHeight = "16rem"; // And here
  }
  navbar.classList.toggle("expanded");
  expanded = !expanded;
});
