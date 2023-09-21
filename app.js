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

    $(".my-dropdown").hover(function(){
        $(this).find(".dropdown-content").stop(true, true).slideDown("fast");
    }, function(){
        $(this).find(".dropdown-content").stop(true, true).slideUp("fast");
    });


})