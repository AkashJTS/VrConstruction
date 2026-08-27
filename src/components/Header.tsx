import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#084928] py-2 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* 1. Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
          onClick={() => handleNavClick('home')}
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* 2. Professional Navigation Bar (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center h-12">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            const isSelected = isActive || isHovered;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative h-full px-3 lg:px-5 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center ${
                  isSelected ? 'text-[#facc15]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}

                {/* Professional Bottom Accent Line */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#facc15] rounded-full transition-all duration-300 ${
                    isSelected ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* 3. Contact Info */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">

        </div>

        {/* Mobile / Smartphone Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-white hover:text-[#facc15] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Smartphones & Small Tablets) */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#06381e] border-t border-emerald-900/50 px-4 pt-3 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#084928] text-[#facc15] border-l-4 border-[#facc15]'
                    : 'text-white/80 hover:bg-[#084928] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};