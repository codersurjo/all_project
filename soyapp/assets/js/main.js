jQuery(document).ready(function(){

 jQuery('.icon_toggle').click(function(){
 	jQuery('.all_menu').slideToggle();
 })


 $(".all_test").owlCarousel({
	      autoplay: true,
	      loop: true,
	      margin: 30,
	      // animateOut: 'fadeOut',
	      // animateIn: 'fadeIn',
	      autoplayTimeout: 7000,
	      smartSpeed: 800,
	      nav: false,
	      dots:false,
	      center:true,
	      responsive: {
		    0: {
		      items: 1
		    },

		    500: {
		      items: 2,
		      center:false,
		    },

		    992: {
		      items: 3
		    },
		  }
		 });


 		jQuery('.prev').click(function(){
	        jQuery('.all_test').trigger('prev.owl.carousel');
	            return false ;
	     });
	            
	            
	    jQuery('.next').click(function(){       
	        jQuery('.all_test').trigger('next.owl.carousel');
	        return false ;          
	    });
})