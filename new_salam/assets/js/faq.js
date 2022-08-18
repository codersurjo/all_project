$(document).ready(function(){

    $('#expand').on('click', function(){
        $('.card-header').removeClass('collapsed');
        $('.collapse').addClass('show');
        $(".card-header").attr("aria-expanded","true");
    });

    $('#collapse').on('click', function(){
        $('.card-header').addClass('collapsed');
        $('.collapse').removeClass('show');
        $(".card-header").attr("aria-expanded","false");
    });








    
    // $('#expand').on('click', function(){
    //     $('.collapse').addClass('show');
    //     $('.faq-icon-tri').addClass('rotate');
    //     $('.card').addClass('heading-bg');
    //     $('.card-header').addClass('heading-bg');
    // });

    // $('#collapse').on('click', function(){
    //     $('.collapse').removeClass('show');
    //     $('.faq-icon-tri').removeClass('rotate');
    //     $('.card').removeClass('heading-bg');
    //     $('.card-header').removeClass('heading-bg');
    // });

});