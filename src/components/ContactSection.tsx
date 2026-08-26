import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Tag, 
  Send, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { NavSection, ServiceRequest } from '../types';

interface ContactSectionProps {
  onNavigate: (section: NavSection) => void;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, prefilledService }) => {
  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: prefilledService || 'HandyMan Repairs',
    preferredDate: '',
    preferredTime: 'Morning (8AM - 12PM)',
    urgency: 'routine',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = `HM-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingConfirmation(referenceId);
    }, 900);
  };

  return (
    <section id="contact" className="relative bg-white">
      
      {/* ===== SUB-BANNER HEADER ===== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-12 lg:py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="font-exo text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Contact Us
          </h1>
          <p className="font-exo text-amber-400 text-xs sm:text-sm uppercase tracking-widest font-bold mt-2">
            We Have 25 Years Experience In Plumbing & Property Services
          </p>

          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase mt-6">
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white">
              Home
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-[#ffc107]">Contact</span>
          </div>
        </div>
      </div>

      {/* ===== 3 CONTACT INFORMATION CARDS ===== */}
      <div className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: 24/7 Hotline */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h6 className="font-exo font-bold text-base uppercase text-slate-900 leading-tight">
                  Call Us 24/7<br />For Emergency Service!
                </h6>
                <div className="h-0.5 w-8 bg-[#448aff] mx-auto my-3"></div>
                <a 
                  href="tel:+61123456789" 
                  className="font-exo font-black text-xl text-[#448aff] hover:text-blue-700 block my-2"
                >
                  +61 (123) 456 789
                </a>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                Instant Priority Dispatch Active
              </p>
            </div>

            {/* Card 2: Contact Address */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#448aff] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h6 className="font-exo font-bold text-base uppercase text-slate-900 leading-tight">
                  Contact Address
                </h6>
                <div className="h-0.5 w-8 bg-[#448aff] mx-auto my-3"></div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  44 New Design Street, Melbourne 005, VIC Australia
                </p>
                <div className="mt-2 space-y-0.5 text-xs text-gray-500">
                  <p>Tel: +61 (123) 456 789</p>
                  <p>Email: info@example.com</p>
                </div>
              </div>
              <p className="text-xs text-emerald-600 uppercase tracking-wider font-bold mt-2">
                Open Monday - Sunday (24 Hrs)
              </p>
            </div>

            {/* Card 3: Special Offers */}
            <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 p-8 rounded-2xl shadow-md text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center mx-auto mb-4 shadow">
                  <Tag className="w-6 h-6" />
                </div>
                <h6 className="font-exo font-black text-base uppercase text-slate-950 leading-tight">
                  Special Offers
                </h6>
                <div className="h-0.5 w-8 bg-slate-950 mx-auto my-3"></div>
                <p className="font-exo font-extrabold text-sm uppercase leading-tight">
                  Get <span className="text-white bg-slate-950 px-2 py-0.5 rounded">$25 OFF</span> Any Tankless Water Heater Installation
                </p>
              </div>
              <button
                onClick={() => setFormData({...formData, serviceType: 'Tankless Water Heaters ($25 Promo)'})}
                className="mt-4 w-full bg-slate-950 hover:bg-slate-900 text-white font-exo font-bold text-xs uppercase py-2.5 rounded-lg shadow transition-colors"
              >
                Apply To Form Below
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ===== REQUEST SERVICE OR ESTIMATE FORM ===== */}
      <div id="contact-form-section" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="font-exo text-3xl font-black uppercase text-slate-900">
              Request Service or Estimate
            </h2>
            <div className="h-1 w-10 bg-[#448aff] mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Feel free to call us directly or simply complete our form below and we will follow up with you immediately.
            </p>
          </div>

          {bookingConfirmation ? (
            <div className="bg-emerald-50 border-2 border-emerald-500/80 rounded-2xl p-8 text-center shadow-lg animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs uppercase font-bold text-emerald-700 tracking-widest block">
                Booking Reference ID
              </span>
              <h3 className="font-exo font-black text-2xl sm:text-3xl text-slate-900 mt-1 mb-2">
                {bookingConfirmation}
              </h3>
              <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! Your service request has been logged into our dispatcher system. A master technician is assigned and will contact you at <strong>{formData.phone}</strong>.
              </p>
              
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setBookingConfirmation(null);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      address: '',
                      serviceType: 'HandyMan Repairs',
                      preferredDate: '',
                      preferredTime: 'Morning (8AM - 12PM)',
                      urgency: 'routine',
                      message: ''
                    });
                  }}
                  className="bg-[#448aff] hover:bg-blue-600 text-white font-exo font-bold text-xs uppercase px-6 py-2.5 rounded-lg"
                >
                  Submit Another Ticket
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50/80 border border-gray-200/90 rounded-2xl p-6 sm:p-10 shadow-sm space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Full Service Address
                  </label>
                  <input 
                    type="text" 
                    placeholder="Street address & suburb, Melbourne"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  >
                    <option>HandyMan Repairs</option>
                    <option>Drain Cleaning</option>
                    <option>Gas Lines & Heating</option>
                    <option>Sewer Lines</option>
                    <option>Water Damage Prevention</option>
                    <option>Tankless Water Heaters</option>
                    <option>HandyMan Inspections</option>
                    <option>Emergency Service Callout</option>
                    <option>Tankless Water Heaters ($25 Promo)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input 
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Urgency Level
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value as any})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  >
                    <option value="routine">Routine (Next 2-3 days)</option>
                    <option value="urgent">Urgent (Today / Tomorrow)</option>
                    <option value="emergency">24/7 Active Emergency (Immediate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                  Description of work or services needed
                </label>
                <textarea 
                  rows={4}
                  placeholder="Provide any details about the leak, noises, appliance models, or specific plumbing requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-sm uppercase tracking-wider px-10 py-3.5 rounded-lg shadow-md transition-all border border-amber-300 active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* ===== INTERACTIVE MAP LOCATOR MODULE ===== */}
      <div id="map" className="relative w-full h-[400px] bg-slate-200 border-t border-gray-300 overflow-hidden">
        {/* Custom interactive Map Mock with Melbourne Victoria Map styling */}
        <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
          {/* Map Vector Graphic Grid */}
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
          
          {/* Central Map Marker Card */}
          <div className="relative z-10 bg-white p-5 rounded-2xl shadow-2xl border-2 border-[#448aff] max-w-sm mx-4 text-center transform hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-[#448aff] text-white flex items-center justify-center mx-auto mb-2 shadow-lg">
              <MapPin className="w-5 h-5 animate-bounce" />
            </div>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
              HandyMan Melbourne HQ
            </span>
            <h5 className="font-exo font-bold text-sm uppercase text-slate-900 mt-2">
              121 King St, Melbourne VIC 3000
            </h5>
            <p className="text-xs text-gray-500 mt-1">
              Dispatching vans across Melbourne Central, Docklands, Southbank & Suburbs.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 24/7 Open
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#448aff] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
