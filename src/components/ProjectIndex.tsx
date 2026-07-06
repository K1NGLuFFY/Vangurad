'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';


const archiveProjects = [
  { ref: 'ARC-492', title: 'Port Terminal 4 Concrete Apron Slab', location: 'Coastal District', year: '2025', status: 'ARCHIVED' },
  { ref: 'ARC-318', title: 'Route 9 Pre-stressed Box Girder Prefab', location: 'District 6', year: '2024', status: 'ARCHIVED' },
  { ref: 'ARC-202', title: 'Riverbend Spillway Seismic Anchoring', location: 'Northern Valley', year: '2024', status: 'ARCHIVED' }
];

export default function ProjectIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 35 },
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

      // Reveal main project blocks
      const items = containerRef.current?.querySelectorAll('.project-item');
      if (items && items.length > 0) {
        gsap.fromTo(items,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
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
    <section id="projects" className="relative border-b-4 border-charcoal py-24 md:py-32 bg-concrete scroll-mt-12">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mb-20">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            PROJECT CATALOGUE
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none text-charcoal mb-6">
            PROJECT INDEX
          </h2>
          <div className="h-4 bg-safety border-3 border-charcoal mb-8" />
          <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed font-medium">
            Operational log of high-profile infrastructure deliveries. Hover over any drawing block to load the full structural specification ledger.
          </p>
        </div>

        {/* Interactive Project Grid */}
        <div ref={containerRef} className="space-y-24">
          {projects.map((proj, idx) => {
            return (
              <Link 
                href={`/projects/${proj.slug}`}
                key={proj.id}
                className="project-item grid grid-cols-1 lg:grid-cols-12 gap-8 border-3 border-charcoal hover:border-safety bg-white relative group transition-colors duration-300 block cursor-pointer"
                style={{ borderRadius: '0px', textDecoration: 'none' }}
              >
                {/* Image Frame (cols: 1 to 7) with thick solid borders and NO overlay gradients */}
                <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[450px] p-4 bg-[#E5E4DF] border-b-3 lg:border-b-0 lg:border-r-3 border-charcoal">
                  <div className="relative w-full h-full min-h-[268px] md:min-h-[412px] border-2 border-charcoal overflow-hidden bg-concrete">
                    <Image 
                      src={proj.image} 
                      alt={proj.title}
                      fill
                      className="object-cover concrete-image"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* Text Specs & Concrete Title Block Overlay (cols: 8 to 12) */}
                <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="font-display font-extrabold text-xs text-safety uppercase tracking-tight mb-4">
                      {proj.id} // SEC-DIV
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-charcoal uppercase mb-6 leading-none">
                      {proj.title}
                    </h3>

                    <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                      {proj.description}
                    </p>
                  </div>

                  {/* Concrete Title Block (Simulated drawing block overlay in concrete styling) */}
                  <div className="border-3 border-charcoal bg-concrete grid grid-cols-2 text-xs font-body font-bold text-charcoal">
                    <div className="border-r-2 border-b-2 border-charcoal p-3">
                      <span className="text-safety text-[10px] font-display font-bold block uppercase mb-0.5">LOCATION</span>
                      <span className="block leading-tight">{proj.location}</span>
                    </div>
                    <div className="border-b-2 border-charcoal p-3">
                      <span className="text-safety text-[10px] font-display font-bold block uppercase mb-0.5">DURATION</span>
                      <span className="block leading-tight">{proj.duration}</span>
                    </div>
                    <div className="border-r-2 border-charcoal p-3">
                      <span className="text-safety text-[10px] font-display font-bold block uppercase mb-0.5">SCOPE RANGE</span>
                      <span className="block leading-tight text-[11px]">{proj.scope}</span>
                    </div>
                    <div className="p-3">
                      <span className="text-safety text-[10px] font-display font-bold block uppercase mb-0.5">LEAD MATERIALS</span>
                      <span className="block leading-tight text-[11px]">{proj.materials}</span>
                    </div>
                    <div className="col-span-2 border-t-3 border-charcoal p-3 bg-charcoal text-safety flex items-center justify-between text-[11px] font-display">
                      <span>STATUS DEPLOYED //</span>
                      <span className="text-white font-extrabold">{proj.phase}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Grid Accents (Safety orange blocks) */}
                <div className="absolute top-0 left-0 w-[8px] h-[8px] bg-charcoal group-hover:bg-safety"></div>
                <div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-charcoal group-hover:bg-safety"></div>
              </Link>
            );
          })}
        </div>

        {/* Monospace Minor Archives Table - Restyled to larger fonts, bold weights */}
        <div className="mt-28 border-3 border-charcoal bg-white">
          <div className="bg-charcoal p-4 flex items-center justify-between border-b-3 border-charcoal">
            <span className="font-display font-extrabold text-sm md:text-base text-safety tracking-tight">
              ARCHIVED PROJECT LEDGER
            </span>
            <span className="font-display font-bold text-xs text-white">
              FILES VN-A4
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-xs md:text-sm text-charcoal/80 min-w-[700px]">
              <thead>
                <tr className="border-b-3 border-charcoal bg-concrete text-charcoal font-display font-extrabold text-xs uppercase">
                  <th className="p-4 border-r-2 border-charcoal/10">REFERENCE</th>
                  <th className="p-4 border-r-2 border-charcoal/10">PROJECT DESCRIPTION</th>
                  <th className="p-4 border-r-2 border-charcoal/10">PROJECT LOCATION</th>
                  <th className="p-4 border-r-2 border-charcoal/10 font-bold">YEAR</th>
                  <th className="p-4 text-right">STATE</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {archiveProjects.map((arc) => (
                  <tr key={arc.ref} className="border-b-2 border-charcoal/10 hover:bg-concrete/50 transition-colors">
                    <td className="p-4 border-r-2 border-charcoal/10 font-display font-extrabold text-charcoal">{arc.ref}</td>
                    <td className="p-4 border-r-2 border-charcoal/10 text-charcoal/90">{arc.title}</td>
                    <td className="p-4 border-r-2 border-charcoal/10">{arc.location}</td>
                    <td className="p-4 border-r-2 border-charcoal/10 text-charcoal/60">{arc.year}</td>
                    <td className="p-4 text-right text-safety font-display font-extrabold">{arc.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
