const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

if (document.querySelector('.swiperVideo')) {
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
}