let button = document.querySelector(".\uD83D\uDE42\uD83C\uDF54");
button.addEventListener("click", function () {
    button.classList.toggle("⚽️"), "block" === button.nextElementSibling.style.display ? button.nextElementSibling.style.display = "none" : button.nextElementSibling.style.display = "block"
});
