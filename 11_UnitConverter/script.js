"use strict";

const convertBtn = document.querySelector(".convertBtn");

const cToFConverter = function () {
  const celsius = document.querySelector(".celsius");
  const fahrenheit = document.querySelector(".fahrenheit");

  fahrenheit.value = (celsius.value * 9) / 5 + 32;
};
convertBtn.addEventListener("click", cToFConverter);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    cToFConverter();
  }
});
