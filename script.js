$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('#mobile-menu').removeClass('hidden');
    });

    $('#close-btn').click(function() {
        $('#mobile-menu').addClass('hidden');
    });

    // Close the sidebar when clicking outside of it
    $(window).click(function(e) {
        if ($(e.target).is('#mobile-menu')) {
            $('#mobile-menu').addClass('hidden');
        }
    });
});