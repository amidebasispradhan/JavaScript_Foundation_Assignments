"use strict";
const enterPass = document.querySelector(".enterPass");
const confirmPass = document.querySelector(".confirmPass");
const submitPass = document.querySelector(".submitPass");
const log = document.querySelector(".log");

submitPass.addEventListener("click", function () {
  if (enterPass.value === confirmPass.value) {
    log.textContent = "Password Matched ✔";
    console.log("Password Matched. Password validation Successful.");
  } else {
    log.textContent = "Password Not Matched ❌";
    console.log("Password didn't match. Password validation unsuccessful");
  }
});
