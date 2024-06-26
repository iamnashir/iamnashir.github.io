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

    // Form validation and submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var countryCode = $('#country-code').val();

        // Email validation
        var emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            $('#form-message').text('Please enter a valid Gmail address.');
            return;
        }

        // Phone number validation
        var phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
            $('#form-message').text('Please enter a valid phone number.');
            return;
        }

        // Assuming validation passes, show success message
        $('#form-message').text('Thank you for contacting me!');
        $('#form-message').fadeIn();

        // Reset the form
        $('#contact-form')[0].reset();

        // Hide the message after a few seconds
        setTimeout(function() {
            $('#form-message').fadeOut();
        }, 3000);
    });
    setInterval(function() {
        $('.skills-carousel').animate({ marginLeft: '-=220px' }, 1000, function() {
            $(this).find('.skill-card:first').appendTo($(this));
            $(this).css('margin-left', '0');
        });
    }, 3000);
    // Infinite loop for skills carousel
    setInterval(function() {
        $('.skills-carousel').animate({ marginLeft: '-=220px' }, 1000, function() {
            $(this).find('.skill-card:first').appendTo($(this));
            $(this).css('margin-left', '0');
        });
    }, 3000);
});