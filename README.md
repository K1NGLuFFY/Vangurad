# Vanguard — Heavy Civil Construction Website

Vanguard is a high-performance, single-page application built for a heavy civil engineering firm. The application showcases advanced infrastructure capability indexing, live-traffic staged pour parameters, and structural compliance ledger records under a highly technical, blueprint-precision layout.

Constructed using Next.js (App Router), TypeScript, and Tailwind CSS, the interface is animated via GSAP (ScrollTrigger) and smoothed with Lenis. The layout emphasizes physical gridlines, strict geometric division headers, and a stark lack of organic curves, delivering a premium digital experience crafted by Miracle Design.

---

## 🏗️ The Concrete & Steel Design System

- **Layout Grid:** Brutalist structural grid, mimicking architectural blueprints. 1px hairline rules dividing sections. Strict 0px border-radius everywhere (no soft corners, no glassmorphism, no drop shadows).
- **Color Palette:**
  - `⚪ Concrete` (Background): `#F0EFEB` (mineral off-white)
  - `⚫ Charcoal` (Borders & Text): `#1A1A1A` (construction steel gray)
  - `🟠 Safety Orange` (Accent): `#FF5C00` (used exclusively for actionable triggers like buttons and critical alerts)
- **Typography:**
  - **Display:** Cabinet Grotesk in heavy, tracked-out weights for massive structural headings.
  - **Body:** Clean sans-serif (e.g., Inter) for readability.
  - **Mono:** JetBrains Mono or IBM Plex Mono for technical callouts, grid coordinates (e.g., A1, B2), and spec codes.

---

## 📋 Core Architectural Sections

| Section | Structural Element | Purpose |
| :--- | :--- | :--- |
| **Hero** | Video background, animated beams | Initial load and division parameter display. |
| **Capabilities** | Grid layout, mono spec codes | Structural operations index and parameter breakdowns. |
| **Project Index** | Hover-reveal technical details | Active civil delivery specs and dynamic ledger gateways. |
| **Safety & Compliance** | Stepped-easing animated counters | Third-party compliance logs and site incident metrics. |
| **Contact** | Brutalist form with hairline borders | Intake interface for project scope and load margins. |

---

## ⚠️ Important Disclaimers

> [!NOTE]
> **Animations:** GSAP matchMedia is used to scale down animations on mobile devices to maintain 60fps.

> [!WARNING]
> **Form Simulation:** The contact form currently logs to the console and does not connect to a live backend.

> [!IMPORTANT]
> **Media Assets:** Video and image assets are stored locally and optimized; ensure `/public` directory is intact when cloning.