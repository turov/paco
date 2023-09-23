const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiperVideo', {

    direction: 'horizontal',
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 10,
    autoplay: {
        delay: 100,
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 4,
    //         spaceBetween: 40
    //     }
    // }
});