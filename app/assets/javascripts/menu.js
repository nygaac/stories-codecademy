$(document).ready(function(){
  
  //Shows the menu if the menu icon is clicked
  $('.icon-menu').click(function(){
    $('.menu').removeClass('hidden');
  });
  
  //Hides the meny if the X icon is clicked.
  $('.icon-close').click(function(){
    $('.menu').addClass('hidden');
  });
});