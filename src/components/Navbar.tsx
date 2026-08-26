import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Home, 
  Info, 
  Wrench, 
  Phone, 
  Grid, 
  Calendar, 
  Sparkles,
  Award,
  Users,
  ShieldCheck,
  Flame,
  Droplets,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onOpenSearch: () => void;
  onOpenQuickQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  onOpenSearch, 
  onOpenQuickQuote 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: NavSection, subTarget?: string) => {
    onNavigate(section, subTarget);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav 
      id="main-navbar" 
      className={`bg-[#ffc107] text-slate-900 shadow-md transition-all duration-300 z-50 ${
        isSticky ? 'sticky top-0 shadow-lg' : 'relative'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[58px]">
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* 1. HOME */}
            <div className="relative group">
              <button
                id="nav-home-btn"
                onClick={() => handleNavClick('home')}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs uppercase font-exo font-bold tracking-wider transition-colors border-r border-amber-500/40 ${
                  activeSection === 'home'
                    ? 'bg-amber-400 text-slate-950 shadow-inner'
                    : 'text-slate-900 hover:bg-amber-400/80 hover:text-slate-950'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Home Dropdown Menu */}
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white rounded-b-lg shadow-xl border-t-2 border-[#448aff] py-2 z-50 animate-fadeIn">
                <button
                  onClick={() => handleNavClick('home', 'banner')}
                  className="w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quick Booking Slider</span>
                </button>
                <button
                  onClick={() => handleNavClick('home', 'features')}
                  className="w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2 border-t border-gray-100"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>24/7 Service Highlights</span>
                </button>
              </div>
            </div>

            {/* 2. ABOUT US */}
            <div className="relative group">
              <button
                id="nav-about-btn"
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs uppercase font-exo font-bold tracking-wider transition-colors border-r border-amber-500/40 ${
                  activeSection === 'about'
                    ? 'bg-amber-400 text-slate-950 shadow-inner'
                    : 'text-slate-900 hover:bg-amber-400/80 hover:text-slate-950'
                }`}
              >
                <Info className="w-4 h-4" />
                <span>About Us</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              {/* About Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white rounded-b-lg shadow-xl border-t-2 border-[#448aff] py-2 z-50 animate-fadeIn">
                <button
                  onClick={() => handleNavClick('about', 'who-we-are')}
                  className="w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Award className="w-3.5 h-3.5 text-blue-500" />
                  <span>Who We Are & History</span>
                </button>
                <button
                  onClick={() => handleNavClick('about', 'team')}
                  className="w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2 border-t border-gray-100"
                >
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>Our Specialist Team</span>
                </button>
                <button
                  onClick={() => handleNavClick('about', 'feedback')}
                  className="w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2 border-t border-gray-100"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>Client Feedback & Testimonials</span>
                </button>
              </div>
            </div>

            {/* 3. SERVICES */}
            <div className="relative group">
              <button
                id="nav-services-btn"
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs uppercase font-exo font-bold tracking-wider transition-colors border-r border-amber-500/40 ${
                  activeSection === 'services'
                    ? 'bg-amber-400 text-slate-950 shadow-inner'
                    : 'text-slate-900 hover:bg-amber-400/80 hover:text-slate-950'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Services Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white rounded-b-lg shadow-xl border-t-2 border-[#448aff] py-2 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                  Core Plumbing & Handy Solutions
                </div>
                <button
                  onClick={() => handleNavClick('services', 'plumb')}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Wrench className="w-3.5 h-3.5 text-amber-500" />
                  <span>HandyMan General Repairs</span>
                </button>
                <button
                  onClick={() => handleNavClick('services', 'drain')}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Droplets className="w-3.5 h-3.5 text-blue-500" />
                  <span>Drain Unclogging & Jetting</span>
                </button>
                <button
                  onClick={() => handleNavClick('services', 'gas')}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Flame className="w-3.5 h-3.5 text-red-500" />
                  <span>Gas Lines & Cooktop Hookup</span>
                </button>
                <button
                  onClick={() => handleNavClick('services', 'sewer')}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-purple-500" />
                  <span>Trenchless Sewer Relining</span>
                </button>
                <button
                  onClick={() => handleNavClick('services', 'tankless')}
                  className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#448aff] font-medium flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tankless Water Heaters ($25 Off)</span>
                </button>
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button
                    onClick={() => handleNavClick('services', 'calculator')}
                    className="w-full text-left px-4 py-2 text-xs text-[#448aff] hover:bg-blue-50 font-bold flex items-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Instant Price Estimator</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 4. CONTACT US */}
            <div className="relative">
              <button
                id="nav-contact-btn"
                onClick={() => handleNavClick('contact')}
                className={`flex items-center gap-1.5 px-4 py-3 text-xs uppercase font-exo font-bold tracking-wider transition-colors border-r border-amber-500/40 ${
                  activeSection === 'contact'
                    ? 'bg-amber-400 text-slate-950 shadow-inner'
                    : 'text-slate-900 hover:bg-amber-400/80 hover:text-slate-950'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mega Menu / All Sections Overview */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-4 py-3 text-xs uppercase font-exo font-bold tracking-wider text-slate-900 hover:bg-amber-400/80 transition-colors"
              >
                <Grid className="w-4 h-4" />
                <span>All Sections</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:block w-[540px] bg-white rounded-b-lg shadow-2xl border-t-2 border-[#448aff] p-5 z-50 animate-fadeIn">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-exo font-bold text-xs uppercase text-slate-900 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-[#448aff]" /> Home & About
                    </h6>
                    <ul className="mt-2 space-y-1.5 text-xs text-gray-600">
                      <li>
                        <button onClick={() => handleNavClick('home')} className="hover:text-[#448aff] text-left">
                          • Emergency 24/7 Hero
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('about', 'who-we-are')} className="hover:text-[#448aff] text-left">
                          • Who We Are (25 Years Exp.)
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('about', 'team')} className="hover:text-[#448aff] text-left">
                          • Master Plumbing Engineers
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('about', 'feedback')} className="hover:text-[#448aff] text-left">
                          • Real Client Testimonials
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-exo font-bold text-xs uppercase text-slate-900 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-amber-500" /> Services & Contact
                    </h6>
                    <ul className="mt-2 space-y-1.5 text-xs text-gray-600">
                      <li>
                        <button onClick={() => handleNavClick('services', 'plumb')} className="hover:text-[#448aff] text-left">
                          • 7 Specialized Services
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('services', 'calculator')} className="hover:text-[#448aff] text-left">
                          • Cost Estimator Tool
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('contact', 'form')} className="hover:text-[#448aff] text-left">
                          • Request Quote Form
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('contact', 'map')} className="hover:text-[#448aff] text-left">
                          • Melbourne HQ Map & Directions
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between bg-gray-50 -mx-5 -mb-5 p-3 rounded-b-lg">
                  <span className="text-xs text-gray-600 font-medium">Need immediate dispatch assistance?</span>
                  <button
                    onClick={onOpenQuickQuote}
                    className="bg-[#448aff] hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Actions: Search & Mobile Toggle */}
          <div className="flex items-center gap-2">
            
            {/* Search Trigger */}
            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              title="Search Services & Diagnostics"
              className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-slate-900 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors border border-amber-300"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">Search Services</span>
            </button>

            {/* Quick Emergency Quote CTA (Desktop) */}
            <button
              onClick={onOpenQuickQuote}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-exo font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Free Estimate</span>
            </button>

            {/* Mobile Hamburger Toggle (Bootstrap Style navbar-toggler) */}
            <button
              id="navbar-toggler-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-500 focus:outline-none transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Menu (Collapsible) */}
        {isOpen && (
          <div className="lg:hidden bg-white text-slate-900 border-t border-amber-300 shadow-2xl rounded-b-xl px-4 py-4 space-y-2 animate-fadeIn mb-2">
            
            {/* 1. Mobile Home */}
            <div className="border-b border-gray-100 pb-1.5">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`flex items-center gap-2 py-2 text-sm font-exo font-bold uppercase tracking-wider ${
                    activeSection === 'home' ? 'text-[#448aff]' : 'text-slate-800'
                  }`}
                >
                  <Home className="w-4 h-4 text-amber-500" />
                  <span>Home</span>
                </button>
                <button 
                  onClick={() => toggleDropdown('home')} 
                  className="p-1.5 text-gray-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'home' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'home' && (
                <div className="pl-6 py-1 space-y-1.5 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <button onClick={() => handleNavClick('home', 'banner')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Main Quick Booking Banner
                  </button>
                  <button onClick={() => handleNavClick('home', 'features')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • 4 Core Advantages
                  </button>
                </div>
              )}
            </div>

            {/* 2. Mobile About Us */}
            <div className="border-b border-gray-100 pb-1.5">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center gap-2 py-2 text-sm font-exo font-bold uppercase tracking-wider ${
                    activeSection === 'about' ? 'text-[#448aff]' : 'text-slate-800'
                  }`}
                >
                  <Info className="w-4 h-4 text-blue-500" />
                  <span>About Us</span>
                </button>
                <button 
                  onClick={() => toggleDropdown('about')} 
                  className="p-1.5 text-gray-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'about' && (
                <div className="pl-6 py-1 space-y-1.5 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <button onClick={() => handleNavClick('about', 'who-we-are')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Who We Are & Company Accordion
                  </button>
                  <button onClick={() => handleNavClick('about', 'team')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Team Members & Engineers
                  </button>
                  <button onClick={() => handleNavClick('about', 'feedback')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Feedback From Clients
                  </button>
                </div>
              )}
            </div>

            {/* 3. Mobile Services */}
            <div className="border-b border-gray-100 pb-1.5">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-2 py-2 text-sm font-exo font-bold uppercase tracking-wider ${
                    activeSection === 'services' ? 'text-[#448aff]' : 'text-slate-800'
                  }`}
                >
                  <Wrench className="w-4 h-4 text-amber-500" />
                  <span>Services</span>
                </button>
                <button 
                  onClick={() => toggleDropdown('services')} 
                  className="p-1.5 text-gray-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'services' && (
                <div className="pl-6 py-1.5 space-y-1.5 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <button onClick={() => handleNavClick('services', 'plumb')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • HandyMan Repairs & Fixtures
                  </button>
                  <button onClick={() => handleNavClick('services', 'drain')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Drain Cleaning & Jetting
                  </button>
                  <button onClick={() => handleNavClick('services', 'gas')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Gas Lines & Burner Fittings
                  </button>
                  <button onClick={() => handleNavClick('services', 'sewer')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Trenchless Sewer Pipe Relining
                  </button>
                  <button onClick={() => handleNavClick('services', 'tankless')} className="block py-1 text-left w-full hover:text-[#448aff]">
                    • Tankless Water Heaters ($25 Off)
                  </button>
                  <button onClick={() => handleNavClick('services', 'calculator')} className="block py-1 text-left w-full text-[#448aff] font-bold">
                    • Instant Pricing Calculator
                  </button>
                </div>
              )}
            </div>

            {/* 4. Mobile Contact Us */}
            <div className="pb-1.5">
              <button
                onClick={() => handleNavClick('contact')}
                className={`flex items-center gap-2 py-2 text-sm font-exo font-bold uppercase tracking-wider w-full text-left ${
                  activeSection === 'contact' ? 'text-[#448aff]' : 'text-slate-800'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuickQuote();
                }}
                className="w-full bg-[#448aff] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-center"
              >
                Book An Estimate Now
              </button>
            </div>

          </div>
        )}

      </div>
    </nav>
  );
};
