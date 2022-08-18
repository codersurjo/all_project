$(document).ready(function(){
	// mobile menu
	$('.menu_btn a').click(function(){
		$('.menu_area ul').slideToggle();
	});
	$('.menu_area ul li a').click(function(){
        $('.menu_area ul').hide();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top
        },1000);
        return false;
       });
	// owl-carousel 
	  $(".client_single_item").owlCarousel({
	  	items: 3,
	  	margin: 10,
	  	loop: true,
	  	nav: true,
	  	navText: ['<i class="far fa-chevron-left"></i>','<i class="far fa-chevron-right"></i>'],
	  	dots: false,
	  	autoplay: false,
	  	responsive:{
	        0:{
	            items:1,
	            nav: false,
	            autoplay: true,
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    },

	  });

	  // owl-carousel portfolio design
	  $(".right_company_img").owlCarousel({
	  	items: 2,
	  	margin: 10,
	  	loop: true,
	  	nav: false,
	  	dots: true,
	  	autoplay: false,
	  	responsive:{
	        0:{
	            items:1,
	            autoplay: true,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:2,
	            dots:true,
	        }
	    },

	  });

	  

});