"use strict";

const num = parseInt(prompt("How many rows : "));

for (let i = 1; i <= num; i++) {
  let star = "";
  for (let j = num; j >= i; j--) {
    star += "*";
  }
  console.log(star);
}
