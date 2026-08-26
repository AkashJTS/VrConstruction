import React, { useState } from 'react';
import { 
  Clock, 
  Users, 
  DollarSign, 
  ThumbsUp, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2,
  Send,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Flame,
  Droplets,
  Wrench
} from 'lucide-react';
import { NavSection } from '../types';

interface HomeSectionProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, onRequestQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'HandyMan Repairs',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', service: 'HandyMan Repairs', description: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="home" className="relative">
      
      {/* ===== HERO SLIDER CONTAINER ===== */}
      <div className="relative bg-slate-900 overflow-hidden min-h-[560px] lg:min-h-[620px] flex items-center">
        
        {/* Background Image / Gradient Layers */}
        <div className="absolute inset-0 z-0">
          <img 
            src={
              currentSlide === 0
                ? "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
                : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            } 
            alt="Handyman and plumbing services" 
            className="w-full h-full object-cover opacity-35 transform transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#448aff_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Slide 1 Left: Quick Service Request Form */}
            {currentSlide === 0 ? (
              <>
                <div className="lg:col-span-5">
                  <div className="bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/10 rounded-full blur-2xl"></div>
                    
                    <div className="mb-5">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Sparkles className="w-4 h-4" /> 24 Hours Service Available
                      </div>
                      <h3 className="font-exo text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        Quick Service <span className="text-[#ffc107]">Request</span>
                      </h3>
                      <p className="text-gray-300 text-xs mt-1">
                        Fill out your inquiry below for rapid on-site dispatch.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-6 text-center animate-fadeIn">
                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                        <h4 className="text-white font-exo font-bold text-lg uppercase">Request Received!</h4>
                        <p className="text-xs text-emerald-200 mt-1">
                          Our on-duty master technician is reviewing your request and will call you within 15 minutes.
                        </p>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="mt-4 text-xs font-bold text-amber-400 hover:underline"
                        >
                          Submit another request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                              Your Name *
                            </label>
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. John Smith"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                              Phone Number *
                            </label>
                            <input 
                              type="tel" 
                              required
                              placeholder="e.g. +61 400 123 456"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                              Email Address
                            </label>
                            <input 
                              type="email" 
                              placeholder="name@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                              Service Needed
                            </label>
                            <select
                              value={formData.service}
                              onChange={(e) => setFormData({...formData, service: e.target.value})}
                              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                            >
                              <option>HandyMan Repairs</option>
                              <option>Drain Cleaning</option>
                              <option>Gas Lines & Heating</option>
                              <option>Sewer Line Replacement</option>
                              <option>Tankless Water Heaters</option>
                              <option>Water Damage Prevention</option>
                              <option>40-Point Inspection</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                            Description of work needed
                          </label>
                          <textarea 
                            rows={3}
                            placeholder="Describe your issue (e.g. leaking kitchen pipe, emergency gas smell, clogged drain)..."
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md hover:shadow-amber-400/20 transition-all border border-amber-300 active:scale-98 cursor-pointer"
                        >
                          {submitting ? (
                            <span>Submitting Dispatch...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Request Now</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Slide 1 Right: Presentation text & Hero Badges */}
                <div className="lg:col-span-7 text-white space-y-6">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>25 Years of Trusted Excellence</span>
                  </div>

                  <h1 className="font-exo text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
                    We Fix All Your <span className="text-[#ffc107]">HandyMan</span> & Plumbing Problems
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                    From midnight emergency burst pipes to routine tap replacements, gas fitting, and whole-house sewer line diagnostics. Our certified technicians arrive fully equipped to resolve your issues in a single visit.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onNavigate('services')}
                      className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg shadow-amber-400/20 transition-all active:scale-95"
                    >
                      <Wrench className="w-4 h-4" />
                      <span>Explore Services</span>
                    </button>
                    <button
                      onClick={() => onNavigate('about')}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-exo font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg border border-white/20 transition-all backdrop-blur-sm"
                    >
                      <span>About Our Company</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 3 Quick Hero Perks */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800 text-xs">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>30 Min Arrival</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <DollarSign className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Zero Callout Fee*</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Lifetime Guarantee</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Slide 2: Direct Callout Spotlight */
              <div className="lg:col-span-12 text-center text-white max-w-3xl mx-auto space-y-6 py-8">
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                  <Flame className="w-4 h-4 text-red-400" />
                  <span>Emergency On-Call Dispatch Active</span>
                </div>

                <h1 className="font-exo text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
                  Just Call <span className="text-[#ffc107] underline decoration-[#448aff]">+61 (123) 456 789</span>
                </h1>

                <p className="font-exo text-lg sm:text-2xl text-gray-200 uppercase font-semibold">
                  We Are Always Ready To Service Any Day, Any Time
                </p>

                <p className="text-gray-300 text-sm max-w-xl mx-auto">
                  Over 30 fully equipped response vans stationed across all major Melbourne sectors. Fast diagnostics, upfront quotes, and clean repairs guaranteed.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <a
                    href="tel:+61123456789"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-exo font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-lg shadow-red-600/30 transition-all active:scale-95"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>Call Emergency Line</span>
                  </a>
                  <button
                    onClick={onRequestQuote}
                    className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>Get Instant Quote</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
          <button 
            onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-colors"
            title="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            <span 
              onClick={() => setCurrentSlide(0)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentSlide === 0 ? 'bg-amber-400 w-6' : 'bg-white/40'
              }`}
            ></span>
            <span 
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                currentSlide === 1 ? 'bg-amber-400 w-6' : 'bg-white/40'
              }`}
            ></span>
          </div>
          <button 
            onClick={() => setCurrentSlide(currentSlide === 1 ? 0 : 1)}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-colors"
            title="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* ===== 4 CORE HIGHLIGHTS SECTION ===== */}
      <div id="home-features" className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="title-stripe">
                <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Why Homeowners Trust Us</span>
                <h2 className="font-exo text-2xl sm:text-3xl font-black text-slate-900 uppercase leading-tight mt-1">
                  We fix all your HandyMan problems
                </h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                With 25 years of hands-on experience in plumbing and general property repairs, our licensed technicians combine traditional craftsmanship with the latest electronic diagnostics.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 font-exo font-bold text-xs uppercase tracking-wider text-slate-900 border-2 border-[#ffc107] hover:bg-[#ffc107] px-6 py-2.5 rounded transition-all"
                >
                  <span>About More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 4 Grid Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. 24/7 Availability */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all group relative flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#448aff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h6 className="font-exo font-bold text-base uppercase text-slate-900 mb-1.5">
                      24/7 Availability
                    </h6>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Continuous day and night emergency readiness with fully equipped mobile units.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('services', 'emergency')}
                    className="mt-4 text-xs font-bold text-[#448aff] inline-flex items-center gap-1 hover:text-blue-700 self-start"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 2. Genius Workers */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all group relative flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <h6 className="font-exo font-bold text-base uppercase text-slate-900 mb-1.5">
                      Genius Workers
                    </h6>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Master-certified trade professionals trained on cutting-edge plumbing technology.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('about', 'team')}
                    className="mt-4 text-xs font-bold text-[#448aff] inline-flex items-center gap-1 hover:text-blue-700 self-start"
                  >
                    <span>Meet Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 3. Low Pricing */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all group relative flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h6 className="font-exo font-bold text-base uppercase text-slate-900 mb-1.5">
                      Low Transparent Pricing
                    </h6>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Upfront flat-rate estimates before work begins. Zero hidden travel fees or charges.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('services', 'calculator')}
                    className="mt-4 text-xs font-bold text-[#448aff] inline-flex items-center gap-1 hover:text-blue-700 self-start"
                  >
                    <span>View Rate Cards</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 4. Free Estimation */}
                <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all group relative flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ThumbsUp className="w-6 h-6" />
                    </div>
                    <h6 className="font-exo font-bold text-base uppercase text-slate-900 mb-1.5">
                      Free Estimation
                    </h6>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Complimentary written quotes and diagnostic consultation for residential renovations.
                    </p>
                  </div>
                  <button
                    onClick={onRequestQuote}
                    className="mt-4 text-xs font-bold text-[#448aff] inline-flex items-center gap-1 hover:text-blue-700 self-start"
                  >
                    <span>Request Free Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===== EMERGENCY CALLOUT BANNER STRIP ===== */}
      <div className="bg-gradient-to-r from-blue-700 via-[#448aff] to-blue-600 py-10 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-exo text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Don't See What You Need? Call Us Today!
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Custom fittings, emergency burst valves, boiler replacements & high-rise facilities.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+61123456789"
              className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-black text-base uppercase px-6 py-3 rounded-lg shadow-lg transition-transform active:scale-95"
            >
              <PhoneCall className="w-5 h-5" />
              <span>+61 (123) 456 789</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-exo font-bold text-xs uppercase px-5 py-3 rounded-lg border border-white/30 transition-colors"
            >
              <span>Contact Us Form</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
