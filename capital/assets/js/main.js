$(document).ready(function(){


	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		 $('.menu_all ul ').slideToggle(500);
	});

	 jQuery(".say_car").owlCarousel({
      autoplay: false,
      loop: true,
      margin:0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      items:1,
    });




	jQuery('#prev').click(function(){
        jQuery('.say_car').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('#next').click(function(){       
        jQuery('.say_car').trigger('next.owl.carousel');
        return false ;          
    });

});