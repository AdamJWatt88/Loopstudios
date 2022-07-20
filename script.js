const navbar = document.querySelector(".navbar");
const navbarToggler = document.querySelector(".navbar-toggler");

function windowSize() {
  if (window.innerWidth > 991) {
    navbar.classList.remove("navbar--dark");
  }
}

function addDarkNav() {
  navbar.classList.toggle("navbar--dark");
}

navbarToggler.addEventListener("click", () => {
  addDarkNav();
});

window.addEventListener("resize", () => windowSize());
