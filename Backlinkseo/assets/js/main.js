(function($){

    jQuery(document).ready(function () {

        jQuery('.menu_icon').click(function () {

            jQuery('.header_main_menu').slideToggle();

        });





        // carewsel

       jQuery(".review").owlCarousel({

		  autoplay: true,

		  lazyLoad: true,

		  rewind: true,

		  margin: 20,
		  loop:true,

		   /*

		  animateOut: 'fadeOut',

		  animateIn: 'fadeIn',

		  */

		  responsiveClass: true,

		  autoHeight: true,

		  autoplayTimeout: 7000,

		  smartSpeed: 800,

		  nav: true,

		  dots:true,

		  responsive: {

		    0: {

		      items: 1

		    },



		    768: {

		      items: 2

		    },



		    1024: {

		      items: 3

		    },

		  }

		});



       jQuery(".case_car").owlCarousel({

		  autoplay: true,

		  lazyLoad: true,

		  rewind: true,

		  margin: 20,

		   /*

		  animateOut: 'fadeOut',

		  animateIn: 'fadeIn',

		  */

		  responsiveClass: true,

		  autoHeight: true,

		  loop:true,

		  autoplayTimeout: 7000,

		  smartSpeed: 800,

		  nav: false,

		  dots:false,

		  responsive: {

		    0: {

		      items: 1,

		    },



		    768: {

		      items: 2,

		      center:true,

		    }

		  }

		});



    });

    

 }(jQuery));

    