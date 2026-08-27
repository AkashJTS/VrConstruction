import React from 'react';
import { Facebook, Twitter, Linkedin, PhoneCall  } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#052615] text-white text-[11px] font-bold tracking-wider">
      <div className="w-full px-5 flex items-center justify-between h-10">

        {/* Left Text */}
        <div className="flex items-center space-x-6 uppercase font-black">
          <span>Built Right. </span>
          <span>Built to Last.</span>
        </div>

        {/* Right Social Links */}
        <div className="flex items-center h-full border-r border-white/20">
        <div className="hidden lg:flex items-center gap-4 mr-4 shrink-0">
          <a
            href="tel:+61123456789"
            className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <PhoneCall className="w-4 h-4 text-[#facc15]" />
            <span>+91 (123) 456 789</span>
          </a>
        </div>
          <a href="#facebook" className="h-full px-3.5 flex items-center justify-center border-l border-white/20 hover:bg-emerald-900 transition-colors">
            <Facebook className="w-3.5 h-3.5 fill-current" />
          </a>
          <a href="#twitter" className="h-full px-3.5 flex items-center justify-center border-l border-white/20 hover:bg-emerald-900 transition-colors">
            <Twitter className="w-3.5 h-3.5 fill-current" />
          </a>
          <a href="#linkedin" className="h-full px-3.5 flex items-center justify-center border-l border-white/20 hover:bg-emerald-900 transition-colors">
            <Linkedin className="w-3.5 h-3.5 fill-current" />
          </a>
          <a href="#tumblr" className="h-full px-3.5 flex items-center justify-center border-l border-white/20 hover:bg-emerald-900 transition-colors font-serif text-xs lowercase">
            t
          </a>
        </div>

      </div>
    </div>
  );
};