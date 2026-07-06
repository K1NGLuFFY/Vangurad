'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, HardHat, FileCheck2, Award, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We brought them in after our original contractor fell behind by five months. They didn't just catch up the schedule, they rebuilt our trust in the process—daily updates, no surprises on the change orders, and every safety audit came back clean. That mattered more to us than the timeline.",
    author: "Daniel Osei",
    role: "Director of Infrastructure",
    org: "Basin Municipal Water Authority",
    ref: "LOG-01 / FIELD VERIFICATION"
  },
  {
    quote: "What stood out was how they handled the live-traffic phasing on Meridian. Most crews would've asked for a full closure. Theirs sequenced the pours around our peak hours without a single missed window across fourteen pier caps. That's not luck, that's planning.",
    author: "Priya Nandakumar",
    role: "Traffic Operations Liaison",
    org: "District 4 Transit Authority",
    ref: "LOG-02 / FIELD REPORT"
  },
  {
    quote: "This was our second project with them, and the reason we came back is simple: they told us the truth even when it wasn't what we wanted to hear. On Foundry Row, they flagged a structural issue in the original truss before it became a six-figure problem. That kind of honesty is rare in this industry.",
    author: "Marcus Webb",
    role: "Principal",
    org: "Webb & Halloran Development",
    ref: "LOG-03 / CONTRACT ADJUST"
  }
];

