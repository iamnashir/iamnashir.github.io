$(document).ready(function() {
    // Toggle mobile menu
    $('.navbar-toggler').click(function() {
        $('#mobile-menu').toggleClass('show');
    });

    // Close mobile menu
    $('#close-btn').click(function() {
        $('#mobile-menu').removeClass('show');
    });

    // Handle contact form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        const name = $('input[name="name"]').val().trim();
        const email = $('input[name="email"]').val().trim();
        const phone = $('input[name="phone"]').val().trim();
        const message = $('textarea[name="message"]').val().trim();

        if (!name || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Log the form data to the console (or send to a server)
        const formData = { name, email, phone, message };
        console.log('Form data:', formData);

        // Optionally show a success message
        alert('Thank you for your message!');

        // Reset the form
        $(this).trigger('reset');
    });

    // Add download animation
    $('.download-btn').click(function() {
        const button = $(this);
        button.addClass('downloading');

        setTimeout(() => {
            button.removeClass('downloading');
        }, 2000); // Adjust the duration as needed
    });
});