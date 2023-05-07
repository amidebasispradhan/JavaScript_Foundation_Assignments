"use strict";
const rentalBtn = document.querySelector(".rentalBtn");

const calculateRental = function () {
  const selectedCar = document.querySelector(".carType:checked");
  const days = document.querySelector(".days");
  const cRcMsg = document.querySelector(".cRcMsg");
  const noOfDays = days.value;
  let rentalCost;

  if (selectedCar && noOfDays) {
    const carType = selectedCar.id;
    switch (carType) {
      case "economy":
        rentalCost = 4000 * noOfDays;
        break;
      case "midsize":
        rentalCost = 10000 * noOfDays;
        break;
      case "luxury":
        rentalCost = 20000 * noOfDays;
        break;
      default:
        console.log("In default case");
        break;
    }
    cRcMsg.textContent = `Car Rental Cost : ₹${rentalCost}`;
  } else if (noOfDays) {
    cRcMsg.textContent = "Please select car type";
  } else if (selectedCar) {
    cRcMsg.textContent = "Please enter how many days";
  } else {
    cRcMsg.textContent = "Please Give Inputs";
  }
};

rentalBtn.addEventListener("click", calculateRental);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculateRental();
  }
});
