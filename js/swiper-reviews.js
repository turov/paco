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

const swiper2 = new Swiper('.swiperVideo', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1000: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});