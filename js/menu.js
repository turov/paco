let button = document.querySelector('.🙂🍔');
button.addEventListener('click', function() {
    button.classList.toggle('⚽️');
    if (button.nextElementSibling.style.display === "block") {
        button.nextElementSibling.style.display = "none";
    } else {
        button.nextElementSibling.style.display = "block";
    }
} )