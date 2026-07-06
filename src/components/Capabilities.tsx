'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Compass, Landmark, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Civil Infrastructure',
    icon: Landmark,
    description: 'Staged concrete pours, high-load foundation piles, grade separations, and heavy vehicular corridor interchanges. Engineered for multi-lane arterial spans built under full live-traffic bypass schedules.',
    specs: ['Pier Caps Sequencing', 'Post-Tensioned Concrete', 'Seismic Bearings', 'Grade Separation']
  },
  {
    title: 'Structural Retrofitting',
    icon: Compass,
    description: 'Sub-surface underpinning, load-transfer shoring, and structural steel reinforcement. Specializing in seismically upgrading historic and unreinforced masonry shells while preserving exterior facades.',
    specs: ['Foundation Underpinning', 'Masonry Reinforcement', 'Seismic Bracing Retrofits', 'Load Transfer Shoring']
  },
  {
    title: 'Commercial & Industrial',
    icon: HardHat,
    description: 'Decommissioned facility reuse, reinforced pump houses, aeration basins, and high-tolerance industrial floors. Built around strict environmental containment and operational continuation protocols.',
    specs: ['Seismic Floor Slabs', 'Corrosion-Resistant Piping', 'Isolated Phase Builds', 'Containment Protocols']
  },
  {
    title: 'Precision Engineering',
    icon: ShieldAlert,
    description: 'Staged pour analysis, sub-grade vibration mapping, pre-tensioned box girder manufacturing, and finite element stress testing to cut on-site crane operations and coordinate critical windows.',
    specs: ['Staged Pour Analysis', 'Vibration Monitoring', 'Girders Prefabrication', 'Stress Testing']
  }
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          }
        }
      );

      // Stagger capabilities grid cards
      const cards = containerRef.current?.querySelectorAll('.cap-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" className="relative border-b-4 border-charcoal py-24 md:py-32 bg-concrete scroll-mt-12">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Section Title block - Signage style */}
        <div ref={headerRef} className="max-w-4xl mb-20">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            CAPABILITIES INDEX
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none text-charcoal mb-6">
            STRUCTURAL OPERATIONS
          </h2>
          {/* Bold section divider like a hazard stripe */}
          <div className="h-4 bg-safety border-3 border-charcoal mb-8" />
          <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed font-medium">
            Vanguard executes heavy civil infrastructure and engineering works under complex environmental and loading constraints. Every operation adheres to strict tolerance specifications.
          </p>
        </div>

        {/* Capabilities Cards Grid */}
        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div 
                key={cap.title} 
                className="cap-card relative bg-white border-3 border-charcoal p-6 flex flex-col justify-between hover:border-safety transition-colors duration-300 group"
                style={{ borderRadius: '0px' }}
              >
                {/* Top Details Block */}
                <div>
                  <div className="flex items-center justify-between border-b-2 border-charcoal/10 pb-4 mb-4">
                    <span className="font-display font-extrabold text-[11px] text-safety uppercase tracking-tight">
                      DIVISION 0{idx + 1}
                    </span>
                    <IconComponent className="w-5 h-5 text-charcoal group-hover:text-safety transition-colors duration-300" />
                  </div>
                  
                  {/* Headline */}
                  <h3 className="text-xl md:text-2xl font-display font-extrabold uppercase text-charcoal tracking-tight mb-4">
                    {cap.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Specifications list (No mono fonts, styled clearly) */}
                <div className="border-t-2 border-charcoal/10 pt-4 mt-auto">
                  <div className="font-display font-bold text-xs text-charcoal/90 uppercase tracking-tight mb-3">
                    OPERATIONAL PARAMETERS
                  </div>
                  <ul className="font-body text-xs font-semibold text-charcoal/70 space-y-2">
                    {cap.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-safety shrink-0"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Corner Grid Accents (swapped to bold safety accents) */}
                <div className="absolute top-0 right-0 w-[6px] h-[6px] bg-charcoal group-hover:bg-safety transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-charcoal group-hover:bg-safety transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
