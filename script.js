$(document).ready(function() {
    // Handle contact form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        const formData = $(this).serialize();

        // Log the form data to the console (or send to a server)
        console.log('Form data:', formData);

        // Optionally show a success message
        alert('Thank you for your message!');

        // Reset the form
        $(this).trigger('reset');
    });
});