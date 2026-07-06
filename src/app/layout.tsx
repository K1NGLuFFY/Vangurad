import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-display",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "VANGUARD | Heavy Civil Construction & Engineering",
  description: "Specialized in structural retrofitting, elevated interchanges, municipal water treatment facilities, and complex infrastructure developments. Engineered for safety, built with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${bricolage.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-concrete text-charcoal font-body selection:bg-safety selection:text-concrete">
        <SmoothScroll>
          {/* Navigation Bar - Concrete & Steel Theme */}
          <header className="sticky top-0 z-40 bg-concrete/95 backdrop-blur-sm border-b-4 border-charcoal px-6 py-5 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Brand Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <span className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tighter text-charcoal group-hover:text-safety transition-colors duration-300">
                  Vanguard
                </span>
                <span className="bg-charcoal text-safety font-display text-[10px] px-2 py-0.5 font-bold uppercase select-none group-hover:bg-safety group-hover:text-charcoal transition-colors duration-300">
                  HEAVY CIVIL
                </span>
              </Link>

              {/* Main Nav Links (Clean, bold uppercase list, no numbers) */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/about" className="font-display text-sm text-charcoal hover:text-safety transition-colors uppercase tracking-tight">
                  About
                </Link>
                <Link href="/#capabilities" className="font-display text-sm text-charcoal hover:text-safety transition-colors uppercase tracking-tight">
                  Capabilities
                </Link>
                <Link href="/#projects" className="font-display text-sm text-charcoal hover:text-safety transition-colors uppercase tracking-tight">
                  Projects
                </Link>
                <Link href="/#safety" className="font-display text-sm text-charcoal hover:text-safety transition-colors uppercase tracking-tight">
                  Safety & Compliance
                </Link>
                <Link href="/#contact" className="font-display text-sm text-charcoal hover:text-safety transition-colors uppercase tracking-tight">
                  Get Estimate
                </Link>
              </nav>

              {/* CTA Button: Solid orange, black text, thick border */}
              <div>
                <Link 
                  href="/#contact" 
                  className="inline-block bg-safety hover:bg-charcoal hover:text-safety text-charcoal font-display font-extrabold text-xs uppercase px-5 py-3 transition-all duration-300 border-3 border-charcoal"
                  style={{ borderRadius: '0px' }}
                >
                  Request Estimate
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-grow flex flex-col w-full pb-16">
            {children}
          </main>

          {/* Site Footer - Light Concrete Accents with bold sizing */}
          <footer className="bg-[#E5E4DF] border-t-4 border-charcoal py-16 px-6 md:px-12 text-sm text-charcoal/80 font-body">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="font-display text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight uppercase mb-4">Vanguard</div>
                <p className="max-w-md text-charcoal/70 leading-relaxed text-base mb-6">
                  A heavy civil engineering and construction firm specializing in structural retrofitting, high-tolerance concrete construction, and staged-pour infrastructure coordination under live-load constraints.
                </p>
                <div className="font-display font-bold text-xs uppercase tracking-tight bg-charcoal text-concrete inline-block px-3 py-1">
                  PROJECT CATALOGUE: VOLUME XII / SERIES 2026
                </div>
              </div>
              <div>
                <div className="font-display font-extrabold text-charcoal uppercase tracking-tight text-base mb-4 border-b-2 border-charcoal/10 pb-1">Capabilities</div>
                <ul className="space-y-3 font-display font-bold text-xs uppercase text-charcoal/70">
                  <li><Link href="/#capabilities" className="hover:text-safety">Civil Infrastructure</Link></li>
                  <li><Link href="/#capabilities" className="hover:text-safety">Structural Retrofitting</Link></li>
                  <li><Link href="/#capabilities" className="hover:text-safety">Commercial & Industrial</Link></li>
                  <li><Link href="/#capabilities" className="hover:text-safety">Precision Engineering</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-display font-extrabold text-charcoal uppercase tracking-tight text-base mb-4 border-b-2 border-charcoal/10 pb-1">Corporate</div>
                <ul className="space-y-3 font-display font-bold text-xs uppercase text-charcoal/70">
                  <li><Link href="/about" className="hover:text-safety">About Vanguard</Link></li>
                  <li><Link href="/#safety" className="hover:text-safety">Safety Record</Link></li>
                  <li><Link href="/#safety" className="hover:text-safety">OSHA Auditing Sheets</Link></li>
                  <li><Link href="/#contact" className="hover:text-safety">Client Estimator</Link></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto border-t-2 border-charcoal/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-charcoal/60">
              <div>&copy; {new Date().getFullYear()} Vanguard. All structural rights reserved.</div>
              <div className="font-display font-bold text-xs uppercase tracking-tight mt-4 md:mt-0 text-charcoal">CLASSIFIED: SYSTEM SPECIFICATION SHEET 4-B</div>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
