         $(document).ready(function(){

          // Mobile menu

          $('.m_icon').click(function() {
                $('.header_menu').slideToggle(500);
          });
          // End Mobile menu
         
            var heroSlider = $('.ivySlide');
         
         
            heroSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
                if (!e.namespace)  {
                  return;
                }
                var carousel = e.relatedTarget;
                $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '-' + '0' +carousel.items().length);
              }).owlCarousel({   
               animateOut: 'fadeOut',
                  animateIn: 'fadeIn',
                  autoplayTimeout: 10000,
                  autoplay: true,
                  loop:true,
                  margin:0,
                  nav: false,
                  dots: true,
                  autoHeight: false,
                  mouseDrag: false,
                  autoplayHoverPause:false,
                  items: 1,
                  navText: [
                     "<i class=' owl-direction'><</i>",
                     "<i class='owl-direction'>></i>"
                  ]
               });
         
              $(".owl-item.active .tag").addClass('animated fadeInUp delay-1');
              $(".owl-item.active h1").addClass('animated fadeInUp delay-2');
              $(".owl-item.active .carsl_cnt").addClass('animated fadeInUp delay-3');
              $(".owl-item.active .carsl_btn").addClass('animated fadeInUp delay-4');
         
         
                $(".ivySlide").on('change.owl.carousel', function(event) {
                  
                  var item = event.item.index-2;
                  
                
                  $('.tag').removeClass('animated fadeInUp delay-1');
                  $('h1').removeClass('animated fadeInUp delay-2');
                  $('.carsl_cnt').removeClass('animated fadeInUp delay-3');
                  $('.carsl_btn').removeClass('animated fadeInUp delay-4');
                  $('.owl-item').not('.cloned').eq(item).find('.tag').addClass('animated fadeInUp delay-1');
                  $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp delay-2');
                  $('.owl-item').not('.cloned').eq(item).find('.carsl_cnt').addClass('animated fadeInUp delay-3');
                  $('.owl-item').not('.cloned').eq(item).find('.carsl_btn').addClass('animated fadeInUp delay-4');
         
         
         
                  
               });


                // image car


                  jQuery(".car_f").owlCarousel({
                    autoplay: false,
                    loop: true,
                    margin: 0,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    responsiveClass: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    nav: false,
                    dots:true,
                    items: 1,
                  });

                   jQuery(".quate").owlCarousel({
                    autoplay: false,
                    loop: true,
                    margin:0,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    responsiveClass: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    nav: false,
                    dots:true,
                    items: 1,
                    navText:['<img src="assets/images/a1.png" alt="" />','<img src="assets/images/a2.png" alt="" />'],
               });



              jQuery(".dai_c").owlCarousel({
                    autoplay: false,
                    loop: true,
                    margin:65,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    responsiveClass: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    nav: true,
                    dots:false,
                    navText:['<img src="assets/images/a1.png" alt="" />','<img src="assets/images/a2.png" alt="" />'],
                    responsiveClass: true,
                      responsive: {
                          0:{
                            items: 1,
                             margin:0,
                          },
                          575:{
                            items: 2,
                            margin:30,
                          },
                          768:{
                            items: 3,
                            margin:30,
                          },
                           992:{
                            items: 3
                          }

                      }
               });


              jQuery(".dai_car2").owlCarousel({
                    autoplay: false,
                    loop: true,
                    margin:65,
                    // animateOut: 'fadeOut',
                    // animateIn: 'fadeIn',
                    responsiveClass: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    nav: true,
                    dots:false,
                   navText:['<img src="assets/images/a1.png" alt="" />','<img src="assets/images/a2.png" alt="" />'],
                    responsiveClass: true,
                    items :1,
               });


         
              
         });
         

         // preloader
$(window).load(function(){
 $('#preloader').fadeOut('slow',function(){$(this).remove();});
});