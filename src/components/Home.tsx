import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Clock,
  UserCheck,
  DollarSign,
  ThumbsUp,
  ChevronRight,
  Droplet,
  Wrench,
  Flame,
  Layers,
  ShieldAlert,
  Zap,
  ClipboardCheck,
} from 'lucide-react';

import { servicesData, whyChooseReasons } from '../data/handymanData';
import { ServiceItem } from '../types';

// @ts-ignore
import video from "/public/VRConstruction.mp4";

interface HomeProps {
  videoSrc?: string;
  onNavigate?: (section: any) => void;
  onRequestQuote?: (prefilledService?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  videoSrc = video,
  onNavigate,
  onRequestQuote,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const [activeTab, setActiveTab] = useState<string>('plumb');
  const [animKey, setAnimKey] = useState<number>(0);

  const currentService: ServiceItem =
    servicesData.find((service) => service.id === activeTab) ||
    servicesData[0];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setAnimKey((prev) => prev + 1);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'plumb':
        return <Wrench className="h-4 w-4" />;

      case 'drain':
        return <Droplet className="h-4 w-4" />;

      case 'gas':
        return <Flame className="h-4 w-4" />;

      case 'sewer':
        return <Layers className="h-4 w-4" />;

      case 'water':
        return <ShieldAlert className="h-4 w-4" />;

      case 'tankless':
        return <Zap className="h-4 w-4" />;

      default:
        return <ClipboardCheck className="h-4 w-4" />;
    }
  };

  // Typing animation state
  const line1Full = "Trusted Construction Company";
  const line2Full = "for Homes & Commercial Spaces";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [isLine1Done, setIsLine1Done] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    let index1 = 0;

    const timer1 = setInterval(() => {
      if (index1 < line1Full.length) {
        setTypedLine1(line1Full.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        setIsLine1Done(true);
      }
    }, 60);

    return () => clearInterval(timer1);
  }, []);

  useEffect(() => {
    if (!isLine1Done) return;

    let index2 = 0;

    const timer2 = setInterval(() => {
      if (index2 < line2Full.length) {
        setTypedLine2(line2Full.slice(0, index2 + 1));
        index2++;
      } else {
        clearInterval(timer2);
      }
    }, 60);

    return () => clearInterval(timer2);
  }, [isLine1Done]);

  return (
    <div className="w-full bg-[#084928] text-white">

      {/* ============================================================
          1. HERO SECTION WITH VIDEO
          ============================================================ */}
      <section
        id="home"
        className="relative w-full h-[88vh] min-h-[620px] overflow-hidden bg-[#e5e7eb] text-[#084928] flex items-center justify-center px-6"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-100 opacity-95"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support video playback.
        </video>

        {/* Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(#000000 1px, transparent 1px), ` +
              `linear-gradient(90deg, #000000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* CSS Animations */}
        <style>{`
          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes blinkCursor {
            0%, 100% {
              opacity: 1;
            }

            50% {
              opacity: 0;
            }
          }

          .anim-badge-active {
            animation: heroFadeUp 0.6s 0.1s ease-out forwards;
            opacity: 0;
          }

          .anim-sub-active {
            animation: heroFadeUp 0.8s 2.2s ease-out forwards;
            opacity: 0;
          }

          .anim-btn-active {
            animation: heroFadeUp 0.8s 2.5s ease-out forwards;
            opacity: 0;
          }

          .typing-cursor {
            display: inline-block;
            width: 4px;
            height: 0.85em;
            background-color: #084928;
            margin-left: 4px;
            vertical-align: middle;
            animation: blinkCursor 0.8s infinite;
          }

          @keyframes smoothSlideFromRight {
            0% {
              opacity: 0;
              transform: translateX(60px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes arrowSlideFromLeftViewport {
            0% {
              transform: translateX(-100vw);
              opacity: 0;
            }

            30% {
              opacity: 1;
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .animate-stagger-1 {
            animation:
              smoothSlideFromRight
              0.85s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;
          }

          .animate-stagger-2 {
            animation:
              smoothSlideFromRight
              0.85s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.1s
              forwards;
            opacity: 0;
          }

          .animate-stagger-3 {
            animation:
              smoothSlideFromRight
              0.85s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.2s
              forwards;
            opacity: 0;
          }

          .animate-stagger-4 {
            animation:
              smoothSlideFromRight
              0.85s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.3s
              forwards;
            opacity: 0;
          }

          .animate-arrow-viewport-glide {
            animation:
              arrowSlideFromLeftViewport
              0.8s
              cubic-bezier(0.16, 1, 0.3, 1)
              0.05s
              forwards;
            opacity: 0;
          }
        `}</style>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-1">

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-[#084928] min-h-[100px] sm:min-h-[130px]">
            <span>{typedLine1}</span>

            {!isLine1Done && (
              <span className="typing-cursor" />
            )}

            <br />

            <span className="text-[#000000]">
              {typedLine2}
            </span>

            {isLine1Done && (
              <span className="typing-cursor" />
            )}
          </h1>

          <div
            className={`pt-3 ${
              isMounted ? "anim-btn-active" : "opacity-0"
            }`}
          >
            <p
              className={`group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-[#084928]/40 hover:bg-[#084928]/40 backdrop-blur-md text-[#ffffff] text-sm font-semibold leading-8 ${
                isMounted ? "anim-sub-active" : "opacity-0"
              }`}
            >
              From planning and design to construction and final handover,
              we deliver high-quality residential and commercial construction
              solutions with transparent pricing, skilled workmanship, and
              reliable project execution.
            </p>
          </div>

          <div
            className={`pt-3 ${
              isMounted ? "anim-btn-active" : "opacity-0"
            }`}
          >
            <button
              onClick={() =>
                onNavigate && onNavigate('services')
              }
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-white/20 hover:bg-white/40 backdrop-blur-md text-slate-950 font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-900/40 hover:border-slate-900 cursor-pointer"
            >
              <span>Explore Our Services</span>

              <ArrowRight className="w-5 h-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. SERVICES FEATURE GRID SECTION
          ============================================================ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Title Box */}
          <div className="lg:col-span-4 space-y-6">

            <div className="border-l-4 border-amber-400 pl-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                We Fix All Your HandyMan Problems
              </h2>
            </div>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Sedquis viverra enim. Vivamus aliquet rutrusm dui a varius.
              Mauris ornoare tortor in eleifends blanditullam ut legula et
              neque Praesent egset bibendum purus quis.
            </p>

            <div>
              <a
                href="#about"
                className="inline-block border-2 border-amber-400 text-amber-400 font-bold uppercase px-6 py-3 text-sm hover:bg-amber-400 hover:text-slate-950 transition-colors duration-300"
              >
                About More
              </a>
            </div>

          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:border-amber-400/50 transition-all duration-300 group">

              <div className="flex items-start space-x-4">

                <Clock className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                    24/7 Availability
                  </h3>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Vivamus aliquet rutrusm dui a varius Mauris ornoare tortor.
                  </p>
                </div>

              </div>

              <ChevronRight className="w-5 h-5 text-emerald-100/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />

            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:border-amber-400/50 transition-all duration-300 group">

              <div className="flex items-start space-x-4">

                <UserCheck className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                    Genius Workers
                  </h3>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Vivamus aliquet rutrusm dui a varius Mauris ornoare tortor.
                  </p>
                </div>

              </div>

              <ChevronRight className="w-5 h-5 text-emerald-100/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />

            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:border-amber-400/50 transition-all duration-300 group">

              <div className="flex items-start space-x-4">

                <DollarSign className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                    Low Pricing
                  </h3>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Vivamus aliquet rutrusm dui a varius Mauris ornoare tortor.
                  </p>
                </div>

              </div>

              <ChevronRight className="w-5 h-5 text-emerald-100/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />

            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:border-amber-400/50 transition-all duration-300 group">

              <div className="flex items-start space-x-4">

                <ThumbsUp className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">
                    Free Estimation
                  </h3>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Vivamus aliquet rutrusm dui a varius Mauris ornoare tortor.
                  </p>
                </div>

              </div>

              <ChevronRight className="w-5 h-5 text-emerald-100/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          WELCOME TO OUR HANDYMAN SECTION
          ============================================================ */}
      <div className="bg-[#084928] py-12 sm:py-16">

        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]">

            {/* ========================================================
                SERVICE MENU - LEFT SIDEBAR
                ======================================================== */}
            <div className="border border-white/10 bg-[#062D1A] shadow-xl">

              {servicesData.map((service) => {

                const selected = service.id === activeTab;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleTabClick(service.id)}
                    className={`group relative flex min-h-[44px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase transition-all duration-200 ${
                      selected
                        ? 'z-20 border-2 border-[#E3FC03] bg-[#D9AE00] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]'
                        : 'border-b border-white/10 text-white/85 hover:text-white last:border-b-0'
                    }`}
                  >

                    {/* Service Icon + Title */}
                    <span className="relative z-10 flex items-center gap-2">
                      {getServiceIcon(service.id)}
                      {service.title}
                    </span>

                    {/* ==================================================
                        SELECTED SERVICE ARROW ONLY

                        No arrow on hover.
                        Arrow appears only after clicking/selecting.
                        Uses public/right-arrow1.png
                        ================================================== */}
                    {selected ? (
                      <div className="relative z-10 animate-arrow-viewport-glide">

                        <img
                          src="/right-arrow1.png"
                          alt=""
                          className="h-6 w-6 object-contain"
                        />

                      </div>
                    ) : null}

                  </button>
                );
              })}

            </div>

            {/* ========================================================
                SERVICE CONTENT - MIDDLE AREA
                ======================================================== */}
            <div
              key={`content-${animKey}`}
              className="min-w-0"
            >

              <h3 className="animate-stagger-1 font-exo text-xl font-black uppercase tracking-wide text-white">
                {currentService.title}
              </h3>

              <p className="animate-stagger-2 mt-3 text-sm font-medium leading-6 text-white/90">
                {currentService.fullDesc}
              </p>

              <ul className="animate-stagger-3 mt-5 space-y-2.5">

                {currentService.features
                  .slice(0, 5)
                  .map((feature, index) => (
                    <li
                      key={`${feature}-${index}`}
                      className="flex items-start gap-2.5 text-xs font-medium text-white"
                    >
                      <span className="mt-[2px] text-[#D9AE00]">
                        ◆
                      </span>

                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}

              </ul>

              <div className="animate-stagger-4">

                <button
                  type="button"
                  onClick={() =>
                    onRequestQuote &&
                    onRequestQuote(currentService.title)
                  }
                  className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00] hover:shadow-lg"
                >
                  Learn More
                </button>

              </div>

            </div>

            {/* ========================================================
                SERVICE IMAGE - RIGHT AREA
                ======================================================== */}
            <div className="flex justify-center md:justify-end">

              <img
                src={currentService.image}
                alt={currentService.title}
                className="h-[300px] w-full max-w-[340px] object-contain object-bottom"
              />

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;