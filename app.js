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
        $(this).find(".plus i").stop(true,true).toggleClass('fa-plus fa-minus')
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
    
    $(".tab-button-new").click(function() {
        let tabId = $(this).attr("data-tab");

        $('.tab-button-new').each(function( ) {
            if($(this).hasClass('active-btn')){
                $(this).removeClass('active-btn')
            }
        });
        if($(this).hasClass('active-btn')){
            $(this).removeClass('active-btn')
        } else {
            $(this).addClass('active-btn')
        }

        $(".new-tab").removeClass("active-tab");

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


    $(".animated-progress span").each(function () {
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
          },
          1000
        );
        // $(this).text($(this).attr("data-progress") + "%");
      });


      $('.portfolio-img').hover(function() {
        $(this).find('.image-overlay-1').stop(true,true).css({"visibility":"visible"}).animate({"opacity": "1"},400);
        $(this).find('.image-overlay-1 h5').stop(true,true).css({"transform":"scale(1)"}).animate({"opacity": "1"},400);
        $(this).find('.image-overlay-1 .link').stop(true,true).animate({"opacity": "1","left":"33%"},400);
        $(this).find('.image-overlay-1 .zoom').stop(true,true).animate({"opacity": "1","right":"33%"},400);

    
    }, function() {
        $(this).find('.image-overlay-1').stop(true,true).animate({"opacity": "0"},400);
        $(this).find('.image-overlay-1 h5').stop(true,true).css({"transform":"scale(0)"}).animate({"opacity": "0"},400);
        $(this).find('.image-overlay-1 .link').stop(true,true).animate({"opacity": "0","left":"0"},400);
        $(this).find('.image-overlay-1 .zoom').stop(true,true).animate({"opacity": "0","right":"0"},400);


    });


      $('.staff-box').hover(function() {
        $(this).find('.dt-sc-image-overlay').stop(true,true).css({"visibility":"visible"}).animate({"opacity": "1"},400);
        $(this).find('.dt-sc-image-overlay a.link').stop(true,true).animate({"left": "32%"},400);
        $(this).find('.dt-sc-image-overlay a.zoom').stop(true,true).animate({"right": "32%"},400);
        $(this).find('.staff-details h4').stop(true,true).css({"color":"rgba(24, 151, 163, 0.9)"}).animate({"opacity":"1"},400);

    
    }, function() {
        $(this).find('.dt-sc-image-overlay').stop(true,true).css({"visibility":"hidden"}).animate({"opacity": "0"},400);
        $(this).find('.dt-sc-image-overlay a.link').stop(true,true).animate({"left": "0"},400);
        $(this).find('.dt-sc-image-overlay a.zoom').stop(true,true).animate({"right": "0"},400);
        $(this).find('.staff-details h4').stop(true,true).css({"color":"#343a40"}).animate({"opacity":"1"},400);




    });

    $(".play-box").hover(function(){
        $(this).find('.play-heading h4 a').stop(true,true).css({"color":"yellow"}).animate({"opacity":"1"},400);
        $(this).find('.play-heading .icon').stop(true,true).css({"border-color":"rgb(0 140 153 / 59%)"}).animate({"opacity":"1"},400);
    },function(){
        $(this).find('.play-heading h4 a').stop(true,true).css({"color":"#fff"}).animate({"opacity":"1"},400);
        $(this).find('.play-heading .icon').stop(true,true).css({"border-color":"#fff"}).animate({"opacity":"1"},400);

    })


    $(".portfolio-filter-item").hover(function(){
        $(this).find('.portfolio-thumb .image-overlay-2').stop(true,true).css({"visibility":"visible"}).animate({"opacity":"1"},400);
        $(this).find('.portfolio-thumb .image-overlay-2 a.link').stop(true,true).animate({"left":"30%"},400);
        $(this).find('.portfolio-thumb .image-overlay-2 a.zoom').stop(true,true).animate({"right":"30%"},400);
    },function(){
        $(this).find('.portfolio-thumb .image-overlay-2').stop(true,true).css({"visibility":"hidden"}).animate({"opacity":"0"},400);
        $(this).find('.portfolio-thumb .image-overlay-2 a.link').stop(true,true).animate({"left":"0"},400);
        $(this).find('.portfolio-thumb .image-overlay-2 a.zoom').stop(true,true).animate({"right":"0"},400);

    })

    


})