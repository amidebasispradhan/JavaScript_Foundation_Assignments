"use strict";
const checkBtn = document.querySelector(".checkBtn");

const checkCapital = function () {
  let firstName = document.querySelector(".firstName");
  let lastName = document.querySelector(".lastName");
  firstName.value =
    (firstName.value[0] === firstName.value[0].toUpperCase()
      ? firstName.value[0]
      : firstName.value[0].toUpperCase()) + firstName.value.slice(1);
  lastName.value =
    (lastName.value[0] === lastName.value[0].toUpperCase()
      ? lastName.value[0]
      : lastName.value[0].toUpperCase()) + lastName.value.slice(1);
  console.log(firstName.value);
  console.log(lastName.value);
};
checkBtn.addEventListener("click", checkCapital);
