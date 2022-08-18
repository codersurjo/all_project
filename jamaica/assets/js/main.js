$(document).ready(function () {
    $('.bar1').click(function () {
        $('.mobile_menu').addClass('open');
    });
    $('.bar2').click(function () {
        $('.mobile_menu').removeClass('open');
    });
    
    $('.search1').click(function () {

        $('.search_form').slideToggle();
        
    });


    $(".all_banner_slider").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 7000,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        items: 1,
    });
    jQuery('.prev').click(function(){
        jQuery('.all_banner_slider').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('.next').click(function(){       
        jQuery('.all_banner_slider').trigger('next.owl.carousel');
        return false ;          
    });

    // Activities carewsel 
    $(".all_ac_car").owlCarousel({
        autoplay: true,
        loop: true,
        center:true,
        margin: 60,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        autoplayTimeout: 7000,
        smartSpeed: 2000,
        nav: false,
        dots: false,
        responsive:{
            0:{
                center:false,
                items:1,
            },
            575:{
                center:false,
                items:2,
                margin:30,
            },
            767:{
                center:false,
                items:3,
                margin:30,
            },
            1199:{
                center:false,
                items:4,
            }

        }
    });
    // End activities carewsel 

    // Review carewsel area design 
    $(".single_ga").owlCarousel({
        autoplay: true,
        loop: true,
        center:true,
        margin:0,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        autoplayTimeout: 7000,
        smartSpeed: 2000,
        nav: false,
        dots: true,
        items:1,
    });

    jQuery('.prev2').click(function(){
        jQuery('.single_ga').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('.next2').click(function(){       
        jQuery('.single_ga').trigger('next.owl.carousel');
        return false ;          
    });
    // End Owl carewsel area design 


})