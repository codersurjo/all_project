jQuery(document).ready(function(){
    jQuery('.button_link p').click(function(){
        jQuery('.button_link').hide();
        jQuery('.solution').slideUp();
    
    })

    jQuery(".car_items").owlCarousel({
        autoplay: false,
        loop: true,
        margin:24,
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        nav: false,
        dots:false,
        // center:true,
        responsiveClass: true,
          responsive: {
              0:{
                items: 1,
              },
              992:{
                items: 2,
              },
             1199:{
                items: 3
              }

          }
   });
})