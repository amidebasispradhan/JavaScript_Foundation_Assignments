"use strict";
const image = document.querySelector(".image");
let x = 0;
let y = 0;
image.style.left = x + "px";
image.style.top = y + "px";
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37:
      if (x > 0) {
        x -= 20;
        image.style.transform = "rotate(-90deg)";
      }
      break;
    case 38:
      if (y > 0) {
        y -= 20;
        image.style.transform = "rotate(0deg)";
      }
      break;
    case 39:
      if (x + image.width < window.innerWidth - 20) {
        x += 20;
        image.style.transform = "rotate(90deg)";
      }
      break;
    case 40:
      if (y + image.height < window.innerHeight - 20) {
        y += 20;
        image.style.transform = "rotate(180deg)";
      }
      break;
    default:
      break;
  }
  image.style.left = x + "px";
  image.style.top = y + "px";
});
