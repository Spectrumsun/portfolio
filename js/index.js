window.onscroll = function() {
  fixNavbar();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

const fixNavbar = () => {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky")
};
