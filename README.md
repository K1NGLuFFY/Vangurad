# VANGUARD | Heavy Civil Construction & Engineering

Vanguard is a conceptual premium portfolio website for a fictional heavy civil engineering and construction firm. The interface is built around a custom **Concrete & Steel** design system, employing heavy grid lines, high-contrast industrial photography, and bold, blocky typography reminiscent of structural blueprints and engineering catalogs.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) & React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 & Vanilla CSS custom filters
- **Animations:** [GSAP](https://gsap.com/) & ScrollTrigger
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) Custom Smooth Scroll Wrapper

---

## 🎨 Design System: Concrete & Steel

- **Typography:**
  - **Display Headings:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (Bold, mechanical, high-impact uppercase titles)
  - **Body / Spec Sheets:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (High readability sans-serif for metadata)
- **Palette:**
  - **Concrete (Background):** `#F0EFEB` — Clean, mineral off-white
  - **Charcoal (Borders & Text):** `#1A1A1A` — High-load construction steel gray
  - **Safety Orange (Accents):** `#FF5C00` — High-visibility warning alert orange
- **Motifs:**
  - Thick, solid borders (`3px` / `4px`) creating strong industrial structural boundaries.
  - Linear grid intersections and orange corner-marker block details.
  - Greyscale image treatment (`grayscale contrast-125`) that transitions into full color upon card hover.

---

## 🏗️ Key Features

1. **Dynamic Project Specifications Ledger (`/projects/[slug]`)**
   - Renders unique dynamic templates for primary civil deliveries (e.g., *Meridian Overpass*, *Foundry Row*, *Basin Water Treatment*).
   - Features spec sheets detailing duration, location, primary materials, and engineering code registry.
   - Highlights a **Challenges & Solutions** breakdown focusing on realistic structural obstacles (e.g., staged pours, load transfers, utility bypasses).
   - Horizontal gallery of detailed site operations.

2. **Operations Core About Page (`/about`)**
   - Outlines the firm's history and integration of design-build engineering since 2012.
   - Stepped chronological timeline tracking safety milestones and division expansions.
   - Team profiles for key representatives (Chief Engineer, Safety Director, Operations VP) mapped using specialized icon annotations.

3. **Stepped Odometer Safety Dashboard**
   - GSAP-driven odometer ticks representing incident-free days, OSHA recordable rates, and passed safety audits.
   - Stepped easing mimics a mechanical counter ticker.

4. **Cross-Page Hydration Navigation**
   - Integrated relative anchor links (e.g., `/#projects`, `/#safety`) allowing seamless navigation back to specific homepage sections from other routes.

---

## 🚀 Getting Started

To run the development server locally:

```bash
# Clone the repository
git clone https://github.com/K1NGLuFFY/Vangurad.git

# Navigate to the workspace
cd Vangurad

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Directory Structure

```
├── public/                 # Asset ledger
│   ├── images/             # Photographic site records
│   │   └── projects/       # Core project assets
│   └── videos/             # Background construction footage
├── src/
│   ├── app/                # Next.js App Router folders
│   │   ├── about/          # Corporate information layout
│   │   ├── projects/       # Dynamic project specification routes
│   │   ├── globals.css     # Theme parameters & Tailwind config
│   │   ├── layout.tsx      # Sticky headers & site footer layouts
│   │   └── page.tsx        # Homepage modular section assembly
│   ├── components/         # Interactive UI components
│   │   ├── Hero.tsx        # Header animations & background video
│   │   ├── Capabilities.tsx# Division matrices
│   │   ├── ProjectIndex.tsx# Interactive project catalog grid
│   │   ├── SafetyCompliance.tsx # Audited statistical trackers
│   │   ├── Contact.tsx     # Site estimation correspondence form
│   │   └── SmoothScroll.tsx# Lenis wrapper configuration
│   └── data/               # Static project database layer
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
