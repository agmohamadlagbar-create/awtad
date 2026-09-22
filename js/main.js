/**
 * Main Entry Point: Orchestrator for all Industrial Precision SPA frontend modules
 */

import { initRouter, registerOnNavigate } from './router.js';
import { initScroll } from './scroll.js';
import { initAnimations, reinitForPage } from './animations.js';
import { initNavigation } from './navigation.js';
import { initForm } from './form.js';
import { initI18n, applyLanguage, getCurrentLanguage } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & mobile drawer
  initNavigation();

  // 2. Global Scroll dynamics
  initScroll();

  // 3. Register route change lifecycle hook BEFORE initializing router
  registerOnNavigate((pathname) => {
    // Re-apply active language translations to new elements in the DOM
    applyLanguage(getCurrentLanguage());

    // Re-trigger animations, observers, filters, FAQ, and TOC spies
    reinitForPage(pathname);

    // Re-bind forms if mounted on this page
    initForm();
  });

  // 4. Initialize Bilingual i18n system
  initI18n();

  // 5. Initialize client-side SPA router (renders initial page)
  initRouter();

  // 6. Initialize global animations and scroll effects
  initAnimations();

  console.log('[Awtad Al Khaleej] Multi-Page SPA & Animation System initialized.');
});
