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

    $('.testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.sponser').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


})