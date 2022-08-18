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
  


// Mixit up

    $(function(){
      $(".fav_bottom").mixItUp({
        selectors: {
          target: ".example-item" // As in mixitup
        },
        layout: {
          display: "inline-block" // As in mixitup
        },
        loadmore: {
          // The number of items to start with
          initial: 15,
          // The number of items to load on click on the loadmore button
          loadMore:5,
          // A selector string for the existing wrapper the buttons will be inserted into
          buttonWrapper: ".loadmore",
          // The class of the Load more button
          buttonClass: "loadmore-button",
          // The label of the Load more button
          buttonLabel: "Load more",
          // The class of the less button
          lessClass: "loadmore-less",
          // The label of the less button
          lessLabel: "Reset"
        }
      });
    });
    

    $(function () {
    $(".single_m_area").slice(0,5).show();
    $("body").on('click touchstart', '.load-more', function (e) {
      e.preventDefault();
      $(".single_m_area:hidden").slice(0, 1).slideDown();
      if ($(".single_m_area:hidden").length == 0) {
        $(".load-more").css('visibility', 'hidden');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
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




	jQuery('#prev').click(function(){
        jQuery('.all_image').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('#next').click(function(){       
        jQuery('.all_image').trigger('next.owl.carousel');
        return false ;          
    });

    jQuery(".slider_image").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      items:1,
    });

    jQuery(".slide_con_ap").owlCarousel({
      autoplay: false,
      loop: true,
      margin: 0,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsiveClass: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      dots:false,
      items:1,
    });
    
   
  jQuery('#prev1').click(function(){
        jQuery('.slide_con_ap').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('#next1').click(function(){       
        jQuery('.slide_con_ap').trigger('next.owl.carousel');
        return false ;          
    });



    // ==== scroll =====
    // jQuery('.html5lightbox').click(function(){       
    //     jQuery('body').addClass('overflow');
    // });

    //  jQuery('.html5lightbox').click(function(){      
    //     jQuery('body').addClass('overflow');
    // });
    //  jQuery('#html5box-html5-lightbox').click(function(){      
    //     jQuery('body').removeClass('overflow');
    // });
 

    //end scroller
})
