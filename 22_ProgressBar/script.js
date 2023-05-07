"use strict";
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;

  const scrolled = scrollTop / (fullHeight - windowHeight);
  const progressBar = document.querySelector(".progressBar");

  progressBar.style.width = `${scrolled * 100}%`;
});
