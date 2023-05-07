"use strict";

const listOfItems = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MongoDB",
  "Express JS",
  "Node JS",
];
const addItemsBtn = document.querySelector(".addItemsBtn");
const listing = document.querySelector(".listing");

const createListItem = function (item) {
  const li = document.createElement("li");
  const i = document.createElement("i");
  const span = document.createElement("span");
  span.textContent = item;
  i.classList.add("fa-solid");
  i.classList.add("fa-arrow-right");
  i.classList.add("arrow");
  li.appendChild(i);
  li.appendChild(span);
  return li;
};

let index = 0;
const addItemsToList = function () {
  if (index < listOfItems.length) {
    const item = listOfItems[index];
    const li = createListItem(item);
    listing.appendChild(li);
    index++;
  } else {
    const log = document.querySelector(".log");
    log.textContent = "All items have been added";
  }
  console.log(listing);
};

addItemsBtn.addEventListener("click", addItemsToList);
