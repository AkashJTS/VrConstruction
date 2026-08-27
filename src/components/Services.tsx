import React, { useState } from 'react';
import {
  Wrench,
  Droplet,
  Flame,
  Layers,
  ShieldAlert,
  Zap,
  ClipboardCheck,
  ArrowRight,
  Clock,
  Award,
  Users,
  DollarSign,
  Phone,
} from 'lucide-react';
import { servicesData, whyChooseReasons } from '../data/handymanData';
import { NavSection, ServiceItem } from '../types';

interface ServicesProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: (prefilledService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
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
        return <Wrench className="h-4 w-4 shrink-0" />;
      case 'drain':
        return <Droplet className="h-4 w-4 shrink-0" />;
      case 'gas':
        return <Flame className="h-4 w-4 shrink-0" />;
      case 'sewer':
        return <Layers className="h-4 w-4 shrink-0" />;
      case 'water':
        return <ShieldAlert className="h-4 w-4 shrink-0" />;
      case 'tankless':
        return <Zap className="h-4 w-4 shrink-0" />;
      default:
        return <ClipboardCheck className="h-4 w-4 shrink-0" />;
    }
  };

  const whyIcons = [
    <Clock key="clock" className="h-7 w-7" />,
    <Award key="award" className="h-7 w-7" />,
    <Users key="users" className="h-7 w-7" />,
    <DollarSign key="dollar" className="h-7 w-7" />,
  ];

  return (
    <section id="services" className="w-full overflow-hidden bg-[#084928] text-white">
      {/* Keyframe Animations */}
      <style>{`
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
          animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-stagger-2 {
          animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          opacity: 0;
        }

        .animate-stagger-3 {
          animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        .animate-stagger-4 {
          animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }

        .animate-arrow-viewport-glide {
          animation: arrowSlideFromLeftViewport 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
          opacity: 0;
        }
      `}</style>

      {/* TOP SERVICES BANNER (ORIGINAL UNTOUCHED) */}
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-y border-[#D9AE00]/30 text-center sm:h-[310px]">
        <div
          className="absolute inset-0 z-0 bg-repeat [clip-path:inset(0)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8, 73, 40, 0.75), rgba(8, 73, 40, 0.75)), url('/sub-bnr-bg.jpg')",
            backgroundSize: 'auto',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10">
          <h1 className="font-exo text-3xl font-black uppercase tracking-tight text-white drop-shadow-md sm:text-4xl">
            Services
          </h1>

          <p className="mt-2 font-exo text-xs font-bold uppercase tracking-wider text-[#D9AE00] drop-shadow-md">
            We Have 25 Years Experience In Plumbing
          </p>
        </div>
      </div>

      {/* THREE FEATURE CARDS */}
      <div className="bg-[#084928] py-10 sm:py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">

            {/* Construction SERVICE */}
            <button
              type="button"
              onClick={() => onRequestQuote('Emergency Plumbing')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80"
                alt="Emergency Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Construction
                </h3>
              </div>
            </button>

            {/* Renovation SERVICE */}
            <button
              type="button"
              onClick={() => onRequestQuote('Renovation')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Residential Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Renovation
                </h3>
              </div>
            </button>
            {/*  INTERRIOR SERVICE */}
            <button
              type="button"
              onClick={() => onRequestQuote(' Interior Work')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Residential Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Interior Work
                </h3>
              </div>
            </button>

            {/*  Water profing SERVICE */}
            <button
              type="button"
              onClick={() => onRequestQuote(' Water profing')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Water profing
                </h3>
              </div>
            </button>

            {/* OTHER  SERVICES*/}
            <button
              type="button"
              onClick={() => onRequestQuote('Plumbing')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Residential Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Other Services
                </h3>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* WELCOME TO OUR HANDYMAN SECTION */}
      <div className="bg-[#084928] py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]">
            {/* SERVICE MENU (LEFT SIDEBAR) */}
            <div className="border border-white/10 bg-[#062D1A] shadow-xl">
              {servicesData.map((service) => {
                const selected = service.id === activeTab;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleTabClick(service.id)}
                    className={`group relative flex min-h-[44px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase transition-all duration-200 ${selected
                      ? 'z-20 border-2 border-[#E3FC03] bg-[#D9AE00] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]'
                      : 'border-b border-white/10 text-white/85 hover:text-white last:border-b-0'
                      }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {getServiceIcon(service.id)}
                      {service.title}
                    </span>

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

            {/* SERVICE CONTENT (MIDDLE AREA) */}
            <div key={`content-${animKey}`} className="min-w-0">
              <h3 className="animate-stagger-1 font-exo text-xl font-black uppercase tracking-wide text-white">
                {currentService.title}
              </h3>

              <p className="animate-stagger-2 mt-3 text-sm font-medium leading-6 text-white/90">
                {currentService.fullDesc}
              </p>

              <ul className="animate-stagger-3 mt-5 space-y-2.5">
                {currentService.features.slice(0, 5).map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="flex items-start gap-2.5 text-xs font-medium text-white"
                  >
                    <span className="mt-[2px] text-[#D9AE00]">◆</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="animate-stagger-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote(currentService.title)}
                  className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00] hover:shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* SERVICE IMAGE (RIGHT AREA) */}
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

      {/* WHY CHOOSE US */}
      <div className="bg-[#084928] py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {whyChooseReasons.slice(0, 4).map((reason, index) => (
              <div
                key={reason.num}
                className="flex min-h-[115px] items-start gap-5 border-b border-white/10 pb-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#D9AE00]">
                  {whyIcons[index]}
                </div>

                <div>
                  <h3 className="font-exo text-base font-black uppercase text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/75">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ONLY THIS CALL TO ACTION SECTION WAS MODIFIED */}
      <div
        className="relative overflow-hidden border-y border-[#D9AE00]/30 py-8 text-center sm:py-10"
        style={{ backgroundColor: '#084928' }}
      >
        <div
          className="absolute inset-0 z-0 bg-repeat [clip-path:inset(0)]"
          style={{
            backgroundImage: "url('/call-us-bg.jpg')",
            backgroundSize: 'auto',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[#084928]/90" />

        <div className="relative z-10">
          <p className="font-exo text-sm font-bold uppercase text-white drop-shadow-md">
            Don&apos;t See What You Need? Call Us Today!
          </p>

          <a
            href="tel:+91 (123) 456 789"
            className="mt-2 block font-exo text-xl font-black text-[#D9AE00] drop-shadow-md hover:text-white"
          >
            +91 (123) 456 789
          </a>

          <button
            type="button"
            onClick={() => onRequestQuote()}
            className="mt-5 inline-flex items-center gap-2 border border-[#D9AE00] bg-[#D9AE00] px-7 py-3 text-xs font-bold uppercase text-[#084928] shadow-md transition-colors hover:bg-[#084928] hover:text-[#D9AE00]"
          >
            Request Service
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};