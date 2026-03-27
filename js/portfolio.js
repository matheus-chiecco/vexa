// Animação ao rolar
function fadeInOnScroll() {
    const elements = document.querySelectorAll(
        '.fade-in, .stat-card, .projeto-card, .processo-card, .diferencial-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Scroll suave apenas para links internos da própria página
function smoothScroll() {
    const links = document.querySelectorAll('nav a[href^="#"], .hero-buttons a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fadeInOnScroll();
    smoothScroll();

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.querySelectorAll('#menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            const clickedOutsideMenu = !menu.contains(e.target);
            const clickedOutsideToggle = !menuToggle.contains(e.target);

            if (menu.classList.contains('active') && clickedOutsideMenu && clickedOutsideToggle) {
                menuToggle.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
});

// Header sobe no scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');

    if (!header) return;

    if (scrollY > 10) {
        const translateY = Math.min(scrollY - 50, header.offsetHeight);
        header.style.transform = `translateY(-${translateY}px)`;
    } else {
        header.style.transform = 'translateY(0)';
    }
});