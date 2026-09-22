/**
 * Awtad Al Khaleej — Modular Industrial Animation System
 * Implements 17 tailored animations:
 * 1. Cinematic Hero Load
 * 2. Hero Image Clip-Path Reveal
 * 3. Scroll Section Reveal
 * 4. Staggered Card Entrance
 * 5. Button Hover
 * 6. Button Click
 * 7. Product Card Hover
 * 8. Industrial Image Hover
 * 9. Section Heading Animation
 * 10. Numbers Counter
 * 11. Navbar Scroll Transform
 * 12. Navbar Link Underline
 * 13. Page Transition
 * 14. Contact Form Field Reveal
 * 15. Form Focus
 * 16. Steel-Line Sweep
 * 17. Scroll Progress Bar
 */

let activeObservers = [];
let isNavbarScrollBound = false;
let isScrollProgressBound = false;

export function initAnimations() {
  bindGlobalScrollEffects();
  reinitForPage(window.location.pathname);
}

/**
 * Re-run all observers and triggers on newly mounted page content
 */
export function reinitForPage(pathname = '/') {
  // Clear previous observers
  activeObservers.forEach((obs) => obs.disconnect());
  activeObservers = [];

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeroLoad(prefersReduced);
  initScrollReveals(prefersReduced);
  initStaggerDelays();
  initFormReveals(prefersReduced);
  initCounters(prefersReduced);
  initCatalogFilters();
  initFaqAccordion();
  initPrivacyTocSpy();
}

/**
 * Global Scroll Effects: 11. Navbar Scroll Transform & 17. Scroll Progress Bar
 */
function bindGlobalScrollEffects() {
  const header = document.getElementById('header');
  const progressBar = document.getElementById('scroll-progress');

  if (!isScrollProgressBound && progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    isScrollProgressBound = true;
  }

  if (!isNavbarScrollBound && header) {
    const updateNavbar = () => {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
    isNavbarScrollBound = true;
  }
}

/**
 * 1. Cinematic Hero Load & 2. Hero Image Clip-Path Reveal
 */
function initHeroLoad(prefersReduced) {
  const heroSection = document.querySelector('.hero-section, .page-hero');
  if (!heroSection) return;

  if (prefersReduced) {
    heroSection.classList.add('hero-loaded');
    document.querySelectorAll('.hero-load-item').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Trigger hero animation sequence
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroSection.classList.add('hero-loaded');
    }, 50);
  });
}

/**
 * 3. Scroll Section Reveal & 9/16. Steel-Line Sweep
 */
function initScrollReveals(prefersReduced) {
  const revealElements = document.querySelectorAll('.reveal-item, .reveal-left, .reveal-right');
  if (revealElements.length === 0) return;

  if (prefersReduced) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Trigger any internal steel line sweep
          const lines = entry.target.querySelectorAll('.steel-line-sweep');
          lines.forEach((l) => l.classList.add('swept'));
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => observer.observe(el));
  activeObservers.push(observer);
}

/**
 * 4. Staggered Card Entrance calculation
 */
function initStaggerDelays() {
  const grids = document.querySelectorAll(
    '.capability-grid, .values-grid, .advantage-grid, .contact-cards-grid, .catalog-grid'
  );

  grids.forEach((grid) => {
    const items = grid.querySelectorAll('.stagger-item, .card-interactive');
    items.forEach((item, index) => {
      if (!item.style.getPropertyValue('--stagger-index')) {
        item.style.setProperty('--stagger-index', index + 1);
      }
    });
  });
}

/**
 * 14. Contact Form Field Reveal
 */
function initFormReveals(prefersReduced) {
  const formGroups = document.querySelectorAll('.form-reveal-group');
  if (formGroups.length === 0) return;

  if (prefersReduced) {
    formGroups.forEach((form) => form.classList.add('form-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('form-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  formGroups.forEach((form) => observer.observe(form));
  activeObservers.push(observer);
}

/**
 * 10. Numbers Counter (Home page statistics)
 */
function initCounters(prefersReduced) {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length === 0) return;

  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    statNumbers.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;

      if (prefersReduced) {
        counter.textContent = `${prefix}${target}${suffix}`;
        return;
      }

      const duration = 2000;
      const startTime = performance.now();

      function tick(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Signature cubic bezier ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * ease;

        if (isDecimal) {
          counter.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
        } else {
          counter.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = `${prefix}${target}${suffix}`;
        }
      }

      requestAnimationFrame(tick);
    });
  }

  const statsSection = document.getElementById('statistics');
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(statsSection);
    activeObservers.push(observer);
  } else {
    runCounters();
  }
}

/**
 * Category Filter (Homepage Section 03)
 */
function initCatalogFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-item-card');
  if (filterButtons.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      catalogCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * FAQ Accordion Toggles (Contact Page)
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-question-btn');
  if (faqButtons.length === 0) return;

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close all other items for clean single-accordion feel
      document.querySelectorAll('.faq-item').forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Privacy Policy TOC Spy
 */
function initPrivacyTocSpy() {
  const tocLinks = document.querySelectorAll('#policy-toc a');
  const articles = document.querySelectorAll('.policy-article[id]');
  if (tocLinks.length === 0 || articles.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-15% 0px -70% 0px',
      threshold: 0
    }
  );

  articles.forEach((art) => observer.observe(art));
  activeObservers.push(observer);
}
