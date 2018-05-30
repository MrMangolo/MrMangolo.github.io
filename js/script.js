$(document).ready(function() {

    /* Navbar Color Transition */
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    /* Lightbox Hook Up */
    $('a').nivoLightbox();

});
