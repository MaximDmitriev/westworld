const toggleBtn = $('.filter__btn-list'),
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

toggleBtn.click(function() {
  
  if (btnTxt.textContent.trim() === 'Посмотреть списком') {
    mapIcon.removeClass('hide');
    listIcon.addClass('hide');
    itemsList.removeClass('hide');
    pagination.removeClass('hide');
    item.addClass('hide');
    btnTxt.textContent = 'Посмотреть на карте';
  }
  else {
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

