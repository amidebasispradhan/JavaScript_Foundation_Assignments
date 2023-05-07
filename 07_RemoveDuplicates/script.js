"use strict";

const addToCartBtn = document.querySelector(".addToCartBtn");

const buyNowBtn = document.querySelector(".buyNowBtn");

const addCartToList = function () {
  const items = document.querySelector(".items");
  const addToCartList = document.querySelector(".addToCartList");
  addToCartList.textContent = addToCartList.textContent + items.value + " ";
  items.value = "";
};

addToCartBtn.addEventListener("click", addCartToList);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addCartToList();
  }
});

const addBuyToList = function () {
  const addToCartList = document.querySelector(".addToCartList");
  const buyNowList = document.querySelector(".buyNowList");

  const listsItems = addToCartList.textContent.split(" ");
  console.log(listsItems);
  const buyList = [...new Set(listsItems)];
  console.log(buyList);
  const indexOfSpace = buyList.indexOf("");
  if (indexOfSpace !== -1) {
    buyList.splice(indexOfSpace, 1);
  }
  console.log(buyList);
  buyNowList.textContent = buyList.join(" ");
};

buyNowBtn.addEventListener("click", addBuyToList);
