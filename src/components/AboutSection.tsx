import React, { useState } from 'react';
import { 
  Award, 
  History, 
  TrendingUp, 
  ChevronDown, 
  Heart, 
  Rocket, 
  Trophy, 
  Users, 
  Star, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { accordionItems, teamMembersData, testimonialsData, partnerLogos } from '../data/handymanData';
import { NavSection, TeamMember } from '../types';

interface AboutSectionProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onRequestQuote }) => {
  const [openAccordion, setOpenAccordion] = useState<string>('collapseOne');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="about" className="relative bg-white">
      
      {/* ===== SUB-BANNER HEADER ===== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-12 lg:py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            About Us
          </h1>
          <p className="font-exo text-amber-400 text-xs sm:text-sm uppercase tracking-widest font-bold mt-2">
            We Have 25 Years Experience in Plumbing & Property Repairs
          </p>

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase mt-6">
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white">
              Home
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-[#ffc107]">About Us</span>
          </div>
        </div>
      </div>

      {/* ===== WHO WE ARE (ACCORDION & STORY) ===== */}
      <div id="who-we-are" className="py-16 lg:py-20 bg-gray-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Accordion Module */}
            <div className="lg:col-span-6 space-y-6">
              <div className="title-stripe">
                <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Company Profile</span>
                <h2 className="font-exo text-2xl sm:text-3xl font-black text-slate-900 uppercase leading-tight mt-1">
                  Who We Are
                </h2>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Founded in 2001, HandyMan provides residential and commercial clients across Melbourne with prompt, licensed, and transparent plumbing solutions. Whether tackling high-pressure sewer clearing or luxury bathroom remodels, our commitment to quality work and lifetime support never wavers.
              </p>

              {/* Accordion Panels */}
              <div className="space-y-3 pt-2">
                {accordionItems.map((item) => {
                  const isOpen = openAccordion === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className={`border rounded-xl transition-all overflow-hidden ${
                        isOpen ? 'bg-white border-amber-400 shadow-md' : 'bg-white/70 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isOpen ? 'bg-amber-400 text-slate-950' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.id === 'collapseOne' ? <Award className="w-4 h-4" /> : item.id === 'collapseTwo' ? <History className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                          </div>
                          <span className="font-exo font-bold text-sm uppercase text-slate-900">
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Modern Visual Collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" 
                    alt="Plumber at work" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="bg-[#448aff] text-white p-5 rounded-2xl shadow-md text-center">
                    <span className="font-exo font-black text-3xl sm:text-4xl block text-amber-300">
                      25+
                    </span>
                    <span className="font-exo font-bold text-xs uppercase tracking-wider block mt-1">
                      Years Serving Melbourne
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md text-center">
                    <span className="font-exo font-black text-3xl sm:text-4xl block text-emerald-400">
                      100%
                    </span>
                    <span className="font-exo font-bold text-xs uppercase tracking-wider block mt-1">
                      Guaranteed Satisfaction
                    </span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" 
                    alt="Inspection diagnostics" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===== COUNTER STATS BAR ===== */}
      <div className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            {/* Counter 1: Happy Clients */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/60 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <span className="font-exo font-black text-3xl sm:text-4xl text-white">2,561+</span>
              <span className="text-xs uppercase font-bold text-gray-400 mt-1 tracking-wider">Happy Clients</span>
            </div>

            {/* Counter 2: Years of Service */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/60 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-[#448aff] flex items-center justify-center mb-3">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="font-exo font-black text-3xl sm:text-4xl text-white">25</span>
              <span className="text-xs uppercase font-bold text-gray-400 mt-1 tracking-wider">Years of Service</span>
            </div>

            {/* Counter 3: Awards Won */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/60 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="font-exo font-black text-3xl sm:text-4xl text-white">14+</span>
              <span className="text-xs uppercase font-bold text-gray-400 mt-1 tracking-wider">Industry Awards</span>
            </div>

            {/* Counter 4: Certified Engineers */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/60 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-exo font-black text-3xl sm:text-4xl text-white">123+</span>
              <span className="text-xs uppercase font-bold text-gray-400 mt-1 tracking-wider">Licensed Pros</span>
            </div>

          </div>
        </div>
      </div>

      {/* ===== TEAM MEMBERS SECTION ===== */}
      <div id="team" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Certified Master Plumbers</span>
            <h2 className="font-exo text-3xl font-black text-slate-900 uppercase mt-1">
              Our Team Members
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Every technician is vetted, certified, background-checked, and equipped with the latest diagnostic tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembersData.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                {/* Photo & Hover Overlays */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-1 rounded shadow">
                    {member.experience}
                  </div>

                  {/* Quick Socials on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <a href="#facebook" className="w-8 h-8 rounded-full bg-white/90 text-blue-600 flex items-center justify-center hover:bg-white text-xs">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#twitter" className="w-8 h-8 rounded-full bg-white/90 text-blue-400 flex items-center justify-center hover:bg-white text-xs">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/90 text-blue-700 flex items-center justify-center hover:bg-white text-xs">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h6 className="font-exo font-bold text-base uppercase text-slate-900">
                      {member.name}
                    </h6>
                    <p className="text-xs font-semibold text-[#448aff] uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {member.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedTeamMember(member)}
                    className="mt-4 w-full bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-800 text-[11px] font-bold uppercase tracking-wider py-2 rounded-lg border border-gray-200 transition-colors"
                  >
                    View Specialty Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== CLIENTS FEEDBACK / TESTIMONIALS ===== */}
      <div id="feedback" className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="title-stripe">
              <span className="text-xs font-bold uppercase tracking-wider text-[#448aff]">Verified Reviews</span>
              <h2 className="font-exo text-2xl sm:text-3xl font-black text-slate-900 uppercase leading-tight mt-1">
                Feedback From Clients
              </h2>
            </div>

            {/* Testimonial Nav Arrows */}
            <div className="flex items-center gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-slate-700 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center shadow-sm transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-slate-700 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center shadow-sm transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((t, idx) => {
              const isHighlight = idx === currentTestimonialIndex;
              return (
                <div 
                  key={t.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isHighlight 
                      ? 'bg-white border-amber-400 shadow-xl ring-2 ring-amber-400/20'
                      : 'bg-white/80 border-gray-200/80 shadow-sm'
                  }`}
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-6 mt-4 border-t border-gray-100">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
                    />
                    <div>
                      <h6 className="font-exo font-bold text-xs uppercase text-slate-900 leading-tight">
                        {t.name}
                      </h6>
                      <span className="text-[11px] text-[#448aff] font-medium block">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ===== PARTNERS / CERTIFICATIONS ===== */}
      <div className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-6">
            Industry Partners & Authorized Warranty Installers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-75">
            {partnerLogos.map((p, i) => (
              <div 
                key={i} 
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-exo font-black uppercase text-gray-700 tracking-wider shadow-sm"
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Bio Modal */}
      {selectedTeamMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src={selectedTeamMember.image} 
                alt={selectedTeamMember.name} 
                className="w-20 h-20 rounded-xl object-cover border-2 border-amber-400 shadow"
              />
              <div>
                <span className="bg-amber-100 text-amber-900 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  {selectedTeamMember.experience}
                </span>
                <h4 className="font-exo font-bold text-lg uppercase text-slate-900 mt-1">
                  {selectedTeamMember.name}
                </h4>
                <p className="text-xs text-[#448aff] font-semibold">
                  {selectedTeamMember.role}
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {selectedTeamMember.bio}
            </p>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Master Plumber License ID: #MP-78291</span>
              <button
                onClick={() => setSelectedTeamMember(null)}
                className="bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
