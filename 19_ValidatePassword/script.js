"use strict";
const loginBtn = document.querySelector(".loginBtn");

const validateEmailPassword = function () {
  const email = document.querySelector(".email");
  const pass = document.querySelector(".password");
  const smallLog = document.querySelector(".smallLog");
  const emailId = email.value;
  const password = pass.value;

  if (emailId && password) {
    if (emailId.match(/@/) && password.length >= 8) {
      smallLog.style.color = "green";
      smallLog.textContent = "Valid email and password";
    } else if (emailId.match(/@/) && password.length < 8) {
      smallLog.style.color = "red";
      smallLog.textContent = "Invalid password";
    } else if (!emailId.match(/@/) && password.length >= 8) {
      smallLog.style.color = "red";
      smallLog.textContent = "Invalid email";
    } else {
      smallLog.textContent = "Invalid email and password";
      smallLog.style.color = "red";
    }
  }
};

loginBtn.addEventListener("click", validateEmailPassword);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("enter pressed");
    validateEmailPassword();
  }
});
