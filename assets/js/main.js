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

// Vanilla JavaScript Code for Fact Counter
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".fact-counter");

    function getRandomChar() {
        // const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //this line is for the randomize chars
        const chars = "+-/*%kM";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    function startCounting(counter) {
        const countTo = parseInt(counter.getAttribute("data-count"), 10);
        const finalText = counter.getAttribute("data-text").split("");
        let currentCount = 0;
        let randomText = Array(finalText.length).fill("").map(() => getRandomChar());

        // Randomize numbers and text for 2 seconds
        const randomInterval = setInterval(() => {
            counter.innerText = `${Math.floor(Math.random() * countTo)} ${randomText.join("")}`;
            randomText = randomText.map(() => getRandomChar()); // Randomize each letter
        }, 50);

        // After 2 seconds, clear interval and start revealing final text and count
        setTimeout(() => {
            clearInterval(randomInterval);
            
            // Smooth transition to the final count
            const finalInterval = setInterval(() => {
                currentCount += Math.ceil(countTo / 50);
                counter.innerText = `${currentCount > countTo ? countTo : currentCount} ${randomText.join("")}`;

                if (currentCount >= countTo) {
                    clearInterval(finalInterval);
                }
            }, 20);

            // Reveal final text letters one by one
            let revealIndex = 0;
            const textRevealInterval = setInterval(() => {
                if (revealIndex < finalText.length) {
                    randomText[revealIndex] = finalText[revealIndex]; // Reveal one letter at a time
                    counter.innerText = `${countTo} ${randomText.join("")}`;
                    revealIndex++;
                } else {
                    clearInterval(textRevealInterval);
                }
            }, 100); // Adjust speed for revealing letters
        }, 2000);
    }

    // Set up IntersectionObserver to trigger counting each time it enters the view
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting(entry.target); // Start counting each time it's in view
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each counter
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init(); // Initialize AOS
});


// Service Filter using Isotope JS
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
    