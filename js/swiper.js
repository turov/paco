if (document.querySelector('.swiperAbout')) {
    const swiper = new Swiper('.swiperAbout', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
}

if (document.querySelector('.swiperVideo')) {
    const swiper2 = new Swiper('.swiperVideo', {

        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            enabled: false,
        },
        breakpoints: {
            1000: {
                slidesPerView: 5,
                spaceBetween: 10,
                autoplay: {
                    enabled: true
                },
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 40,
                autoplay: {
                    enabled: true
                },
            }
        }
    });
}
