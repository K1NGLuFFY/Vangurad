'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heavy structural headlines
      // Words fall down sequentially and lock like massive concrete beams dropping
      const lines = headlineRef.current?.querySelectorAll('.beam-line');
      if (lines && lines.length > 0) {
        gsap.fromTo(lines,
          {
            y: -150,
            opacity: 0,
            rotate: -3,
          },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out', // Decisive mechanical snap
          }
        );
      }

      // Reveal text block
      gsap.fromTo(textBlockRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );

      // Reveal CTA button
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.0 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b-4 border-charcoal py-20 md:py-32 overflow-hidden bg-concrete">
      {/* Background Video with grayscale/contrast and absolutely NO dark tint/overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale contrast-125 opacity-70"
        >
          <source src="/videos/hero-construction.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Headlines and CTAs (cols: 1 to 9) */}
        <div className="lg:col-span-9 flex flex-col justify-center">
          
          {/* Heavy Bricolage Grotesque Headline in Signage Blocks */}
          <h1 
            ref={headlineRef} 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.85] text-charcoal flex flex-col gap-4 mb-10 items-start"
          >
            <span className="block overflow-hidden py-1">
              <span className="beam-line block bg-charcoal text-safety px-4 py-2 border-3 border-charcoal">
                ENGINEERING
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="beam-line block bg-safety text-charcoal px-4 py-2 border-3 border-charcoal">
                HIGH-TOLERANCE
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="beam-line block bg-charcoal text-concrete px-4 py-2 border-3 border-charcoal">
                INFRASTRUCTURE
              </span>
            </span>
          </h1>

          {/* Text block and CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div ref={ctaRef}>
              <a 
                href="#contact" 
                className="inline-block bg-safety hover:bg-charcoal hover:text-safety text-charcoal font-display font-extrabold text-base uppercase px-8 py-5 transition-all duration-300 border-3 border-charcoal shadow-none hover:translate-y-[-2px] active:translate-y-[0px]"
                style={{ borderRadius: '0px' }}
              >
                Initialize Estimate
              </a>
            </div>

            <div 
              ref={textBlockRef}
              className="font-body text-charcoal text-sm md:text-base font-bold bg-concrete/90 backdrop-blur-sm border-l-4 border-safety p-4 max-w-md"
            >
              VANGUARD CIVIL CONSTRUCTION DIVISION
              <p className="font-normal text-xs text-charcoal/70 mt-1">
                Heavy machinery, structural foundation piles, post-tensioned concrete spans, and seismic bracing. Engineered under zero-failure parameters.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Site details block styled as signage (cols: 10 to 12) */}
        <div className="lg:col-span-3 hidden lg:block font-body text-xs text-charcoal border-3 border-charcoal bg-concrete p-5 space-y-4">
          <div className="bg-charcoal text-safety px-3 py-1 font-display font-extrabold text-xs uppercase tracking-tight text-center border-b-3 border-charcoal -mx-5 -mt-5">
            DESIGN PARAMETERS
          </div>
          
          <table className="w-full text-left font-bold">
            <tbody>
              <tr className="border-b-2 border-charcoal/10">
                <td className="py-2">LOAD CAPACITY</td>
                <td className="text-right text-safety">4,200 KN</td>
              </tr>
              <tr className="border-b-2 border-charcoal/10">
                <td className="py-2">SEISMIC ZONE</td>
                <td className="text-right text-safety">8.2 MAG</td>
              </tr>
              <tr className="border-b-2 border-charcoal/10">
                <td className="py-2">COMPRESSION</td>
                <td className="text-right text-safety">65 MPA</td>
              </tr>
              <tr>
                <td className="py-2">STEEL GRADE</td>
                <td className="text-right text-safety">A709 GR50</td>
              </tr>
            </tbody>
          </table>

          <div className="border-t-3 border-charcoal pt-3 mt-4 text-[10px] leading-relaxed text-charcoal/70">
            COMPACTION TARGET AT 98% SHORE LINES POSITIONED WITHIN ±2MM MARGINS.
          </div>
        </div>

      </div>
    </section>
  );
}
