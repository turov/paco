const form = document.querySelector('.form');
const bags = form.querySelectorAll('fieldset:nth-child(1) input[type=radio]');
const weeks = form.querySelectorAll('fieldset:nth-child(2) input[type=radio]');
const link = form.querySelector('.btn-external');

let formData = new FormData(form);

form.onchange = () => {
    let bagsCount = null;
    let weeksCount = null;
    for (let bag of bags){
        if (bag.checked) {
            bagsCount = bag.value;
        }
    }
    for (let week of weeks){
        if (week.checked) {
            weeksCount = week.value;
        }
    }

    switch (true) {
        case (bagsCount == 1 && weeksCount == 2) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:1:690044961063';
            break;
        case (bagsCount == 2 && weeksCount == 2) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:2:690044961063';
            break;
        case (bagsCount == 3 && weeksCount == 2) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:3:690044961063'
            break;
        case (bagsCount == 1 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:1:689837048103'
            break;
        case (bagsCount == 2 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:2:689837048103'
            break;
        case (bagsCount == 3 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:3:689837048103'
            break;
        case (bagsCount == 1 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:1:690044993831'
            break;
        case (bagsCount == 2 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:2:690044993831'
            break;
        case (bagsCount == 3 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/45671701053735:3:690044993831'
            break;
    }
}

// radios.forEach((radio, index) => {
//     radio.onchange = () => {
//         if(radio.checked) {
//             links.forEach(link => {
//                 if (!link.classList.contains('hidden')) {
//                     link.classList.add('hidden');
//                 }
//                 links[index].classList.remove('hidden');
//             })
//         }
//     }
// })