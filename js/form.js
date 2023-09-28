const form = document.querySelector('.form');
const radios = form.querySelectorAll('input[type=radio]')
const links = form.querySelectorAll('.btn-external');

radios.forEach((radio, index) => {
    radio.onchange = () => {
        if(radio.checked) {
            links.forEach(link => {
                if (!link.classList.contains('hidden')) {
                    link.classList.add('hidden');
                }
                links[index].classList.remove('hidden');
            })
        }
    }
})