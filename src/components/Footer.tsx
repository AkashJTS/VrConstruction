import React from 'react';
import { 
  Wrench, 
  Heart, 
  Rocket, 
  Trophy, 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#181818] text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Counters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-[#242424] p-5 rounded-xl border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-[#ffc107] flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-exo">Happy Clients</p>
              <span className="font-exo font-black text-2xl text-white">2,561+</span>
            </div>
          </div>

          <div className="bg-[#242424] p-5 rounded-xl border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-[#448aff] flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-exo">Years of Service</p>
              <span className="font-exo font-black text-2xl text-white">25 Years</span>
            </div>
          </div>

          <div className="bg-[#242424] p-5 rounded-xl border border-neutral-700/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-[#ffc107] flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-exo">Awards Won</p>
              <span className="font-exo font-black text-2xl text-white">14+ Awards</span>
            </div>
          </div>

        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#ffc107] flex items-center justify-center text-slate-950 font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-exo text-2xl font-black uppercase text-white tracking-tight">
                Handy<span className="text-[#448aff]">Man</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Melbourne's leading plumbing and handyman service provider with 25 years of proven reliability, 24/7 emergency dispatch, and lifetime guarantee.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Master Plumbers Certified
              </p>
              <p>Licence ID: #VIC-PLMB-78291</p>
            </div>
          </div>

          {/* Col 2: Site Links */}
          <div>
            <h5 className="font-exo font-bold text-sm uppercase text-white tracking-wider">
              Site Links
            </h5>
            <div className="h-0.5 w-8 bg-[#ffc107] my-2.5"></div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#ffc107] transition-colors">
                  • Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#ffc107] transition-colors">
                  • About Us & History
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'team')} className="hover:text-[#ffc107] transition-colors">
                  • Our Engineering Staff
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#ffc107] transition-colors">
                  • Service Packages & Rates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'calculator')} className="hover:text-[#ffc107] transition-colors">
                  • Instant Pricing Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#ffc107] transition-colors">
                  • Contact Us & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h5 className="font-exo font-bold text-sm uppercase text-white tracking-wider">
              Our Services
            </h5>
            <div className="h-0.5 w-8 bg-[#ffc107] my-2.5"></div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onNavigate('services', 'plumb')} className="hover:text-[#ffc107] transition-colors">
                  • HandyMan Repairs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'drain')} className="hover:text-[#ffc107] transition-colors">
                  • Drain Cleaning & Jetting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'gas')} className="hover:text-[#ffc107] transition-colors">
                  • Gas Lines & Heating
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'sewer')} className="hover:text-[#ffc107] transition-colors">
                  • Trenchless Sewer Lines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'water')} className="hover:text-[#ffc107] transition-colors">
                  • Water Damage Prevention
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'tankless')} className="hover:text-[#ffc107] transition-colors">
                  • Tankless Water Heaters
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-3">
            <h5 className="font-exo font-bold text-sm uppercase text-white tracking-wider">
              Contact & Dispatch
            </h5>
            <div className="h-0.5 w-8 bg-[#ffc107] my-2.5"></div>
            
            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ffc107] flex-shrink-0 mt-0.5" />
                <span>44 New Design Street, Melbourne 005 VIC</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffc107] flex-shrink-0" />
                <a href="tel:+61123456789" className="text-white font-bold hover:text-amber-400">
                  +61 (123) 456 789
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffc107] flex-shrink-0" />
                <span>info@example.com</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-2">
              <a href="#facebook" className="w-8 h-8 rounded bg-neutral-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-8 h-8 rounded bg-neutral-800 hover:bg-blue-400 text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-8 h-8 rounded bg-neutral-800 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 HandyMan. All Rights Reserved. Master Plumber Template by M_Adnan.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
