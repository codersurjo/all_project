jQuery(document).ready(function() {
    jQuery('.menu__btn').click(function() {
        jQuery('.menu_area_design').slideToggle();
    });

    // progressbar js 
    // progress bar js 
    const progress = document.querySelector('.progress-done');
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;


});