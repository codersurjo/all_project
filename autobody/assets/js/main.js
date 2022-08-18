jQuery(document).ready(function() {

    jQuery(".all_review_con").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 0,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        items: 1,
        nav: false,
        dots: false,
    });
    jQuery('.prev').click(function() {
        jQuery('.all_review_con').trigger('prev.owl.carousel');
        return false;
    });


    jQuery('.next').click(function() {
        jQuery('.all_review_con').trigger('next.owl.carousel');
        return false;
    });

});