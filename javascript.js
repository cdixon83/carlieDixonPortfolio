// hamburger nav function
const menu = document.querySelector(".menu");
const hamButton = document.querySelector(".hamButton");
const showNav = document.querySelector(".showNav");
const closeNav = document.querySelector(".closeNav")

const toggleMenu = () => {
  // if menu is currently hidden
  if (menu.classList.contains("menuHidden")) {
    // changes menu from hidden to show
    menu.classList.remove("menuHidden");
    menu.classList.add("menuShow");
    // change button from bars to cross
    showNav.classList.remove("show");
    showNav.classList.add("close");
    closeNav.classList.remove("close");
    closeNav.classList.add("show");
  } else {
    // changes menu from show to hidden
    menu.classList.add("menuHidden");
    menu.classList.remove("menuShow");
    // change button from cross to bars
    showNav.classList.add("show");
    showNav.classList.remove("close");
    closeNav.classList.add("close");
    closeNav.classList.remove("show");
  }
};

hamButton.addEventListener("click", toggleMenu);