$(document).ready(function() {
    // Infinite loop for certificates carousel
    setInterval(function() {
        $('.certificates-carousel').animate({ marginLeft: '-=220px' }, 1000, function() {
            $(this).find('.certificate-card:first').appendTo($(this));
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
    
    document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    function addAnimationClass() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(function (item) {
            if (isInViewport(item)) {
                item.classList.add('animate');
            }
        });
    }
    window.addEventListener('scroll', addAnimationClass);
    window.addEventListener('resize', addAnimationClass);
    addAnimationClass(); // Initial check on page load
});

    document.addEventListener('DOMContentLoaded', function () {
    function animateHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        const heroImage = document.querySelector('.hero-image');

        heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
        heroDescription.classList.add('animate__animated', 'animate__fadeInUp');
        heroImage.classList.add('animate__animated', 'animate__zoomIn');
    }

    animateHeroContent(); // Initial animation on page load
});

    //mobile menu 
    document.getElementById('open-menu-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('active');
});

document.getElementById('mobile-menu').addEventListener('click', function(event) {
    if (event.target === this) {
        document.getElementById('mobile-menu').classList.remove('active');
    }
});


});