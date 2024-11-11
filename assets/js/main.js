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

    // Slider for Testomonials / Reviews
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 7000,   
    });

    // Scroll event to add class to navbar and set active link######################################################################################################
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

// Vanilla JavaScript Code for Fact Counter######################################################################################################
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".fact-counter");

    const updateCount = (counter) => {
        const target = +counter.getAttribute("data-count");
        const suffix = counter.getAttribute("data-text") || "";
        let count = 0;
        const increment = 5;  // Step count by 10

        const countUp = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target + suffix;
                clearInterval(countUp);
            } else {
                counter.textContent = count + suffix;
            }
        }, 100);  // Adjust interval duration to control speed More the Number is Slower Default is 20
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Adjust threshold as needed

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

//AOS Initiallizing
document.addEventListener("DOMContentLoaded", function() {
    AOS.init(); // Initialize AOS
});


// Service Filter using Isotope JS######################################################################################################
let portfolioIsotope = document.querySelector('.portfolio-isotope')

if (portfolioIsotope) {
    let portfolioFilter = portfolioIsotope.getAttribute('data-portfolio-filter') ? portfolioIsotope.getAttribute('data-portfolio-filter') : '*'
    let portfolioLayout = portfolioIsotope.getAttribute('data-portfolio-layout') ? portfolioIsotope.getAttribute('data-portfolio-layout') : 'masonry'
    let portfolioSort = portfolioIsotope.getAttribute('data-portfolio-sort') ? portfolioIsotope.getAttribute('data-portfolio-sort') : 'original-order'

    window.addEventListener('load', () => {
        let portfolio_Isotope = new Isotope(document.querySelector('.portfolio-container'), {
            itemSelector: '.portfolio-item',
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort,
        })

        let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-filter li')
        menuFilters.forEach(function (e) {
            e.addEventListener('click', function () {
                document.querySelector('.portfolio-isotope .portfolio-filter .filter-active').classList.remove('filter-active')
                this.classList.add('filter-active')
                portfolio_Isotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                AOS.refresh(); // Refresh AOS animations after filtering
            }, false);
        });
    })
}

// Define working hours for each day of the week######################################################################################################
const workingHours = [
    { day: 'Sunday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Monday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Friday', hours: 'Closed' },
    { day: 'Saturday', hours: '9:00 AM - 9:00 PM' }
];

// Get the current day index (0 = Sunday, 6 = Saturday)
const todayIndex = new Date().getDay();

// Get the container to append pills
const container = document.getElementById('working-hours');

// Loop through working hours and create a pill for each day
workingHours.forEach((item, index) => {
    const pill = document.createElement('div');
    pill.classList.add('working-hour-pill', 'btn', 'btn-primary');

    // Add 'today' class if it’s the current day
    if (index === todayIndex) {
        pill.classList.add('today');
    }

    // Add 'closed' class if the hours indicate "Closed"
    if (item.hours === 'Closed') {
        pill.classList.add('closed');
    }

    // Set the inner text to display day and hours
    pill.textContent = `${item.day}: ${item.hours}`;
    container.appendChild(pill);
});

// Get to the TOP button#####################################################################################################
const goToTopButton = document.getElementById("goToTop");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
};

// Scroll to top function
goToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
};

// Footer Image Change Based on Time of the Day
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    const hour = new Date().getHours();

    // Apply 'morning' background if between 6 AM and 6 PM, else apply 'night'
    if (hour >= 6 && hour < 18) {
        footer.classList.add("footer-morning");
    } else {
        footer.classList.remove("footer-morning");
    }
});


    