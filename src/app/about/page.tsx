'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Landmark, HardHat, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal elements sequentially
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
      );
    });

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: '2012', title: 'Corporate Foundation', desc: 'Vanguard established in Boston, MA to integrate structural analysis directly with live-traffic field execution.' },
    { year: '2016', title: 'Riverbend Spillway Contract', desc: 'First major heavy civil infrastructure contract delivered under budget, utilizing advanced seismic anchoring.' },
    { year: '2019', title: 'OSHA VPP Star Status', desc: 'Received Voluntary Protection Programs Star recognition for zero recordable incidents across 500k man-hours.' },
    { year: '2023', title: 'Hydro-Infrastructure Division', desc: 'Inauguration of dedicated wastewater and filtration expansion division to support municipal water authorities.' },
    { year: '2026', title: 'Series XII Heavy Catalog', desc: 'Delivery of the Meridian Overpass, marking 15 years of zero-failure structural installations.' }
  ];

  const leaders = [
    {
      name: 'Dr. Arthur Vance, PE',
      role: 'Chief Structural Engineer',
      bio: 'Over 25 years of engineering experience specializing in post-tensioned spans, deep foundations, and seismic stress retrofitting. Former chief technical advisor to the federal highway administration committee on structural bearings.',
      icon: CompassAbout
    },
    {
      name: 'Elena Rostova, CSP',
      role: 'Director of Safety & Compliance',
      bio: 'An expert in industrial occupational safety with 18 years overseeing complex urban excavation sites. Elena designed Vanguard’s proprietary Staged Pour Containment and Confined Space entry safety protocols.',
      icon: ShieldCheck
    },
    {
      name: 'Marcus Webb',
      role: 'VP of Field Operations',
      bio: 'Manages field logistics, heavy equipment deployment, and union labor coordination. Marcus pioneered the integration of real-time GPS crane telemetry and staging schedules to minimize urban arterial lane closures.',
      icon: HardHat
    }
  ];

  return (
    <div ref={containerRef} className="bg-concrete min-h-screen pb-24">
      {/* 1. HERO HEADER */}
      <section className="border-b-4 border-charcoal bg-charcoal text-concrete py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-8 left-6 md:left-12 z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-concrete text-charcoal hover:bg-safety hover:text-charcoal font-display font-extrabold text-xs uppercase px-4 py-2 border-3 border-concrete transition-colors duration-300"
            style={{ borderRadius: '0px' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto w-full pt-12">
          <div className="inline-block bg-safety text-charcoal font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-6 border-2 border-charcoal animate-section">
            CORPORATE CATALOGUE / DIVISION 00
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-none uppercase mb-6 max-w-5xl animate-section">
            THE VANGUARD <span className="text-safety">SYSTEM</span>
          </h1>
          <p className="font-body text-base md:text-xl text-concrete/70 max-w-3xl leading-relaxed font-medium animate-section">
            A heavy civil engineering and construction firm specializing in high-tolerance structural retrofits, complex staged concrete works, and municipal infrastructure under live load constraints.
          </p>
        </div>
      </section>

      {/* 2. ORIGIN STORY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-section">
        <div className="lg:col-span-5 border-3 border-charcoal bg-white p-8 relative">
          <span className="font-display font-extrabold text-xs text-safety uppercase tracking-tight block mb-2">FOUNDING SPECIFICATION</span>
          <span className="text-4xl font-display font-extrabold text-charcoal uppercase leading-none block mb-6">EST. 2012</span>
          <div className="h-2 bg-charcoal border border-charcoal mb-6" />
          <p className="font-body text-xs font-semibold leading-relaxed text-charcoal/60 uppercase">
            Vanguard was founded on a simple premise: heavy civil projects in high-density areas demand an integrated approach where the structural engineering and site safety compliance loops are executed under a single shell.
          </p>
          <div className="absolute bottom-0 right-0 w-[8px] h-[8px] bg-charcoal"></div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-charcoal font-body text-sm md:text-base leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold uppercase mb-4 text-charcoal">
            OUR HISTORICAL TRAJECTORY
          </h2>
          <p>
            Vanguard was established by a collective of senior structural engineers and field directors who realized that traditional fragmented contracting models led to unnecessary project delays and safety oversights. By combining internal structural engineering capabilities with direct field operations, Vanguard pioneered high-tolerance civil construction methodology in the northeastern corridor.
          </p>
          <p>
            Over the past fifteen years, our portfolio has expanded from localized spillway reinforcements to massive multi-span elevated highway interchanges and chemical-resistant municipal water treatment facilities. Every project is planned down to the hour and milliradian, ensuring we deliver under zero-failure parameters without disrupting adjacent municipal operations.
          </p>
        </div>
      </section>

      {/* 3. CONFIDENT MISSION STATEMENT */}
      <section className="border-t-4 border-b-4 border-charcoal bg-safety py-16 md:py-20 px-6 md:px-12 animate-section">
        <div className="max-w-7xl mx-auto w-full text-center">
          <span className="font-display font-bold text-xs text-charcoal uppercase tracking-widest block mb-4">
            — THE OPERATIONAL MANIFESTO —
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-charcoal uppercase leading-none tracking-tight max-w-5xl mx-auto">
            WE DO NOT BUILD FOR AN ESTIMATED LIFESPAN. WE ENGINEER FOR UNCONDITIONAL GRAVITY LOADS.
          </h2>
        </div>
      </section>

      {/* 4. TIMELINE / MILESTONES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 animate-section">
        <div className="max-w-4xl mb-16">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            CHRONOLOGY
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-none text-charcoal uppercase">
            COMPANY MILESTONES
          </h2>
          <div className="h-3 bg-safety border-2 border-charcoal mt-4 max-w-sm" />
        </div>

        <div className="border-3 border-charcoal bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y-3 md:divide-y-0 md:divide-x-3 divide-charcoal">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 md:p-8 flex flex-col justify-between group hover:bg-concrete/40 transition-colors">
                <div>
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-safety block mb-4">
                    {m.year}
                  </span>
                  <h3 className="font-display font-extrabold text-xs uppercase text-charcoal tracking-tight mb-3">
                    {m.title}
                  </h3>
                  <p className="font-body text-xs text-charcoal/70 leading-relaxed font-semibold">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-8 border-t border-charcoal/10 pt-4 text-[9px] font-display font-bold text-charcoal/40 uppercase">
                  RECORD // VN-{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP DIRECTORY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12 animate-section">
        <div className="max-w-4xl mb-16">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            OPERATIONS CORE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-none text-charcoal uppercase">
            LEADERSHIP DIRECTORY
          </h2>
          <div className="h-3 bg-safety border-2 border-charcoal mt-4 max-w-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => {
            const LeaderIcon = leader.icon;
            return (
              <div 
                key={idx}
                className="bg-white border-3 border-charcoal p-6 md:p-8 relative flex flex-col justify-between"
                style={{ borderRadius: '0px' }}
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-charcoal/10 pb-4 mb-6">
                    <span className="font-display font-extrabold text-xs text-safety uppercase">
                      SENIOR PE // VN-0{idx + 1}
                    </span>
                    <LeaderIcon className="w-5 h-5 text-charcoal" />
                  </div>
                  
                  <h3 className="text-xl font-display font-extrabold text-charcoal uppercase mb-1">
                    {leader.name}
                  </h3>
                  <span className="font-display font-bold text-xs text-charcoal/50 uppercase block mb-6">
                    {leader.role}
                  </span>
                  
                  <p className="font-body text-xs md:text-sm text-charcoal/70 leading-relaxed font-semibold">
                    {leader.bio}
                  </p>
                </div>
                
                <div className="border-t-2 border-charcoal/10 mt-8 pt-4 flex items-center justify-between text-[10px] font-display font-bold text-charcoal">
                  <span>DEPT VALIDATED</span>
                  <span className="text-safety">OSHA SEC</span>
                </div>
                
                <div className="absolute top-0 right-0 w-[6px] h-[6px] bg-charcoal"></div>
                <div className="absolute bottom-0 left-0 w-[6px] h-[6px] bg-charcoal"></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Sub-icons for leaders inside the component
function CompassAbout(props: React.SVGProps<SVGSVGElement>) {
  return <Award {...props} />;
}
