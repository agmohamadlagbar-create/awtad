/**
 * Animations: IntersectionObserver Reveals, Animated Counters, Category Filter
 */

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll-triggered Reveal Animations
  const revealItems = document.querySelectorAll('.reveal-item');
  if (revealItems.length > 0) {
    if (prefersReducedMotion) {
      revealItems.forEach(el => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealItems.forEach(item => revealObserver.observe(item));
    }
  }

  // 2. Animated Number Counters in Statistics Section
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    statNumbers.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeOut;

        if (isDecimal) {
          counter.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
        } else {
          counter.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `${prefix}${target}${suffix}`;
        }
      }

      if (prefersReducedMotion) {
        counter.textContent = `${prefix}${target}${suffix}`;
      } else {
        requestAnimationFrame(updateCounter);
      }
    });
  }

  const statsSection = document.getElementById('statistics');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  // 3. Category Filter Buttons in Section 03 (Product Catalog)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-item-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      catalogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
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
