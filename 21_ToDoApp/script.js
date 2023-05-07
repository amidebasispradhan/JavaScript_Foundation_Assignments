"use strict";
const addTaskBtn = document.querySelector(".addTaskBtn");
const createDiv = function (inputToDo) {
  const div = document.createElement("div");
  div.textContent = inputToDo;
  div.classList.add("taskList");
  return div;
};
const addToTask = function () {
  const inputTask = document.querySelector(".inputTask");
  const inputToDo = inputTask.value;
  if (inputToDo) {
    const toDoContent = document.querySelector(".toDoContent");
    const div = createDiv(inputToDo);
    toDoContent.appendChild(div);
    inputTask.value = "";
  }
};
addTaskBtn.addEventListener("click", addToTask);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    console.log("enter pressed");
    addToTask();
  }
});
