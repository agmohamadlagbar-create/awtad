export const contactPage = `
  <!-- Top Technical Breadcrumb & Coordinate Strip -->
  <section class="telemetry-strip">
    <div class="telemetry-inner">
      <div class="telemetry-pill">
        <span class="indicator-dot"></span>
        <span class="font-label-mono uppercase" data-i18n="contact_strip_channel">Direct Engineering Desk</span>
      </div>
      <div class="flex items-center gap-md">
        <span data-i18n="contact_strip_coord">24/7 Response Channel</span>
        <span class="telemetry-status" data-i18n="contact_strip_status">Kingdom of Saudi Arabia</span>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="page-hero">
    <div class="page-hero-bg" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7xteU-LlMgU0xWFZWJi7TNunHO9a-chjDSeIbdqEnSdpCNaXIeCzrPd_K89TSLvbhnsU7rK1wJOKvbeZda_hn8H8eHtl5CFvQjgo8I2fT8Ivk93u7m9o9BY7DgFKAOzRm30DbvKxZmg_U_cIlG5clXoFkptYKeMZ8i_mxdmHrTuZj3qvCrj_4gxIsd9EADXn3U9RoHUJytRmNjgzj280P9RC2cWF5MOMyDdXchGpW15Zvf7B5DjvE');"></div>
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-lg hero-load-item hero-delay-1">
          <div>
            <h1 class="text-display-hero uppercase" data-i18n="contact_hero_title">
              Let's Talk About<br>Your Project.
            </h1>
            <p class="text-body-lg" style="max-width: 44rem; color: var(--color-on-surface-variant); margin-top: var(--space-sm);" data-i18n="contact_hero_desc">
              Have a question about our steel products or need project estimation? Get in touch with our engineering team for direct technical coordination and quotation support.
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="padding: 0.5rem 1rem;" data-i18n="contact_hero_sla">
            <span class="indicator-dot"></span>
            Response Time: Under 24 Hours
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 Technical Contact Cards -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="contact-cards-grid">
        <!-- Card 1: Phone -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 1;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>01</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c1_title">Phone Dispatch</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem;">
              +966 13 800 4920
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c1_desc">
              Speak directly with our technical sales engineering team.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <a href="tel:+966138004920" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              Call Us <span class="arrow-dir">→</span>
            </a>
          </div>
        </div>

        <!-- Card 2: Email -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 2;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>02</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c2_title">Electronic Mail</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem; font-size: 0.95rem; word-break: break-all;">
              rfq@awtadalkhaleej.com
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c2_desc">
              Send specifications, BOQ spreadsheets, or formal tenders.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <a href="mailto:rfq@awtadalkhaleej.com" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              Send Email <span class="arrow-dir">→</span>
            </a>
          </div>
        </div>

        <!-- Card 3: Working Hours -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 3;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>03</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c3_title">Working Hours</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem;">
              Sunday – Thursday • 08:00 – 17:00
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c3_desc">
              Standard fabrication yard & sales desk operation hours.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <span class="badge-chip font-label-mono" style="color: var(--color-forge-orange);" data-i18n="contact_c3_status">
              <span class="indicator-dot"></span> Desk Active • AST (GMT+3)
            </span>
          </div>
        </div>

        <!-- Card 4: WhatsApp -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 4;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>04</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c4_title">Instant Message</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem;">
              +966 50 123 4567
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c4_desc">
              Chat with our commercial team directly on WhatsApp.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              WhatsApp Us <span class="arrow-dir">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Engagement Section: Left Info + Right Form -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="contact-main-grid">
        <!-- Left Side: Get In Touch Context & Load meter -->
        <div class="contact-sidebar reveal-left">
          <div class="flex flex-col gap-sm">
            <h2 class="text-headline-lg uppercase" data-i18n="contact_left_title">Get in Touch</h2>
            <p class="text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.7;" data-i18n="contact_left_desc">
              Whether you are looking for a specific structural steel product, require heavy plate cutting specifications, or want to discuss project feasibility, our sales engineering team is ready to assist.
            </p>
          </div>

          <!-- Feature Bullets with Accent Indicators -->
          <div class="flex flex-col gap-md">
            <div class="flex items-start gap-sm">
              <div style="width: 8px; height: 8px; background: var(--color-forge-orange); margin-top: 6px; flex-shrink: 0;"></div>
              <div>
                <span class="font-technical text-body-md" style="color: var(--color-on-surface); font-weight: 700; text-transform: uppercase;" data-i18n="contact_b1_title">24-Hour Review Turnaround</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant); margin-top: 2px;" data-i18n="contact_b1_desc">Direct quotation review and engineering feasibility within 24 business hours.</p>
              </div>
            </div>

            <div class="flex items-start gap-sm">
              <div style="width: 8px; height: 8px; background: var(--color-forge-orange); margin-top: 6px; flex-shrink: 0;"></div>
              <div>
                <span class="font-technical text-body-md" style="color: var(--color-on-surface); font-weight: 700; text-transform: uppercase;" data-i18n="contact_b2_title">Technical Intake</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant); margin-top: 2px;" data-i18n="contact_b2_desc">Seamless BOQ, Tekla/CAD drawing, and metallurgical material review.</p>
              </div>
            </div>

            <div class="flex items-start gap-sm">
              <div style="width: 8px; height: 8px; background: var(--color-forge-orange); margin-top: 6px; flex-shrink: 0;"></div>
              <div>
                <span class="font-technical text-body-md" style="color: var(--color-on-surface); font-weight: 700; text-transform: uppercase;" data-i18n="contact_b3_title">Certified Advisory</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant); margin-top: 2px;" data-i18n="contact_b3_desc">Specification guidance fully aligned with EN 1090-2 & AWS standards.</p>
              </div>
            </div>
          </div>

          <!-- Summary Specification Box -->
          <div class="industrial-card" style="background-color: var(--color-surface-container);">
            <div class="flex justify-between items-center font-label-mono text-body-sm" style="padding-bottom: var(--space-xs); border-bottom: 1px solid var(--color-outline-variant-30);">
              <span style="color: var(--color-outline);">Direct Contact Summary</span>
            </div>
            <div class="flex justify-between py-xs font-technical text-body-sm">
              <span style="color: var(--color-outline);">HOTLINE:</span>
              <a href="tel:+966138004920" style="color: var(--color-on-surface);" class="hover:text-white">+966 13 800 4920</a>
            </div>
            <div class="flex justify-between py-xs font-technical text-body-sm">
              <span style="color: var(--color-outline);">PRIMARY RFQ:</span>
              <a href="mailto:rfq@awtadalkhaleej.com" style="color: var(--color-on-surface);" class="hover:text-white">rfq@awtadalkhaleej.com</a>
            </div>
            <div class="flex justify-between py-xs font-technical text-body-sm">
              <span style="color: var(--color-outline);">OPERATION:</span>
              <span style="color: var(--color-on-surface);">SUN–THU • 08:00–17:00</span>
            </div>
          </div>

          <!-- Plant Load Index Bar -->
          <div class="plant-load-meter">
            <div class="flex items-center justify-between font-label-mono text-body-sm" style="margin-bottom: 0.25rem;">
              <span style="color: var(--color-outline);">Plant Capacity</span>
              <span style="color: var(--color-forge-orange); font-weight: 700;">88% Operational</span>
            </div>
            <div class="load-track">
              <div class="load-fill"></div>
            </div>
            <div class="flex justify-between font-label-mono text-body-sm" style="margin-top: 0.25rem; color: var(--color-outline);">
              <span>CNC Cutting: Active</span>
              <span>Welding Bay: Active</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="contact-form-container reveal-right">
          <div class="flex items-center justify-between" style="margin-bottom: var(--space-lg); border-bottom: 1px solid var(--color-outline-variant-30); padding-bottom: var(--space-sm);">
            <div>
              <h3 class="text-headline-md uppercase" data-i18n="form_title">Send Us a Message</h3>
            </div>
          </div>

          <form id="contact-page-form" class="form-reveal-group flex flex-col gap-md" novalidate>
            <!-- Full Name -->
            <div class="form-group form-field-reveal" style="transition-delay: 50ms;">
              <label for="contact-name" class="form-label" data-i18n="form_label_name">
                Full Name <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <input type="text" id="contact-name" name="name" class="form-input" placeholder="e.g. Abdullah Al-Otaibi" required>
              <div class="form-error-msg" data-i18n="form_err_name">Please enter your name</div>
            </div>

            <!-- Email & Phone Dual Column -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-md form-field-reveal" style="transition-delay: 100ms;">
              <div class="form-group">
                <label for="contact-email" class="form-label" data-i18n="form_label_email">
                  Work Email <span style="color: var(--color-forge-orange);">*</span>
                </label>
                <input type="email" id="contact-email" name="email" class="form-input" placeholder="name@company.com" required>
                <div class="form-error-msg" data-i18n="form_err_email">Please provide a valid corporate email</div>
              </div>

              <div class="form-group">
                <label for="contact-phone" class="form-label" data-i18n="form_label_phone">
                  Phone Number
                </label>
                <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="+966 5X XXX XXXX">
              </div>
            </div>

            <!-- Subject / Inquiry Type -->
            <div class="form-group form-field-reveal" style="transition-delay: 150ms;">
              <label for="contact-subject" class="form-label" data-i18n="form_label_subject">
                Subject / Inquiry Type <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <select id="contact-subject" name="subject" class="form-select" required>
                <option value="" disabled selected data-i18n="form_sub_placeholder">Select Inquiry Category...</option>
                <option value="beams_plates" data-i18n="form_sub_1">Structural Beams & Heavy Plates Quotation</option>
                <option value="custom_fab" data-i18n="form_sub_2">Custom Fabrication & CNC Forming</option>
                <option value="spec_inquiry" data-i18n="form_sub_3">Metallurgical & Material Spec Inquiry</option>
                <option value="partnership" data-i18n="form_sub_4">Subcontracting & Partnership</option>
                <option value="general" data-i18n="form_sub_5">General Information</option>
              </select>
              <div class="form-error-msg" data-i18n="form_err_subject">Please select a subject category</div>
            </div>

            <!-- Message / Specification Details -->
            <div class="form-group form-field-reveal" style="transition-delay: 200ms;">
              <label for="contact-message" class="form-label" data-i18n="form_label_message">
                Message / Specification Details <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <textarea id="contact-message" name="message" class="form-textarea" rows="5" placeholder="Specify project requirements, profiles, steel grades (S355/S275), or estimated quantities..." required></textarea>
              <div class="form-error-msg" data-i18n="form_err_message">Please enter your project requirements</div>
            </div>

            <!-- Submission Area -->
            <div class="flex flex-col gap-sm form-field-reveal" style="transition-delay: 250ms; padding-top: var(--space-xs);">
              <button type="submit" class="btn btn-primary btn-lg w-full" data-i18n="form_submit_btn">
                Send Message <span class="btn-arrow-icon arrow-dir">→</span>
              </button>

              <div id="contact-form-feedback" class="form-alert-success">
                <strong>Message Received •</strong> Your message has been logged. Our engineering desk will respond within 24 business hours.
              </div>

              <p class="font-label-mono text-body-sm text-center" style="color: var(--color-outline); margin-top: 0.5rem;" data-i18n="form_security_notice">
                By submitting, you initiate direct contact with our engineering desk. No marketing spam.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section (Engineering Inquiries & Protocols) -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container flex flex-col gap-xl">
      <div class="reveal-item">
        <h2 class="text-headline-lg uppercase" data-i18n="faq_title">Engineering Inquiries & Protocols</h2>
      </div>

      <div class="faq-accordion reveal-item">
        <!-- Item 1 -->
        <div class="faq-item" id="faq-item-1">
          <button type="button" class="faq-question-btn" data-faq="1" aria-expanded="false">
            <div class="faq-question-title">
              <span class="faq-num">01</span>
              <span data-i18n="faq_q1">How can I request product information or mill certificates?</span>
            </div>
            <svg class="accordion-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="accordion-content">
            <div class="faq-answer-wrap">
              <div class="faq-answer-inner" data-i18n="faq_a1">
                Contact our engineering desk through the contact form, by telephone, or via direct email at <a href="mailto:rfq@awtadalkhaleej.com" style="color: var(--color-forge-orange); text-decoration: underline;">rfq@awtadalkhaleej.com</a>. We provide complete EN 10204 3.1 mill test certificates, material traceability dossiers, and technical compliance packs upon request.
              </div>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="faq-item" id="faq-item-2">
          <button type="button" class="faq-question-btn" data-faq="2" aria-expanded="false">
            <div class="faq-question-title">
              <span class="faq-num">02</span>
              <span data-i18n="faq_q2">Can I inquire about custom fabricated dimensions or complex profiles?</span>
            </div>
            <svg class="accordion-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="accordion-content">
            <div class="faq-answer-wrap">
              <div class="faq-answer-inner" data-i18n="faq_a2">
                Yes. You may upload or describe structural section references, Tekla BIM drawing extracts, or custom plate thicknesses in your inquiry. Our engineering department processes hot-rolled, cold-formed, and built-up welded plate sections according to American (AISC/AWS) and European (EN 1090-2) standards.
              </div>
            </div>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="faq-item" id="faq-item-3">
          <button type="button" class="faq-question-btn" data-faq="3" aria-expanded="false">
            <div class="faq-question-title">
              <span class="faq-num">03</span>
              <span data-i18n="faq_q3">What are your typical fabrication turnaround times and delivery logistics?</span>
            </div>
            <svg class="accordion-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="accordion-content">
            <div class="faq-answer-wrap">
              <div class="faq-answer-inner" data-i18n="faq_a3">
                Standard stocked steel members ship within 48 to 72 hours across Saudi Arabia and the GCC. Fabricated structural assemblies, plate girders, and pipeline skids are scheduled based on tonnage and coating requirements, with comprehensive delivery milestone manifests provided upon tender award.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="cta-banner-card reveal-item">
        <div class="flex flex-col gap-sm" style="max-width: 44rem; position: relative; z-index: 2;">
          <h2 class="text-headline-lg uppercase" data-i18n="contact_cta_title">Need More Information?</h2>
          <p class="text-body-lg" style="color: var(--color-on-surface-variant);" data-i18n="contact_cta_desc">
            Our engineering team is ready to help you find the right steel solution for your technical infrastructure needs.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-md" style="position: relative; z-index: 2;">
          <a href="/#catalog" class="btn btn-primary btn-lg" data-i18n="contact_cta_btn">
            View Our Products <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
`;
