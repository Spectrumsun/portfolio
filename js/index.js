window.onscroll = function() {
  myFunction();
};

const navbar =  document.getElementById("navbar");
const sticky = navbar.offsetTop;
console.log(sticky)


const myFunction = () => {
  if (window.pageXOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
