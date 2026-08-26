import React, { useState } from 'react';
import { 
  Wrench, 
  Droplet, 
  Flame, 
  Layers, 
  ShieldAlert, 
  Zap, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Clock, 
  Award, 
  Users, 
  DollarSign, 
  ShieldCheck,
  Tag,
  Check
} from 'lucide-react';
import { servicesData, whyChooseReasons } from '../data/handymanData';
import { NavSection, ServiceItem } from '../types';

interface ServicesSectionProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: (prefilledService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<string>('plumb');
  const [activeReason, setActiveReason] = useState<number>(0);

  // Cost Calculator State
  const [calcService, setCalcService] = useState<string>('HandyMan Repairs');
  const [calcProperty, setCalcProperty] = useState<string>('apartment');
  const [calcUrgency, setCalcUrgency] = useState<string>('standard');
  const [calculatedEstimate, setCalculatedEstimate] = useState<number>(145);

  const calculateCost = () => {
    let base = 89;
    if (calcService === 'Drain Cleaning') base = 119;
    if (calcService === 'Gas Lines & Heating') base = 149;
    if (calcService === 'Sewer Lines') base = 199;
    if (calcService === 'Tankless Water Heaters') base = 250;
    if (calcService === 'Water Damage Prevention') base = 135;
    if (calcService === 'HandyMan Inspections') base = 99;

    let propMultiplier = 1.0;
    if (calcProperty === 'house-small') propMultiplier = 1.25;
    if (calcProperty === 'house-large') propMultiplier = 1.6;
    if (calcProperty === 'commercial') propMultiplier = 2.1;

    let urgencyCost = 0;
    if (calcUrgency === 'same-day') urgencyCost = 45;
    if (calcUrgency === 'emergency') urgencyCost = 90;

    const total = Math.round(base * propMultiplier + urgencyCost);
    setCalculatedEstimate(total);
  };

  const currentService: ServiceItem = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <section id="services" className="relative bg-white">
      
      {/* ===== SUB-BANNER HEADER ===== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-12 lg:py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Our Services
          </h1>
          <p className="font-exo text-amber-400 text-xs sm:text-sm uppercase tracking-widest font-bold mt-2">
            We have 25 years experience in plumbing & emergency maintenance
          </p>

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase mt-6">
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white">
              Home
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-[#ffc107]">Services</span>
          </div>
        </div>
      </div>

      {/* ===== 3 PILLARS: EMERGENCY / RESIDENTIAL / COMMERCIAL ===== */}
      <div className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Emergency Service */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-64 bg-slate-900 cursor-pointer" onClick={() => onRequestQuote('Emergency Plumbing')}>
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80" 
                alt="Emergency service" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2">
                  24/7 Available
                </span>
                <h4 className="font-exo font-bold text-xl uppercase text-white group-hover:text-amber-400 transition-colors">
                  Emergency Service
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Burst pipes, gas leaks & active flood remediation.
                </p>
              </div>
            </div>

            {/* 2. Residential Service */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-64 bg-slate-900 cursor-pointer" onClick={() => onRequestQuote('Residential Plumbing')}>
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                alt="Residential service" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2">
                  Home & Apartment
                </span>
                <h4 className="font-exo font-bold text-xl uppercase text-white group-hover:text-amber-400 transition-colors">
                  Residential Service
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Kitchen, bathroom, water heaters & fixtures.
                </p>
              </div>
            </div>

            {/* 3. Commercial Service */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group h-64 bg-slate-900 cursor-pointer" onClick={() => onRequestQuote('Commercial Plumbing')}>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                alt="Commercial service" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="bg-blue-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2">
                  Offices & Facilities
                </span>
                <h4 className="font-exo font-bold text-xl uppercase text-white group-hover:text-amber-400 transition-colors">
                  Commercial Service
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Sewer mains, grease traps, backflow certification.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== INTERACTIVE 7 SERVICE TABS ===== */}
      <div id="service-tabs" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="title-stripe mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Complete Capabilities</span>
            <h2 className="font-exo text-2xl sm:text-3xl font-black text-slate-900 uppercase leading-tight mt-1">
              Welcome to our HandyMan Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Tabs List (Bootstrap nav-tabs style) */}
            <div className="lg:col-span-4 bg-gray-50 p-2.5 rounded-2xl border border-gray-200">
              <div className="space-y-1.5">
                {servicesData.map((service) => {
                  const isSelected = activeTab === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-exo font-bold text-xs uppercase tracking-wider transition-all ${
                        isSelected 
                          ? 'bg-[#448aff] text-white shadow-md' 
                          : 'text-gray-700 hover:bg-gray-200/70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {service.id === 'plumb' && <Wrench className="w-4 h-4" />}
                        {service.id === 'drain' && <Droplet className="w-4 h-4" />}
                        {service.id === 'gas' && <Flame className="w-4 h-4" />}
                        {service.id === 'sewer' && <Layers className="w-4 h-4" />}
                        {service.id === 'water' && <ShieldAlert className="w-4 h-4" />}
                        {service.id === 'tankless' && <Zap className="w-4 h-4" />}
                        {service.id === 'plimbing' && <ClipboardCheck className="w-4 h-4" />}
                        <span>{service.title}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Special Offer Voucher Banner */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" /> Special Promotion
                </div>
                <h5 className="font-exo font-black text-sm uppercase mt-1">
                  Get $25 OFF Any Tankless Water Heater Installation
                </h5>
                <button
                  onClick={() => onRequestQuote('Tankless Water Heater Promo $25 OFF')}
                  className="mt-3 w-full bg-slate-950 hover:bg-slate-900 text-white text-[11px] font-bold uppercase py-2 rounded-lg"
                >
                  Claim Voucher Now
                </button>
              </div>
            </div>

            {/* Right Tab Content Panel */}
            <div className="lg:col-span-8 bg-gray-50/70 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-[#448aff] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                      {currentService.priceRange}
                    </span>
                    <span className="text-gray-400 text-xs">• 100% Certified</span>
                  </div>

                  <h3 className="font-exo text-2xl font-black uppercase text-slate-900">
                    {currentService.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentService.fullDesc}
                  </p>

                  <div className="pt-2">
                    <h6 className="font-exo font-bold text-xs uppercase text-slate-900 tracking-wider mb-2.5">
                      Included Scope & Key Work Items:
                    </h6>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {currentService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Droplet className="w-3.5 h-3.5 text-[#448aff] fill-[#448aff] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onRequestQuote(currentService.title)}
                      className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase px-6 py-3 rounded-lg shadow-sm transition-all"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="tel:+61123456789"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-exo font-bold text-xs uppercase px-5 py-3 rounded-lg transition-all"
                    >
                      <span>Call Technician</span>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                    <img 
                      src={currentService.image} 
                      alt={currentService.title} 
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===== 5 REASONS TO WORK WITH US (VERTICAL TABS) ===== */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="title-stripe mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Customer Confidence</span>
            <h2 className="font-exo text-2xl sm:text-3xl font-black text-slate-900 uppercase leading-tight mt-1">
              5 Reasons to Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 5 Vertical Reason Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {whyChooseReasons.map((r, index) => {
                const isActive = activeReason === index;
                return (
                  <button
                    key={r.num}
                    onClick={() => setActiveReason(index)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all ${
                      isActive 
                        ? 'bg-white border-amber-400 shadow-md ring-1 ring-amber-400' 
                        : 'bg-white/60 border-gray-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-exo font-black text-sm text-[#448aff]">
                        {r.num}
                      </span>
                      <span className="font-exo font-bold text-xs uppercase text-slate-900 tracking-wider">
                        {r.title}
                      </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-amber-500' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Reason Spotlight Card */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#448aff] flex items-center justify-center mb-4">
                  {activeReason === 0 && <Clock className="w-7 h-7" />}
                  {activeReason === 1 && <Award className="w-7 h-7" />}
                  {activeReason === 2 && <Users className="w-7 h-7" />}
                  {activeReason === 3 && <DollarSign className="w-7 h-7" />}
                  {activeReason === 4 && <ShieldCheck className="w-7 h-7" />}
                </div>

                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">
                  Core Advantage #{whyChooseReasons[activeReason].num}
                </span>

                <h3 className="font-exo text-2xl font-black uppercase text-slate-900 mt-1 mb-3">
                  {whyChooseReasons[activeReason].title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {whyChooseReasons[activeReason].desc}
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  We invest in ongoing technician training, ISO safety compliance, and direct manufacturer partnerships so every customer receives uncompromising workmanship.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> 100% Backed by Warranty
                </span>
                <button
                  onClick={onRequestQuote}
                  className="bg-[#448aff] hover:bg-blue-600 text-white font-exo font-bold text-xs uppercase px-5 py-2.5 rounded-lg"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===== INSTANT PRICE ESTIMATOR CALCULATOR ===== */}
      <div id="calculator" className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">
              <Calculator className="w-3.5 h-3.5" /> Instant Cost Calculator
            </div>
            <h2 className="font-exo text-3xl font-black uppercase tracking-tight">
              Estimate Your Repair Costs
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Select your required service and property details for an instant indicative estimate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              
              {/* Select 1: Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 tracking-wider mb-2">
                  1. Service Type
                </label>
                <select
                  value={calcService}
                  onChange={(e) => {
                    setCalcService(e.target.value);
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option>HandyMan Repairs</option>
                  <option>Drain Cleaning</option>
                  <option>Gas Lines & Heating</option>
                  <option>Sewer Lines</option>
                  <option>Tankless Water Heaters</option>
                  <option>Water Damage Prevention</option>
                  <option>HandyMan Inspections</option>
                </select>
              </div>

              {/* Select 2: Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 tracking-wider mb-2">
                  2. Property Type
                </label>
                <select
                  value={calcProperty}
                  onChange={(e) => {
                    setCalcProperty(e.target.value);
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="apartment">1-2 Bed Apartment</option>
                  <option value="house-small">3-4 Bed Suburban House</option>
                  <option value="house-large">5+ Bed Multi-Level House</option>
                  <option value="commercial">Commercial / Retail Facility</option>
                </select>
              </div>

              {/* Select 3: Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 tracking-wider mb-2">
                  3. Booking Urgency
                </label>
                <select
                  value={calcUrgency}
                  onChange={(e) => {
                    setCalcUrgency(e.target.value);
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="standard">Standard (Next 2-3 Days)</option>
                  <option value="same-day">Same-Day Priority (+$45)</option>
                  <option value="emergency">24/7 Midnight Emergency (+$90)</option>
                </select>
              </div>

            </div>

            {/* Calculate Button & Result */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <button
                  onClick={calculateCost}
                  className="bg-[#448aff] hover:bg-blue-600 text-white font-exo font-bold text-xs uppercase px-6 py-3 rounded-lg shadow transition-all"
                >
                  Calculate My Estimate
                </button>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                    Estimated Range
                  </span>
                  <span className="font-exo font-black text-2xl sm:text-3xl text-amber-400">
                    ${calculatedEstimate} - ${calculatedEstimate + 60} AUD
                  </span>
                </div>
                <button
                  onClick={() => onRequestQuote(`${calcService} (Est: $${calculatedEstimate})`)}
                  className="bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase px-5 py-3 rounded-lg shadow-sm"
                >
                  Lock In Estimate
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
