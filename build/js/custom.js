'use strict';

$('document').ready(function () {
  // let Swiper = require('swiper');


  var mySwiper = new Swiper('.swiper-container', {
    speed: 1400,
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesOffsetBefore: 390,
    // freeMode: true,
    // autoplay: {
    //   delay: 2000,
    // },
    mousewheel: {
      invert: false
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 487
      // dragClass: 'slider__srollbar-item'
    }
  });

  var toggleBtn = $('.filter__btn-list'),
      listIcon = $('.icon-hamburger'),
      mapIcon = $('.icon-object_label'),
      btnTxt = $('.filter__btn-text')[0],
      itemsList = $('.alike'),
      pagination = $('.select-pagination'),
      item = $('.select-item');

  console.log(itemsList);

  mapIcon.addClass('hide');
  itemsList.addClass('hide');
  pagination.addClass('hide');
  // item.addClass('hide');

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
});