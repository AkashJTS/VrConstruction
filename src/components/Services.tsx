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
  ShieldCheck,
  Tag,
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

  const currentService: ServiceItem =
    servicesData.find((service) => service.id === activeTab) ||
    servicesData[0];

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

  const whyIcons = [
    <Clock className="h-7 w-7" />,
    <Award className="h-7 w-7" />,
    <Users className="h-7 w-7" />,
    <DollarSign className="h-7 w-7" />,
  ];

  return (
    <section id="services" className="w-full overflow-hidden bg-[#084928] text-white">
      {/* ============================================================
          BANNER — SAME STRUCTURE AS VIDEO
          ============================================================ */}
      <div
        className="relative flex h-[285px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('/images/about-banner.jpg')",
        }}
      >
        <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D9AE00]" />

        <div className="relative z-10 mt-4 text-center">
          <h1 className="font-exo text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Services
          </h1>

          <p className="mt-3 font-exo text-xs font-bold uppercase text-white sm:text-sm">
            We Have 25 Years Experience In Plumbing
          </p>
        </div>
      </div>

      {/* ============================================================
          THREE FEATURE CARDS — SAME POSITION / STYLE AS VIDEO
          ============================================================ */}
      <div className="bg-[#084928] py-10 sm:py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

              <div className="absolute bottom-7 left-0 right-0 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Emergency Service
                </h3>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onRequestQuote('Residential Plumbing')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                alt="Residential Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

              <div className="absolute bottom-7 left-0 right-0 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Residential Service
                </h3>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onRequestQuote('Commercial Plumbing')}
              className="group relative h-[205px] overflow-hidden text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Service"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

              <div className="absolute bottom-7 left-0 right-0 text-center">
                <h3 className="font-exo text-lg font-black uppercase text-white">
                  Commercial Service
                </h3>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          WELCOME TO OUR HANDYMAN — SAME VIDEO LAYOUT
          ============================================================ */}
      <div className="bg-[#084928] py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]">
            {/* SERVICE MENU */}
            <div className="border border-white/10 bg-[#062D1A]">
              {servicesData.map((service) => {
                const selected = service.id === activeTab;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveTab(service.id)}
                    className={`flex min-h-[38px] w-full items-center justify-between border-b border-white/10 px-4 text-left text-[10px] font-bold uppercase transition-colors last:border-b-0 ${
                      selected
                        ? 'bg-[#D9AE00] text-[#084928]'
                        : 'bg-[#062D1A] text-white/70 hover:bg-[#0b5c34] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {getServiceIcon(service.id)}
                      {service.title}
                    </span>

                    <ArrowRight className="h-3 w-3" />
                  </button>
                );
              })}
            </div>

            {/* SERVICE CONTENT */}
            <div className="min-w-0">
              <h3 className="font-exo text-lg font-black uppercase text-white">
                {currentService.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {currentService.fullDesc}
              </p>

              <ul className="mt-5 space-y-2">
                {currentService.features.slice(0, 5).map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="flex items-start gap-2 text-xs text-white/80"
                  >
                    <span className="mt-[3px] text-[#D9AE00]">◆</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onRequestQuote(currentService.title)}
                className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-7 py-3 text-[10px] font-bold uppercase text-[#084928] transition-colors hover:bg-[#084928] hover:text-[#D9AE00]"
              >
                Learn More
              </button>
            </div>

            {/* SERVICE IMAGE */}
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

      {/* ============================================================
          WHY CHOOSE US — FOUR ITEMS AS SHOWN IN VIDEO
          ============================================================ */}
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

                  <p className="mt-3 text-xs leading-6 text-white/60">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          CALL TO ACTION — BLUE VIDEO AREA REPLACED BY GREEN/GOLD
          ============================================================ */}
      <div className="border-y border-[#D9AE00]/30 bg-[#062D1A] py-8 text-center sm:py-10">
        <p className="font-exo text-sm font-bold uppercase text-white">
          Don&apos;t See What You Need? Call Us Today!
        </p>

        <a
          href="tel:+61123456789"
          className="mt-2 block font-exo text-xl font-black text-[#D9AE00] hover:text-white"
        >
          +61 (123) 456 789
        </a>

        <button
          type="button"
          onClick={() => onRequestQuote()}
          className="mt-5 inline-flex items-center gap-2 border border-[#D9AE00] bg-[#D9AE00] px-7 py-3 text-xs font-bold uppercase text-[#084928] transition-colors hover:bg-[#084928] hover:text-[#D9AE00]"
        >
          Request Service
          <Phone className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
