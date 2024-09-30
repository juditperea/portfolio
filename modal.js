//this script will create a popup(iframe) that opens the application of the card we clicked on

var popup = document.getElementById("frame")
        
var cards = document.querySelectorAll(".card")
cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
        event.preventDefault()
        var ruta = this.querySelector("a").getAttribute("href")
        loadContent(ruta);
        popup.style.display = "block"
    });
});

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none"
    }
}

function loadContent(ruta) {
    document.getElementById("popupIframe").src = ruta
}