(function () {
    const form = document.querySelector('#review-form');
    const submit = form.querySelector('.review-form__button');

    form.onchange = (evt) => {
        evt.preventDefault();
        const formData = new FormData(form);
        if (formData.get('star') >= 1) {
            submit.removeAttribute('disabled');
        }
    }

    submit.addEventListener('click', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name').trim(),
            starts: +formData.get('star'),
            content: formData.get('review').trim()
        }
        let response = await fetch('https://paco-api.ceconsumer.com/api/reviews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            window.location.replace('https://pacoandpepper.shop/');
        } else {
            let json = await response.json()
            alert(json.message);
        }
    });

})();