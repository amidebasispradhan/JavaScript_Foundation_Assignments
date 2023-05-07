"use strict";
const discountCalcBtn = document.querySelector(".discountCalcBtn");
const clearBtn = document.querySelector(".clearBtn");

const calcDiscountPercent = () => {
  const original = document.querySelector(".originalPrice");
  const discounted = document.querySelector(".discountedPrice");
  const discountLog = document.querySelector(".discountLog");
  const originalPrice = parseFloat(original.value);
  const discountedPrice = parseFloat(discounted.value);
  let percent = 0;

  if (originalPrice && discountedPrice) {
    percent = ((originalPrice - discountedPrice) / originalPrice) * 100;
    console.log(percent);
    const roundedPercent = Math.round(percent * 100) / 100;
    console.log(roundedPercent);
    discountLog.textContent = `${roundedPercent}% Off`;
  } else if (discountedPrice === 0) {
    discountLog.textContent = `100% Off`;
  }
};

discountCalcBtn.addEventListener("click", calcDiscountPercent);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcDiscountPercent();
  }
});

clearBtn.addEventListener("click", function () {
  const original = document.querySelector(".originalPrice");
  const discounted = document.querySelector(".discountedPrice");
  const discountLog = document.querySelector(".discountLog");

  original.value = "";
  discounted.value = "";

  discountLog.textContent = "% Off";
});
