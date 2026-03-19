/* ============================================
   ISABELLE THUREAU — Main JS v2
   ============================================ */

// Mobile Navigation
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');

function toggleNav() {
  const open = mainNav.classList.toggle('open');
  navOverlay.classList.toggle('open', open);
  hamburgerBtn.classList.toggle('open', open);
  hamburgerBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', toggleNav);
}
if (navOverlay) {
  navOverlay.addEventListener('click', toggleNav);
}

// Scroll: header style
const siteHeader = document.getElementById('siteHeader');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// Scroll animations with IntersectionObserver
const animatedEls = document.querySelectorAll('[data-animate]');
if (animatedEls.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedEls.forEach(el => observer.observe(el));
}
