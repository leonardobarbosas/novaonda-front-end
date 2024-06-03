"use strict";

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var windowPosition = window.scrollY > 380;
  header.classList.toggle("scrolled", windowPosition);
});
