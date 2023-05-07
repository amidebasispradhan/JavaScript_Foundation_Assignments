"use strict";
const addCostOfDishesBtn = document.querySelector(".addCostOfDishesBtn");
const addNoOfPeoplesBtn = document.querySelector(".addNoOfPeoplesBtn");
const clearAllBtn = document.querySelector(".clearAllBtn");
const clearAll = function () {
  const costOfDishes = document.querySelector(".costOfDishes");
  const noOfPeoples = document.querySelector(".noOfPeoples");
  const costOfDishesList = document.querySelector(".costOfDishesList");
  const addPersonsList = document.querySelector(".addPersonsList");
  const billSummary = document.querySelector(".billSummary");

  costOfDishes.value = "";
  noOfPeoples.value = "";
  costOfDishesList.textContent = "";
  addPersonsList.textContent = "";
  billSummary.textContent = "";
};

clearAllBtn.addEventListener("click", clearAll);

let costOfDishesValues = [];

const addCostOfDishesToList = function () {
  const costOfDishes = document.querySelector(".costOfDishes");
  const costOfDishesList = document.querySelector(".costOfDishesList");
  if (costOfDishes.value) {
    costOfDishesValues.push(parseFloat(costOfDishes.value));
    costOfDishesList.textContent =
      costOfDishesList.textContent + "₹" + costOfDishes.value + " ";
  } else {
    costOfDishesList.textContent = "Please enter cost of each dish(s)";
  }
  costOfDishes.value = "";
};
addCostOfDishesBtn.addEventListener("click", addCostOfDishesToList);

const addNoOfPeoplesToList = function () {
  const noOfPeoples = document.querySelector(".noOfPeoples");
  const addPersonsList = document.querySelector(".addPersonsList");
  const costOfDishesList = document.querySelector(".costOfDishesList");
  const billSummary = document.querySelector(".billSummary");

  if (noOfPeoples.value && typeof costOfDishesValues[0] === "number") {
    let noOfPeoplesValues = parseInt(noOfPeoples.value);
    addPersonsList.textContent = noOfPeoplesValues;
    let totalBillAmount = 0;
    for (let i = 0; i <= costOfDishesValues.length - 1; i++) {
      totalBillAmount += costOfDishesValues[i];
    }
    const billPerPerson = totalBillAmount / noOfPeoplesValues;
    billSummary.innerHTML = `Total bill: ₹${totalBillAmount} <br> No. of people(s): ${noOfPeoplesValues} <br> Pay: ₹${billPerPerson} / Person`;

    const billAmount = {
      totalBill: totalBillAmount,
      billsPerPerson: billPerPerson,
    };
    console.log(billAmount);
  } else if (typeof costOfDishesValues[0] === "number") {
    let noOfPeoplesValues = 1;
    addPersonsList.textContent = noOfPeoplesValues;
    let totalBillAmount = 0;
    for (let i = 0; i <= costOfDishesValues.length - 1; i++) {
      totalBillAmount += costOfDishesValues[i];
    }
    const billPerPerson = totalBillAmount / noOfPeoplesValues;
    billSummary.innerHTML = `Total bill: ₹${totalBillAmount} <br> No. of people(s): ${noOfPeoplesValues} <br> Pay: ₹${billPerPerson} / Person`;
    const billAmount = {
      totalBill: totalBillAmount,
      billsPerPerson: billPerPerson,
    };
    console.log(billAmount);
  } else {
    costOfDishesList.textContent = "Please enter cost of each dish(s)";
    addPersonsList.textContent = "Please enter cost of each dish(s)";
  }
  noOfPeoples.value = "";
  costOfDishesValues = [];
};

addNoOfPeoplesBtn.addEventListener("click", addNoOfPeoplesToList);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addCostOfDishesToList();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    addNoOfPeoplesToList();
  }
});
