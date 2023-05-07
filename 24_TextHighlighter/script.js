"use strict";
const log = document.querySelector(".log");
const texts = log.textContent.split(" ");
for (let i = 0; i < texts.length; i++) {
  if (texts[i].length > 8) {
    const span = document.createElement("span");
    span.textContent = texts[i];
    texts[i] = span.outerHTML;
  }
}
log.innerHTML = texts.join(" ");
