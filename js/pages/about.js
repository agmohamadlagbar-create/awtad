export const aboutPage = `
  <!-- Top Technical Breadcrumb & Coordinate Strip -->
  <section class="telemetry-strip">
    <div class="telemetry-inner">
      <div class="telemetry-pill">
        <span class="indicator-dot"></span>
        <span class="font-label-mono uppercase" data-i18n="about_strip_channel">Awtad Alkhaleej Alarabi Co.</span>
      </div>
      <div class="flex items-center gap-md">
        <span data-i18n="about_strip_loc">Riyadh Headquarters Active</span>
        <span class="telemetry-status" data-i18n="about_strip_status">Kingdom of Saudi Arabia</span>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="page-hero">
    <div class="page-hero-bg" style="background-image: url('/assets/hero/rebar-hero.jpg'); opacity: 0.45;"></div>
    <div class="page-hero-overlay"></div>
    <div class="container">
      <div class="page-hero-content">
        <div class="hero-load-item hero-delay-1">
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="about_hero_tag">CORPORATE OVERVIEW</span>
          <h1 class="text-display-hero uppercase" data-i18n="about_hero_title">
            Quality Rebar.<br>
            <span style="color: var(--color-forge-orange);">Engineered Precision.</span>
          </h1>
        </div>

        <p class="text-body-lg hero-load-item hero-delay-2" style="max-width: 44rem; color: var(--color-on-surface-variant);" data-i18n="about_hero_desc">
          Awtad Alkhaleej Alarabi Company is specialized in rebar and structural preparation solutions. We provide integrated products and services including standard and fabricated rebar, cutting, bending, and shaping according to approved drawings, alongside floor wire mesh and binding wire.
        </p>

        <div class="flex flex-wrap gap-md hero-load-item hero-delay-3" style="padding-top: var(--space-sm);">
          <a href="/#catalog" class="btn btn-primary btn-lg" data-i18n="about_hero_cta_products">
            View Product Catalog <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
          <a href="/contact" class="btn btn-secondary btn-lg" data-i18n="about_hero_cta_contact">
            Contact Sales Team <span class="btn-arrow-icon arrow-dir">→</span>
          </a>
        </div>

        <!-- Telemetry Sub-bar -->
        <div class="hero-load-item hero-delay-4" style="margin-top: var(--space-xl); padding: var(--space-md); background-color: rgba(20, 29, 32, 0.9); border: 1px solid var(--color-outline-variant-30); border-radius: var(--radius-sm); backdrop-filter: blur(8px);">
          <div class="flex flex-wrap items-center justify-between gap-md font-label-mono">
            <div class="flex flex-wrap items-center gap-md">
              <div>
                <span style="color: var(--color-outline);" data-i18n="about_metric_divisions_label">CORE SPECIALIZATION: </span>
                <span style="color: var(--color-on-surface); font-weight: 600;" data-i18n="about_metric_divisions_val">REBAR SUPPLY / CUT & BEND / WIRE MESH & ACCESSORIES</span>
              </div>
              <div style="width: 1px; height: 1.5rem; background: var(--color-outline-variant-40);" class="hidden md:block"></div>
              <div>
                <span style="color: var(--color-outline);" data-i18n="about_metric_compliance_label">COMMERCIAL REGISTRATION: </span>
                <span style="color: var(--color-on-surface); font-weight: 600;" data-i18n="about_metric_compliance_val">CR 7051329840 • VAT 314160687500003</span>
              </div>
            </div>
            <div class="flex items-center gap-xs">
              <span class="indicator-dot"></span>
              <span style="color: var(--color-forge-orange);" data-i18n="about_metric_qms">Authorized Distributor: AbdulKarim Al-Rajhi Steel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Editorial Section: Who We Are (Brochure Page 4) -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="about-editorial-grid">
        <!-- Left: Real Workshop Photo -->
        <div class="editorial-visual-frame reveal-left">
          <div class="viewfinder-crosshair viewfinder-tl"></div>
          <div class="viewfinder-crosshair viewfinder-tr"></div>
          <div class="viewfinder-crosshair viewfinder-bl"></div>
          <div class="viewfinder-crosshair viewfinder-br"></div>
          
          <div style="position: absolute; top: 1rem; left: 1rem; z-index: 5; background: rgba(7, 15, 18, 0.85); padding: 0.25rem 0.5rem; border-radius: 2px;" class="font-label-mono text-body-sm">
            <span style="color: var(--color-forge-orange);">Central Operations</span> • Riyadh Logistics Yard
          </div>

          <div class="card-image-wrap industrial-img-zoom">
            <img src="/assets/gallery/spiral-bending.jpg" 
                 alt="Awtad Alkhaleej Alarabi technician operating spiral rebar bending machine" 
                 loading="lazy">
          </div>

          <div style="padding: 0.5rem 0.75rem; background: var(--color-surface-lowest); border-top: 1px solid var(--color-outline-variant-30); display: flex; justify-content: space-between;" class="font-label-mono text-body-sm">
            <span>Specialization: Spiral Cages & Stirrups</span>
            <span style="color: var(--color-forge-orange);">Automated Mechanization</span>
          </div>
        </div>

        <!-- Right: Text Content from Page 4 -->
        <div class="reveal-right flex flex-col gap-md">
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="about_editorial_tag">WHO WE ARE</span>
          <h2 class="text-headline-lg uppercase" data-i18n="about_editorial_title">
            Your Trusted Partner in Reinforcement & Construction Solutions
          </h2>

          <div class="flex flex-col gap-sm text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.7;">
            <p data-i18n="about_editorial_p1">
              Awtad Alkhaleej Alarabi Company is specialized in rebar and structural preparation solutions. We provide integrated products and services including standard and fabricated rebar, cutting, bending, and shaping according to approved drawings and dimensions, in addition to floor wire mesh and binding wire.
            </p>
            <p data-i18n="about_editorial_p2">
              We rely on quality, precision, and modern mechanization to supply rebar ready for direct jobsite execution, contributing to faster workflow, minimizing steel scrap waste, and elevating overall project efficiency.
            </p>
            <p data-i18n="about_editorial_p3">
              We work in close partnership with an elite selection of primary steel manufacturing mills across the Kingdom of Saudi Arabia, standing as a trusted partner for our clients to fulfill project demands with exceptional competence and unwavering commitment.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-md font-label-mono text-body-sm" style="border-top: 1px solid var(--color-outline-variant-30); padding-top: var(--space-md); margin-top: var(--space-xs);">
            <div>
              <span style="color: var(--color-outline); display: block;" data-i18n="spec_mat_label">CR NUMBER</span>
              <span style="color: var(--color-on-surface); font-weight: 600;">7051329840</span>
            </div>
            <div>
              <span style="color: var(--color-outline); display: block;" data-i18n="spec_weld_label">VAT NUMBER</span>
              <span style="color: var(--color-on-surface); font-weight: 600;">314160687500003</span>
            </div>
            <div>
              <span style="color: var(--color-outline); display: block;" data-i18n="spec_trace_label">DISTRIBUTOR</span>
              <span style="color: var(--color-forge-orange); font-weight: 600;">AbdulKarim Al-Rajhi Steel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Vision, Mission & Goals Section (Brochure Page 5) -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container flex flex-col gap-lg">
      <div class="section-header-row reveal-item">
        <div>
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="vmg_tag">STRATEGIC FOUNDATION</span>
          <h2 class="text-headline-lg uppercase" data-i18n="vmg_title">
            VISION, MISSION & STRATEGIC GOALS
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-lg">
        <!-- Card 1: Vision -->
        <div class="industrial-card flex flex-col gap-sm reveal-item" style="border-top: 3px solid var(--color-forge-orange);">
          <span class="font-label-caps" style="color: var(--color-forge-orange);">01</span>
          <h3 class="text-headline-sm" data-i18n="vision_title">Our Vision</h3>
          <p class="text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.6;" data-i18n="vision_desc">
            To be the first choice and trusted partner in the field of rebar and structural preparation solutions, by providing high-quality products including standard and fabricated rebar, floor mesh, and diverse products that satisfy the requirements of the building and construction sector.
          </p>
        </div>

        <!-- Card 2: Mission -->
        <div class="industrial-card flex flex-col gap-sm reveal-item" style="border-top: 3px solid var(--color-forge-orange);">
          <span class="font-label-caps" style="color: var(--color-forge-orange);">02</span>
          <h3 class="text-headline-sm" data-i18n="mission_title">Our Mission</h3>
          <p class="text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.6;" data-i18n="mission_desc">
            To deliver reliable structural products and solutions that unite high quality, precision, and rapid execution, while building sustainable relationships grounded in commitment, integrity, and client satisfaction.
          </p>
        </div>

        <!-- Card 3: Goals -->
        <div class="industrial-card flex flex-col gap-sm reveal-item" style="border-top: 3px solid var(--color-forge-orange);">
          <span class="font-label-caps" style="color: var(--color-forge-orange);">03</span>
          <h3 class="text-headline-sm" data-i18n="goals_title">Our Goals</h3>
          <ul class="flex flex-col gap-xs text-body-md" style="color: var(--color-on-surface-variant); line-height: 1.6; padding-left: 1.25rem;">
            <li data-i18n="goal_1">Provide reliable products that meet diverse project criteria.</li>
            <li data-i18n="goal_2">Fabricate and detail rebar strictly according to approved drawings and dimensions.</li>
            <li data-i18n="goal_3">Deliver solutions and preparations that accelerate jobsite execution.</li>
            <li data-i18n="goal_4">Build enduring, sustainable relationships with our clients and partners.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Official Company Documents & Credentials (Brochure Pages 9 & 10) -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container flex flex-col gap-lg">
      <div class="section-header-row reveal-item">
        <div>
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="docs_tag">OFFICIAL ACCREDITATIONS & CREDENTIALS</span>
          <h2 class="text-headline-lg uppercase" data-i18n="docs_title">
            OFFICIAL COMPANY DOCUMENTS
          </h2>
          <p class="text-body-md" style="color: var(--color-on-surface-variant); max-width: 44rem; margin-top: var(--space-xs);" data-i18n="docs_desc">
            Awtad Alkhaleej Alarabi Company is fully registered, tax compliant, and officially recognized across Saudi Arabian governmental and financial authorities.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-md">
        <!-- Doc 1: CR -->
        <div class="industrial-card flex flex-col justify-between reveal-item">
          <div class="flex flex-col gap-xs">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="doc_1_title">Commercial Registration</span>
            <div class="font-technical text-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0.5rem 0;" data-i18n="doc_1_num">
              7051329840
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="doc_1_desc">
              Ministry of Commerce • Limited Liability Single-Person Company • Status: Active
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="margin-top: 1rem; width: fit-content;">
            Ministry of Commerce
          </div>
        </div>

        <!-- Doc 2: VAT -->
        <div class="industrial-card flex flex-col justify-between reveal-item">
          <div class="flex flex-col gap-xs">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="doc_2_title">VAT Registration Certificate</span>
            <div class="font-technical text-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0.5rem 0;" data-i18n="doc_2_num">
              314160687500003
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="doc_2_desc">
              Zakat, Tax and Customs Authority (ZATCA) • Fully Registered Taxpayer
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="margin-top: 1rem; width: fit-content;">
            ZATCA Certified
          </div>
        </div>

        <!-- Doc 3: Distributor -->
        <div class="industrial-card flex flex-col justify-between reveal-item">
          <div class="flex flex-col gap-xs">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="doc_3_title">Authorized Dealership Letter</span>
            <div class="font-technical text-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0.5rem 0;" data-i18n="doc_3_num">
              Central Region Distributor
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="doc_3_desc">
              Official certification from AbdulKarim Al-Rajhi Steel Company as authorized distributor
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="margin-top: 1rem; width: fit-content;">
            AbdulKarim Al-Rajhi Steel
          </div>
        </div>

        <!-- Doc 4: Bank IBAN -->
        <div class="industrial-card flex flex-col justify-between reveal-item">
          <div class="flex flex-col gap-xs">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="doc_4_title">Bank Account & IBAN Letter</span>
            <div class="font-technical text-body-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0.5rem 0; word-break: break-all;" data-i18n="doc_4_num">
              SA59 8000 0487 6080 1314 0043
            </div>
            <p class="text-body-sm" style="color: var(--color-on-surface-variant);" data-i18n="doc_4_desc">
              Account No: 487000010006083140043 • Official Al Rajhi Bank IBAN Letter
            </p>
          </div>
          <div class="badge-chip font-label-mono" style="margin-top: 1rem; width: fit-content;">
            Al Rajhi Bank
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Operations & Facility Gallery (Brochure Pages 11 & 12) -->
  <section class="section-container" style="background-color: var(--color-surface-lowest);">
    <div class="container flex flex-col gap-lg">
      <div class="section-header-row reveal-item">
        <div>
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="facilities_tag">OPERATIONS & FACILITIES</span>
          <h2 class="text-headline-lg uppercase" data-i18n="facilities_title">
            OUR WORK & PRODUCTION PREPARATION
          </h2>
          <p class="text-body-md" style="color: var(--color-on-surface-variant); max-width: 44rem; margin-top: var(--space-xs);" data-i18n="facilities_desc">
            We provide integrated solutions for the supply and preparation of rebar and construction supplies, tailored to client specifications and project needs.
          </p>
        </div>
      </div>

      <!-- 6-Image Photo Grid from Brochure Pages 11 & 12 -->
      <div class="grid md:grid-cols-3 gap-md">
        <!-- Photo 1: Stirrup Bundles -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/gallery/stirrup-bundles.jpg" alt="Stirrups ready for dispatch" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_1">Prefabricated Stirrup Ties</span>
          </div>
        </div>

        <!-- Photo 2: Spiral Bending -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/gallery/spiral-bending.jpg" alt="Spiral bending machine" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_2">Pile & Column Spirals</span>
          </div>
        </div>

        <!-- Photo 3: Shearing & Detailing Line -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/gallery/shearing-line.jpg" alt="Rebar shearing line" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_3">Automated Shearing & BBS Sizing</span>
          </div>
        </div>

        <!-- Photo 4: Floor Wire Mesh -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/products/wire-mesh.jpg" alt="Welded floor wire mesh storage" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_4">Welded Wire Mesh Panels</span>
          </div>
        </div>

        <!-- Photo 5: Black Binding Wire -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/products/binding-wire.jpg" alt="Binding wire coils" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_5">Tie Wire Coils 18 & 22 BWG</span>
          </div>
        </div>

        <!-- Photo 6: Crane Loading -->
        <div class="industrial-card p-0 overflow-hidden reveal-item" style="padding: 0;">
          <img src="/assets/gallery/crane-hoisting.jpg" alt="Crane hoisting rebar bundles" style="width: 100%; height: 14rem; object-fit: cover;">
          <div style="padding: 0.75rem 1rem;">
            <span class="font-label-mono text-body-sm" style="color: var(--color-forge-orange);" data-i18n="facility_img_6">Rigged Crane Loading & Jobsite Trucking</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bottom CTA Banner -->
  <section class="section-container" style="background-color: var(--color-surface);">
    <div class="container">
      <div class="industrial-card p-lg flex flex-col md:flex-row items-center justify-between gap-lg" style="background: linear-gradient(135deg, var(--color-surface-lowest), var(--color-surface)); border: 1px solid var(--color-outline-variant-30);">
        <div class="flex flex-col gap-xs">
          <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="contact_cta_tag">REBAR PROCUREMENT</span>
          <h3 class="text-headline-md uppercase" data-i18n="contact_cta_title">
            Ready to order rebar for your jobsite?
          </h3>
          <p class="text-body-md" style="color: var(--color-on-surface-variant);" data-i18n="contact_cta_desc">
            Speak with our sales engineers in Riyadh to confirm daily pricing, stock availability, and scheduled deliveries.
          </p>
        </div>
        <div class="flex flex-wrap gap-md">
          <a href="/contact" class="btn btn-primary btn-lg" data-i18n="contact_cta_btn">
            Call Now: +966 58 330 0400 →
          </a>
        </div>
      </div>
    </div>
  </section>
`;
