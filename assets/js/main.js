window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("sticky-nav");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky + 70) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  console.log(window.pageYOffset, sticky);
}