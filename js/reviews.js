(async function() {
  const reviewsSummaryDiv = document.querySelector('.js-reviews-summary');
  const reviewsRatesDiv = document.querySelector('.js-reviews-rates');
  const reviewsContainerDiv = document.querySelector('.js-reviews');
  const URL_REVIEWS = 'https://api-cdn.yotpo.com/v3/storefront/store/j0eU6bmmGVaYFPWR4JofrrjSCuidwkEGrQmTbkDv/product/8626970525991/reviews';
  const URL_REVIEWS_DATA = 'https://api-cdn.yotpo.com/v1/star_distribution/store/j0eU6bmmGVaYFPWR4JofrrjSCuidwkEGrQmTbkDv/product/8626970525991';
  const reviewsData = {
    total: 0,
    avg: 0,
    rates: {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0,},
  };
  const reviews = [];

  const initSwiper = () => {
    if (document.querySelector('.swiperReviews')) {
      new Swiper('.swiperReviews', {
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
    }
  };

  const fetchReviewsData = async () => {
    const response = await fetch(URL_REVIEWS_DATA);
    if (response.ok) {
      reviewsData.rates = await response.json();
    }
  };

  const fetchReviews = async (page = 1) => {
    const response = await fetch(`${URL_REVIEWS}?page=${page}&perPage=10&sort=rating,date,images,badge`);
    if (response.ok) {
      const { reviews: fetchedReviews, bottomline } = await response.json();
      reviewsData.total = bottomline.totalReview || 0;
      reviewsData.avg = bottomline.averageScore || 0;

      reviews.push(...fetchedReviews);
    }
  };

  const insertReviews = () => {
    if (reviews.length > 3 && reviewsContainerDiv) {
      const staticReviews = reviewsContainerDiv.children;

      for (let i = 0; i < staticReviews.length; i++) {
        if (reviews[i]) {
          const { content, createdAt, user, score } = reviews[i];

          const sign = user.displayName + ', posted at ' + new Date(createdAt).toLocaleDateString();

          staticReviews[i].querySelector('.swiper-avatar').src = user.socialImage || 'assets/reviews/anon.svg';
          staticReviews[i].querySelector('p').innerHTML = content;
          staticReviews[i].querySelector('b').innerHTML = sign;
          staticReviews[i].querySelector('.swiper-slide-raiting').src = `assets/stars_${score}.svg`;

        }
      }

      const ratesDivs = reviewsRatesDiv.children;
      for (let i = 0; i < 5; i++) {
        const rate = 5 - i;
        const percentage = (reviewsData.rates[rate] / reviewsData.total * 100);

        ratesDivs[i].querySelector('.score').innerHTML = (rate).toString();
        ratesDivs[i].querySelector('.rate').innerHTML = (reviewsData.rates[rate]).toString();
        ratesDivs[i].querySelector('.progress > div').style.width = percentage.toFixed() + '%';
      }

      reviewsSummaryDiv.querySelector('.avg').innerHTML = reviewsData.avg.toFixed(1);
      reviewsSummaryDiv.querySelector('.reviews-count').innerHTML = reviewsData.total;
    }

    initSwiper();
  };

  await fetchReviewsData();
  await fetchReviews();
  insertReviews();
})();
