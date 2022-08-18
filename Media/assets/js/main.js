jQuery(document).ready(function(){

  // Mobile menu
  // jQuery('.toggle').click(function(){
  //   jQuery('.mobile_menu').slideToggle();
  // })

    jQuery('.toggle').click (function(){
      jQuery(this).toggleClass('open');
      jQuery('.mobile_menu').slideToggle();
    });



  // Scroll function
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 65
      }, 1000);
      return false;
      }
    }
    });
  });

jQuery(window).scroll(function() {
    var scrollDistance = jQuery(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    jQuery('nav').fadeIn("fast");
    //} else {
    //    jQuery('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    jQuery('.page-section').each(function(i) {
        if (jQuery(this).position().top <= scrollDistance) {
            jQuery('.main_menu a.active').removeClass('active');
            jQuery('.main_menu a').eq(i).addClass('active');
        }
    });
}).scroll();




// End Scroll function

// Stricky menu
jQuery(document).ready(function(){
  
var menu = document.querySelector('.header_area_design');
var origTopCoordinateMenu = menu.offsetTop;


function scroll () {
  if (jQuery(window).scrollTop() >=1) {
    jQuery('.header_area_design').addClass('sticky');
     $('.banner_area_design').addClass('menu-padding');
  } else {
    jQuery('.header_area_design').removeClass('sticky');
     $('.banner_area_design').removeClass('menu-padding');
  }  
  
  
}

document.onscroll = scroll;

});
// End Stricky menu


// Owl carewasel 
    var bigimage = jQuery("#big");
  var thumbs = jQuery("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    smartSpeed: 1000,
    nav: false,
    autoplay: false,
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    // navText: [
    //   '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    //   '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    // ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 3,
    dots: false,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 1000,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100,
     responsive: {
      0: {
        items: 1
      },

      575: {
        items: 2
      },

      992: {
        items: 3
      },

     
    }
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });

  // Emd Owl carewasel



})