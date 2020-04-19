const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModalButton");



const fixNavbar = () => {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const li = document.querySelectorAll(".nav-bar > ul > li");
const addClassNav = e => {
  const current = document.querySelector(".active");
  current.classList.remove("active");
  e.target.classList.add("active");
};

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = 'grid';
}

const closeModal = (e) =>  {
  e.preventDefault();
  modal.style.display = 'none';

}
closeModalButton.addEventListener("click", closeModal)
openModalButton.addEventListener("click", openModal)
li.forEach(list => list.addEventListener("click", addClassNav));
window.onscroll = () => fixNavbar();
