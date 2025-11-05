
// Mobile Menu Toggle
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Carousel functionality
const carouselStates = {};

function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        carouselStates[carousel.id] = 0;
    });
}

function changeSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const inner = carousel.querySelector('.carousel-inner');
    const slides = inner.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    carouselStates[carouselId] += direction;

    if (carouselStates[carouselId] < 0) {
        carouselStates[carouselId] = totalSlides - 1;
    } else if (carouselStates[carouselId] >= totalSlides) {
        carouselStates[carouselId] = 0;
    }

    const offset = -carouselStates[carouselId] * 100;
    inner.style.transform = `translateX(${offset}%)`;
}

// Auto-initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCarousels();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const projectsSwiper = new Swiper('.projects-swiper', {
    // Slides per view
    slidesPerView: 1,
    spaceBetween: 30,
    
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Auto height
    autoHeight: false,
    
    // Loop
    loop: true,
    
    // Autoplay (optional)
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    
    // Grab cursor
    grabCursor: true,
    
    // Speed
    speed: 600,
    
    // Effect (optional - you can try 'fade', 'cube', 'flip', 'coverflow')
    effect: 'slide',
});

window.addEventListener('load', function() {
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            setTimeout(function() {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});
