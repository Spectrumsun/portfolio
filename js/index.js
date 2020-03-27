const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const fixNavbar = () => {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const li = document.querySelectorAll(".nav-bar > ul > li");
const addClassNav = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
};

li.forEach(list => list.addEventListener("click", addClassNav));
window.onscroll = () => fixNavbar();
