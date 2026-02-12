// Hamburger menu for phone view
function toggleNavMenu() {
  var nav = document.querySelector(".nav-texts");
  var burger = document.getElementById("burger-menu");
  nav.classList.toggle("open");
  burger.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burger-menu");
  if (burger) {
    burger.addEventListener("click", toggleNavMenu);
  }
});
