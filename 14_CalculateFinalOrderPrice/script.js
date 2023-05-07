"use strict";

const customerCart = {
  unitPrice: [101, 505, 326, 575, 202, 1501, 1001],
  quantity: [5, 2, 1, 8, 3, 6, 2],
};

const calculateTotalCost = (cart) => {
  const perItemCost = [];
  for (let i = 0; i <= cart.unitPrice.length - 1; i++) {
    perItemCost.push(cart.unitPrice[i] * cart.quantity[i]);
  }

  console.log(perItemCost);
  let toTalCost = 0;

  for (let i = 0; i <= perItemCost.length - 1; i++) {
    toTalCost += perItemCost[i];
  }
  return toTalCost;
};

const totalCostOfCart = calculateTotalCost(customerCart);

console.log(`The final order price is : ${totalCostOfCart}`);
