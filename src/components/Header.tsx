import React from 'react';
import { Wrench, MapPin, PhoneCall, Mail, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onRequestQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuote, onNavigate }) => {
  return (
    <header id="main-header" className="bg-white border-b border-gray-100 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-900 shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-exo text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
                  Handy<span className="text-[#448aff]">Man</span>
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wide">
                  PRO
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                Handy Man & Plumber Specialists
              </p>
            </div>
          </div>

          {/* Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex items-center gap-4 lg:gap-8">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#448aff] flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Our Location
                </span>
                <p className="text-xs font-semibold text-slate-800 leading-tight">
                  44 New Design Street,<br />Melbourne VIC 005
                </p>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5 animate-pulse">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  24/7 Dispatch Hotline
                </span>
                <a 
                  href="tel:+61123456789" 
                  className="text-sm font-extrabold text-[#448aff] hover:text-blue-700 leading-tight block"
                >
                  +61 (123) 456 789
                </a>
                <span className="text-[11px] text-gray-500">info@example.com</span>
              </div>
            </div>

            {/* Emergency Service Button */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-center">
              <button
                id="header-quote-btn"
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all border border-amber-300 active:scale-95"
              >
                <ShieldAlert className="w-4 h-4 text-slate-900" />
                <span>Book Service Now</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
