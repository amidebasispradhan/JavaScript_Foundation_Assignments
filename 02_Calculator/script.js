"use strict";
const equalTo = document.querySelector(".equalTo");
const showResult = document.querySelector(".showResult");
const clear = document.querySelector(".clear");

const calcFunction = function () {
  const num1 = parseFloat(document.querySelector(".num1").value);
  const num2 = parseFloat(document.querySelector(".num2").value);
  const operator = document.querySelector(".operator").value;

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      result = "⚠ Invalid Operator ⚠";
      break;
  }
  showResult.value = result;
};
equalTo.addEventListener("click", calcFunction);

const clearFunction = function () {
  const num1 = document.querySelector(".num1");
  const num2 = document.querySelector(".num2");
  const operator = document.querySelector(".operator");
  const showResult = document.querySelector(".showResult");
  num1.value = "";
  num2.value = "";
  operator.value = "";
  showResult.value = "";
};
clear.addEventListener("click", clearFunction);
