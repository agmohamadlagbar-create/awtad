/**
 * Navigation: Mobile Drawer, Active States, and Keyboard Accessibility
 */

export function initNavigation() {
  const hamburger = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  // 1. Mobile Menu Toggle
  function toggleMobileNav(forceClose = false) {
    if (!mobileNav || !hamburger) return;
    const isOpen = mobileNav.classList.contains('is-open');

    if (isOpen || forceClose) {
      mobileNav.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      mobileNav.classList.add('is-open');
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => toggleMobileNav());
  }

  // Close on Escape Key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      toggleMobileNav(true);
    }
  });

  // Close mobile nav when clicking any link inside
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileNav(true);
    });
  });

  // Also close if clicking the backdrop area of the mobile nav
  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        toggleMobileNav(true);
      }
    });
  }

  // 2. ScrollSpy (Active only on homepage when scrolling through sections)
  function updateHomepageScrollSpy() {
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      return;
    }

    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // If it's a sub-section on home, we can optionally reflect it
        const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
        desktopLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `/#${sectionId}` || (sectionId === 'hero' && href === '/')) {
            link.classList.add('active');
          } else if (href && href.startsWith('/#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateHomepageScrollSpy, { passive: true });
}
