// Responsive Navigation
function setupResponsiveNav() {
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(hamburger);

    function toggleNav() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }

    hamburger.addEventListener('click', toggleNav);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
}

// Responsive Image Loading
function handleResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        const src = window.innerWidth >= 768 ? 
            img.dataset.srcDesktop : 
            img.dataset.srcMobile;
        img.src = src;
    });
}

// Dynamic Content Adjustment
function adjustContentLayout() {
    const containers = document.querySelectorAll('.content-container');
    containers.forEach(container => {
        if (window.innerWidth < 768) {
            container.classList.add('mobile-view');
        } else {
            container.classList.remove('mobile-view');
        }
    });
}

// Mobile-Friendly Table Handling
function makeTablesResponsive() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (window.innerWidth < 600) {
            table.classList.add('responsive-table');
        } else {
            table.classList.remove('responsive-table');
        }
    });
}

// Form Validation Enhancement
function enhanceFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('input', (e) => {
            const input = e.target;
            if (input.validity.valid) {
                input.classList.remove('invalid');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
            }
        });
    });
}

// Smooth Scroll Behavior
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Mobile Viewport Height Fix
function adjustViewportHeight() {
    const setHeight = () => {
        document.documentElement.style.setProperty(
            '--vh', 
            `${window.innerHeight * 0.01}px`
        );
    };
    window.addEventListener('resize', setHeight);
    setHeight();
}

// Back to Top Button
function addBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 500 ? 'block' : 'none';
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    setupResponsiveNav();
    handleResponsiveImages();
    adjustContentLayout();
    makeTablesResponsive();
    enhanceFormValidation();
    enableSmoothScroll();
    adjustViewportHeight();
    addBackToTop();
});

// Debounced resize handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        handleResponsiveImages();
        adjustContentLayout();
        makeTablesResponsive();
    }, 250);
});