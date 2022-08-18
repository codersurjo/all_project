jQuery(document).ready(function () {
    // Mobile Dropdown Menu
    $('.arrow_class').click(function () {
        $('.sub-menu').slideToggle(300);
         return false;
    });
    
    $( '.dropdown-toggle' ).click( function( e ) {
        var _this = $( this );
        e.preventDefault();
        _this.toggleClass( 'toggle-on' );
        _this.parent().next( '.sub-menu' ).slideToggle();
        _this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
    } );

    $('.bar').click(function(){
        $('.menu_area').toggleClass('t_gogle')
    })

    // popup

     $('.video_popup').magnificPopup({
         type: 'iframe',
    });
});

