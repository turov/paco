const x = window.matchMedia("(min-width: 1300px)")

if (x.matches) {

    const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
} else {
    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
