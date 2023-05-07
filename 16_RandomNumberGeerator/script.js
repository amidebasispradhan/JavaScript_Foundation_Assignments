"use strict";

const randomNumber = document.querySelector(".randomNumber");
const randomBtn = document.querySelector(".randomBtn");

const randomNumberInstant = (() => {
  const random = Math.trunc(Math.random() * 101);
  randomNumber.textContent = random;
})();

const randomNumberGenerate = () => {
  const random = Math.trunc(Math.random() * 101);
  randomNumber.textContent = random;
};

randomBtn.addEventListener("click", randomNumberGenerate);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    randomNumberGenerate();
  }
});
