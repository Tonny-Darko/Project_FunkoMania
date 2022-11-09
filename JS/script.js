new Swiper('.image-slider', {
  navigation: {
    nextEl:'.image-slider__arrows.swiper-button-next',
    prevEl:'.image-slider__arrows.swiper-button-prev'
  },
  // slidesPerView: 5,
  spaceBetween: 59,
  mousewheel:{
    sensitivity: 1,
  },
  // slidesPerGroup: 5,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    789: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  }
});