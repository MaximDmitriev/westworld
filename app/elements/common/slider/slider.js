// let Swiper = require('swiper');


let mySwiper = new Swiper('.swiper-container', {
  speed: 1400,
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesOffsetBefore: 390,
  // freeMode: true,
  // autoplay: {
  //   delay: 2000,
  // },
  mousewheel: {
    invert: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 487,
    // dragClass: 'slider__srollbar-item'
  }
});

