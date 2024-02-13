let button = document.querySelector(".\uD83D\uDE42\uD83C\uDF54");
const supHeader = document.querySelector(".sup-header");
const message1 = "🐈 30 Days Money Back Guarantee 🕊️";
const message2 = "❤️ Be My Catentine - Purrfectly Yours, Paco & Pepper ❤️"

button.addEventListener("click", function () {
    button.classList.toggle("⚽️"), "block" === button.nextElementSibling.style.display ? button.nextElementSibling.style.display = "none" : button.nextElementSibling.style.display = "block"
});

console.log(supHeader.innerText)

setInterval(() => {
    if (supHeader.innerText === message1) {
        supHeader.innerText = message2;
    } else {
        supHeader.innerText = message1;
    }
}, 8000);