export const aboutPage = `
  <!-- Top Technical Breadcrumb & Coordinate Strip -->
  <section class="telemetry-strip">
    <div class="telemetry-inner">
      <div class="telemetry-pill">
        <span class="indicator-dot"></span>
        <span class="font-label-mono uppercase" data-i18n="about_strip_channel">Awtad Al Khaleej</span>
      </div>
      <div class="flex items-center gap-md">
        <span data-i18n="about_strip_loc">Operations Active</span>
        <span class="telemetry-status" data-i18n="about_strip_status">Kingdom of Saudi Arabia</span>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="page-hero">
    <div class="page-hero-bg" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7xteU-LlMgU0xWFZWJi7TNunHO9a-chjDSeIbdqEnSdpCNaXIeCzrPd_K89TSLvbhnsU7rK1wJOKvbeZda_hn8H8eHtl5CFvQjgo8I2fT8Ivk93u7m9o9BY7DgFKAOzRm30DbvKxZmg_U_cIlG5clXoFkptYKeMZ8i_mxdmHrTuZj3qvCrj_4gxIsd9EADXn3U9RoHUJytRmNjgzj280P9RC2cWF5MOMyDdXchGpW15Zvf7B5DjvE');"></div>
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <div class="hero-load-item hero-delay-1">
          <h1 class="text-display-hero uppercase" data-i18n="about_hero_title">
            Built on Steel.<br>
            <span style="color: var(--color-forge-orange);">Driven by Quality.</span>
          </h1>
        </div>

        <p class="text-body-lg hero-load-item hero-delay-2" style="max-width: 44rem; color: var(--color-on-surface-variant);" data-i18n="about_hero_desc">
          We are committed to providing reliable steel products and precision manufacturing solutions with an uncompromising focus on metallurgical quality, tight tolerances, and customer satisfaction across GCC heavy industry.
        </p>

        <div class="flex flex-wrap gap-md hero-load-item hero-delay-3" style="padding-top: var(--space-sm);">
          <a href="/#catalog" class="btn btn-primary btn-lg" data-i18n="about_hero_cta_products">
            Explore Our Products <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
          <a href="/contact" class="btn btn-secondary btn-lg" data-i18n="about_hero_cta_contact">
            Request Specification <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
        </div>

        <!-- Telemetry Sub-bar -->
        <div class="hero-load-item hero-delay-4" style="margin-top: var(--space-xl); padding: var(--space-md); background-color: rgba(20, 29, 32, 0.9); border: 1px solid var(--color-outline-variant-30); border-radius: var(--radius-sm); backdrop-filter: blur(8px);">
          <div class="flex flex-wrap items-center justify-between gap-md font-label-mono">
            <div class="flex flex-wrap items-center gap-md">
              <div>
                <span style="color: var(--color-outline);" data-i18n="about_metric_divisions_label">CORE DIVISIONS: </span>
                <span style="color: var(--color-on-surface); font-weight: 600;" data-i18n="about_metric_divisions_val">STRUCTURAL / INDUSTRIAL / CUSTOM FABRICATION</span>
              </div>
              <div style="width: 1px; height: 1.5rem; background: var(--color-outline-variant-40);" class="hidden md:block"></div>
              <div>
                <span style="color: var(--color-outline);" data-i18n="about_metric_compliance_label">COMPLIANCE CODE: </span>
                <span style="color: var(--color-on-surface); font-weight: 600;" data-i18n="about_metric_compliance_val">ISO 9001 / EN 1090-2 EXC4 / AWS D1.1</span>
              </div>
            </div>
            <div class="flex items-center gap-xs">
              <span class="indicator-dot"></span>
              <span style="color: var(--color-forge-orange);" data-i18n="about_metric_qms">Certified Quality Management System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Editorial Asymmetric Section -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="about-editorial-grid">
        <!-- Left: Image with Viewfinder -->
        <div class="editorial-visual-frame reveal-left">
          <div class="viewfinder-crosshair viewfinder-tl"></div>
          <div class="viewfinder-crosshair viewfinder-tr"></div>
          <div class="viewfinder-crosshair viewfinder-bl"></div>
          <div class="viewfinder-crosshair viewfinder-br"></div>
          
          <div style="position: absolute; top: 1rem; left: 1rem; z-index: 5; background: rgba(7, 15, 18, 0.85); padding: 0.25rem 0.5rem; border-radius: 2px;" class="font-label-mono text-body-sm">
            <span style="color: var(--color-forge-orange);">Industrial Operations</span> • Plant Yard 01
          </div>

          <div class="card-image-wrap industrial-img-zoom">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKSM1rulC5RAmNACpAuaOFOUF6cvTewyyDdzxU2gta19D1djf_SOkmJH0ojlTz1JH-4BJjAOmUtFzqKmKL1f3GYtYuKYhQHqaRsF6ucxGVObCuPKVrxx4vWAwSBWaV5EinTspYZTeor9GoEfK1NcyIYYEFyZdnV_iV8l_qLQyrV1UQOEX0N8eM8c9yMxsCIp34VFPxMQn3eTSl3kP7kQIVy6Spyrm-P1aoX-j16E6SMnuST7yNv7K" 
                 alt="High-precision CNC gantry cutting steel plate" 
                 loading="lazy">
          </div>

          <div style="padding: 0.5rem 0.75rem; background: var(--color-surface-lowest); border-top: 1px solid var(--color-outline-variant-30); display: flex; justify-content: space-between;" class="font-label-mono text-body-sm">
            <span>Plate Thickness: 5.0mm – 120.0mm</span>
            <span style="color: var(--color-forge-orange);">CNC Tolerance: ±0.2mm</span>
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="reveal-right flex flex-col gap-md">
          <h2 class="text-headline-lg uppercase" data-i18n="about_editorial_title">
            Engineering Precision for Heavy Industrial Infrastructure
          </h2>

          <div class="flex flex-col gap-sm text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.7;">
            <p data-i18n="about_editorial_p1">
              Awtad Al Khaleej is a dedicated steel processing and manufacturing enterprise specializing in the supply and fabrication of heavy structural and custom-manufactured steel products. We deliver high-integrity steel members, heavy plates, and engineered assemblies crafted to meet rigorous mechanical thresholds.
            </p>
            <p data-i18n="about_editorial_p2">
              Operating across critical industrial segments—including commercial construction, civil infrastructure, offshore structures, and energy facilities—we combine advanced computational cutting, forming, and certified welding methodologies. Our manufacturing pipeline enforces zero-deviation tolerances and uncompromised surface preparation.
            </p>
            <p data-i18n="about_editorial_p3">
              Our operating philosophy centers on client integration. From tender documentation review to rigorous dimensional inspection reports and delivery logistics, our team ensures every consignment meets documented mechanical properties, international building standards, and delivery milestones.
            </p>
          </div>

          <!-- Technical Spec Badges -->
          <div class="editorial-specs-grid">
            <div class="editorial-spec-badge">
              <span class="spec-tag" data-i18n="spec_mat_label">MATERIAL CODE</span>
              <span class="spec-val">S355 / S275 / ASTM A36</span>
            </div>
            <div class="editorial-spec-badge">
              <span class="spec-tag" data-i18n="spec_weld_label">WELDING ACCRED</span>
              <span class="spec-val">ISO 3834-2 / AWS D1.1</span>
            </div>
            <div class="editorial-spec-badge">
              <span class="spec-tag" data-i18n="spec_trace_label">TRACEABILITY</span>
              <span class="spec-val" style="color: var(--color-forge-orange);">EN 10204 3.1 / 3.2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Capabilities Section (What We Do) -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container flex flex-col gap-xl">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-md reveal-item">
        <div class="flex flex-col gap-xs">
          <h2 class="text-headline-lg uppercase" data-i18n="capabilities_title">Structured Production Capabilities</h2>
        </div>
        <p class="text-body-sm" style="max-width: 24rem; color: var(--color-on-surface-variant);" data-i18n="capabilities_sub">
          Standardized output with bespoke metallurgical execution. Scaled to satisfy primary structural packages and critical engineering assemblies.
        </p>
      </div>

      <div class="capability-grid">
        <!-- Card 1 -->
        <div class="capability-card card-interactive reveal-item stagger-item" style="--stagger-index: 1;">
          <div class="flex flex-col gap-md">
            <div class="flex justify-between items-start">
              <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="cap_01_num">01 • Structural</span>
              <div class="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
            </div>
            <h3 class="text-headline-md uppercase" data-i18n="cap_01_title">Steel Products</h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant);" data-i18n="cap_01_desc">
              Providing certified steel products designed specifically for heavy building construction, plant structures, and large-scale industrial manufacturing.
            </p>
          </div>
          <div class="card-spec-box font-label-mono text-body-sm">
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_01_spec1_k">OUTPUT FORMAT:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_01_spec1_v">BEAMS, ANGLES, HEAVY PLATES</span>
            </div>
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_01_spec2_k">YIELD RANGE:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_01_spec2_v">235 – 460 MPa</span>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="capability-card card-interactive reveal-item stagger-item" style="--stagger-index: 2;">
          <div class="flex flex-col gap-md">
            <div class="flex justify-between items-start">
              <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="cap_02_num">02 • Advisory</span>
              <div class="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
            </div>
            <h3 class="text-headline-md uppercase" data-i18n="cap_02_title">Product Solutions</h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant);" data-i18n="cap_02_desc">
              Supporting customers in identifying, sizing, and configuring profiles and material grades engineered to their exact project and environmental requirements.
            </p>
          </div>
          <div class="card-spec-box font-label-mono text-body-sm">
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_02_spec1_k">CONSULT TYPE:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_02_spec1_v">DIMENSIONAL & METALLURGICAL</span>
            </div>
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_02_spec2_k">ANALYSIS:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_02_spec2_v">LOAD CALC & BIM REVIEW</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="capability-card card-interactive reveal-item stagger-item" style="--stagger-index: 3;">
          <div class="flex flex-col gap-md">
            <div class="flex justify-between items-start">
              <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="cap_03_num">03 • Execution</span>
              <div class="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
            </div>
            <h3 class="text-headline-md uppercase" data-i18n="cap_03_title">Professional Service</h3>
            <p class="text-body-md" style="color: var(--color-on-surface-variant);" data-i18n="cap_03_desc">
              Providing clear communication, continuous order status transparency, and reliable technical documentation support throughout the purchasing lifecycle.
            </p>
          </div>
          <div class="card-spec-box font-label-mono text-body-sm">
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_03_spec1_k">DOCUMENTATION:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_03_spec1_v">MILL TEST REPORTS / COC</span>
            </div>
            <div class="flex justify-between py-xs">
              <span style="color: var(--color-outline);" data-i18n="cap_03_spec2_k">DISPATCH:</span>
              <span style="color: var(--color-on-surface);" data-i18n="cap_03_spec2_v">TRACEABLE CARGO TRACKING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section (Minimalist Graphite Tiles) -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container flex flex-col gap-xl">
      <div class="reveal-item">
        <h2 class="text-headline-lg uppercase" data-i18n="values_title">Core Structural Ethics</h2>
      </div>

      <div class="values-grid">
        <div class="value-tile card-interactive reveal-item stagger-item" style="--stagger-index: 1;">
          <div class="value-header">
            <span class="value-code">01</span>
            <span class="indicator-dot"></span>
          </div>
          <h4 class="text-headline-sm uppercase" data-i18n="val_01_title">Quality</h4>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="val_01_desc">
            We focus on maintaining consistent product quality and dimensional reliability across all mill batches.
          </p>
        </div>

        <div class="value-tile card-interactive reveal-item stagger-item" style="--stagger-index: 2;">
          <div class="value-header">
            <span class="value-code">02</span>
            <span class="indicator-dot"></span>
          </div>
          <h4 class="text-headline-sm uppercase" data-i18n="val_02_title">Reliability</h4>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="val_02_desc">
            We aim to provide dependable steel products, realistic turnaround schedules, and professional engineering service.
          </p>
        </div>

        <div class="value-tile card-interactive reveal-item stagger-item" style="--stagger-index: 3;">
          <div class="value-header">
            <span class="value-code">03</span>
            <span class="indicator-dot"></span>
          </div>
          <h4 class="text-headline-sm uppercase" data-i18n="val_03_title">Customer Focus</h4>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="val_03_desc">
            We listen carefully to customer project requirements and collaborate diligently toward practical, buildable solutions.
          </p>
        </div>

        <div class="value-tile card-interactive reveal-item stagger-item" style="--stagger-index: 4;">
          <div class="value-header">
            <span class="value-code">04</span>
            <span class="indicator-dot"></span>
          </div>
          <h4 class="text-headline-sm uppercase" data-i18n="val_04_title">Professionalism</h4>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="val_04_desc">
            We value clear technical communication, direct responsibility, and fostering dependable long-term relationships.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section (Engineered Value Proposition) -->
  <section class="section-container" style="background-color: var(--color-surface-low);">
    <div class="container flex flex-col gap-xl">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-md reveal-item">
        <div>
          <h2 class="text-headline-lg uppercase" data-i18n="adv_title">Engineered Value Proposition</h2>
        </div>
        <div class="badge-chip font-label-mono" data-i18n="adv_badge">Verified Standards & Logistics</div>
      </div>

      <div class="advantage-grid">
        <div class="advantage-card card-interactive reveal-item stagger-item" style="--stagger-index: 1;">
          <div class="advantage-idx font-technical">01</div>
          <h3 class="text-headline-sm uppercase" data-i18n="adv_01_title">Certified Precision</h3>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="adv_01_desc">
            Uncompromising adherence to certified material grades, exact chemical composition, and strict dimensional accuracy.
          </p>
          <div class="font-label-mono text-body-sm" style="margin-top: auto; padding-top: var(--space-sm); color: var(--color-forge-orange);" data-i18n="adv_01_sub">
            STANDARD ACCREDITED
          </div>
        </div>

        <div class="advantage-card card-interactive reveal-item stagger-item" style="--stagger-index: 2;">
          <div class="advantage-idx font-technical">02</div>
          <h3 class="text-headline-sm uppercase" data-i18n="adv_02_title">Dependable Delivery</h3>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="adv_02_desc">
            Predictable lead times, structured supply chain management schedules, and direct commercial accountability.
          </p>
          <div class="font-label-mono text-body-sm" style="margin-top: auto; padding-top: var(--space-sm); color: var(--color-forge-orange);" data-i18n="adv_02_sub">
            ON-TIME LOGISTICS
          </div>
        </div>

        <div class="advantage-card card-interactive reveal-item stagger-item" style="--stagger-index: 3;">
          <div class="advantage-idx font-technical">03</div>
          <h3 class="text-headline-sm uppercase" data-i18n="adv_03_title">Product Depth</h3>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="adv_03_desc">
            Comprehensive selection of standard structural steel sections, custom fabricated profiles, and high-tonnage heavy plates.
          </p>
          <div class="font-label-mono text-body-sm" style="margin-top: auto; padding-top: var(--space-sm); color: var(--color-forge-orange);" data-i18n="adv_03_sub">
            FULL INVENTORY DEPTH
          </div>
        </div>

        <div class="advantage-card card-interactive reveal-item stagger-item" style="--stagger-index: 4;">
          <div class="advantage-idx font-technical">04</div>
          <h3 class="text-headline-sm uppercase" data-i18n="adv_04_title">Customer Support</h3>
          <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="adv_04_desc">
            Responsive technical assistance, transparent communication, and direct engineering coordination for every project.
          </p>
          <div class="font-label-mono text-body-sm" style="margin-top: auto; padding-top: var(--space-sm); color: var(--color-forge-orange);" data-i18n="adv_04_sub">
            TECHNICAL ADVISORY
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner Callout -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container">
      <div class="cta-banner-card reveal-item">
        <div class="flex flex-col gap-sm" style="max-width: 44rem; position: relative; z-index: 2;">
          <h2 class="text-headline-lg uppercase" data-i18n="about_cta_title">Looking for the right steel solution?</h2>
          <p class="text-body-lg" style="color: var(--color-on-surface-variant);" data-i18n="about_cta_desc">
            Explore our comprehensive range of steel products or contact our engineering desk directly to discuss your specific technical requirements.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-md" style="position: relative; z-index: 2;">
          <a href="/#catalog" class="btn btn-primary btn-lg" data-i18n="about_cta_btn_products">
            View Products <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
          <a href="/contact" class="btn btn-secondary btn-lg" data-i18n="about_cta_btn_contact">
            Contact Us <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
`;
