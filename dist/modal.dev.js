"use strict";

var popup = document.getElementById("frame");
var closeButton = document.querySelector(".close-button");
var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (event) {
    event.preventDefault();
    var ruta = this.querySelector("a").getAttribute("href");
    loadContent(ruta);
    popup.style.display = "block";
  });
});

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

closeButton.onclick = function () {
  popup.style.display = "none";
};

function loadContent(ruta) {
  document.getElementById("popupIframe").src = ruta;
}