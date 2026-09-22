/**
 * Scroll Interactions: Header transitions, subtle parallax & progress updates
 */

export function initScroll() {
  const header = document.querySelector('.site-header');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Header styling
    if (header) {
      if (scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }

    // Parallax on active hero background
    if (!prefersReducedMotion && scrollY < 1200) {
      const heroBg = document.querySelector('.hero-bg-media, .page-hero-bg');
      if (heroBg) {
        heroBg.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0)`;
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
