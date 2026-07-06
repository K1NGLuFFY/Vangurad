'use client';

import React, { use, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Find project
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }
  
  const project = projects[projectIndex];
  
  // Determine next project for the bottom nav
  const nextProject = projects[(projectIndex + 1) % projects.length];
  
  // GSAP animation references
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in hero elements
      gsap.fromTo('.animate-hero-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
      );
      
      // Fade in main body components
      gsap.fromTo('.animate-fade-in',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.4 }
      );
    });
    
    return () => ctx.revert();
  }, [slug]);

  return (
    <article className="bg-concrete min-h-screen">
      {/* 1. HERO BANNER - Full-Bleed & Massive */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] md:h-[70vh] border-b-4 border-charcoal overflow-hidden bg-charcoal">
        {/* Main image */}
        <Image 
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover concrete-image opacity-80"
          sizes="100vw"
        />
        
        {/* Top absolute indicator */}
        <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-4">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 bg-charcoal text-safety hover:bg-safety hover:text-charcoal font-display font-extrabold text-xs uppercase px-4 py-2 border-3 border-charcoal transition-colors duration-300"
            style={{ borderRadius: '0px' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Index
          </Link>
          <span className="bg-charcoal text-white font-display font-extrabold text-[10px] px-3 py-2 border border-charcoal/20 select-none">
            CATALOGUE: {project.id}
          </span>
        </div>

        {/* Hero Title Block (Overlaid bottom-left) */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-charcoal/90 to-transparent pt-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-block bg-safety text-charcoal font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal animate-hero-text">
              {project.code}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tighter leading-none text-concrete uppercase mb-4 max-w-5xl animate-hero-text">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3 items-center text-xs font-display font-bold text-safety animate-hero-text">
              <span>ESTIMATING SPEC: {project.specCode}</span>
              <span className="text-concrete/40">•</span>
              <span className="text-white">{project.phase}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPECIFICATIONS & NARRATIVE GRID */}
      <section ref={contentRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Full narrative details (cols: 1 to 8) */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in">
            <div className="bg-white border-3 border-charcoal p-6 md:p-10 relative">
              <div className="absolute top-0 left-0 w-[8px] h-[8px] bg-safety"></div>
              
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-charcoal uppercase mb-6 pb-4 border-b-2 border-charcoal/10">
                PROJECT OVERVIEW & ANALYSIS
              </h2>
              
              <div className="space-y-6 font-body text-sm md:text-base leading-relaxed text-charcoal/80">
                {project.extendedDescription.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "font-semibold text-charcoal" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Resolutions */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-display font-extrabold text-charcoal uppercase pl-4 border-l-4 border-safety">
                CHALLENGES & RESOLUTIONS
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border-3 border-charcoal relative"
                    style={{ borderRadius: '0px' }}
                  >
                    {/* Header bar */}
                    <div className="bg-charcoal text-white font-display font-extrabold text-xs uppercase px-4 py-3 flex items-center justify-between border-b-3 border-charcoal">
                      <span className="text-safety">CHALLENGE 0{idx + 1}</span>
                      <span>SEC_STATUS: COMPLETED</span>
                    </div>
                    
                    {/* Content grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      <div className="space-y-2">
                        <span className="font-display font-extrabold text-xs text-charcoal/50 uppercase block">STRUCTURAL PROBLEM</span>
                        <p className="font-body text-xs md:text-sm font-bold text-charcoal leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="space-y-2 border-t-2 md:border-t-0 md:border-l-2 border-charcoal/10 pt-4 md:pt-0 md:pl-6">
                        <span className="font-display font-extrabold text-xs text-safety uppercase block">ENGINEERED SOLUTION</span>
                        <p className="font-body text-xs md:text-sm text-charcoal/80 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Spec sheet / ledger block (cols: 9 to 12) */}
          <aside className="lg:col-span-4 space-y-8 animate-fade-in">
            {/* The Drawing block ledger */}
            <div className="border-3 border-charcoal bg-white p-5 space-y-4 relative">
              <div className="bg-charcoal text-safety px-3 py-2 font-display font-extrabold text-xs uppercase tracking-tight text-center border-b-3 border-charcoal -mx-5 -mt-5">
                FIELD LEDGER SPECIFICATIONS
              </div>
              
              <table className="w-full text-left font-body text-xs font-bold text-charcoal">
                <tbody>
                  <tr className="border-b-2 border-charcoal/10">
                    <td className="py-3 text-safety uppercase font-display">LOCATION</td>
                    <td className="text-right py-3">{project.location}</td>
                  </tr>
                  <tr className="border-b-2 border-charcoal/10">
                    <td className="py-3 text-safety uppercase font-display">DURATION</td>
                    <td className="text-right py-3">{project.duration}</td>
                  </tr>
                  <tr className="border-b-2 border-charcoal/10">
                    <td className="py-3 text-safety uppercase font-display">SCOPE RANGE</td>
                    <td className="text-right py-3">{project.scope}</td>
                  </tr>
                  <tr className="border-b-2 border-charcoal/10">
                    <td className="py-3 text-safety uppercase font-display">PRIMARY MATS</td>
                    <td className="text-right py-3 leading-tight">{project.materials}</td>
                  </tr>
                  <tr className="border-b-2 border-charcoal/10">
                    <td className="py-3 text-safety uppercase font-display">STATUS CODE</td>
                    <td className="text-right py-3 font-display font-extrabold text-[11px]">{project.phase}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-safety uppercase font-display">DEPT REF</td>
                    <td className="text-right py-3 font-display font-extrabold">{project.specCode}</td>
                  </tr>
                </tbody>
              </table>

              <div className="border-t-3 border-charcoal pt-4 text-[10px] leading-relaxed text-charcoal/60 font-semibold uppercase">
                COMPLIANCE SIGN-OFF BY CHIEF STRUCTURAL ENGINEER UNDER SECTION 4-A GUIDELINES. VERIFIED BY VANGUARD COMPLIANCE AUDITING.
              </div>
              
              <div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-charcoal"></div>
            </div>

            {/* Quality Statement */}
            <div className="bg-[#E5E4DF] border-3 border-charcoal p-6 relative">
              <span className="font-display font-extrabold text-xs text-charcoal uppercase block mb-2">
                CIVIL COMPLIANCE GUARANTEE
              </span>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed mb-4">
                This project was constructed in strict accordance with the municipal infrastructure codes and structural steel bearings loading metrics. Seismic stress tests verified under active vibration monitoring.
              </p>
              <div className="flex items-center gap-2 text-xs font-display font-bold text-safety">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>OSHA 30-HOUR AUDITED</span>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* 3. SITE IMAGES & DETAIL GALLERY */}
      <section className="bg-white border-t-4 border-b-4 border-charcoal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-12">
            <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
              VISUAL RECORD
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-none text-charcoal uppercase">
              FIELD PHOTOGRAPHY GALLERY
            </h2>
            <div className="h-2 bg-safety border border-charcoal mt-4 max-w-sm" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.gallery.map((imgSrc, idx) => (
              <div 
                key={idx}
                className="relative h-[250px] border-3 border-charcoal bg-[#E5E4DF] overflow-hidden group"
              >
                <Image 
                  src={imgSrc}
                  alt={`${project.title} detail photo ${idx + 1}`}
                  fill
                  className="object-cover concrete-image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Visual grid line */}
                <div className="absolute top-2 left-2 bg-charcoal text-white font-display text-[9px] font-bold px-2 py-0.5 border border-charcoal/20 select-none">
                  FIG. 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT NAVIGATION FOOTER (Full width back/next selector) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-charcoal bg-white font-display text-sm uppercase">
        {/* Left Side: Back to project index */}
        <Link 
          href="/#projects" 
          className="border-b-4 md:border-b-0 md:border-r-4 border-charcoal p-12 md:p-16 hover:bg-concrete transition-all duration-300 flex flex-col justify-between group"
        >
          <span className="text-charcoal/40 text-xs font-bold block mb-4 tracking-wider">PROJECT CATALOGUE</span>
          <div className="flex items-center gap-4 text-charcoal group-hover:text-safety transition-colors">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter">RETURN TO INDEX</span>
          </div>
        </Link>

        {/* Right Side: Next project */}
        <Link 
          href={`/projects/${nextProject.slug}`} 
          className="p-12 md:p-16 hover:bg-concrete transition-all duration-300 flex flex-col justify-between group"
        >
          <span className="text-safety text-xs font-bold block mb-4 tracking-wider">UP NEXT: {nextProject.id}</span>
          <div className="flex items-center justify-between text-charcoal group-hover:text-safety transition-colors">
            <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter truncate max-w-[85%]">{nextProject.title}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </Link>
      </section>
    </article>
  );
}
