"use strict";

const colorMixer = document.querySelector(".colorMixer");
const msg = document.querySelector(".msg");

const clrMixer = function () {
  const color1 = document.querySelector(".color1").value;
  const color2 = document.querySelector(".color2").value;
  const body = document.querySelector("body");

  let mixedColor = "";

  switch (true) {
    case (color1 == "red" && color2 == "blue") ||
      (color1 == "blue" && color2 == "red"):
      mixedColor = "Purple";
      body.style.backgroundColor = mixedColor;
      console.log(mixedColor);
      break;
    case (color1 == "red" && color2 == "yellow") ||
      (color1 == "yellow" && color2 == "red"):
      mixedColor = "Orange";
      body.style.backgroundColor = mixedColor;
      console.log(mixedColor);
      break;
    case (color1 == "blue" && color2 == "yellow") ||
      (color1 == "yellow" && color2 == "blue"):
      mixedColor = "Green";
      body.style.backgroundColor = mixedColor;
      console.log(mixedColor);
      break;
    default:
      mixedColor = "⚠ Invaid Colors ⚠";
      body.style.backgroundColor = "#000";
      console.log("Invaid color combination");
      break;
  }
  msg.textContent = mixedColor;
};

colorMixer.addEventListener("click", clrMixer);
