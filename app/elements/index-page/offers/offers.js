const offersSlider = new Swiper($('[data-slider="offers"]'), {
  speed: 400,
  slidesPerView: 3,
  simulateTouch: false,
  spaceBetween: 10,
  breakpoints: {
    1103: {
      slidesPerView: 1,
      simulateTouch: true
    }
  }
});