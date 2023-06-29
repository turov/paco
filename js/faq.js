const acc = document.querySelectorAll(".🪗");
acc.forEach(elem => {
    elem.onclick = () => {
        elem.classList.toggle("⚽️");
        if (elem.nextElementSibling.style.display === "block") {
            elem.nextElementSibling.style.display = "none";
        } else {
            elem.nextElementSibling.style.display = "block";
        }
    }
})

