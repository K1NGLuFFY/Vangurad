# Vanguard — Heavy Civil Construction & Engineering

A highly custom, premium Next.js landing page built for Vanguard, a heavy civil construction firm specializing in elevated interchanges, seismically sensitive retrofitting, and high-tolerance industrial expansions.

---

## About This Project

This is a conceptual portfolio project demonstrating a bold, light, industrial-themed design system called **"Concrete & Steel"**. Unlike typical dark or generic blueprints construction templates, it uses a high-impact light concrete theme with heavy structural borders and safety orange signage blocks to convey stability, scale, and high-contrast precision.

---

## The Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Smooth Scroll**: Lenis
- **Animations**: GSAP (GreenSock Animation Platform) + ScrollTrigger
- **Icons**: Lucide React

---

## Design System: "Concrete & Steel"

- **Background**: Light Concrete Off-White (`#F0EFEB`)
- **Typography & Body**: Charcoal (`#1A1A1A`)
- **Accent Highlight**: Safety Orange (`#FF5C00`) — used prominently for CTAs, header blocks, and highlights.
- **Header Font**: *Bricolage Grotesque* (heavy weight, tight letter-spacing, loaded via Google Fonts integration).
- **Body Font**: *Plus Jakarta Sans* (highly readable geometric grotesk).
- **Motifs**: Thick 3px/4px solid charcoal borders around image blocks and cards resembling steel structural frames. Solid color background signage panels. Sharp 0px corners everywhere. No rounded corners, no soft shadows.

---

## Key Features

1. **Next.js Font Integration**: Native font delivery via `next/font/google` to guarantee correct offline styling.
2. **GSAP Structural Beam Headline**: Staggered word-by-word dropping and locking transitions simulating heavy structural steel beams fitting together.
3. **Lenis Inertial Scrolling**: Premium smooth scroll handling integrated across all layouts.
4. **Interactive Project Block Ledgers**: Comprehensive project cards displaying desaturated construction graphics that transition to color on hover. Clicking details loads concrete title blocks.
5. **Audited Safety Odometers**: Programmatic ticking stats (odometer style using a stepped GSAP ease rather than fluid count-up).
6. **Form Specification Request**: Estimate sheet utilizing blocky concrete layouts and 3px solid focus indicators.

---

## Screenshots

*Screenshots to be attached later. Placeholder tags below:*

![Hero Section Desktop](/screenshots/hero_desktop.png)
![Capabilities Section Desktop](/screenshots/capabilities_desktop.png)
![Project Index Section Desktop](/screenshots/projects_desktop.png)

---

## Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vorge-studio/vanguard-civil.git
   cd vanguard-civil
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Asset Initialization**:
   The desaturated graphics are sourced locally from `/public/images/` and the background video loop from `/public/videos/`. Run the media download utility if they are missing:
   ```bash
   node scripts/download-video.js
   node scripts/download-media.js
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Generate Production Build**:
   ```bash
   npm run build
   ```

---

## Folder Structure

```
├── public/                 # Static assets (images, videos, icons)
│   ├── images/             # Grayscale desaturated construction images
│   └── videos/             # Background mp4 video files
├── scripts/                # Utility downloader scripts
│   ├── download-media.js
│   └── download-video.js
├── src/
│   ├── app/                # Next.js App Router root layout & globals
│   │   ├── globals.css     # Tailwind CSS theme configurations & styles
│   │   ├── layout.tsx      # Main layout wrapper & fonts initialization
│   │   └── page.tsx        # Main page assembly
│   └── components/         # Page sections & smooth scrolling component
│       ├── Capabilities.tsx
│       ├── Contact.tsx
│       ├── Hero.tsx
│       ├── ProjectIndex.tsx
│       ├── SafetyCompliance.tsx
│       └── SmoothScroll.tsx
├── LICENSE                 # License terms
└── README.md               # Project guide
```

---

## Credits

- **Stock Photography**: Sourced from [Unsplash](https://unsplash.com) (all desaturation and contrast boost configured in CSS filters).
- **Hero Background Video**: Sourced from [Mixkit](https://mixkit.co) / GitHub stream.

---

## License

This project is licensed under the terms of the [MIT License](LICENSE).
