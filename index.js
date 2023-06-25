const hamburgerMenu = document.querySelector(".menu");
const oldNavbarHeight = document.querySelector(".navbar").clientHeight;
const navbar = document.querySelector(".navbar");

let expanded = false; // set to false initially
hamburgerMenu.addEventListener("click", () => {
  if (expanded) {
    navbar.style.height = `${oldNavbarHeight}px`;
  } else {
    navbar.style.height = "16rem";
  }
  navbar.classList.toggle("expanded");
  expanded = !expanded;
});
