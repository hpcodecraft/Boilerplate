$(function(){
  // make media clickable
  $('.medium').click(function(){
    $('#title').html($(this).find('.title').html());
    $('#creator').html($(this).find('.creator').html());
    $('#description').html($(this).find('.description').html());
    $('#rating').html($(this).find('.rating').html());
    $('#details_outer').show();
  });

  // hide page navigation if there's only one page
  if( $('.pages:first').children().length == 1 ) {
    $('.crumbs').hide();
  }

  // initialize
  $('#details_outer').click(function(){
    $(this).hide();
  });
});