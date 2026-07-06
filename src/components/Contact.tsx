'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    site: '',
    division: 'CAP-01',
    specs: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        company: '',
        site: '',
        division: 'CAP-01',
        specs: '',
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-concrete scroll-mt-12">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block bg-charcoal text-safety font-display font-bold text-xs uppercase tracking-wider px-3 py-1 mb-4 border-2 border-charcoal">
            ESTIMATING OFFICE
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none text-charcoal mb-6">
            INITIALIZE CONTRACT
          </h2>
          <div className="h-4 bg-safety border-3 border-charcoal mb-8" />
          <p className="font-body text-base md:text-lg text-charcoal/80 leading-relaxed font-medium">
            Submit site plans and loading specs directly to our estimators. Our engineering division will formulate initial toll estimates within 48 operational hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Information Cards (cols: 1 to 5) - Restyled with thick borders */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white border-3 border-charcoal p-6 md:p-8 relative flex-grow flex flex-col justify-between">
              <div>
                <div className="font-display font-extrabold text-xs text-safety uppercase tracking-tight border-b-2 border-charcoal/10 pb-4 mb-6">
                  ENGINEERING CORRESPONDENCE
                </div>

                <div className="space-y-6 font-body text-xs font-semibold text-charcoal/70">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-charcoal shrink-0" />
                    <div>
                      <span className="text-charcoal block font-display font-bold uppercase text-sm mb-1">HEADQUARTERS</span>
                      <span>BUILDING B, SUITE 400</span>
                      <br />
                      <span>100 INFRASTRUCTURE WAY, BOSTON MA 02210</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t-2 border-charcoal/5 pt-4">
                    <Phone className="w-5 h-5 text-charcoal shrink-0" />
                    <div>
                      <span className="text-charcoal block font-display font-bold uppercase text-sm mb-1">TELECOM</span>
                      <span>ESTIMATING DIV: +1 (617) 555-0190</span>
                      <br />
                      <span>SAFETY DIV: +1 (617) 555-0199</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t-2 border-charcoal/5 pt-4">
                    <Mail className="w-5 h-5 text-charcoal shrink-0" />
                    <div>
                      <span className="text-charcoal block font-display font-bold uppercase text-sm mb-1">SECURE NETWORK</span>
                      <span>ESTIMATING@VANGUARD-CIVIL.COM</span>
                      <br />
                      <span>COMPLIANCE@VANGUARD-CIVIL.COM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-charcoal/10 mt-8 pt-4">
                <span className="font-display font-bold text-[9px] text-charcoal/40 uppercase block">
                  SECURITY PROTOCOL: SHA-256 ENCRYPTED COMM
                </span>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-charcoal"></div>
              <div className="absolute bottom-0 left-0 w-[8px] h-[8px] bg-charcoal"></div>
            </div>
          </div>

          {/* Right Side: Blocky Technical Form (cols: 6 to 12) */}
          <div className="lg:col-span-7 bg-white border-3 border-charcoal p-6 md:p-8 relative">
            <div className="font-display font-extrabold text-xs text-safety uppercase tracking-tight border-b-2 border-charcoal/10 pb-4 mb-6 flex justify-between items-center">
              <span>FORM-09A // ESTIMATOR SHEET</span>
              <span className="text-[10px] text-charcoal/60 bg-concrete px-2 py-0.5 border border-charcoal/20">STATUS: ACTIVE</span>
            </div>

            {submitted ? (
              <div className="h-[350px] flex flex-col items-center justify-center border-3 border-dashed border-safety text-center p-6 bg-concrete">
                <span className="font-display font-extrabold text-base text-charcoal uppercase tracking-wider mb-4">
                  TRANSMISSION SUCCESSFUL
                </span>
                <p className="font-body text-xs text-charcoal/70 max-w-sm leading-relaxed font-semibold">
                  Data VN-{Math.floor(Math.random() * 9000 + 1000)} logged at estimator core. Toll feedback schedule output expected in 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="font-display font-bold text-xs text-charcoal uppercase tracking-tight block mb-2">
                      Client Representative PE
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-concrete border-3 border-charcoal focus:border-safety text-charcoal font-body font-semibold text-sm p-4 outline-none"
                      placeholder="E.G. JOHN DOE, PE"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="font-display font-bold text-xs text-charcoal uppercase tracking-tight block mb-2">
                      Agency / Entity Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-concrete border-3 border-charcoal focus:border-safety text-charcoal font-body font-semibold text-sm p-4 outline-none"
                      placeholder="E.G. BASIN WATER AUTHORITY"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Site Address */}
                  <div>
                    <label htmlFor="site" className="font-display font-bold text-xs text-charcoal uppercase tracking-tight block mb-2">
                      Site Location / Coordinates
                    </label>
                    <input
                      type="text"
                      id="site"
                      name="site"
                      required
                      value={formState.site}
                      onChange={handleChange}
                      className="w-full bg-concrete border-3 border-charcoal focus:border-safety text-charcoal font-body font-semibold text-sm p-4 outline-none"
                      placeholder="E.G. 42.3601 N, 71.0589 W"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>

                  {/* Scope Selection */}
                  <div>
                    <label htmlFor="division" className="font-display font-bold text-xs text-charcoal uppercase tracking-tight block mb-2">
                      Operational Division
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={formState.division}
                      onChange={handleChange}
                      className="w-full bg-concrete border-3 border-charcoal focus:border-safety text-charcoal font-body font-semibold text-sm p-4 outline-none cursor-pointer"
                      style={{ borderRadius: '0px' }}
                    >
                      <option value="CAP-01">CIVIL INFRASTRUCTURE</option>
                      <option value="CAP-02">STRUCTURAL RETROFITTING</option>
                      <option value="CAP-03">COMMERCIAL & INDUSTRIAL</option>
                      <option value="CAP-04">PRECISION ENGINEERING</option>
                    </select>
                  </div>
                </div>

                {/* Specs */}
                <div>
                  <label htmlFor="specs" className="font-display font-bold text-xs text-charcoal uppercase tracking-tight block mb-2">
                    Scope Ledger & Load Specifications
                  </label>
                  <textarea
                    id="specs"
                    name="specs"
                    required
                    rows={4}
                    value={formState.specs}
                    onChange={handleChange}
                    className="w-full bg-concrete border-3 border-charcoal focus:border-safety text-charcoal font-body font-semibold text-sm p-4 outline-none resize-none"
                    placeholder="ENTER CRITICAL SPECS, LOADING TOLERANCES, AND ESTIMATED SEISMIC RETROFIT CRITERIA..."
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                {/* Submit button in safety orange */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-safety hover:bg-charcoal hover:text-safety text-charcoal font-display font-extrabold text-sm uppercase p-5 transition-all duration-300 tracking-wider cursor-pointer border-3 border-charcoal"
                    style={{ borderRadius: '0px' }}
                  >
                    Transmit Specs to Estimator
                  </button>
                </div>
              </form>
            )}

            {/* Decorative accents */}
            <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-charcoal"></div>
            <div className="absolute bottom-0 left-0 w-[8px] h-[8px] bg-charcoal"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
