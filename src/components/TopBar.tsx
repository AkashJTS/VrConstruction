import React from 'react';
import { Phone, ShieldCheck, Clock, Award, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-[#448aff] text-white text-xs border-b border-[#3b7ae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between min-h-[44px] py-1.5 sm:py-0 gap-2">
          {/* Left Value Props */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 font-medium uppercase tracking-wider text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-blue-50">
              <Clock className="w-3.5 h-3.5 text-amber-300" /> Quick Service.
            </span>
            <span className="hidden xs:inline text-blue-200">•</span>
            <span className="flex items-center gap-1.5 text-blue-50">
              <Award className="w-3.5 h-3.5 text-amber-300" /> Quality Work.
            </span>
            <span className="hidden xs:inline text-blue-200">•</span>
            <span className="flex items-center gap-1.5 text-blue-50">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Lifetime Support.
            </span>
          </div>

          {/* Right Hotline & Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+61123456789" 
              className="flex items-center gap-1.5 text-blue-100 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>+61 (123) 456 789</span>
            </a>
            <div className="h-3 w-px bg-blue-300/40 hidden sm:block"></div>
            <div className="flex items-center space-x-1.5">
              <a 
                href="#facebook" 
                title="Facebook" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600/40 hover:bg-blue-600 text-white transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#twitter" 
                title="Twitter" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600/40 hover:bg-blue-600 text-white transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#linkedin" 
                title="LinkedIn" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600/40 hover:bg-blue-600 text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#contact" 
                title="Direct Inquiry" 
                className="w-7 h-7 flex items-center justify-center rounded-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
