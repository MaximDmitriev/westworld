// let Swiper = require('swiper');


let mySwiper = new Swiper($('[data-attribute="sw__big"]'), {
  speed: 1400,
  spaceBetween: 0,
  slidesPerView: 'auto',
  slidesOffsetBefore: 390,
  mousewheel: {
    invert: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 487,
  },
  breakpoints: {
    1103: {
      slidesOffsetBefore: 30,
      scrollbar: {
        dragSize: 287,
      }
    },
    767: {
      slidesOffsetBefore: 0, 
      scrollbar: {
        dragSize: 87,
      }
    }
  }

});

