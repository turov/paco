const form = document.querySelector('.form');
const bags = form.querySelectorAll('fieldset:nth-child(1) input[type=radio]');
const weeks = form.querySelectorAll('fieldset:nth-child(2) input[type=radio]');
const link = form.querySelector('.btn-external');

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
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46898180587815:1:690044961063';
            break;
        case (bagsCount == 2 && weeksCount == 2) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46567125778727:1:690138317095';
            break;
        case (bagsCount == 3 && weeksCount == 2) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690138415399'
            break;
        case (bagsCount == 1 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46898180587815:1:689837048103'
            break;
        case (bagsCount == 2 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46567125778727:1:690138349863'
            break;
        case (bagsCount == 3 && weeksCount == 4) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690138448167'
            break;
        case (bagsCount == 1 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46898180587815:1:690044993831'
            break;
        case (bagsCount == 2 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46567125778727:1:690138382631'
            break;
        case (bagsCount == 3 && weeksCount == 6) :
            link.href='https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690138480935'
            break;
    }
}