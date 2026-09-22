/**
 * Main Entry Point: Orchestrator for all Industrial Precision frontend modules
 */

import { initScroll } from './scroll.js';
import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';
import { initForm } from './form.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation & mobile drawer
  initNavigation();

  // Initialize scroll dynamics (smooth scroll, sticky header, parallax)
  initScroll();

  // Initialize scroll reveals, animated number counters & category filter
  initAnimations();

  // Initialize RFQ intake form validation & simulated submission
  initForm();

  // Initialize bilingual English / Arabic localization and RTL switching
  initI18n();

  console.log('[Awtad Al Khaleej] Industrial Steel Fabrication Catalog initialized.');
});
