# Awtad Al Khaleej (أوتاد الخليج) — Industrial Steel Fabrication Catalog

A high-performance, responsive industrial web application for **Awtad Al Khaleej**, specialized in heavy-tonnage structural steel fabrication, Tekla BIM modeling, and CNC manufacturing across the GCC.

## 🚀 Key Features

- **Design System ("Industrial Precision")**:
  - Obsidian Dark (`#0B0D0E`), Forge Orange (`#E87524`), Graphite Plate (`#15191B`), and Light Galvanized (`#F1F2F2`) contrast inversion.
  - Brutalist architectural aesthetic, hairline coordinate borders, crosshair marks (`+`), Space Grotesk + Inter typography.
- **Full Bilingual EN / AR & RTL Support**:
  - Dynamic language switcher with complete English & Arabic translations.
  - Full RTL (`dir="rtl"`) layout and Arabic font integration (`IBM Plex Sans Arabic`).
  - Preference saved in `localStorage`.
- **Interactions**:
  - Smooth scroll with sticky header and scrollspy active tracking.
  - Parallax hero background.
  - IntersectionObserver scroll reveals.
  - Animated statistics counters (`150K`, `48K+`, `99.8%`, `25+`).
  - Interactive product category filter bar.
  - Mobile full-screen navigation drawer.
  - Client-side RFQ intake form validation with simulated transmission state.
- **Specification Dossier**:
  - Custom SVG blueprint schematic diagram with dimension lines, weld symbols, and inspection callouts.

## 📁 Project Structure

```
.
├── index.html              # Main single-page HTML document (10 sections + header + footer)
├── css/
│   ├── variables.css        # CSS Custom Properties / Design Tokens
│   ├── base.css             # Reset, typography, utility classes, crosshairs
│   ├── components.css       # Buttons, cards, form inputs, badges, data tables
│   ├── layout.css           # 12-column Grid & responsive breakpoints
│   ├── sections.css         # Section styling, header, footer, animations
│   └── rtl.css              # Arabic RTL directional overrides
└── js/
    ├── main.js              # Entry point & module orchestrator
    ├── scroll.js            # Smooth scroll, sticky header, parallax
    ├── animations.js        # Scroll reveal, counter animations, product filtering
    ├── navigation.js        # Mobile drawer & scrollspy
    ├── form.js              # RFQ intake form validation
    └── i18n.js              # Bilingual EN/AR dictionary & RTL engine
```

## 🛠️ Getting Started

Open `index.html` directly in any modern browser, or run a local static server:

```bash
# Python
python -m http.server 3000

# Node
npx serve .
```
