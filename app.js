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
    $(".product-box").hover(function(){
        $(this).find(".image-overlay").stop(true, true).fadeIn("fast");
    }, function(){
        $(this).find(".image-overlay").stop(true, true).fadeOut("fast");
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

    $(".tab-button").click(function() {
        let tabId = $(this).attr("data-tab");

        $('.tab-button').each(function( ) {
            if($(this).hasClass('active-btn')){
                $(this).removeClass('active-btn')
            }
        });
        if($(this).hasClass('active-btn')){
            $(this).removeClass('active-btn')
        } else {
            $(this).addClass('active-btn')
        }

        $(".tab").removeClass("active-tab");

        $("#" + tabId).addClass("active-tab");
    });


    $(".faq .answer").hide();

    // Show the first answer by default
    $(".faq .answer:first").show();

    // Toggle answer visibility when clicking a question
    $(".faq .question").click(function() {
        // Hide all answers
        $(".faq .answer").stop(true,true).slideUp("slow");

        // Show the clicked question's answer
        $(this).next(".answer").stop(true,true).slideDown("fast");
    });
    $(".faq1 .answer").hide();

    // Show the first answer by default
    $(".faq1 .answer:first").show();

    // Toggle answer visibility when clicking a question
    $(".faq1 .question").click(function() {
        // Hide all answers
        $(".faq1 .answer").stop(true,true).slideUp('slow');

        // Show the clicked question's answer
        $(this).next(".answer").stop(true,true).slideDown("fast");
    });

    $('.filter').on('click', function() {
        var selectedCategory = $(this).data('filter');
        if (selectedCategory === 'all') {
          $('.item').stop().fadeOut('slow');
        $('.item').stop().fadeIn('slow');
            $('.load').fadeOut('slow')
        } else {
            $('.item').stop().fadeOut('slow');
            $('.item[data-category="' + selectedCategory + '"]').stop().fadeIn('slow');
        }
        $( '.filter' ).each(function( ) {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }
    });

    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
        
        

    });


    


})