export default function SafetyCompliance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Stats values for GSAP odometer animation
  const incidentRef = useRef<HTMLSpanElement>(null);
  const oshaRef = useRef<HTMLSpanElement>(null);
  const auditsRef = useRef<HTMLSpanElement>(null);
  const supervisorsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
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

      // Ticking Odometer counters (Stepped animations)
      const statsObj = { incident: 0, osha: 0.0, audits: 0, supervisors: 0 };

      gsap.to(statsObj, {
        incident: 1847,
        osha: 0.9,
        audits: 100,
        supervisors: 22,
        duration: 2.0,
        ease: 'steps(36)', // Ticking/Odometer stepped easing
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        onUpdate: () => {
          if (incidentRef.current) incidentRef.current.innerText = Math.round(statsObj.incident).toLocaleString();
          if (oshaRef.current) oshaRef.current.innerText = statsObj.osha.toFixed(1);
          if (auditsRef.current) auditsRef.current.innerText = Math.round(statsObj.audits).toString();
          if (supervisorsRef.current) supervisorsRef.current.innerText = Math.round(statsObj.supervisors).toString();
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="safety" className="relative border-b-4 border-charcoal py-24 md:py-32 bg-concrete scroll-mt-12">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Title */}
        <div ref={headerRef} className="max-w-4xl mb-20">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            COMPLIANCE REPORTS
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none text-charcoal mb-6">
            SAFETY & COMPLIANCE
          </h2>
          <div className="h-4 bg-safety border-3 border-charcoal mb-8" />
          <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed font-medium">
            Operational metrics evaluated quarterly under direct site compliance protocols. Zero compromise on structural load bounds or active field zones.
          </p>
        </div>

        {/* Main Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Odometer Stats Sheet (cols: 1 to 6) - Restyled with thick borders */}
          <div className="lg:col-span-6 bg-white border-3 border-charcoal p-6 md:p-10 relative">
            <div className="font-display font-extrabold text-xs text-safety uppercase tracking-tight border-b-3 border-charcoal pb-4 mb-8 flex justify-between items-center">
              <span>METRICS REPORT // SEC-04</span>
              <span className="text-[10px] text-charcoal/60 bg-concrete px-2 py-0.5 border border-charcoal/20">AUDIT: AU-4</span>
            </div>

            {/* Stats Lines with Dots */}
            <div className="space-y-6 font-display font-bold text-sm md:text-base text-charcoal">
              {/* Stat 1 */}
              <div className="flex items-end justify-between gap-2">
                <span className="whitespace-nowrap uppercase">INCIDENT-FREE DAYS</span>
                <span className="border-b-2 border-dotted border-charcoal/30 flex-grow mb-1.5 h-1 min-w-[20px]"></span>
                <span className="text-2xl md:text-3xl font-extrabold text-safety font-display whitespace-nowrap">
                  <span ref={incidentRef}>0</span>
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-end justify-between gap-2">
                <span className="whitespace-nowrap uppercase">OSHA RECORDABLE RATE</span>
                <span className="border-b-2 border-dotted border-charcoal/30 flex-grow mb-1.5 h-1 min-w-[20px]"></span>
                <span className="text-charcoal/50 text-xs md:text-sm mr-1 font-body font-semibold">(AVG: 2.8)</span>
                <span className="text-2xl md:text-3xl font-extrabold text-safety font-display whitespace-nowrap">
                  <span ref={oshaRef}>0.0</span>
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex items-end justify-between gap-2">
                <span className="whitespace-nowrap uppercase">SAFETY AUDITS PASSED</span>
                <span className="border-b-2 border-dotted border-charcoal/30 flex-grow mb-1.5 h-1 min-w-[20px]"></span>
                <span className="text-2xl md:text-3xl font-extrabold text-safety font-display whitespace-nowrap">
                  <span ref={auditsRef}>0</span>%
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex items-end justify-between gap-2">
                <span className="whitespace-nowrap uppercase">SITE SUPERVISORS</span>
                <span className="border-b-2 border-dotted border-charcoal/30 flex-grow mb-1.5 h-1 min-w-[20px]"></span>
                <span className="text-2xl md:text-3xl font-extrabold text-safety font-display whitespace-nowrap">
                  <span ref={supervisorsRef}>0</span>
                </span>
              </div>
            </div>

            {/* Supporting line */}
            <div className="border-t-3 border-charcoal mt-10 pt-6">
              <p className="font-body text-xs font-semibold leading-relaxed text-charcoal/70">
                &quot;Every figure above is audited quarterly by an independent compliance officer. No number on this page is self-reported.&quot;
              </p>
            </div>

            {/* Decorative accents */}
            <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-charcoal"></div>
            <div className="absolute bottom-0 left-0 w-[8px] h-[8px] bg-charcoal"></div>
          </div>

          {/* Right Side: Certifications & Testimonials Grid (cols: 7 to 12) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Certifications Block */}
            <div className="bg-white border-3 border-charcoal p-6 md:p-8 relative">
              <div className="font-display font-extrabold text-xs text-safety uppercase tracking-tight border-b-2 border-charcoal/10 pb-4 mb-6">
                ACCREDITED CERTIFICATIONS
              </div>

              <ul className="space-y-4 font-body text-xs font-semibold text-charcoal/80">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-safety mt-0.5 shrink-0" />
                  <div>
                    <span className="text-charcoal block font-display font-bold uppercase text-sm mb-0.5">OSHA 30-Hour Construction Safety</span>
                    <span>Direct certification held by all active site crews.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t-2 border-charcoal/5 pt-4">
                  <Award className="w-5 h-5 text-safety mt-0.5 shrink-0" />
                  <div>
                    <span className="text-charcoal block font-display font-bold uppercase text-sm mb-0.5">ISO 45001 Standard Compliance</span>
                    <span>Occupational Health & Safety Management system validation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t-2 border-charcoal/5 pt-4">
                  <FileCheck2 className="w-5 h-5 text-safety mt-0.5 shrink-0" />
                  <div>
                    <span className="text-charcoal block font-display font-bold uppercase text-sm mb-0.5">LEED Accredited Professionals</span>
                    <span>3 staff engineers holding BD+C specialty designations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 border-t-2 border-charcoal/5 pt-4">
                  <HardHat className="w-5 h-5 text-safety mt-0.5 shrink-0" />
                  <div>
                    <span className="text-charcoal block font-display font-bold uppercase text-sm mb-0.5">Confined Space & Fall Protection</span>
                    <span>Active qualification protocols maintained across field crews.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Testimonials Block */}
            <div className="border-3 border-charcoal bg-white p-6 md:p-8 relative">
              <div className="flex items-center justify-between border-b-2 border-charcoal/10 pb-4 mb-6">
                <span className="font-display font-extrabold text-xs text-safety uppercase tracking-tight">
                  FIELD AUDIT REVIEWS
                </span>
                <span className="font-display font-bold text-[10px] text-charcoal/50">
                  {testimonials[activeTestimonial].ref}
                </span>
              </div>

              {/* Slider Quote Container */}
              <div className="min-h-[140px] flex flex-col justify-between">
                <blockquote className="font-body text-sm text-charcoal/80 leading-relaxed italic mb-6">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between border-t-2 border-charcoal/10 pt-4">
                  <div>
                    <cite className="font-display font-extrabold text-sm text-charcoal not-italic uppercase block">
                      — {testimonials[activeTestimonial].author}
                    </cite>
                    <span className="font-body text-xs font-bold text-charcoal/60 uppercase block mt-0.5">
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].org}
                    </span>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handlePrev}
                      className="p-2 border-2 border-charcoal bg-concrete hover:bg-safety hover:text-charcoal text-charcoal transition-all cursor-pointer"
                      style={{ borderRadius: '0px' }}
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="p-2 border-2 border-charcoal bg-concrete hover:bg-safety hover:text-charcoal text-charcoal transition-all cursor-pointer"
                      style={{ borderRadius: '0px' }}
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
