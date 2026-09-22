export const privacyPage = `
  <!-- Top Technical Header Anchor Banner -->
  <section class="telemetry-strip">
    <div class="telemetry-inner">
      <div class="telemetry-pill">
        <span class="indicator-dot"></span>
        <span class="font-label-mono uppercase" data-i18n="privacy_strip_tag">Awtad Al Khaleej</span>
      </div>
      <div class="flex items-center gap-md">
        <span data-i18n="privacy_strip_doc">Privacy Policy</span>
        <span class="telemetry-status" data-i18n="privacy_strip_status">Direct Transparency</span>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="page-hero" style="text-align: center;">
    <div class="page-hero-bg" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7xteU-LlMgU0xWFZWJi7TNunHO9a-chjDSeIbdqEnSdpCNaXIeCzrPd_K89TSLvbhnsU7rK1wJOKvbeZda_hn8H8eHtl5CFvQjgo8I2fT8Ivk93u7m9o9BY7DgFKAOzRm30DbvKxZmg_U_cIlG5clXoFkptYKeMZ8i_mxdmHrTuZj3qvCrj_4gxIsd9EADXn3U9RoHUJytRmNjgzj280P9RC2cWF5MOMyDdXchGpW15Zvf7B5DjvE');"></div>
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content" style="align-items: center;">
        <div class="badge-chip font-label-mono hero-load-item hero-delay-1" data-i18n="privacy_hero_badge">
          <span class="indicator-dot"></span> User Privacy & Data Transparency
        </div>
        
        <h1 class="text-display-hero uppercase hero-load-item hero-delay-2" data-i18n="privacy_hero_title">
          Privacy Policy
        </h1>

        <p class="text-body-lg hero-load-item hero-delay-3" style="max-width: 44rem; color: var(--color-on-surface-variant);" data-i18n="privacy_hero_desc">
          We respect your privacy. We only collect the information you choose to provide to us directly through our contact form.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-md font-technical text-body-sm hero-load-item hero-delay-4" style="margin-top: var(--space-sm);">
          <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="privacy_hero_updated">
            Last Updated: October 2026
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Split Documentation Section: TOC Sidebar + Policy Content Spine -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="privacy-main-grid">
        <!-- Sticky Sidebar Navigation -->
        <aside class="toc-sidebar">
          <div class="toc-card">
            <div class="flex justify-between items-center" style="padding-bottom: var(--space-xs); border-bottom: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="toc_title">Table of Contents</span>
            </div>
            <nav class="toc-nav" id="policy-toc">
              <a href="#sec-01" class="toc-link active" data-toc="sec-01">
                <span><span style="color: var(--color-forge-orange); font-weight: 700; margin-right: 6px;">01</span> <span data-i18n="toc_01">Introduction</span></span>
                <span class="arrow-dir">→</span>
              </a>
              <a href="#sec-02" class="toc-link" data-toc="sec-02">
                <span><span style="color: var(--color-forge-orange); font-weight: 700; margin-right: 6px;">02</span> <span data-i18n="toc_02">Information You Provide</span></span>
                <span class="arrow-dir">→</span>
              </a>
              <a href="#sec-03" class="toc-link" data-toc="sec-03">
                <span><span style="color: var(--color-forge-orange); font-weight: 700; margin-right: 6px;">03</span> <span data-i18n="toc_03">How We Use Your Information</span></span>
                <span class="arrow-dir">→</span>
              </a>
              <a href="#sec-04" class="toc-link" data-toc="sec-04">
                <span><span style="color: var(--color-forge-orange); font-weight: 700; margin-right: 6px;">04</span> <span data-i18n="toc_04">Data Protection & Privacy</span></span>
                <span class="arrow-dir">→</span>
              </a>
              <a href="#sec-05" class="toc-link" data-toc="sec-05">
                <span><span style="color: var(--color-forge-orange); font-weight: 700; margin-right: 6px;">05</span> <span data-i18n="toc_05">Contact Us</span></span>
                <span class="arrow-dir">→</span>
              </a>
            </nav>
          </div>
        </aside>

        <!-- Main Structured Documentation Spine -->
        <div class="flex flex-col gap-lg">
          <!-- Section 01 -->
          <article class="policy-article reveal-item" id="sec-01">
            <h2 class="text-headline-md uppercase" data-i18n="p_sec1_title">01. Introduction</h2>
            <div class="text-body-md flex flex-col gap-sm" style="color: var(--color-on-surface-variant); line-height: 1.7;">
              <p data-i18n="p_sec1_p1">
                Awtad Al Khaleej is committed to protecting your privacy. This policy outlines what information we receive when you visit our website or get in touch with our team.
              </p>
              <p data-i18n="p_sec1_p2">
                We believe in straightforward transparency: we do not collect personal data automatically, we do not use tracking cookies, and we only receive information that you voluntarily choose to submit through our contact form.
              </p>
            </div>
          </article>

          <!-- Section 02 -->
          <article class="policy-article reveal-item" id="sec-02">
            <h2 class="text-headline-md uppercase" data-i18n="p_sec2_title">02. Information You Provide to Us</h2>
            <div class="flex flex-col gap-md">
              <p class="text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.7;" data-i18n="p_sec2_desc">
                We only collect information that you directly enter when contacting us through our online contact form. This is limited to:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-sm font-body-sm">
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec2_item1_t">Full Name</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec2_item1_d">Used to address you properly when replying to your inquiry.</span>
                </div>
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec2_item2_t">Email Address</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec2_item2_d">Used to deliver our answers, price estimations, and documentation directly to you.</span>
                </div>
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec2_item3_t">Phone Number (Optional)</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec2_item3_d">Used only if you prefer phone communication or WhatsApp coordination.</span>
                </div>
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec2_item4_t">Subject & Message</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec2_item4_d">The project inquiries, specifications, or comments you choose to describe.</span>
                </div>
              </div>
              <div class="card-spec-box font-technical text-body-sm" style="color: var(--color-outline);">
                <span style="color: var(--color-forge-orange); font-weight: 700;">Note: </span>
                <span data-i18n="p_sec2_note">We do not collect any payment details, account passwords, or sensitive personal documents on this website.</span>
              </div>
            </div>
          </article>

          <!-- Section 03 -->
          <article class="policy-article reveal-item" id="sec-03">
            <h2 class="text-headline-md uppercase" data-i18n="p_sec3_title">03. How We Use Your Information</h2>
            <div class="flex flex-col gap-sm">
              <p class="text-body-md" style="color: var(--color-on-surface-variant);" data-i18n="p_sec3_intro">
                Information you provide is used strictly for legitimate business communication:
              </p>
              <div class="flex flex-col gap-xs font-body-sm">
                <div class="p-sm" style="background-color: var(--color-surface-container); border-radius: var(--radius-sm);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec3_b1_t">Direct Inquiry Response</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec3_b1_d">Reviewing your requirements and responding with quotations or technical answers.</span>
                </div>
                <div class="p-sm" style="background-color: var(--color-surface-container); border-radius: var(--radius-sm);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec3_b2_t">Project Coordination</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec3_b2_d">Following up on active quotes, orders, delivery status, or requested clarifications.</span>
                </div>
                <div class="p-sm" style="background-color: var(--color-surface-container); border-radius: var(--radius-sm);">
                  <strong style="color: var(--color-on-surface); display: block;" class="font-headline-sm" data-i18n="p_sec3_b3_t">No Unsolicited Marketing</strong>
                  <span style="color: var(--color-on-surface-variant);" data-i18n="p_sec3_b3_d">We do not subscribe you to mailing lists or send unsolicited marketing campaigns.</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Section 04 -->
          <article class="policy-article reveal-item" id="sec-04">
            <h2 class="text-headline-md uppercase" data-i18n="p_sec4_title">04. Data Protection & No-Tracking Policy</h2>
            <div class="flex flex-col gap-md">
              <div class="card-spec-box">
                <span class="font-technical" style="color: var(--color-forge-orange); font-weight: 700; display: block; margin-bottom: 4px;" data-i18n="p_sec4_box_t">Zero Tracking & No Third-Party Sales</span>
                <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="p_sec4_box_d">
                  We never sell, rent, or trade your contact information. We do not use third-party analytics trackers, advertising pixels, or invasive behavioral cookies. The only information saved locally in your browser is your language preference (Arabic or English).
                </p>
              </div>
              <div class="text-body-md flex flex-col gap-sm" style="color: var(--color-on-surface-variant); line-height: 1.7;">
                <p data-i18n="p_sec4_p1">
                  Your communications are kept confidential and accessed solely by authorized team members to answer your requests.
                </p>
                <p data-i18n="p_sec4_p2">
                  You have the right at any time to ask what information we have on file from your previous communications, or to request that we update or delete your contact details from our records.
                </p>
              </div>
            </div>
          </article>

          <!-- Section 05 -->
          <article class="policy-article reveal-item" id="sec-05">
            <h2 class="text-headline-md uppercase" data-i18n="p_sec5_title">05. Contact Us</h2>
            <div class="text-body-md flex flex-col gap-sm" style="color: var(--color-on-surface-variant); line-height: 1.7;">
              <p data-i18n="p_sec5_p1">
                If you have any questions about this Privacy Policy or wish to request an update or deletion of your contact details, please reach out to us directly:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-sm font-technical text-body-sm" style="margin-top: var(--space-xs);">
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <span class="font-label-mono text-body-sm" style="color: var(--color-outline); display: block;" data-i18n="p_sec5_c1_t">EMAIL</span>
                  <a href="mailto:rfq@awtadalkhaleej.com" style="color: var(--color-forge-orange); word-break: break-all;" class="hover:underline">
                    rfq@awtadalkhaleej.com
                  </a>
                </div>
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <span class="font-label-mono text-body-sm" style="color: var(--color-outline); display: block;" data-i18n="p_sec5_c2_t">PHONE</span>
                  <a href="tel:+966138004920" style="color: var(--color-on-surface);" class="hover:underline">
                    +966 13 800 4920
                  </a>
                </div>
                <div class="industrial-card" style="background: var(--color-surface-container);">
                  <span class="font-label-mono text-body-sm" style="color: var(--color-outline); display: block;" data-i18n="p_sec5_c3_t">LOCATION</span>
                  <span style="color: var(--color-on-surface);" data-i18n="p_sec5_c3_v">
                    Kingdom of Saudi Arabia
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
`;
