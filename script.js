$(document).ready(function() {
    // Toggle mobile menu
    $('.navbar-toggler').on('click', function() {
        $('#mobile-menu').fadeIn();
    });

    $('#close-btn').on('click', function() {
        $('#mobile-menu').fadeOut();
    });

    // Close mobile menu on link click
    $('.mobile-nav-links a').on('click', function() {
        $('#mobile-menu').fadeOut();
    });

    // Infinite loop for certificates carousel
    setInterval(function() {
        $('.certificates-carousel').animate({ marginLeft: '-=220px' }, 1000, function() {
            $(this).find('.certificate-card:first').appendTo($(this));
            $(this).css('margin-left', '0');
        });
    }, 3000);
});