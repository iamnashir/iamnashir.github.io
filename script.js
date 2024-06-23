$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('#mobile-menu').css('left', '0');
    });

    $('#close-btn').click(function() {
        $('#mobile-menu').css('left', '-100%');
    });

    // Close the sidebar when clicking outside of it
    $(window).click(function(e) {
        if ($(e.target).is('#mobile-menu')) {
            $('#mobile-menu').css('left', '-100%');
        }
    });
});