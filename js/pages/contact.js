export const contactPage = `
  <!-- Top Technical Breadcrumb & Coordinate Strip -->
  <section class="telemetry-strip">
    <div class="telemetry-inner">
      <div class="telemetry-pill">
        <span class="indicator-dot"></span>
        <span class="font-label-mono uppercase" data-i18n="contact_strip_channel">Awtad Alkhaleej Alarabi Co.</span>
      </div>
      <div class="flex items-center gap-md">
        <span data-i18n="contact_strip_coord">Direct Sales & Quotation Desk</span>
        <span class="telemetry-status" data-i18n="contact_strip_status">Riyadh, Kingdom of Saudi Arabia</span>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="page-hero">
    <div class="page-hero-bg" style="background-image: url('/assets/hero/rebar-hero.jpg'); opacity: 0.45;"></div>
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-lg hero-load-item hero-delay-1">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="contact_hero_tag">GET IN TOUCH</span>
            <h1 class="text-display-hero uppercase" data-i18n="contact_hero_title">
              Let's Coordinate<br>Your Project.
            </h1>
            <p class="text-body-lg" style="max-width: 44rem; color: var(--color-on-surface-variant); margin-top: var(--space-sm);" data-i18n="contact_hero_desc">
              Have a rebar order, Bar Bending Schedule, or inquiry about our construction accessories? Contact our sales engineering team for immediate technical and commercial assistance.
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="padding: 0.5rem 1rem;" data-i18n="contact_hero_sla">
            <span class="indicator-dot"></span>
            Direct Response: Call or WhatsApp
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 Authentic Contact Cards (Brochure Page 15) -->
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
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c1_title">Direct Phone Lines</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem;">
              <a href="tel:+966583300400" style="color: inherit; text-decoration: none; display: block;" data-i18n="contact_c1_val1">+966 58 330 0400</a>
              <a href="tel:+966582300444" style="color: inherit; text-decoration: none; display: block; font-size: 0.95rem; margin-top: 0.25rem;" data-i18n="contact_c1_val2">+966 58 230 0444</a>
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c1_desc">
              Speak directly with our sales desk in Riyadh.
            </p>
          </div>
          <div style="padding-top: var(--space-sm); display: flex; gap: 0.5rem;">
            <a href="tel:+966583300400" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              Call 0400 <span class="arrow-dir">→</span>
            </a>
            <a href="https://wa.me/966583300400" target="_blank" rel="noopener noreferrer" class="btn btn-ghost font-technical text-body-sm">
              WhatsApp <span class="arrow-dir">→</span>
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
              <a href="mailto:awtadalkalej@gmail.com" style="color: inherit; text-decoration: none;" data-i18n="contact_c2_val">awtadalkalej@gmail.com</a>
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c2_desc">
              Send drawings, BBS schedules, or RFQ tenders.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <a href="mailto:awtadalkalej@gmail.com" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              Send Email <span class="arrow-dir">→</span>
            </a>
          </div>
        </div>

        <!-- Card 3: Riyadh Address -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 3;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>03</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c3_title">Headquarters & Yard</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem; font-size: 0.95rem;" data-i18n="contact_c3_desc">
              Al-Noor District, Khadrah Street, Riyadh, Saudi Arabia
            </div>
            <p class="text-body-sm" style="color: var(--color-forge-orange); padding-top: 0.25rem;" data-i18n="contact_c3_val">
              Bldg 4076, Postal Code 14321
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <span class="badge-chip font-label-mono" style="color: var(--color-on-surface);">
              Central Logistics Yard
            </span>
          </div>
        </div>

        <!-- Card 4: Instagram / Verification -->
        <div class="contact-card card-interactive reveal-item stagger-item" style="--stagger-index: 4;">
          <div class="flex flex-col gap-xs">
            <div class="contact-card-meta">
              <span>04</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-forge-orange)" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <span class="font-label-caps" style="color: var(--color-on-surface); padding-top: var(--space-xs);" data-i18n="contact_c4_title">Social & Digital Media</span>
            <div class="text-headline-sm font-technical" style="color: var(--color-on-surface); font-weight: 600; padding-top: 0.25rem;">
              <a href="https://instagram.com/awtad_alkalej" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;" data-i18n="contact_c4_val">@awtad_alkalej</a>
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant); padding-top: 0.25rem;" data-i18n="contact_c4_desc">
              Follow our latest project supplies and company updates.
            </p>
          </div>
          <div style="padding-top: var(--space-sm);">
            <a href="https://instagram.com/awtad_alkalej" target="_blank" rel="noopener noreferrer" class="btn btn-ghost font-technical text-body-sm" style="padding-left: 0;">
              Instagram <span class="arrow-dir">→</span>
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
        <div class="contact-sidebar">
          <div class="flex flex-col gap-sm">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="contact_left_tag">SALES & DISPATCH DESK</span>
            <h2 class="text-headline-lg uppercase" data-i18n="contact_left_title">Order Rebar with Confidence</h2>
            <p class="text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.7;" data-i18n="contact_left_desc">
              Whether you need high-volume standard rebar bundles, custom sheared and bent schedules, floor mesh, or binding wire, our team is equipped to meet your schedule with complete reliability.
            </p>
          </div>

          <!-- Feature Bullets with Accent Indicators -->
          <div class="flex flex-col gap-md">
            <div class="flex items-start gap-sm">
              <span class="indicator-dot" style="margin-top: 0.5rem;"></span>
              <div>
                <span class="font-technical text-body-md" style="font-weight: 600;" data-i18n="contact_b1_title">Rapid Quotation Review</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="contact_b1_desc">
                  Transparent price estimation and BBS schedule breakdown.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-sm">
              <span class="indicator-dot" style="margin-top: 0.5rem;"></span>
              <div>
                <span class="font-technical text-body-md" style="font-weight: 600;" data-i18n="contact_b2_title">Direct BBS & Drawing Intake</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="contact_b2_desc">
                  Fast translation of engineering drawings into fabrication schedules.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-sm">
              <span class="indicator-dot" style="margin-top: 0.5rem;"></span>
              <div>
                <span class="font-technical text-body-md" style="font-weight: 600;" data-i18n="contact_b3_title">Punctual Jobsite Dispatch</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="contact_b3_desc">
                  Coordinated crane truck deliveries straight to your construction site.
                </p>
              </div>
            </div>
          </div>

          <!-- Official Credentials Badge -->
          <div style="padding: var(--space-md); background: var(--color-surface-lowest); border: 1px solid var(--color-outline-variant-30); border-radius: var(--radius-sm); margin-top: var(--space-md);">
            <div class="flex flex-col gap-xs font-label-mono text-body-sm">
              <div class="flex justify-between">
                <span style="color: var(--color-outline);">Unified CR:</span>
                <span style="color: var(--color-on-surface); font-weight: 600;">7051329840</span>
              </div>
              <div class="flex justify-between">
                <span style="color: var(--color-outline);">VAT Tax ID:</span>
                <span style="color: var(--color-on-surface); font-weight: 600;">314160687500003</span>
              </div>
              <div class="flex justify-between">
                <span style="color: var(--color-outline);">Bank IBAN:</span>
                <span style="color: var(--color-forge-orange); font-size: 0.75rem;">SA59 8000 0487 6080 1314 0043</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="contact-form-container">
          <div class="flex flex-col gap-xs" style="margin-bottom: var(--space-md);">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="form_tag">RFQ INTAKE FORM</span>
            <h3 class="text-headline-md uppercase" data-i18n="form_title">Request a Formal Quotation</h3>
          </div>

          <form id="contact-form" class="form-reveal-group flex flex-col gap-md" novalidate>
            <!-- Form Response Message Banner -->
            <div id="contact-form-feedback" class="form-alert-success"></div>

            <div class="form-group">
              <label for="contact-name" class="form-label" data-i18n="form_label_name">
                Full Name / Company Representative <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <input type="text" id="contact-name" name="name" class="form-input" required placeholder="Eng. Mohammed Al-Otaibi">
              <div class="form-error-msg" data-i18n="form_err_name">Please enter your name</div>
            </div>

            <div class="form-row grid-cols-2">
              <div class="form-group">
                <label for="contact-email" class="form-label" data-i18n="form_label_email">
                  Email Address <span style="color: var(--color-forge-orange);">*</span>
                </label>
                <input type="email" id="contact-email" name="email" class="form-input" required placeholder="engineer@contracting.sa">
                <div class="form-error-msg" data-i18n="form_err_email">Please provide a valid email</div>
              </div>

              <div class="form-group">
                <label for="contact-phone" class="form-label" data-i18n="form_label_phone">
                  Mobile / WhatsApp Number
                </label>
                <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="+966 5X XXX XXXX">
              </div>
            </div>

            <div class="form-group">
              <label for="contact-subject" class="form-label" data-i18n="form_label_subject">
                Product / Requirement Type <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <select id="contact-subject" name="subject" class="form-select" required>
                <option value="" disabled selected data-i18n="form_sub_placeholder">Select Requirement Category...</option>
                <option value="standard" data-i18n="form_sub_1">Standard Deformed Rebar (SABIC / Rajhi / Al-Ittefaq)</option>
                <option value="cutbend" data-i18n="form_sub_2">Custom Cut & Bent Rebar (BBS)</option>
                <option value="stirrups" data-i18n="form_sub_3">Stirrups (Kanat) & Piling Spirals</option>
                <option value="mesh" data-i18n="form_sub_4">Welded Floor Wire Mesh (4mm - 12mm)</option>
                <option value="accessories" data-i18n="form_sub_5">Binding Wire & Concrete Spacers</option>
                <option value="package" data-i18n="form_sub_6">Comprehensive Project Supply Package</option>
              </select>
              <div class="form-error-msg" data-i18n="form_err_subject">Please select a product category</div>
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label" data-i18n="form_label_message">
                Project Details, Quantities & Schedules <span style="color: var(--color-forge-orange);">*</span>
              </label>
              <textarea id="contact-message" name="message" rows="5" class="form-textarea" required placeholder="Specify bar diameters, required tonnage, destination site in Riyadh/KSA, or schedule timeline..."></textarea>
              <div class="form-error-msg" data-i18n="form_err_message">Please enter project details or tonnage required</div>
            </div>

            <div class="flex flex-col gap-sm" style="padding-top: var(--space-xs);">
              <button type="submit" class="btn btn-primary btn-lg w-full" data-i18n="form_submit_btn">
                Submit RFQ Details <span class="btn-arrow-icon arrow-dir">→</span>
              </button>
              <span class="font-label-mono text-body-sm" style="color: var(--color-outline); text-align: center;" data-i18n="form_security_notice">
                Your information is sent directly to our sales and coordination desk.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section: Rebar Specific -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container">
      <div class="flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="faq_tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 class="text-headline-lg uppercase" data-i18n="faq_title">Rebar Procurement & Detailing FAQ</h2>
          </div>
        </div>

        <div class="flex flex-col gap-md max-w-3xl">
          <!-- FAQ 1 -->
          <div class="industrial-card p-md reveal-item">
            <h3 class="text-headline-sm" style="font-size: 1.1rem; color: var(--color-on-surface);" data-i18n="faq_q1">
              Which steel mills do you supply rebar from?
            </h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant); margin-top: 0.5rem; line-height: 1.6;" data-i18n="faq_a1">
              We supply primary certified steel from leading Saudi mills: SABIC (Hadeed), Rajhi Steel Industries, Al-Ittefaq Steel, AbdulKarim Al-Rajhi Steel (authorized distributor), Watani Steel, and Folaz Steel.
            </p>
          </div>

          <!-- FAQ 2 -->
          <div class="industrial-card p-md reveal-item">
            <h3 class="text-headline-sm" style="font-size: 1.1rem; color: var(--color-on-surface);" data-i18n="faq_q2">
              Can you cut and bend rebar according to our engineer's drawings?
            </h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant); margin-top: 0.5rem; line-height: 1.6;" data-i18n="faq_a2">
              Yes. We specialize in cutting, bending, and detailing rebar according to your Bar Bending Schedules (BBS) and structural drawings. This minimizes jobsite scrap, ensures strict code compliance, and speeds up placement.
            </p>
          </div>

          <!-- FAQ 3 -->
          <div class="industrial-card p-md reveal-item">
            <h3 class="text-headline-sm" style="font-size: 1.1rem; color: var(--color-on-surface);" data-i18n="faq_q3">
              Do you supply building accessories like wire mesh and binding wire?
            </h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant); margin-top: 0.5rem; line-height: 1.6;" data-i18n="faq_a3">
              Yes. We supply high-tensile welded floor wire mesh in diameters from 4mm to 12mm, black annealed binding wire (18 and 22 gauge in 5kg and 6kg coils), and concrete cover spacers (biscuits and shambar).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
