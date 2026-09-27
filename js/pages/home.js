export const homePage = `
    <!-- =========================================================================
         SECTION 01: HERO SECTION
         ========================================================================= -->
    <section class="hero-section" id="hero">
      <!-- High-Resolution Industrial Background Image from Official Catalog -->
      <div class="hero-bg-media" 
           style="background-image: url('/assets/hero/rebar-hero.jpg'); opacity: 0.45;">
      </div>

      <!-- Atmospheric Gradient Overlays -->
      <div class="hero-gradient-overlay"></div>
      <div class="hero-gradient-vertical"></div>

      <!-- Main Hero Text Content -->
      <div class="container hero-content">
        <div class="hero-text-block reveal-item">
          <!-- Hero Headline -->
          <h1 class="text-display-hero" data-i18n="hero_title">
            REBAR & CONSTRUCTIVE<br>PRECISION SOLUTIONS.
          </h1>

          <!-- Subheadline Paragraph -->
          <p class="text-body-lg" data-i18n="hero_desc">
            Awtad Alkhaleej Alarabi Company specializes in integrated rebar prefabrication, custom cut & bend per certified engineering drawings, stirrups, spirals, wire mesh, and certified construction accessories across Saudi Arabia.
          </p>

          <!-- Dual Call to Actions -->
          <div class="flex flex-wrap gap-md" style="padding-top: var(--space-md);">
            <a href="/contact" class="btn btn-primary btn-lg" data-i18n="hero_cta_quote">
              Request a Quote →
            </a>
            <a href="#catalog" class="btn btn-surface btn-lg" data-i18n="hero_cta_catalog">
              Explore Products →
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Technical Ticker / Metrics Bar -->
      <div class="hero-ticker-bar">
        <div class="container">
          <div class="hero-ticker-grid">
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_01_title">Standard Rebar</span>
              <span class="text-body-sm" data-i18n="metric_01_sub">SABIC, Rajhi & National Mills</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_02_title">Cut & Bend Detailing</span>
              <span class="text-body-sm" data-i18n="metric_02_sub">Per Engineering Drawings</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_03_title">Stirrups & Spirals</span>
              <span class="text-body-sm" data-i18n="metric_03_sub">Custom Geometries & Piles</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" style="color: var(--color-forge-orange);" data-i18n="metric_04_title">Wire Mesh & Spacers</span>
              <span class="text-body-sm" data-i18n="metric_04_sub">Mesh 4-12mm, Wire & Spacers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 02: COMPANY STATEMENT (Light Contrast Inversion)
         ========================================================================= -->
    <section class="section-wrapper section-light-inversion" id="about-brief">
      <div class="container">
        <div class="grid-12 items-center">
          <!-- Left Column: Dossier Details & Accreditations -->
          <div class="col-6 flex-col gap-md reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="profile_overline">REBAR FABRICATION & PREPARATION</span>
            <h2 class="text-headline-lg section-title" data-i18n="profile_title">
              PRECISION REBAR. ENGINEERED TO ACCELERATE CONSTRUCTION.
            </h2>

            <p class="text-body-md" data-i18n="profile_desc">
              We rely on quality, precision, and modern mechanization to provide rebar ready for jobsite execution, contributing to faster project progress, reducing waste, and maximizing efficiency. We partner with elite steel manufacturers in the Kingdom to be a trusted partner for our clients, providing solutions that meet their project requirements with efficiency and commitment.
            </p>

            <!-- Technical Certification Badges -->
            <div class="cert-badge-grid">
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_cr_title">CR 7051329840</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_cr_desc">Ministry of Commerce</span>
              </div>
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_vat_title">VAT 314160687500003</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_vat_desc">ZATCA Taxpayer</span>
              </div>
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_dist_title">Authorized Distributor</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_dist_desc">AbdulKarim Al-Rajhi Steel</span>
              </div>
            </div>

            <div class="font-technical" style="color: #454748; padding-top: var(--space-xs);" data-i18n="profile_capacity">
              Headquarters: Riyadh, Al-Noor District • Fast Jobsite Delivery Across KSA
            </div>
          </div>

          <!-- Right Column: Real Workshop Photo from Catalog -->
          <div class="col-6 reveal-item">
            <div class="technical-photo-pod" style="overflow: hidden; border-radius: var(--radius-sm); border: 1px solid var(--color-outline-variant-30); aspect-ratio: 4/3;">
              <img src="/assets/gallery/warehouse.jpg" 
                   alt="Awtad Alkhaleej Alarabi factory warehouse and rebar prefabrication yard"
                   style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 03: PRODUCT CATALOG OVERVIEW (Brochure Pages 7 & 8)
         ========================================================================= -->
    <section class="section-wrapper section-catalog" id="catalog">
      <div class="container flex flex-col gap-lg">
        <!-- Section Header Row -->
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="catalog_overline">PRODUCT SPECIFICATIONS</span>
            <h2 class="text-headline-lg section-title" data-i18n="catalog_title">
              OUR REBAR & CONSTRUCTION PRODUCTS
            </h2>
          </div>
        </div>

        <!-- Segmented Category Filters -->
        <div class="category-filter-bar reveal-item">
          <button type="button" class="filter-btn active" data-filter="all" data-i18n="filter_all">
            All Products
          </button>
          <button type="button" class="filter-btn" data-filter="standard" data-i18n="filter_standard">
            Standard Rebar
          </button>
          <button type="button" class="filter-btn" data-filter="cutbend" data-i18n="filter_cutbend">
            Cut & Bent Rebar
          </button>
          <button type="button" class="filter-btn" data-filter="stirrups" data-i18n="filter_stirrups">
            Stirrups & Spirals
          </button>
          <button type="button" class="filter-btn" data-filter="mesh" data-i18n="filter_mesh">
            Wire Mesh
          </button>
          <button type="button" class="filter-btn" data-filter="accessories" data-i18n="filter_accessories">
            Building Accessories
          </button>
        </div>

        <!-- Interactive Catalog Grid -->
        <div class="catalog-cards-grid" id="catalog-products-grid">
          <!-- Card 1: Standard Rebar -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="standard">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/standard-rebar.jpg" alt="Standard Deformed Rebar" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_1_title">
                Standard Deformed Rebar
              </h3>
              <p class="text-body-sm" data-i18n="prod_1_desc">
                High-grade certified deformed steel rebar supplied directly from accredited national manufacturers, fully compliant with structural project criteria and certified standards.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Approved Mills</span>
              <p class="font-label-mono" data-i18n="prod_1_spec">
                SABIC (Hadeed) • Rajhi Steel • Al-Ittefaq • AbdulKarim Al-Rajhi • Watani • Folaz Steel
              </p>
            </div>
          </div>

          <!-- Card 2: Cut & Bent Rebar -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="cutbend">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/rebar-cut-bend.jpg" alt="Cut & Bent / Fabricated Rebar" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_2_title">
                Cut & Bent / Fabricated Rebar
              </h3>
              <p class="text-body-sm" data-i18n="prod_2_desc">
                Precision shearing, cold bending, and detailing of rebar according to structural engineer drawings and Bar Bending Schedules (BBS), eliminating jobsite waste and delays.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Fabrication Tolerances</span>
              <p class="font-label-mono" data-i18n="prod_2_spec">
                Automated CNC bending • Custom angle and length schedules • 8mm to 36mm diameters
              </p>
            </div>
          </div>

          <!-- Card 3: Stirrups & Spirals -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="stirrups">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/rebar-stirrups.jpg" alt="Custom Stirrups & Column Spirals" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_3_title">
                Custom Stirrups & Column Spirals
              </h3>
              <p class="text-body-sm" data-i18n="prod_3_desc">
                Engineered stirrups (kanat) fabricated in precise dimensions and shapes according to client specifications, along with continuous helical spirals for foundation piles and columns.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Forms & Configurations</span>
              <p class="font-label-mono" data-i18n="prod_3_spec">
                Rectangular, circular, & polygonal ties • Continuous helical pile spirals • Quick site placement
              </p>
            </div>
          </div>

          <!-- Card 4: Wire Mesh -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="mesh">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/wire-mesh.jpg" alt="Welded Floor Wire Mesh" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_4_title">
                Welded Floor Wire Mesh
              </h3>
              <p class="text-body-sm" data-i18n="prod_4_desc">
                High-tensile welded steel wire mesh in various mesh dimensions and wire gauges for ground slabs, concrete paving, roadworks, and structural decking.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Wire Specs</span>
              <p class="font-label-mono" data-i18n="prod_4_spec">
                Wire diameters from 4mm up to 12mm • Standard panels & customized slab sizes
              </p>
            </div>
          </div>

          <!-- Card 5: Binding Wire -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="accessories">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/binding-wire.jpg" alt="Black Annealed Binding Wire" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_5_title">
                Black Annealed Binding Wire
              </h3>
              <p class="text-body-sm" data-i18n="prod_5_desc">
                Ductile black annealed tie wire engineered for tying rebar cages, stirrups, and mesh securely. Available in standard project coil weights.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Gauge & Packaging</span>
              <p class="font-label-mono" data-i18n="prod_5_spec">
                Gauges: 18 BWG & 22 BWG • Standard 5 kg & 6 kg coil bundles
              </p>
            </div>
          </div>

          <!-- Card 6: Spacers & Shambar -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between product-card-animated" data-category="accessories">
            <div class="product-card-media" style="height: 220px; overflow: hidden; border-radius: var(--radius-xs);">
              <img src="/assets/products/concrete-spacers.jpg" alt="Concrete Spacers & Shambar" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_6_title">
                Concrete Spacers & Shambar
              </h3>
              <p class="text-body-sm" data-i18n="prod_6_desc">
                Heavy-duty concrete biscuits (cover blocks) and shambar spacers in various cover depths to ensure exact concrete cover and protect steel from corrosion.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Cover Dimensions</span>
              <p class="font-label-mono" data-i18n="prod_6_spec">
                Various depths (25mm, 50mm, 75mm) • High compressive strength • Code compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 04: FEATURED REBAR BENDING SPECIFICATION BREAKDOWN (DOSSIER)
         ========================================================================= -->
    <section class="section-wrapper section-spec-dossier" id="dossier">
      <div class="container flex flex-col gap-lg">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="dossier_overline">TECHNICAL SPECIFICATIONS</span>
            <h2 class="text-headline-lg section-title" data-i18n="dossier_title">
              REBAR FABRICATION & BENDING STANDARDS
            </h2>
          </div>
          <div class="font-technical" style="color: var(--color-on-surface-variant);" data-i18n="dossier_standard">
            Standards: SASO ASTM A615 / BS 4449 / Saudi Building Code (SBC 304)
          </div>
        </div>

        <!-- Split Dossier: Left Blueprint Schematic, Right Specification Table -->
        <div class="grid-12">
          <!-- Left: Technical Vector Schematic Wireframe Diagram for Rebar & Stirrups -->
          <div class="col-5 blueprint-container reveal-item">
            <div class="flex justify-between items-center font-label-mono" style="color: var(--color-outline);">
              <span>Rebar Hook & Stirrup Geometry</span>
              <span>SBC 304 Code Standard</span>
            </div>

            <!-- Precision Technical Rebar Bending Schematic SVG -->
            <div class="blueprint-svg-wrapper">
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rebar Bending & Stirrup Geometry Blueprint">
                <!-- Outer Stirrup Tie Frame (کانة مربعة/مستطيلة) -->
                <rect x="70" y="35" width="260" height="150" rx="10" stroke="var(--color-forge-orange)" stroke-width="3" fill="none"/>
                
                <!-- Internal 4 Main Longitudinal Corner Bars (أسياخ طولية) -->
                <circle cx="85" cy="50" r="8" fill="#FFB68D" stroke="#FFFFFF" stroke-width="1.5"/>
                <circle cx="315" cy="50" r="8" fill="#FFB68D" stroke="#FFFFFF" stroke-width="1.5"/>
                <circle cx="85" cy="170" r="8" fill="#FFB68D" stroke="#FFFFFF" stroke-width="1.5"/>
                <circle cx="315" cy="170" r="8" fill="#FFB68D" stroke="#FFFFFF" stroke-width="1.5"/>

                <!-- 135° Seismic Stirrup Hook Detailing at top-right -->
                <path d="M 315 35 L 325 35 A 8 8 0 0 1 330 43 L 300 73" stroke="var(--color-forge-orange)" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M 330 48 L 330 40 A 8 8 0 0 0 322 35 L 295 62" stroke="var(--color-forge-orange)" stroke-width="3" stroke-linecap="round" fill="none"/>

                <!-- Dimension Lines -->
                <line x1="45" y1="35" x2="45" y2="185" stroke="#797B7C" stroke-width="1"/>
                <line x1="41" y1="35" x2="49" y2="35" stroke="#797B7C" stroke-width="1"/>
                <line x1="41" y1="185" x2="49" y2="185" stroke="#797B7C" stroke-width="1"/>
                <text x="32" y="115" fill="#797B7C" font-family="Space Grotesk" font-size="10" transform="rotate(-90 32 115)">h = Stirrup Height</text>

                <line x1="70" y1="205" x2="330" y2="205" stroke="#797B7C" stroke-width="1"/>
                <line x1="70" y1="201" x2="70" y2="209" stroke="#797B7C" stroke-width="1"/>
                <line x1="330" y1="201" x2="330" y2="209" stroke="#797B7C" stroke-width="1"/>
                <text x="200" y="222" fill="#797B7C" font-family="Space Grotesk" font-size="10" text-anchor="middle">w = Stirrup Width (b)</text>

                <!-- Annotation Callouts -->
                <circle cx="315" cy="50" r="14" stroke="#8E9193" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
                <line x1="328" y1="42" x2="365" y2="25" stroke="#FFB68D" stroke-width="1"/>
                <text x="368" y="22" fill="#FFB68D" font-family="Space Grotesk" font-size="9">135° Seismic Hook</text>
                <text x="368" y="34" fill="#8E9193" font-family="Space Grotesk" font-size="8">L_ext ≥ 10 d_b (75mm)</text>

                <circle cx="85" cy="50" r="14" stroke="#8E9193" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
                <line x1="72" y1="42" x2="10" y2="20" stroke="#FFB68D" stroke-width="1"/>
                <text x="10" y="15" fill="#FFB68D" font-family="Space Grotesk" font-size="9">Corner Bar d_b</text>
                <text x="10" y="26" fill="#8E9193" font-family="Space Grotesk" font-size="8">Mandrel Pin D ≥ 4d_b</text>
              </svg>
            </div>

            <div class="flex justify-between items-center font-label-mono" style="color: var(--color-outline); padding-top: var(--space-xs);">
              <span>Mandrel Radius: Verified CNC Pin</span>
              <span style="color: var(--color-forge-orange);">Steel: Grade 60 (420 MPa)</span>
            </div>
          </div>

          <!-- Right: Technical Specification Table -->
          <div class="col-7 spec-details-card reveal-item">
            <div class="flex flex-col gap-md">
              <h4 class="font-technical" data-i18n="dossier_param_heading">
                Reinforcement Detailing Parameters
              </h4>

              <table class="spec-table" aria-label="Rebar Engineering Parameters">
                <tbody>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_material_title">Steel Grade & Metallurgical Origin</td>
                    <td data-i18n="param_material_desc">High-yield deformed carbon steel Grade 60 (420 MPa) / Grade 75 (520 MPa), 100% prime domestic billets from SABIC, Rajhi, and Al-Ittefaq mills.</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_dim_title">Fabrication Size Spectrum</td>
                    <td data-i18n="param_dim_desc">Nominal bar diameters from Ø8mm up to Ø36mm. Standard bar lengths up to 12.0m; custom shears to any required engineering cut-length.</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_standards_title">Bending & Shearing Tolerances</td>
                    <td data-i18n="param_standards_desc">Precision cold-bending pin diameters and angle tolerances strictly adhering to ACI 318, BS 8666, and SASO code mandates to prevent micro-fissuring.</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_surface_title">Protection & Storage Compliance</td>
                    <td data-i18n="param_surface_desc">Protected covered storage preventing surface degradation, oil contamination, or excessive oxidation prior to jobsite delivery.</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_qa_title">Quality Assurance & MTC Tracking</td>
                    <td data-i18n="param_qa_desc">100% heat traceability with each batch accompanied by Official Mill Test Certificates (MTC) verifying yield, tensile strength, and elongation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-md" style="padding-top: var(--space-lg);">
              <a href="/contact" class="btn btn-primary" data-i18n="dossier_btn">
                Request Detailed Price Quotation →
              </a>
              <span class="font-label-mono" style="color: var(--color-outline);" data-i18n="dossier_models_note">
                Bar Bending Schedules (BBS), structural drawings, and BOQ submissions accepted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 05: CORE CAPABILITIES & SERVICES (Page 6)
         ========================================================================= -->
    <section class="section-wrapper section-capabilities" id="services">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="cap_overline">CORE CAPABILITIES</span>
            <h2 class="text-headline-lg section-title" data-i18n="cap_title">
              OUR INTEGRATED SERVICES
            </h2>
          </div>
        </div>

        <!-- 4-Column Technical Cards -->
        <div class="grid-cols-4">
          <!-- Service 01 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_1_title">Rebar Supply</h3>
              <p class="text-body-sm" data-i18n="cap_1_desc">
                Procuring and delivering certified rebar from recognized national steel mills with guaranteed quality and competitive pricing.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">National Partners</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">SABIC • RAJHI • ITTEFAQ</span>
            </div>
          </div>

          <!-- Service 02 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_2_title">Cut & Bend Detailing</h3>
              <p class="text-body-sm" data-i18n="cap_2_desc">
                Shearing and bending rebar strictly according to structural engineer drawings and approved Bar Bending Schedules.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Machine Automation</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">AUTOMATED CNC BENDERS</span>
            </div>
          </div>

          <!-- Service 03 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_3_title">Custom Preparation</h3>
              <p class="text-body-sm" data-i18n="cap_3_desc">
                Specialized fabrication of ties, links, spirals, and reinforcement cages tailored to site engineer specifications.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Custom Output</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">STIRRUPS • SPIRALS</span>
            </div>
          </div>

          <!-- Service 04 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_4_title">Construction Accessories</h3>
              <p class="text-body-sm" data-i18n="cap_4_desc">
                Complete supply of welded floor mesh, tie wire rolls, shambar, and concrete cover biscuits in one consolidated shipment.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Jobsite Supplies</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">MESH • WIRE • SPACERS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 06: MANUFACTURING PROCESS (Linear Pipeline)
         ========================================================================= -->
    <section class="section-wrapper section-process" id="process">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="proc_overline">METHODICAL EXECUTION</span>
            <h2 class="text-headline-lg section-title" data-i18n="proc_title">
              FOUR-STAGE FABRICATION WORKFLOW
            </h2>
          </div>
        </div>

        <div class="grid-cols-4">
          <!-- Step 1 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">01</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_1_title">Drawing Analysis & BBS</h3>
              <p class="text-body-sm" data-i18n="step_1_desc">
                Detailed study of structural drawings, bar schedule optimization, and exact cutting list calculation to minimize waste.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Tolerance: ±0.00 mm (BBS)
            </div>
          </div>

          <!-- Step 2 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">02</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_2_title">Precision Shearing</h3>
              <p class="text-body-sm" data-i18n="step_2_desc">
                High-speed automated CNC shearing to exact millimetric lengths per verified structural engineering schedules.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Cut Precision: Millimetric
            </div>
          </div>

          <!-- Step 3 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">03</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_3_title">Automated Cold Bending</h3>
              <p class="text-body-sm" data-i18n="step_3_desc">
                Multi-angle bending of rebar, stirrups, and spirals utilizing automated bending machines with correct mandrel radii.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Bending Code: SBC 304
            </div>
          </div>

          <!-- Step 4 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">04</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_4_title">Tagging & Site Delivery</h3>
              <p class="text-body-sm" data-i18n="step_4_desc">
                Systematic bundling, color-coded tag labeling by structural element (columns, beams, slabs), and scheduled jobsite dispatch.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Dispatch: Crane Trucks
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 07: SUCCESS PARTNERS & APPROVED MILLS (Brochure Page 13)
         ========================================================================= -->
    <section class="section-wrapper section-partners" id="partners" style="background-color: var(--color-surface);">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="partners_overline">AUTHORIZED MILLS & ALLIANCES</span>
            <h2 class="text-headline-lg section-title" data-i18n="partners_title">
              OUR SUCCESS PARTNERS
            </h2>
            <p class="text-body-md" style="max-width: 44rem; color: var(--color-on-surface-variant); margin-top: var(--space-xs);" data-i18n="partners_desc">
              We are proud to collaborate with the Kingdom's leading national steel producers, ensuring uninterrupted supply and uncompromised quality.
            </p>
          </div>
        </div>

        <!-- 8-Card Partners Grid with Authentic Clean Styling -->
        <div class="grid-cols-4">
          <!-- Partner 1: SABIC Hadeed -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/sabic-hadeed.jpg" alt="Hadeed SABIC">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_sabic">Hadeed / SABIC</span>
          </div>

          <!-- Partner 2: Rajhi Steel -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/rajhi-steel.jpg" alt="Rajhi Steel">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_rajhi_steel">Rajhi Steel Industries</span>
          </div>

          <!-- Partner 3: Al-Ittefaq Steel -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/ittefaq-steel.jpg" alt="Al-Ittefaq Steel">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_ittefaq">Al-Ittefaq Steel</span>
          </div>

          <!-- Partner 4: AbdulKarim Al-Rajhi Steel -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/abdulkarim-alrajhi.jpg" alt="AbdulKarim Al-Rajhi Steel">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_abdulkarim">AbdulKarim Al-Rajhi Steel</span>
          </div>

          <!-- Partner 5: Folaz Steel -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/folaz-steel.jpg" alt="Folaz Steel">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_folaz">Folaz Steel</span>
          </div>

          <!-- Partner 6: STEPCO -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/stepco.jpg" alt="Steel Products Co. STEPCO">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_stepco">Steel Products Co. (STEPCO)</span>
          </div>

          <!-- Partner 7: AlRajhi Endowment -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/rajhi-endowment.jpg" alt="AlRajhi Endowment">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_rajhi_endow">AlRajhi Endowment</span>
          </div>

          <!-- Partner 8: National Building & Marketing -->
          <div class="industrial-card flex flex-col items-center justify-between text-center reveal-item" style="padding: 1.25rem;">
            <div class="partner-logo-tile">
              <img src="/assets/partners/nbm.jpg" alt="National Building & Marketing">
            </div>
            <span class="font-technical text-body-sm" style="font-weight: 600; color: #E0E6ED;" data-i18n="partner_nbm">National Building & Marketing</span>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 08: COMPANY STATISTICS
         ========================================================================= -->
    <section class="section-wrapper section-statistics" id="statistics">
      <div class="container">
        <div class="grid-cols-4">
          <!-- Stat 1 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="100" data-suffix="%">100%</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_3_label">
              PRIMARY SOURCE PURITY
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_3_desc">
              100% certified national steel from SABIC, Rajhi, and approved mills
            </span>
          </div>

          <!-- Stat 2 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number accent tabular-nums" data-target="24" data-suffix="/7">24/7</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_1_label">
              RIYADH LOGISTICS HUB
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_1_desc">
              Strategic centralized yard in Al-Noor District serving projects across the Kingdom
            </span>
          </div>

          <!-- Stat 3 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="100" data-suffix="K+">100K+</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_2_label">
              TONNAGE CAPACITY
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_2_desc">
              High-volume supply and daily automated cutting and bending capacity
            </span>
          </div>

          <!-- Stat 4 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="4" data-suffix=" PILLARS">4 PILLARS</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_4_label">
              CORE PILLARS
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_4_desc">
              Steel Quality • Preparation Precision • Delivery Speed • Execution Trust
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 09: WHY AWTAD AL KHALEEJ (Brochure Page 14)
         ========================================================================= -->
    <section class="section-wrapper section-pillars" id="why-us">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <div>
            <span class="font-label-caps" style="color: var(--color-forge-orange);" data-i18n="why_overline">CORE VALUE PROPOSITION</span>
            <h2 class="text-headline-lg section-title" data-i18n="why_title">
              WHY CHOOSE AWTAD AL KHALEEJ?
            </h2>
          </div>
        </div>

        <!-- 5 Technical Pillars Grid -->
        <div class="grid-cols-4" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
          <!-- Pillar 1 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);">01</span>
            <h3 class="text-headline-sm" data-i18n="pillar_1_title">Reliable Quality</h3>
            <p class="text-body-sm" data-i18n="pillar_1_desc">
              Certified products sourced exclusively from renowned national mills and manufacturers, fully aligned with customer requirements and standards.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);">02</span>
            <h3 class="text-headline-sm" data-i18n="pillar_2_title">Preparation Precision</h3>
            <p class="text-body-sm" data-i18n="pillar_2_desc">
              Shearing, bending, and forming of rebar strictly according to structural engineer drawings and approved dimension schedules.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);">03</span>
            <h3 class="text-headline-sm" data-i18n="pillar_3_title">Integrated Solutions</h3>
            <p class="text-body-sm" data-i18n="pillar_3_desc">
              From standard rebar to pre-formed steel, floor mesh, and construction accessories—everything your project requires in one place.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);">04</span>
            <h3 class="text-headline-sm" data-i18n="pillar_4_title">Delivery Speed</h3>
            <p class="text-body-sm" data-i18n="pillar_4_desc">
              Swift order preparation and synchronized delivery scheduling that maintains business continuity and drastically reduces jobsite wait times.
            </p>
          </div>

          <!-- Pillar 5 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <span class="font-label-caps" style="color: var(--color-forge-orange);">05</span>
            <h3 class="text-headline-sm" data-i18n="pillar_5_title">Trusted Partnership</h3>
            <p class="text-body-sm" data-i18n="pillar_5_desc">
              We are dedicated to building sustainable relationships with our clients and partners based on mutual trust, integrity, and strict commitment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 10: COMPACT INDUSTRIAL CTA BANNER
         ========================================================================= -->
    <section class="section-wrapper section-cta-banner" id="cta-contact">
      <!-- Radial Dot Mesh Background -->
      <div class="cta-banner-mesh"></div>

      <div class="container cta-banner-container reveal-item">
        <div class="cta-banner-content">
          <span class="font-label-caps cta-banner-badge" data-i18n="cta_banner_overline">PROJECT ESTIMATION & PROCUREMENT</span>
          <h2 class="text-display-hero cta-banner-title" data-i18n="rfq_title">
            READY TO SUPPLY YOUR NEXT PROJECT?
          </h2>
          <p class="text-body-lg cta-banner-desc" data-i18n="cta_banner_desc">
            Submit your Bar Bending Schedules, structural drawings, or Bill of Quantities (BOQ) for prompt estimation and guaranteed delivery scheduling.
          </p>
        </div>

        <div class="cta-banner-actions">
          <a href="/contact" class="btn btn-primary btn-lg" data-i18n="cta_banner_btn">
            Request a Quotation →
          </a>
          <div class="font-label-mono cta-banner-meta" data-i18n="rfq_desk_info">
            Direct Sales: +966 58 330 0400 • Email: awtadalkalej@gmail.com
          </div>
        </div>
      </div>
    </section>
`;
