"use strict";

window.onload = function () {
  var buttonLeoBarbosa = document.getElementById("submitLeoBarbosa");
  var buttonLeoCadena = document.getElementById("submitLeoCadena");
  var buttonJuliaVasco = document.getElementById("submitJulia");
  var repository = document.getElementById("repository");

  if (buttonLeoBarbosa) {
    buttonLeoBarbosa.onclick = function (event) {
      window.location.href = "https://github.com/leonardobarbosas";
    };
  }

  if (buttonLeoCadena) {
    buttonLeoCadena.onclick = function (event) {
      window.location.href = "https://github.com/cadenasza";
    };
  }

  if (buttonJuliaVasco) {
    buttonJuliaVasco.onclick = function (event) {
      window.location.href = "https://github.com/juvascoli";
    };
  }

  if (repository) {
    repository.onclick = function (event) {
      window.location.href =
        "https://github.com/leonardobarbosas/novaonda-front-end";
    };
  }
};
