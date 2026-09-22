export const homePage = `
    <!-- =========================================================================
         SECTION 01: HERO SECTION
         ========================================================================= -->
    <section class="hero-section" id="hero">
      <!-- Parallax Industrial Background Image -->
      <div class="hero-bg-media" 
           style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7xteU-LlMgU0xWFZWJi7TNunHO9a-chjDSeIbdqEnSdpCNaXIeCzrPd_K89TSLvbhnsU7rK1wJOKvbeZda_hn8H8eHtl5CFvQjgo8I2fT8Ivk93u7m9o9BY7DgFKAOzRm30DbvKxZmg_U_cIlG5clXoFkptYKeMZ8i_mxdmHrTuZj3qvCrj_4gxIsd9EADXn3U9RoHUJytRmNjgzj280P9RC2cWF5MOMyDdXchGpW15Zvf7B5DjvE');">
      </div>

      <!-- Atmospheric Gradient Overlays -->
      <div class="hero-gradient-overlay"></div>
      <div class="hero-gradient-vertical"></div>

      <!-- Main Hero Text Content -->
      <div class="container hero-content">
        <div class="hero-text-block reveal-item">
          <!-- Hero Headline -->
          <h1 class="text-display-hero" data-i18n="hero_title">
            ENGINEERED<br>FOR STRENGTH.
          </h1>

          <!-- Subheadline Paragraph -->
          <p class="text-body-lg" data-i18n="hero_desc">
            Precision heavy-tonnage steel fabrication and computational high-tolerance structural engineering built specifically for high-stress GCC megaprojects and demanding energy infrastructure.
          </p>

          <!-- Dual Call to Actions -->
          <div class="flex flex-wrap gap-md" style="padding-top: var(--space-md);">
            <a href="#rfq" class="btn btn-primary btn-lg" data-i18n="hero_cta_quote">
              Request a Quote →
            </a>
            <a href="#catalog" class="btn btn-surface btn-lg" data-i18n="hero_cta_catalog">
              View Catalog →
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Technical Ticker / Metrics Bar -->
      <div class="hero-ticker-bar">
        <div class="container">
          <div class="hero-ticker-grid">
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_01_title">Steel Fabrication</span>
              <span class="text-body-sm" data-i18n="metric_01_sub">High-Tonnage Girders</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_02_title">Structural Engineering</span>
              <span class="text-body-sm" data-i18n="metric_02_sub">Tekla & BIM Integration</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" data-i18n="metric_03_title">Industrial Skids</span>
              <span class="text-body-sm" data-i18n="metric_03_sub">Modular Subsea Assemblies</span>
            </div>
            <div class="ticker-item">
              <span class="font-technical" style="color: var(--color-forge-orange);" data-i18n="metric_04_title">Precision CNC Tolerance</span>
              <span class="text-body-sm" data-i18n="metric_04_sub">Multi-Axis Laser & Plasma</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 02: COMPANY STATEMENT (Light Contrast Inversion)
         ========================================================================= -->
    <section class="section-wrapper section-light-inversion" id="about">
      <div class="container">
        <div class="grid-12 items-center">
          <!-- Left Column: Dossier Details & Accreditations -->
          <div class="col-6 flex-col gap-md reveal-item">
            <h2 class="text-headline-lg section-title" data-i18n="profile_title">
              FROM RAW STEEL TO ENGINEERED STRUCTURES.
            </h2>

            <p class="text-body-md" data-i18n="profile_desc">
              Operating across the Gulf region with advanced automated plasma cutting, certified robotic sub-arc welding, and high-capacity beam assembly lines. We engineer steel frameworks that anchor national infrastructure, bridge logistics corridors, and sovereign industrial developments.
            </p>

            <!-- Technical Certification Badges -->
            <div class="cert-badge-grid">
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_iso_title">ISO 9001:2015</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_iso_desc">Quality Assured</span>
              </div>
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_aws_title">AWS D1.1</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_aws_desc">Welding Compliant</span>
              </div>
              <div class="cert-badge-item">
                <span class="font-technical cert-badge-code" data-i18n="cert_en_title">EN 1090-2</span>
                <span class="font-label-mono cert-badge-label" data-i18n="cert_en_desc">Execution Class 4</span>
              </div>
            </div>

            <div class="font-technical" style="color: #454748; padding-top: var(--space-xs);" data-i18n="profile_capacity">
              Annual Capacity: 48,000 MT • Max Hoist: 80 Tons
            </div>
          </div>

          <!-- Right Column: High-Tech Manufacturing Photography -->
          <div class="col-6 reveal-item">
            <div class="technical-photo-pod">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6aqq78Z3d_ZpIliLMKgtT9nsKgKYztsz9kCKtCRcfvqXYMBw6cm46z20Bu18uAYCf69p2HCR9kTUhYRj7I921VoF4sNr03oAnzl_KYbwrrlDGL6IBNlETbccVPAkKhTEdX0aceIZe11CtfYfZS0yBJ1NVlsEUD5ugDDnM8pmw7BCmjN6VLhZ7NI3YNOSbxthFphf2NmcNwAVYhmndWXXvRJyB2WotT3agdsoW3bSYIBujNOzvnLu7" 
                   alt="Modern computerized industrial fabrication floor with multi-axis CNC gantry laser cutting table">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 03: PRODUCT CATALOG OVERVIEW
         ========================================================================= -->
    <section class="section-wrapper section-catalog" id="catalog">
      <div class="container flex flex-col gap-lg">
        <!-- Section Header Row -->
        <div class="section-header-row reveal-item">
          <h2 class="text-headline-lg section-title" data-i18n="catalog_title">
            EXPLORE OUR FABRICATED STEEL SOLUTIONS
          </h2>
        </div>

        <!-- Segmented Category Filters -->
        <div class="category-filter-bar reveal-item">
          <button type="button" class="filter-btn active" data-filter="all" data-i18n="filter_all">
            All Divisions
          </button>
          <button type="button" class="filter-btn" data-filter="beams" data-i18n="filter_beams">
            Structural Beams & Girders
          </button>
          <button type="button" class="filter-btn" data-filter="plate" data-i18n="filter_plate">
            Heavy Plate & Trusses
          </button>
          <button type="button" class="filter-btn" data-filter="silos" data-i18n="filter_silos">
            Industrial Storage & Silos
          </button>
          <button type="button" class="filter-btn" data-filter="arch" data-i18n="filter_arch">
            Architectural Steel
          </button>
        </div>

        <!-- Interactive 3-Card Catalog Grid -->
        <div class="grid-cols-3">
          <!-- Card 1 -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between reveal-item" data-category="beams">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_1_title">
                Heavy Welded I-Beams & Columns
              </h3>
              <p class="text-body-sm" data-i18n="prod_1_desc">
                Continuous sub-arc welded fabricated structural sections engineered for skyscraper foundations, crane runways, and stadium roof spans.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Engineering Specifications</span>
              <p class="font-label-mono" data-i18n="prod_1_spec">
                ASTM A992 / Grade 50 • Span up to 48m • Precision drilled CNC hole arrays
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between reveal-item" data-category="plate">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_2_title">
                Box Girders & Long-Span Bridge Trusses
              </h3>
              <p class="text-body-sm" data-i18n="prod_2_desc">
                Torsional stiffness assemblies engineered for long-span viaducts, metro lines, and multi-tier highway overpasses with integral internal diaphragms.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Engineering Specifications</span>
              <p class="font-label-mono" data-i18n="prod_2_spec">
                High load capacity • CNC sub-arc welded • Ultrasonic tested 100% NDT
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="industrial-card catalog-item-card flex flex-col justify-between reveal-item" data-category="silos">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="prod_3_title">
                Custom Industrial Pipe Racks & Skeletal Frames
              </h3>
              <p class="text-body-sm" data-i18n="prod_3_desc">
                Modularized multi-tier process piping racks, catalyst support towers, and petrochemical refinery substructures engineered for severe wind and seismic loads.
              </p>
            </div>
            <div class="card-spec-box">
              <span class="font-label-caps" style="color: var(--color-forge-orange); display: block; margin-bottom: 0.25rem;">Engineering Specifications</span>
              <p class="font-label-mono" data-i18n="prod_3_spec">
                Petrochemical grade • Hot-dip galvanized • Prefabricated modular transport ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 04: FEATURED CATALOG PRODUCT SPECIFICATION BREAKDOWN
         ========================================================================= -->
    <section class="section-wrapper section-spec-dossier" id="dossier">
      <div class="container flex flex-col gap-lg">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-md reveal-item">
          <div>
            <h2 class="text-headline-lg section-title" data-i18n="dossier_title">
              HEAVY FABRICATED PLATE GIRDERS
            </h2>
          </div>
          <div class="font-technical" style="color: var(--color-on-surface-variant);" data-i18n="dossier_standard">
            Standard: AWS D1.1 Structural Welding
          </div>
        </div>

        <!-- Split Dossier: Left Blueprint Schematic, Right Specification Table -->
        <div class="grid-12">
          <!-- Left: Technical Vector Schematic Wireframe Diagram -->
          <div class="col-5 blueprint-container reveal-item">
            <div class="flex justify-between items-center font-label-mono" style="color: var(--color-outline);">
              <span>Elevation View (Cross Section)</span>
              <span>Scale: 1:50 Metric</span>
            </div>

            <!-- Precision Technical Beam Blueprint SVG -->
            <div class="blueprint-svg-wrapper">
              <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Plate Girder Cross-Section Technical Drawing">
                <!-- Top Flange Plate -->
                <rect x="50" y="30" width="300" height="24" fill="#141D20" stroke="currentColor" stroke-width="2"/>
                <!-- Web Plate -->
                <rect x="180" y="54" width="40" height="132" fill="#141D20" stroke="currentColor" stroke-width="2"/>
                <!-- Bottom Flange Plate -->
                <rect x="50" y="186" width="300" height="24" fill="#141D20" stroke="currentColor" stroke-width="2"/>
                <!-- Stiffener Plates (Dotted) -->
                <line x1="120" y1="54" x2="120" y2="186" stroke="#8E9193" stroke-width="1.5" stroke-dasharray="4 2"/>
                <line x1="280" y1="54" x2="280" y2="186" stroke="#8E9193" stroke-width="1.5" stroke-dasharray="4 2"/>
                <!-- Height Dimension Lines -->
                <line x1="30" y1="30" x2="30" y2="210" stroke="#797B7C" stroke-width="1"/>
                <line x1="26" y1="30" x2="34" y2="30" stroke="#797B7C" stroke-width="1"/>
                <line x1="26" y1="210" x2="34" y2="210" stroke="#797B7C" stroke-width="1"/>
                <text x="10" y="125" fill="#797B7C" font-family="Space Grotesk" font-size="10" transform="rotate(-90 10 125)">3500mm</text>
                <!-- Width Dimension Lines -->
                <line x1="50" y1="225" x2="350" y2="225" stroke="#797B7C" stroke-width="1"/>
                <line x1="50" y1="221" x2="50" y2="229" stroke="#797B7C" stroke-width="1"/>
                <line x1="350" y1="221" x2="350" y2="229" stroke="#797B7C" stroke-width="1"/>
                <text x="175" y="238" fill="#797B7C" font-family="Space Grotesk" font-size="10" text-anchor="middle">bf: 800mm</text>
                <!-- Sub-Arc Weld Symbols & Coordinate Callouts -->
                <circle cx="200" cy="54" r="3" fill="#FFB68D"/>
                <line x1="200" y1="54" x2="240" y2="20" stroke="#FFB68D" stroke-width="1"/>
                <text x="245" y="18" fill="#FFB68D" font-family="Space Grotesk" font-size="9">Sub-Arc Double Fillet</text>
              </svg>
            </div>

            <div class="flex justify-between items-center font-label-mono" style="color: var(--color-outline);">
              <span>Inspection: 100% UT Weld Seams</span>
              <span style="color: var(--color-forge-orange);">Stress Grade: S355JR</span>
            </div>
          </div>

          <!-- Right: Technical Specification Table -->
          <div class="col-7 spec-details-card reveal-item">
            <div class="flex flex-col gap-md">
              <h4 class="font-technical" data-i18n="dossier_param_heading">
                Engineering Specification Parameters
              </h4>

              <table class="spec-table" aria-label="Plate Girder Engineering Parameters">
                <tbody>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_material_title">Material Specification</td>
                    <td data-i18n="param_material_desc">High-Strength Structural Steel S355JR / ASTM A572 Gr. 50 / EN 10025-2</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_dim_title">Max Fabrication Dimensions</td>
                    <td data-i18n="param_dim_desc">Web height up to 3,500mm • Flange thickness up to 100mm • Continuous length up to 42m</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_standards_title">Fabrication Standards</td>
                    <td data-i18n="param_standards_desc">AWS D1.1 / AISC 360 Structural Specifications / EN 1090-2 Execution Class 4 (EXC4)</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_surface_title">Surface Treatment</td>
                    <td data-i18n="param_surface_desc">Sa 2.5 Automated Shot-Blasting + Inorganic Zinc Silicate Primer (75µm) + High-Build Epoxy Coating</td>
                  </tr>
                  <tr>
                    <td class="spec-param-title" data-i18n="param_qa_title">Quality Assurance (NDT)</td>
                    <td data-i18n="param_qa_desc">100% Non-Destructive Testing: Radiographic (RT), Phased-Array Ultrasonic (PAUT) & Magnetic Particle Testing (MT)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-md" style="padding-top: var(--space-lg);">
              <a href="#rfq" class="btn btn-primary" data-i18n="dossier_btn">
                Request Technical Data Sheet & Quote →
              </a>
              <span class="font-label-mono" style="color: var(--color-outline);" data-i18n="dossier_models_note">
                DWG / STEP / IFC models available upon application
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 05: SERVICES & CAPABILITIES
         ========================================================================= -->
    <section class="section-wrapper section-capabilities" id="capabilities">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <h2 class="text-headline-lg section-title" data-i18n="cap_title">
            BUILT WITH PRECISION.
          </h2>
        </div>

        <!-- 4-Column Technical Cards -->
        <div class="grid-cols-4">
          <!-- Division 01 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_1_title">Advanced Engineering</h3>
              <p class="text-body-sm" data-i18n="cap_1_desc">
                Full Tekla Structures detailing, 3D BIM integration, finite element analysis (FEA), connection design calculations, and direct CNC export pipeline.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Core System</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">TEKLA • ANSYS FEA</span>
            </div>
          </div>

          <!-- Division 02 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_2_title">CNC Cutting & Forming</h3>
              <p class="text-body-sm" data-i18n="cap_2_desc">
                High-definition CNC plasma beds, heavy oxy-fuel cutting through steel plate up to 200mm thickness, automated beveling, and hydraulic brake presses.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Core System</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">MESSER 24M GANTRY</span>
            </div>
          </div>

          <!-- Division 03 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_3_title">Certified Sub-Arc Fabrication</h3>
              <p class="text-body-sm" data-i18n="cap_3_desc">
                Tandem sub-arc automated girder assemblers, qualified AWS/CSWIP welding inspectors, certified procedure qualification records (PQR), and WPS catalog.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Core System</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">LINCOLN SAW TANDEM</span>
            </div>
          </div>

          <!-- Division 04 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <h3 class="text-headline-sm" data-i18n="cap_4_title">Surface Finishing & Coating</h3>
              <p class="text-body-sm" data-i18n="cap_4_desc">
                Continuous enclosed shot-blast chambers (Sa 2.5 / Sa 3), automated roller application, zinc priming, intumescent fireproofing, and thermal arc spray.
              </p>
            </div>
            <div style="padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <span class="font-label-caps" style="color: var(--color-outline); display: block;">Core System</span>
              <span class="font-technical" style="color: var(--color-forge-orange);">SA 2.5 BLAST LINE</span>
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
          <h2 class="text-headline-lg section-title" data-i18n="proc_title">
            FOUR-STAGE RIGOROUS WORKFLOW
          </h2>
        </div>

        <div class="grid-cols-4">
          <!-- Step 1 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">01</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_1_title">Design & Detailing</h3>
              <p class="text-body-sm" data-i18n="step_1_desc">
                Architectural model decomposition into NC1 numerical files for machine automation and joint clash resolution.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Tolerance: ±0.00 mm (BIM)
            </div>
          </div>

          <!-- Step 2 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">02</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_2_title">Precision CNC Cutting</h3>
              <p class="text-body-sm" data-i18n="step_2_desc">
                Multi-torch plasma plate nesting, multi-spindle drilling lines, and automated weld seam bevel preparation.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Tolerance: ±0.10 mm (Cut)
            </div>
          </div>

          <!-- Step 3 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">03</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_3_title">Automated Fabrication</h3>
              <p class="text-body-sm" data-i18n="step_3_desc">
                Submerged arc welding (SAW) on automated gantry rigs with continuous thermal monitoring and hydraulic jig alignment.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Weld Standard: AWS D1.1
            </div>
          </div>

          <!-- Step 4 -->
          <div class="industrial-card flex flex-col justify-between reveal-item">
            <div class="flex flex-col gap-sm">
              <div class="flex justify-between items-center">
                <span class="pipeline-step-num">04</span>
              </div>
              <h3 class="text-headline-sm" data-i18n="step_4_title">Testing & Finishing</h3>
              <p class="text-body-sm" data-i18n="step_4_desc">
                100% NDT inspection, wheelabrator abrasive blasting to Sa 2.5, followed by calibrated multi-coat epoxy primer application.
              </p>
            </div>
            <div class="badge-chip" style="margin-top: var(--space-md);">
              Verification: 100% UT / RT Pass
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 07: PROJECTS / INDUSTRIAL GALLERY (Asymmetric Masonry)
         ========================================================================= -->
    <section class="section-wrapper section-projects" id="projects">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row with-action reveal-item">
          <div>
            <h2 class="text-headline-lg section-title" data-i18n="proj_title">
              STRUCTURAL PORTFOLIO
            </h2>
          </div>
          <a href="#projects" class="font-technical btn-ghost" data-i18n="proj_all_link">
            View Full Project Index (42) →
          </a>
        </div>

        <!-- Asymmetrical Editorial Grid (7 / 5 Columns) -->
        <div class="grid-12">
          <!-- Featured Major Project (Span 7) -->
          <div class="col-7 portfolio-card reveal-item">
            <div class="portfolio-bg-image" 
                 style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEwxN5cqLL9_G6C9a_NFZW0thixMMtUXPoK94CfgoA-b_XkJCHru_-hnS6CTN__bgHI1YX9NSKT_BsKVJuZeur11_unFQqBlmMoFdMArWlZl3euvP01wB6N4mSeRoXNW9RS--3hj_yaCQK2jMF1Oc5vG6dxRwjyIHQroOW7FHG6Bu85Z0yBCdBrI4WCft5VIJFbIAG1YN5SzB94c3S5mY9FmuUW9NYnMX997fxQnwiQNyTmYTPLxxj');">
            </div>
            <div class="portfolio-card-gradient"></div>

            <div class="portfolio-content-top">
              <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="proj_1_sector">
                Oil & Gas Infrastructure
              </span>
            </div>

            <div class="portfolio-content-bottom">
              <h3 class="text-headline-md" data-i18n="proj_1_title">
                Yanbu Petrochemical Pipe Rack Corridor
              </h3>
              <p class="text-body-sm" data-i18n="proj_1_desc">
                18,400 Metric Tons of high-spec modular heavy pipe rack steel frames, galvanised modular trestles, and seismic resisting moment frames.
              </p>
              <div class="font-technical" style="color: var(--color-outline); padding-top: var(--space-xs);" data-i18n="proj_1_meta">
                Tonnage: 18,400 MT • Compliance: Aramco 12-SAMSS
              </div>
            </div>
          </div>

          <!-- Secondary Project (Span 5) -->
          <div class="col-5 portfolio-card reveal-item">
            <div class="portfolio-bg-image" 
                 style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5RDdlbNPb0zQlLSW0e9scDfxNii2TYasL8P7yOQqP_PWRLT95UviiZujUlVrnzkT8O-2EL0Zd9LWvccObwjszImE9LFIRUpZDZVYiSIsUw2SWN9zr83liZGtZCcOb-oacJEByYS6Ju2UyMfAXm-BwzW2OM__CAfaUhWM_tVP14z-kN5UFe5Dpnp5qyCC3ckEdMCs_MgoBm3dNPEhZImHJFIr7o66Cn45VwnuOV6Z5x9PmnLhGO58q');">
            </div>
            <div class="portfolio-card-gradient"></div>

            <div class="portfolio-content-top">
              <span class="badge-chip" style="color: var(--color-forge-orange);" data-i18n="proj_2_sector">
                Heavy Rail Logistics
              </span>
            </div>

            <div class="portfolio-content-bottom">
              <h3 class="text-headline-md" data-i18n="proj_2_title">
                Gulf Freight Terminal Gantry & Spans
              </h3>
              <p class="text-body-sm" data-i18n="proj_2_desc">
                12,200 Metric Tons of continuous welded box girders and overhead heavy crane rails spanning 52 meters clear.
              </p>
              <div class="font-technical" style="color: var(--color-outline); padding-top: var(--space-xs);" data-i18n="proj_2_meta">
                Tonnage: 12,200 MT • Test: 100% PAUT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 08: COMPANY STATISTICS (Massive Typography Counters)
         ========================================================================= -->
    <section class="section-wrapper section-statistics" id="statistics">
      <div class="container">
        <div class="grid-cols-4">
          <!-- Stat 1 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="150" data-suffix="K">0K</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_1_label">
              M² PRODUCTION YARD
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_1_desc">
              Continuous dual indoor fabrication bays & storage gantry
            </span>
          </div>

          <!-- Stat 2 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number accent tabular-nums" data-target="48" data-suffix="K+">0K+</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_2_label">
              METRIC TONS / YEAR
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_2_desc">
              Certified capacity across heavy and medium structural output
            </span>
          </div>

          <!-- Stat 3 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="99.8" data-suffix="%">0%</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_3_label">
              FIRST-PASS NDT RATE
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_3_desc">
              Rigorous acoustic and radiographic non-destructive audit
            </span>
          </div>

          <!-- Stat 4 -->
          <div class="stat-metric-card reveal-item">
            <span class="stat-number tabular-nums" data-target="25" data-suffix="+">0+</span>
            <span class="font-label-caps" style="color: var(--color-forge-orange); margin-top: var(--space-xs);" data-i18n="stat_4_label">
              YEARS IN THE GULF
            </span>
            <span class="text-body-sm" style="color: var(--color-outline);" data-i18n="stat_4_desc">
              Foundational steel supplier for major industrial EPC contractors
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 09: WHY AWTAD AL KHALEEJ (4 Technical Pillars)
         ========================================================================= -->
    <section class="section-wrapper section-pillars" id="why-us">
      <div class="container flex flex-col gap-lg">
        <div class="section-header-row reveal-item">
          <h2 class="text-headline-lg section-title" data-i18n="why_title">
            WHY CHOOSE AWTAD AL KHALEEJ
          </h2>
        </div>

        <div class="grid-cols-4">
          <!-- Pillar 1 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <h3 class="text-headline-sm" data-i18n="pillar_1_title">Laser Metrology</h3>
            <p class="text-body-sm" data-i18n="pillar_1_desc">
              Strict sub-millimeter fit-up tolerances maintained using 3D laser tracker systems, reducing erection delays on site to absolute zero.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <h3 class="text-headline-sm" data-i18n="pillar_2_title">80-Ton Hoist Capacity</h3>
            <p class="text-body-sm" data-i18n="pillar_2_desc">
              Twin-tandem overhead crane yards enable pre-assembly of complete oversize modular bridge and tower modules under climate-controlled conditions.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <h3 class="text-headline-sm" data-i18n="pillar_3_title">Global Accreditations</h3>
            <p class="text-body-sm" data-i18n="pillar_3_desc">
              Fully certified by international bodies: ISO 9001, AWS D1.1, EN 1090-2 (EXC4), and pre-qualified across all Gulf national oil corporations.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="industrial-card flex flex-col gap-sm reveal-item">
            <h3 class="text-headline-sm" data-i18n="pillar_4_title">GCC Logistics Corridor</h3>
            <p class="text-body-sm" data-i18n="pillar_4_desc">
              Dedicated logistics fleet and direct highway/port corridor links ensure synchronized just-in-time delivery to remote desert and coastal sites.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================================
         SECTION 10: MASSIVE INDUSTRIAL CTA & RFQ INTAKE
         ========================================================================= -->
    <section class="section-wrapper section-rfq" id="rfq">
      <!-- Radial Dot Mesh Background -->
      <div class="rfq-dot-mesh"></div>

      <div class="container rfq-center-container">
        <!-- Overline & Title -->
        <div class="reveal-item">
          <h2 class="text-display-hero section-title" data-i18n="rfq_title">
            LET'S BUILD SOMETHING RESILIENT.
          </h2>

          <p class="text-body-lg" style="margin-top: var(--space-sm);" data-i18n="rfq_desc">
            Submit your project structural drawings, Tekla models, or engineering Bills of Quantities (BOQ) for immediate technical evaluation and transparent commercial estimate.
          </p>
        </div>

        <!-- Interactive RFQ Form Card -->
        <div class="rfq-form-card reveal-item">
          <form id="rfq-intake-form" novalidate>
            <div class="grid-cols-2">
              <div class="form-group">
                <label for="rfq-project-name" class="form-label" data-i18n="rfq_label_project">Project Name / Reference</label>
                <input type="text" id="rfq-project-name" class="form-input" placeholder="e.g. Red Sea Terminal Pkg 04" data-i18n-ph="rfq_ph_project" required>
                <span class="form-error-msg">Project reference is required</span>
              </div>

              <div class="form-group">
                <label for="rfq-tonnage" class="form-label" data-i18n="rfq_label_tonnage">Estimated Steel Tonnage</label>
                <input type="text" id="rfq-tonnage" class="form-input" placeholder="e.g. 2,500 MT" data-i18n-ph="rfq_ph_tonnage" required>
                <span class="form-error-msg">Estimated tonnage is required</span>
              </div>

              <div class="form-group">
                <label for="rfq-email" class="form-label" data-i18n="rfq_label_email">Engineering Contact Email</label>
                <input type="email" id="rfq-email" class="form-input" placeholder="eng@contractor.com" data-i18n-ph="rfq_ph_email" required>
                <span class="form-error-msg">Valid engineering email is required</span>
              </div>

              <div class="form-group">
                <label for="rfq-spec-code" class="form-label" data-i18n="rfq_label_spec">Specification Code</label>
                <select id="rfq-spec-code" class="form-select">
                  <option value="EN1090">EN 1090-2 Execution Class 4</option>
                  <option value="AWS">AWS D1.1 Structural Welding</option>
                  <option value="AISC">AISC 360 Heavy Commercial</option>
                  <option value="ARAMCO">Aramco Standard 12-SAMSS</option>
                </select>
              </div>
            </div>

            <!-- Form Action Footer -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-md" style="margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid var(--color-outline-variant-30);">
              <button type="submit" class="btn btn-primary btn-lg" id="rfq-submit-btn" data-i18n="rfq_btn_submit">
                Request a Quote →
              </button>
              <a href="#" class="btn-ghost font-technical" data-i18n="rfq_btn_pdf">
                Download Spec Sheet (PDF) →
              </a>
            </div>

            <!-- Dynamic Success State Alert -->
            <div class="form-alert-success" id="rfq-success-message" role="alert">
              <span class="indicator-dot live-pulse" style="margin-right: 0.5rem;"></span>
              <span data-i18n="rfq_success_msg">Specification transmitted. Our chief estimating engineer will review your project within 24 hours.</span>
            </div>
          </form>
        </div>

        <div class="font-label-mono" style="color: var(--color-outline);" data-i18n="rfq_desk_info">
          Direct Desk: rfq@awtadalkhaleej.com • Response SLA: 24 Hours
        </div>
      </div>
    </section>
  `;
