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

    // Handle contact form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        const formData = $(this).serialize();

// Log the form data to the console (or send to a server
    )
        // Optionally show a success message
    alert('Thank you for your message!');

    // Reset the form
    $(this).trigger('reset');
});