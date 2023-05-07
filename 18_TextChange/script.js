"use strict";
const changeTextBtn = document.querySelector(".changeTextBtn");

const textChanger = function () {
  const headingText = document.querySelector(".headingText");

  if (headingText.textContent == "The most affordable learning platform") {
    headingText.textContent = "PW Skills";
  } else {
    headingText.textContent = "The most affordable learning platform";
  }
};

changeTextBtn.addEventListener("click", textChanger);
