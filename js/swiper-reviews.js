const swiperReviews = new Swiper(".swiperReviews", {
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
