import { homePage } from './pages/home.js';
import { aboutPage } from './pages/about.js';
import { contactPage } from './pages/contact.js';
import { privacyPage } from './pages/privacy.js';

export const routes = {
  '/': {
    titleEn: 'Awtad Al Khaleej | Heavy Industrial Steel Fabrication & Engineering',
    titleAr: 'أوتاد الخليج | تصنيع وهندسة الهياكل الفولاذية الثقيلة',
    descEn: 'Precision heavy-tonnage structural steel fabrication, Tekla BIM modeling, and CNC manufacturing across the GCC.',
    descAr: 'تصنيع الهياكل الفولاذية الثقيلة فائقة الدقة، ونمذجة تكلا بيم، والتصنيع المحوسب في دول الخليج العربي.',
    template: homePage
  },
  '/about': {
    titleEn: 'Who We Are | Awtad Al Khaleej Industrial Steel',
    titleAr: 'من نحن | أوتاد الخليج للهياكل الفولاذية',
    descEn: 'Learn about Awtad Al Khaleej: heavy steel manufacturing, strict tolerances, ISO 9001 certified engineering in Saudi Arabia.',
    descAr: 'تعرف على شركة أوتاد الخليج: تصنيع الصلب الثقيل، دقة التصنيع، وهندسة معتمدة وفق ISO 9001 في المملكة العربية السعودية.',
    template: aboutPage
  },
  '/contact': {
    titleEn: 'Contact Us & RFQ Dispatch | Awtad Al Khaleej',
    titleAr: 'اتصل بنا وطلب عرض سعر | أوتاد الخليج',
    descEn: 'Get in touch with Awtad Al Khaleej sales engineering desk. Direct RFQ quotation turnaround within 24 hours.',
    descAr: 'تواصل مع المكتب الهندسي لشركة أوتاد الخليج. رد واستجابة مباشرة لعروض الأسعار خلال 24 ساعة عمل.',
    template: contactPage
  },
  '/privacy': {
    titleEn: 'Privacy Policy & Legal Data Governance | Awtad Al Khaleej',
    titleAr: 'سياسة الخصوصية وحوكمة البيانات | أوتاد الخليج',
    descEn: 'Awtad Al Khaleej privacy policy and data governance practices compliant with Saudi PDPL regulations.',
    descAr: 'سياسة الخصوصية وحوكمة البيانات لشركة أوتاد الخليج بما يتوافق مع نظام حماية البيانات الشخصية السعودي.',
    template: privacyPage
  }
};

// Aliases
routes['/privacy-policy'] = routes['/privacy'];
routes['/index.html'] = routes['/'];

let currentPath = null;
let navigationCallbacks = [];

export function registerOnNavigate(callback) {
  if (typeof callback === 'function') {
    navigationCallbacks.push(callback);
  }
}

export function getCurrentRoute() {
  return currentPath;
}

export function getRouteData(path) {
  const clean = normalizePath(path);
  return routes[clean] || routes['/'];
}

function normalizePath(pathname) {
  if (!pathname || pathname === '') return '/';
  let clean = pathname.replace(/\/+$/, '');
  if (clean === '') clean = '/';
  return clean;
}

export function initRouter() {
  // Listen for browser back / forward
  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname, window.location.hash, false);
  });

  // Intercept clicks on links that belong to our app
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore external links, mailto, tel, whatsapp, download, blank targets
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.getAttribute('target') === '_blank' ||
      link.hasAttribute('download')
    ) {
      return;
    }

    // Hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      try {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', href);
          return;
        }
      } catch (err) {
        // Invalid selector, fall through
      }

      // Target element not found on current page, navigate to home with hash
      navigateTo('/' + href);
      return;
    }

    // Links with slash or path + optional hash: e.g. "/#catalog", "/about", "/contact"
    if (href.startsWith('/')) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Initial render based on URL
  const initialPath = window.location.pathname;
  const initialHash = window.location.hash;
  renderPage(initialPath, initialHash, false);
}

export function navigateTo(url, replace = false) {
  const [pathname, hash] = url.split('#');
  const targetHash = hash ? `#${hash}` : '';
  const cleanPath = normalizePath(pathname);

  if (cleanPath === currentPath && targetHash) {
    // Same page, just scroll to hash
    if (replace) {
      history.replaceState(null, '', cleanPath + targetHash);
    } else {
      history.pushState(null, '', cleanPath + targetHash);
    }
    const target = document.querySelector(targetHash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  if (replace) {
    history.replaceState(null, '', cleanPath + targetHash);
  } else {
    history.pushState(null, '', cleanPath + targetHash);
  }

  renderPage(cleanPath, targetHash, true);
}

function renderPage(pathname, hash = '', isTransition = true) {
  const clean = normalizePath(pathname);
  const route = routes[clean] || routes['/'];
  currentPath = clean;

  const appContainer = document.getElementById('page-content');
  if (!appContainer) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mount = () => {
    appContainer.innerHTML = route.template;

    // Update document title and description according to active language
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    document.title = currentLang === 'ar' ? route.titleAr : route.titleEn;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentLang === 'ar' ? route.descAr : route.descEn);
    }

    // Update active nav links
    updateNavLinks(clean);

    // Scroll to top or target hash
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Fire callbacks (animations, i18n, forms, etc.)
    navigationCallbacks.forEach((cb) => {
      try {
        cb(clean);
      } catch (err) {
        console.error('Error in onNavigate callback:', err);
      }
    });

    if (!prefersReduced && isTransition) {
      appContainer.classList.add('page-entering');
      requestAnimationFrame(() => {
        appContainer.classList.remove('page-entering');
      });
    }
  };

  if (!prefersReduced && isTransition && appContainer.children.length > 0) {
    appContainer.classList.add('page-leaving');
    setTimeout(() => {
      appContainer.classList.remove('page-leaving');
      mount();
    }, 180);
  } else {
    mount();
  }
}

function updateNavLinks(activePath) {
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const [linkPath] = href.split('#');
    const cleanLinkPath = normalizePath(linkPath);

    if (cleanLinkPath === activePath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}
