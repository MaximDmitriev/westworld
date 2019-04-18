let smallSwiper = new Swiper($('[data-attribute="sw__small"]'), {
  speed: 1000,
  spaceBetween: 5,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});