// Script para animações e interações

// Função para animação de fade-in ao rolar
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.servico, .plano, .depoimento');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Função para scroll suave nos links do menu
function smoothScroll() {
    const links = document.querySelectorAll('nav a[href^="#"]');
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

// Inicializar funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    fadeInOnScroll();
    smoothScroll();
});

// Função para animar header conforme o scroll
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    const header = document.querySelector('header');
    if (scrollY > 10) {
        let translateY = Math.min(scrollY - 50, header.offsetHeight); // subir até a altura do header
        header.style.transform = `translateY(-${translateY}px)`;
    } else {
        header.style.transform = 'translateY(0)';
    }
});