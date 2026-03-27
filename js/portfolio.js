// Animação ao rolar
function fadeInOnScroll() {
  const elements = document.querySelectorAll(
    ".fade-in, .projeto-card, .processo-card, .diferencial-card, .stat-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
}

// Scroll suave para links internos
function smoothScroll() {
  const links = document.querySelectorAll('nav a[href^="#"], .btn-primary[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Animação do header
function hideHeaderOnScroll() {
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const header = document.querySelector("header");

    if (!header) return;

    if (scrollY > 10) {
      let translateY = Math.min(scrollY - 50, header.offsetHeight);
      header.style.transform = `translateY(-${translateY}px)`;
    } else {
      header.style.transform = "translateY(0)";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fadeInOnScroll();
  smoothScroll();
  hideHeaderOnScroll();
});