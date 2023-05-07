"use strict";

const allNumbers = [2, 6, 22, 21, 15, 32, 42, 3, 24, 15, 34];

for (let i = 0; i <= allNumbers.length - 1; i++) {
  // if ((allNumbers[i] % 3 === 0) && (allNumbers[i] % 2 !== 0)) {
  //     console.log(allNumbers[i]);
  // }
  if (allNumbers[i] % 3 === 0) {
    if (allNumbers[i] % 2 === 0) {
      continue;
    } else {
      console.log(allNumbers[i]);
    }
  }
}
