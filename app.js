$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('.my-navbar'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 95) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
   
    $('#carousel-1').carousel({
        interval: 8000,
        wrap: true,
        keyboard: true
    });


})