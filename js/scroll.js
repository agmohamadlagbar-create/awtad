/**
 * Scroll Interactions: Smooth Scroll, Sticky Header & Subtle Parallax
 */

export function initScroll() {
  const header = document.querySelector('.site-header');
  const heroBg = document.querySelector('.hero-bg-media');
  const navLinks = document.querySelectorAll('a[href^="#"]');

  // 1. Sticky Header Background Transition
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // 2. Parallax on Hero Image (respects prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleParallax() {
    if (prefersReducedMotion || !heroBg) return;
    const scrollY = window.scrollY;
    if (scrollY < 1000) {
      heroBg.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    }
  }

  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    handleParallax();
  }, { passive: true });

  handleHeaderScroll();

  // 3. Smooth Scroll to Section with Header Offset
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile nav if open
        const mobileNav = document.querySelector('.mobile-nav-overlay');
        const hamburger = document.querySelector('.hamburger-btn');
        if (mobileNav && mobileNav.classList.contains('is-open')) {
          mobileNav.classList.remove('is-open');
          if (hamburger) hamburger.classList.remove('is-active');
          document.body.style.overflow = '';
        }
      }
    });
  });
}
