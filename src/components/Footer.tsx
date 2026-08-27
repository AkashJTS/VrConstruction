import React, { useState, useEffect } from 'react';
import { Heart, Rocket, Trophy, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NavSection } from '../types';

interface FooterProps {
  onNavigate?: (section: NavSection, subTarget?: string) => void;
}

// Custom hook to animate numbers counting up on mount/reload
const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out quadratic formula for a natural slowing effect near the target
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOutQuad * (target - 1) + 1);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Animated values (Count up from 1 to Target)
  const happyClients = useCountUp(2561, 2000);
  const yearsOfService = useCountUp(21, 2000);
  const awardsWon = useCountUp(7, 2000);

  return (
    <footer id="main-footer" className="w-full bg-[#094226] text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* Container with World Map Background */}
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url('/public/map-bg.png')`,
        }}
      >
        {/* Top 3 Metric Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl ml-auto">
          {/* Card 1: Happy Clients */}
          <div className="bg-[#062d1a] p-5 flex items-center justify-between border-b-2 border-amber-500 shadow-lg">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-amber-500 stroke-[2.5]" />
              <div className="h-10 w-[1px] bg-emerald-800/60" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100 block">
                  HAPPY CLIENTS
                </span>
                <span className="text-2xl font-bold text-white tabular-nums">
                  {happyClients}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Year of Service */}
          <div className="bg-[#062d1a] p-5 flex items-center justify-between border-b-2 border-amber-500 shadow-lg">
            <div className="flex items-center space-x-4">
              <Rocket className="w-8 h-8 text-amber-500 stroke-[2.5]" />
              <div className="h-10 w-[1px] bg-emerald-800/60" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100 block">
                  YEAR OF SERVICE
                </span>
                <span className="text-2xl font-bold text-white tabular-nums">
                  {yearsOfService}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Awards Won */}
          <div className="bg-[#062d1a] p-5 flex items-center justify-between border-b-2 border-amber-500 shadow-lg">
            <div className="flex items-center space-x-4">
              <Trophy className="w-8 h-8 text-amber-500 stroke-[2.5]" />
              <div className="h-10 w-[1px] bg-emerald-800/60" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100 block">
                  AWARDS WON
                </span>
                <span className="text-2xl font-bold text-white tabular-nums">
                  {awardsWon}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout: Handyman Image + Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Handyman Cutout Image */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-start -mt-20 lg:-mt-28">
            <img
              src="public/footer-img.png"
              alt="Handyman"
              className="w-full max-w-[340px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Columns: Links & Contact Info */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Site Links */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                SITE LINKS
              </h3>
              <div className="w-8 h-[2px] bg-amber-500 mb-4" />
              <ul className="space-y-2 text-sm text-emerald-100">
                {[
                  { name: 'About Us', target: 'about' },
                  { name: 'Our Staffs', target: 'about', sub: 'team' },
                  { name: 'Recent Projects', target: 'services' },
                  { name: 'Latest News', target: 'home' },
                  { name: 'Pricing Details', target: 'services', sub: 'calculator' },
                  { name: 'Contact Us', target: 'contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => onNavigate && onNavigate(item.target as NavSection, item.sub)}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                SERVICES
              </h3>
              <div className="w-8 h-[2px] bg-amber-500 mb-4" />
              <ul className="space-y-2 text-sm text-emerald-100">
                {[
                  'VR Construction Repairs',
                  'Drain Cleaning',
                  'Gas Lines',
                  'Sewer Lines',
                  'Water Damage Prevention',
                  'VR Construction Inspection',
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate && onNavigate('services')}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info & Socials */}
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                CONTACT
              </h3>
              <div className="w-8 h-[2px] bg-amber-500 mb-4" />
              <address className="not-italic text-sm text-emerald-100 space-y-2 leading-relaxed">
                <p>
                  Address: 44 New Design Street,<br />
                  Melbourne 005
                </p>
                <p>Phone: +61 (123) 456 789</p>
                <p>Fax: +91 5464 213</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@example.com" className="hover:text-amber-500">
                    info@example.com
                  </a>
                </p>
              </address>

              {/* Social Icons Bar */}
              <div className="flex space-x-2 mt-6">
                <a
                  href="#facebook"
                  className="w-8 h-8 bg-[#062d1a] text-emerald-100 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center text-xs"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  className="w-8 h-8 bg-[#062d1a] text-emerald-100 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center text-xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-8 h-8 bg-[#062d1a] text-emerald-100 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center text-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#tumblr"
                  className="w-8 h-8 bg-[#062d1a] text-emerald-100 hover:bg-amber-500 hover:text-black transition-colors flex items-center justify-center text-xs font-serif font-bold"
                >
                  t
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#052615] py-4 text-center text-xs text-emerald-200/60 border-t border-emerald-900/40">
        Copyright © 2026 VR Construction. All Rights Reserved.
      </div>
    </footer>
  );
};