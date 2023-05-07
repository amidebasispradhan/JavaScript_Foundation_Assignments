"use strict";
const countBtn = document.querySelector(".countBtn");
const countVowel = function () {
  const fullName = document.querySelector(".fullName");
  const vowelLog = document.querySelector(".vowelLog");
  let count = 0;
  console.log(fullName.value);
  for (let i = 0; i <= fullName.value.length - 1; i++) {
    if (
      fullName.value[i] === "a" ||
      fullName.value[i] === "e" ||
      fullName.value[i] === "i" ||
      fullName.value[i] === "o" ||
      fullName.value[i] === "u" ||
      fullName.value[i] === "A" ||
      fullName.value[i] === "E" ||
      fullName.value[i] === "I" ||
      fullName.value[i] === "O" ||
      fullName.value[i] === "U"
    )
      count++;
  }
  console.log(count);
  vowelLog.textContent = `Your name contains ${count} vowel(s)`;
};
countBtn.addEventListener("click", countVowel);
