"use strict";
const marks = [75, 80, 92, 88, 97];
let highestMarks = marks[0];
for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}
console.log(`The highest marks scored in the class is ${highestMarks}.`);
