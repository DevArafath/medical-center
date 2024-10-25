// Owl Carousel for Hero Slider
$(document).ready(function() {
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
		autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {},
            600: {},
            1000: {}
        }
    });

    // Scroll event to add class to navbar and set active link
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop(); // Get current scroll position
        var navbar = $('.navbar'); // Select the navbar

        // Add/remove the 'scrolled' class based on scroll position
        if (navbar.length) { // Ensure navbar exists
            if (scrollPosition > 50) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }
        }

        // Check each section to set the active link
        $('.nav-link').each(function() {
            var target = $(this).attr('href'); // Get the target section id from link
            var section = $(target); // Select the target section

            if (section.length) { // Ensure the section exists
                var sectionTop = section.offset().top; // Get the top position of the section
                var sectionHeight = section.outerHeight(); // Get the height of the section

                // Check if the scroll position is within the section
                if (scrollPosition >= sectionTop - 1 && scrollPosition < sectionTop + sectionHeight) {
                    $('.nav-link').removeClass('active'); // Remove active class from all links
                    $(this).addClass('active'); // Add active class to the current link
                }
            }
        });
    });
});
