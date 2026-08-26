
import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { ServiceSearchModal } from './components/ServiceSearchModal';
import { NavSection } from './types';
import { PhoneCall, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('HandyMan Repairs');

  // Scroll Spy to automatically highlight active navbar tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const homeEl = document.getElementById('home');
      const aboutEl = document.getElementById('about');
      const servicesEl = document.getElementById('services');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (servicesEl && scrollPosition >= servicesEl.offsetTop) {
        setActiveSection('services');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else if (homeEl) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: NavSection, subTarget?: string) => {
    setActiveSection(section);

    if (subTarget) {
      const subEl = document.getElementById(subTarget);
      if (subEl) {
        subEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const targetEl = document.getElementById(section);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteWithService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForQuote(serviceTitle);
    }
    setIsQuickQuoteOpen(true);
  };

  return (
    <div id="wrap" className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Brand & Contact Header */}
      <Header 
        onRequestQuote={() => handleOpenQuoteWithService()} 
        onNavigate={(sec) => handleNavigate(sec as NavSection)}
      />

      {/* 3. Responsive Bootstrap-styled Navigation Menu */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuickQuote={() => handleOpenQuoteWithService()}
      />

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* Section 1: HOME */}
        <HomeSection 
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuoteWithService()}
        />

        {/* Section 2: ABOUT US */}
        <AboutSection 
          onNavigate={handleNavigate}
          onRequestQuote={() => handleOpenQuoteWithService()}
        />

        {/* Section 3: SERVICES */}
        <ServicesSection 
          onNavigate={handleNavigate}
          onRequestQuote={(svc) => handleOpenQuoteWithService(svc)}
        />

        {/* Section 4: CONTACT US */}
        <ContactSection 
          onNavigate={handleNavigate}
          prefilledService={selectedServiceForQuote}
        />

      </main>

      {/* 5. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Emergency Callout Button */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => handleOpenQuoteWithService('24/7 Emergency Plumber')}
          className="flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-slate-950 px-4 py-3 rounded-full shadow-2xl border-2 border-amber-300 font-exo font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
        >
          <ShieldAlert className="w-4 h-4 text-slate-950" />
          <span className="hidden sm:inline">Emergency Quote</span>
        </button>

        <a
          href="tel:+61123456789"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-2xl border-2 border-white transition-all hover:scale-110 active:scale-95 animate-pulse ml-auto"
          title="Call 24/7 Hotline: +61 (123) 456 789"
        >
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal 
        isOpen={isQuickQuoteOpen}
        onClose={() => setIsQuickQuoteOpen(false)}
        initialService={selectedServiceForQuote}
      />

      {/* Service Search Modal */}
      <ServiceSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(svc) => handleOpenQuoteWithService(svc)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
