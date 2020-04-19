const grass = document.querySelectorAll(".grass");
const scoreBoard = document.querySelector(".score");
const sheeps = document.querySelectorAll(".sheep");
const button = document.querySelector(".start");

let lastHole;
let timeUp = false;
let score = 0;

const hideSheep = e => {
  if (!e.isTrusted) return;
  score++;
  e.target.classList.remove("up");
  scoreBoard.textContent = score;
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 20000);
  console.log("hello");
};

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = grass => {
  const idx = Math.floor(Math.random() * grass.length);
  const newGrass = grass[idx];
  if (newGrass === lastHole) {
    return randomHole(grass);
  }
  lastHole = newGrass;
  return newGrass;
};

const peep = () => {
  const time = randomTime(200, 1000);
  const myGrass = randomHole(grass);
  myGrass.classList.add("up");
  setTimeout(() => {
    myGrass.classList.remove("up");
    if (!timeUp) peep();
  }, time);
};

sheeps.forEach(sheep => sheep.addEventListener("click", hideSheep));
button.addEventListener("click", startGame);
