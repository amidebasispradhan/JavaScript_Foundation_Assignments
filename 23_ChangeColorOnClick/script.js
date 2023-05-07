"use strict";
const changeColorBtn = document.querySelector(".changeColorBtn");
const randomColor = function () {
  const colorCodes = "0123456789abcdef";
  let hashCode = "#";
  for (let i = 0; i < 6; i++) {
    hashCode = hashCode + colorCodes[Math.trunc(Math.random() * 16)];
  }
  return hashCode;
};
const changeBgColor = function () {
  const rndColor = randomColor();
  document.body.style.backgroundColor = rndColor;
};
changeColorBtn.addEventListener("click", changeBgColor);
