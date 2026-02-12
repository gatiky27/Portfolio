// Hamburger menu for phone view
function toggleNavMenu() {
  var nav = document.querySelector(".nav-texts");
  var burger = document.getElementById("burger-menu");
  var main = document.querySelector(".main");
  nav.classList.toggle("open");
  burger.classList.toggle("open");
  // For phone view, push content down when menu is open
  if (window.innerWidth <= 480) {
    if (nav.classList.contains("open")) {
      // Set margin-top to navbar height + menu height
      var navHeight = document.querySelector('.navbar').offsetHeight;
      var menuHeight = nav.scrollHeight;
      main.style.marginTop = (navHeight + menuHeight) + 'px';
    } else {
      main.style.marginTop = '';
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
    // Close burger menu when a nav link is clicked (phone view)
    var navLinks = document.querySelectorAll('.nav-texts a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var nav = document.querySelector(".nav-texts");
        var burger = document.getElementById("burger-menu");
        var main = document.querySelector(".main");
        if (window.innerWidth <= 480 && nav.classList.contains("open")) {
          nav.classList.remove("open");
          burger.classList.remove("open");
          main.style.marginTop = '';
        }
      });
    });
  var burger = document.getElementById("burger-menu");
  if (burger) {
    burger.addEventListener("click", toggleNavMenu);
  }
  // Reset margin-top on resize if needed
  window.addEventListener('resize', function() {
    var nav = document.querySelector(".nav-texts");
    var main = document.querySelector(".main");
    if (window.innerWidth > 480) {
      main.style.marginTop = '';
    } else if (nav.classList.contains("open")) {
      var navHeight = document.querySelector('.navbar').offsetHeight;
      var menuHeight = nav.scrollHeight;
      main.style.marginTop = (navHeight + menuHeight) + 'px';
    } else {
      main.style.marginTop = '';
    }
  });
});
