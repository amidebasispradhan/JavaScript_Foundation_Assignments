"use strict";
const depositBtn = document.querySelector(".depositBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");
const nameBtn = document.querySelector(".nameBtn");
const customer = {
  name: "",
  balance: 0,
};

const depositAmount = function () {
  const deposit = document.querySelector(".deposit");
  const balanceDetails = document.querySelector(".balanceDetails");
  const nameDetails = document.querySelector(".nameDetails");
  const transactionComment = document.querySelector(".transactionComment");

  if (deposit.value) {
    const depositINR = parseFloat(deposit.value);
    customer.balance += depositINR;
    balanceDetails.textContent = `₹${customer.balance}`;
    nameDetails.textContent = customer.name;
    transactionComment.textContent = "Transaction Successful";
  }
};
const withdrawAmount = function () {
  const withdraw = document.querySelector(".withdraw");
  const balanceDetails = document.querySelector(".balanceDetails");
  const nameDetails = document.querySelector(".nameDetails");
  const transactionComment = document.querySelector(".transactionComment");

  if (withdraw.value) {
    const withdrawINR = parseFloat(withdraw.value);
    if (customer.balance >= withdrawINR) {
      customer.balance -= withdrawINR;
      balanceDetails.textContent = `₹${customer.balance}`;
      nameDetails.textContent = customer.name;
      transactionComment.textContent = "Transaction Successful";
    } else {
      transactionComment.textContent = "Insufficient Balance";
    }
  }
};

const accountCreate = function () {
  const customerName = document.querySelector(".customerName");
  const balanceDetails = document.querySelector(".balanceDetails");
  const nameDetails = document.querySelector(".nameDetails");

  if (customerName.value) {
    customer.name = customerName.value;
    customer.balance = 0;
    nameDetails.textContent = customer.name;
    balanceDetails.textContent = `₹${customer.balance}`;
  }
};

depositBtn.addEventListener("click", depositAmount);

withdrawBtn.addEventListener("click", withdrawAmount);

nameBtn.addEventListener("click", accountCreate);
