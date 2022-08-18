$(document).ready(function(){


  
  $('li.dropdown > a').on('click',function(event){
    
    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('ul').first().toggle(300);
    
    $(this).parent().siblings().find('ul').hide(200);
    
    //Hide menu when clicked outside
    $(this).parent().find('ul').parent().mouseleave(function(){ 
      var thisUI = $(this);
      $('html').click(function(){
        thisUI.children(".dropdown-menu").hide();
    thisUI.children("a").removeClass('selected');
               
        $('html').unbind('click');
      });
    });
    
    
  });
  

 
  

$('.nobile_bar').click(function() {
      $('.mobile_menu_area').slideToggle(500);
});

	$('.fa-search').click(function() {
	    $('.search_form').slideDown(500);
	});

	$('.times').click(function() {
	    $('.search_form').slideUp(500);
	});

	$('.search').click(function() {
	    $('.search_form1').slideDown(500);
	});

	$('.times1').click(function() {
	    $('.search_form1').slideUp(500);
	});
  





  jQuery(".banner_img").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      responsive: {
        0: {
          items: 1
        },

        450: {
          items: 2
        },

        576: {
          items: 3
        },

        768: {
          items: 3
        },
        992:{
          items:3
        }

      }
    });


	 jQuery(".all_image").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      responsive: {
        0: {
          items: 1
        },

        450: {
          items: 2
        },

        576: {
          items: 3
        },

        768: {
          items: 4
        },
        992:{
          items:5
        }

      }
    });

   jQuery(".image_area").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      responsive: {
        0: {
          items: 1
        },

        450: {
          items: 2
        },

        576: {
          items: 3
        },

        768: {
          items: 3
        },
        992:{
          items:3
        }

      }
    });



	jQuery('#prev').click(function(){
        jQuery('.all_image').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('#next').click(function(){       
        jQuery('.all_image').trigger('next.owl.carousel');
        return false ;          
    });


    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });


    // ==== scroll =====
    // jQuery('.html5lightbox').click(function(){       
    //     jQuery('body').addClass('overflow');
    // });

    //   jQuery('#html5box-html5-lightbox').click(function(){      
    //     jQuery('body').addClass('overflow');
    // });
    //  jQuery('#html5box-html5-lightbox').click(function(){      
    //     jQuery('body').removeClass('overflow');
    // });
 

    //end scroller
})
