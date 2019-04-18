'use strict';

$('document').ready(function () {
  // let Swiper = require('swiper');


  var mySwiper = new Swiper($('[data-attribute="sw__big"]'), {
    speed: 1400,
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesOffsetBefore: 390,
    mousewheel: {
      invert: false
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 487
    },
    breakpoints: {
      1103: {
        slidesOffsetBefore: 30,
        scrollbar: {
          dragSize: 287
        }
      },
      767: {
        slidesOffsetBefore: 0,
        scrollbar: {
          dragSize: 87
        }
      }
    }

  });

  var cadastrSlider = new Swiper($('[data-slider="cadastr"]'), {
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
  var offersSlider = new Swiper($('[data-slider="offers"]'), {
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
  var smallSwiper = new Swiper($('[data-attribute="sw__small"]'), {
    speed: 1000,
    spaceBetween: 5,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  var toggleBtn = $('.filter__btn-list'),
      listIcon = $('.icon-hamburger'),
      mapIcon = $('.icon-object_label'),
      btnTxt = $('.filter__btn-text')[0],
      itemsList = $('#list'),
      pagination = $('.select-pagination'),
      item = $('.select-item'),
      roomBtns = $('[data-attribute="number"]');

  mapIcon.addClass('hide');
  itemsList.addClass('hide');
  pagination.addClass('hide');

  toggleBtn.click(function () {

    if (btnTxt.textContent.trim() === 'Посмотреть списком') {
      mapIcon.removeClass('hide');
      listIcon.addClass('hide');
      itemsList.removeClass('hide');
      pagination.removeClass('hide');
      item.addClass('hide');
      btnTxt.textContent = 'Посмотреть на карте';
    } else {
      mapIcon.addClass('hide');
      listIcon.removeClass('hide');
      itemsList.addClass('hide');
      pagination.addClass('hide');
      item.removeClass('hide');
      btnTxt.textContent = 'Посмотреть списком';
    }
  });

  // roomBtns.click(function() {
  //   $(this).toggleClass('filter__secondary-rooms-item_checked');
  // });

});