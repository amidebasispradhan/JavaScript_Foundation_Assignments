"use strict";

const errorQuantity = [
  2, 5, 3, 11, 7, 25, 32, 12, 15, 52, 23, 8, 65, 1, 51, 5, 2,
];

const doubleQuantity = function (cart) {
  for (let i = 0; i <= cart.length - 1; i++) {
    cart[i] = cart[i] * 2;
  }
  return cart;
};

const correctQuantity = doubleQuantity(errorQuantity);

console.log(correctQuantity);
