// import React, { useState } from 'react';
// import {
//   Wrench,
//   Droplet,
//   Flame,
//   Layers,
//   ShieldAlert,
//   Zap,
//   ClipboardCheck,
//   ArrowRight,
//   Clock,
//   Award,
//   Users,
//   DollarSign,
//   Phone,
// } from 'lucide-react';
// import { servicesData, whyChooseReasons } from '../data/handymanData';
// import { NavSection, ServiceItem } from '../types';

// interface ServicesProps {
//   onNavigate: (section: NavSection, subTarget?: string) => void;
//   onRequestQuote: (prefilledService?: string) => void;
// }

// export const Services: React.FC<ServicesProps> = ({
//   onNavigate,
//   onRequestQuote,
// }) => {
//   const [activeTab, setActiveTab] = useState<string>('plumb');
//   const [animKey, setAnimKey] = useState<number>(0);

//   const currentService: ServiceItem =
//     servicesData.find((service) => service.id === activeTab) ||
//     servicesData[0];

//   const handleTabClick = (id: string) => {
//     setActiveTab(id);
//     setAnimKey((prev) => prev + 1);
//   };

//   const getServiceIcon = (id: string) => {
//     switch (id) {
//       case 'plumb':
//         return <Wrench className="h-4 w-4 shrink-0" />;
//       case 'drain':
//         return <Droplet className="h-4 w-4 shrink-0" />;
//       case 'gas':
//         return <Flame className="h-4 w-4 shrink-0" />;
//       case 'sewer':
//         return <Layers className="h-4 w-4 shrink-0" />;
//       case 'water':
//         return <ShieldAlert className="h-4 w-4 shrink-0" />;
//       case 'tankless':
//         return <Zap className="h-4 w-4 shrink-0" />;
//       default:
//         return <ClipboardCheck className="h-4 w-4 shrink-0" />;
//     }
//   };

//   const whyIcons = [
//     <Clock key="clock" className="h-7 w-7" />,
//     <Award key="award" className="h-7 w-7" />,
//     <Users key="users" className="h-7 w-7" />,
//     <DollarSign key="dollar" className="h-7 w-7" />,
//   ];

//   return (
//     <section id="services" className="w-full overflow-hidden bg-[#084928] text-white">
//       {/* Keyframe Animations */}
//       <style>{`
//         @keyframes smoothSlideFromRight {
//           0% {
//             opacity: 0;
//             transform: translateX(60px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes arrowSlideFromLeftViewport {
//           0% {
//             transform: translateX(-100vw);
//             opacity: 0;
//           }
//           30% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         .animate-stagger-1 {
//           animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }

//         .animate-stagger-2 {
//           animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
//           opacity: 0;
//         }

//         .animate-stagger-3 {
//           animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
//           opacity: 0;
//         }

//         .animate-stagger-4 {
//           animation: smoothSlideFromRight 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
//           opacity: 0;
//         }

//         .animate-arrow-viewport-glide {
//           animation: arrowSlideFromLeftViewport 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
//           opacity: 0;
//         }
//       `}</style>

//       {/* TOP SERVICES BANNER (ORIGINAL UNTOUCHED) */}
//       <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-y border-[#D9AE00]/30 text-center sm:h-[310px]">
//         <div
//           className="absolute inset-0 z-0 bg-repeat [clip-path:inset(0)]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(8, 73, 40, 0.75), rgba(8, 73, 40, 0.75)), url('/sub-bnr-bg.jpg')",
//             backgroundSize: 'auto',
//             backgroundAttachment: 'fixed',
//           }}
//         />

//         <div className="relative z-10">
//           <h1 className="font-exo text-3xl font-black uppercase tracking-tight text-white drop-shadow-md sm:text-4xl">
//             Services
//           </h1>

//           <p className="mt-2 font-exo text-xs font-bold uppercase tracking-wider text-[#D9AE00] drop-shadow-md">
//             We Have 25 Years Experience In Plumbing
//           </p>
//         </div>
//       </div>

//       {/* THREE FEATURE CARDS */}
//       <div className="bg-[#084928] py-10 sm:py-14">
//         <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-5">

//             {/* Construction SERVICE */}
//             <button
//               type="button"
//               onClick={() => onRequestQuote('Emergency Plumbing')}
//               className="group relative h-[205px] overflow-hidden text-left"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80"
//                 alt="Emergency Service"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
//                 <h3 className="font-exo text-lg font-black uppercase text-white">
//                   Construction
//                 </h3>
//               </div>
//             </button>

//             {/* Renovation SERVICE */}
//             <button
//               type="button"
//               onClick={() => onRequestQuote('Renovation')}
//               className="group relative h-[205px] overflow-hidden text-left"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
//                 alt="Residential Service"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
//                 <h3 className="font-exo text-lg font-black uppercase text-white">
//                   Renovation
//                 </h3>
//               </div>
//             </button>
//             {/*  INTERRIOR SERVICE */}
//             <button
//               type="button"
//               onClick={() => onRequestQuote(' Interior Work')}
//               className="group relative h-[205px] overflow-hidden text-left"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
//                 alt="Residential Service"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
//                 <h3 className="font-exo text-lg font-black uppercase text-white">
//                   Interior Work
//                 </h3>
//               </div>
//             </button>

//             {/*  Water profing SERVICE */}
//             <button
//               type="button"
//               onClick={() => onRequestQuote(' Water profing')}
//               className="group relative h-[205px] overflow-hidden text-left"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
//                 alt="Commercial Service"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
//                 <h3 className="font-exo text-lg font-black uppercase text-white">
//                   Water profing
//                 </h3>
//               </div>
//             </button>

//             {/* OTHER  SERVICES*/}
//             <button
//               type="button"
//               onClick={() => onRequestQuote('Plumbing')}
//               className="group relative h-[205px] overflow-hidden text-left"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
//                 alt="Residential Service"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 translate-y-full bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />

//               <div className="absolute bottom-7 left-0 right-0 z-10 text-center">
//                 <h3 className="font-exo text-lg font-black uppercase text-white">
//                   Other Services
//                 </h3>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* WELCOME TO OUR HANDYMAN SECTION */}
//       <div className="bg-[#084928] py-12 sm:py-16">
//         <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
//           <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
//             <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
//               Welcome to Our Handyman
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]">
//             {/* SERVICE MENU (LEFT SIDEBAR) */}
//             <div className="border border-white/10 bg-[#062D1A] shadow-xl">
//               {servicesData.map((service) => {
//                 const selected = service.id === activeTab;

//                 return (
//                   <button
//                     key={service.id}
//                     type="button"
//                     onClick={() => handleTabClick(service.id)}
//                     className={`group relative flex min-h-[44px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase transition-all duration-200 ${selected
//                       ? 'z-20 border-2 border-[#E3FC03] bg-[#D9AE00] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]'
//                       : 'border-b border-white/10 text-white/85 hover:text-white last:border-b-0'
//                       }`}
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       {getServiceIcon(service.id)}
//                       {service.title}
//                     </span>

//                     {selected ? (
//                       <div className="relative z-10 animate-arrow-viewport-glide">
//                         <img
//                           src="/right-arrow1.png"
//                           alt=""
//                           className="h-6 w-6 object-contain"
//                         />
//                       </div>
//                     ) : null}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* SERVICE CONTENT (MIDDLE AREA) */}
//             <div key={`content-${animKey}`} className="min-w-0">
//               <h3 className="animate-stagger-1 font-exo text-xl font-black uppercase tracking-wide text-white">
//                 {currentService.title}
//               </h3>

//               <p className="animate-stagger-2 mt-3 text-sm font-medium leading-6 text-white/90">
//                 {currentService.fullDesc}
//               </p>

//               <ul className="animate-stagger-3 mt-5 space-y-2.5">
//                 {currentService.features.slice(0, 5).map((feature, index) => (
//                   <li
//                     key={`${feature}-${index}`}
//                     className="flex items-start gap-2.5 text-xs font-medium text-white"
//                   >
//                     <span className="mt-[2px] text-[#D9AE00]">◆</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="animate-stagger-4">
//                 <button
//                   type="button"
//                   onClick={() => onRequestQuote(currentService.title)}
//                   className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00] hover:shadow-lg"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* SERVICE IMAGE (RIGHT AREA) */}
//             <div className="flex justify-center md:justify-end">
//               <img
//                 src={currentService.image}
//                 alt={currentService.title}
//                 className="h-[300px] w-full max-w-[340px] object-contain object-bottom"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* WHY CHOOSE US */}
//       <div className="bg-[#084928] py-12 sm:py-16">
//         <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
//           <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
//             <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
//               Why Choose Us
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
//             {whyChooseReasons.slice(0, 4).map((reason, index) => (
//               <div
//                 key={reason.num}
//                 className="flex min-h-[115px] items-start gap-5 border-b border-white/10 pb-7"
//               >
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#D9AE00]">
//                   {whyIcons[index]}
//                 </div>

//                 <div>
//                   <h3 className="font-exo text-base font-black uppercase text-white">
//                     {reason.title}
//                   </h3>

//                   <p className="mt-3 text-xs leading-6 text-white/75">
//                     {reason.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ONLY THIS CALL TO ACTION SECTION WAS MODIFIED */}
//       <div
//         className="relative overflow-hidden border-y border-[#D9AE00]/30 py-8 text-center sm:py-10"
//         style={{ backgroundColor: '#084928' }}
//       >
//         <div
//           className="absolute inset-0 z-0 bg-repeat [clip-path:inset(0)]"
//           style={{
//             backgroundImage: "url('/call-us-bg.jpg')",
//             backgroundSize: 'auto',
//             backgroundAttachment: 'fixed',
//           }}
//         />
//         <div className="absolute inset-0 z-0 bg-[#084928]/90" />

//         <div className="relative z-10">
//           <p className="font-exo text-sm font-bold uppercase text-white drop-shadow-md">
//             Don&apos;t See What You Need? Call Us Today!
//           </p>

//           <a
//             href="tel:+91 (123) 456 789"
//             className="mt-2 block font-exo text-xl font-black text-[#D9AE00] drop-shadow-md hover:text-white"
//           >
//             +91 (123) 456 789
//           </a>

//           <button
//             type="button"
//             onClick={() => onRequestQuote()}
//             className="mt-5 inline-flex items-center gap-2 border border-[#D9AE00] bg-[#D9AE00] px-7 py-3 text-xs font-bold uppercase text-[#084928] shadow-md transition-colors hover:bg-[#084928] hover:text-[#D9AE00]"
//           >
//             Request Service
//             <Phone className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };





import React, { useState } from "react";
import {
  Wrench,
  Building2,
  Warehouse,
  Home,
  Paintbrush,
  Droplet,
  Zap,
  Layers,
  Hammer,
  Ruler,
  ShieldCheck,
  ChevronRight,
  Clock,
  Award,
  Users,
  DollarSign,
  Phone,
} from "lucide-react";
import { NavSection } from "../types";

/* ============================================================
   PROPS
   ============================================================ */

interface ServicesProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: (prefilledService?: string) => void;
}

/* ============================================================
   TYPES
   ============================================================ */

type Category =
  | "construction"
  | "renovation"
  | "interior"
  | "waterproofing"
  | "other";

interface SubService {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

/* ============================================================
   CATEGORY IMAGES
   FREE UNSPLASH IMAGES
   ============================================================ */

const categoryImages: Record<Category, string> = {
  construction:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",

  renovation:
    "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=85",

  interior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",

  waterproofing:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",

  other:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
};

/* ============================================================
   CONSTRUCTION SERVICES
   ============================================================ */

const constructionServices: SubService[] = [
  {
    id: "residential",
    title: "Residential",
    icon: <Home className="h-5 w-5 shrink-0" />,
    description:
      "Complete residential construction solutions delivered with professional workmanship, quality materials and careful attention to every detail.",
    features: [
      "New Residential Construction",
      "House Extensions & Additions",
      "Structural Construction Work",
      "Civil & Masonry Work",
      "Complete Home Development",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "commercial",
    title: "Commercial",
    icon: <Building2 className="h-5 w-5 shrink-0" />,
    description:
      "Professional commercial construction services for offices, shops, showrooms and business properties with reliable project execution.",
    features: [
      "Commercial Building Construction",
      "Office Construction",
      "Shop & Showroom Construction",
      "Commercial Civil Work",
      "Project Planning & Execution",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "warehouse",
    title: "Warehouse",
    icon: <Warehouse className="h-5 w-5 shrink-0" />,
    description:
      "Durable warehouse construction and development solutions designed for storage, industrial and commercial requirements.",
    features: [
      "Warehouse Construction",
      "Industrial Structures",
      "Storage Facility Development",
      "Flooring & Concrete Work",
      "Structural & Fabrication Work",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
];

/* ============================================================
   INTERIOR SERVICES
   ============================================================ */

const interiorServices: SubService[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    icon: <Hammer className="h-5 w-5 shrink-0" />,
    description:
      "Custom kitchen solutions designed around your space, storage requirements and preferred style.",
    features: [
      "Modular Kitchen",
      "Custom Kitchen Cabinets",
      "Kitchen Storage Solutions",
      "Countertop Installation",
      "Complete Kitchen Interior",
    ],
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "wall-unit",
    title: "Wall Unit",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description:
      "Elegant custom wall units that combine modern design with practical storage.",
    features: [
      "Custom Wall Units",
      "Storage Cabinets",
      "Display Shelves",
      "Decorative Panels",
      "Complete Wall Design",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "wardrobes-loft",
    title: "Wardrobes & Loft",
    icon: <Warehouse className="h-5 w-5 shrink-0" />,
    description:
      "Space-efficient wardrobes and loft storage designed to maximize every available area.",
    features: [
      "Sliding Wardrobes",
      "Walk-in Wardrobes",
      "Loft Storage",
      "Bedroom Storage",
      "Custom Internal Layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "tv-cabinet",
    title: "T.V Cabinet",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description:
      "Modern TV cabinets designed to provide attractive entertainment spaces with practical storage.",
    features: [
      "Custom TV Cabinets",
      "Floating TV Units",
      "Media Storage",
      "Cable Management",
      "Decorative Back Panels",
    ],
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "pooja-cabinet",
    title: "Pooja Cabinet",
    icon: <Home className="h-5 w-5 shrink-0" />,
    description:
      "Beautifully designed pooja cabinets and prayer spaces created to suit your home interior.",
    features: [
      "Custom Pooja Cabinets",
      "Wall-Mounted Pooja Units",
      "Decorative Woodwork",
      "Storage Drawers",
      "Traditional & Modern Designs",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "wall-paneling",
    title: "Wall Paneling",
    icon: <Ruler className="h-5 w-5 shrink-0" />,
    description:
      "Transform plain walls with modern decorative wall panels, textures and custom design elements.",
    features: [
      "Wooden Wall Panels",
      "Decorative Wall Panels",
      "Accent Walls",
      "TV Back Panels",
      "Custom Interior Features",
    ],
    image:
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=85",
  },
];

/* ============================================================
   OTHER SERVICES
   ============================================================ */

const otherServices: SubService[] = [
  {
    id: "electrical",
    title: "Electrical",
    icon: <Zap className="h-5 w-5 shrink-0" />,
    description:
      "Professional electrical installation, repair and maintenance services for homes, offices and commercial spaces.",
    features: [
      "Electrical Wiring",
      "Lighting Installation",
      "Switch & Socket Installation",
      "Electrical Repairs",
      "Electrical Maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "plumbing",
    title: "Plumbing",
    icon: <Droplet className="h-5 w-5 shrink-0" />,
    description:
      "Reliable plumbing installation, repair and maintenance services for residential and commercial properties.",
    features: [
      "Water Line Installation",
      "Leak Repairs",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Drainage Solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "tiles",
    title: "Tiles Laying",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description:
      "Professional tile installation services including marble, granite, ceramic and modern flooring solutions.",
    features: [
      "Marble Laying",
      "Granite Laying",
      "Ceramic Tiles",
      "Floor Tiles",
      "Wall Tiles",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "carpentry",
    title: "Carpentry Works",
    icon: <Hammer className="h-5 w-5 shrink-0" />,
    description:
      "Complete carpentry services for custom furniture, repairs, doors, cabinets and interior woodwork.",
    features: [
      "Custom Furniture",
      "Door & Window Work",
      "Cabinet Work",
      "Wooden Partitions",
      "Interior Woodwork",
    ],
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "fabrication",
    title: "Fabrication",
    icon: <Wrench className="h-5 w-5 shrink-0" />,
    description:
      "Custom fabrication solutions using M.S, S.S and aluminium for residential and commercial requirements.",
    features: [
      "M.S Fabrication",
      "S.S Fabrication",
      "Aluminium Fabrication",
      "Railings & Grills",
      "Custom Metal Structures",
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "false-ceiling",
    title: "False Ceiling",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description:
      "Modern false ceiling solutions designed to improve lighting, appearance and functionality.",
    features: [
      "Gypsum False Ceiling",
      "POP Ceiling",
      "LED Lighting Integration",
      "Decorative Ceiling",
      "Commercial Ceiling",
    ],
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: "painting",
    title: "Painting",
    icon: <Paintbrush className="h-5 w-5 shrink-0" />,
    description:
      "Professional interior and exterior painting services with careful preparation and quality finishing.",
    features: [
      "Interior Painting",
      "Exterior Painting",
      "Wall Preparation",
      "Texture Painting",
      "Repainting & Maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
  },
];

/* ============================================================
   WHY CHOOSE US
   ============================================================ */

const whyChooseReasons = [
  {
    num: "01",
    title: "24/7 Availability",
    desc: "Professional support whenever you need reliable service.",
    icon: <Clock className="h-7 w-7" />,
  },
  {
    num: "02",
    title: "Experienced Team",
    desc: "Skilled professionals with practical project experience.",
    icon: <Award className="h-7 w-7" />,
  },
  {
    num: "03",
    title: "Quality Work",
    desc: "We focus on quality materials and professional workmanship.",
    icon: <Users className="h-7 w-7" />,
  },
  {
    num: "04",
    title: "Affordable Pricing",
    desc: "Reliable solutions with competitive and transparent pricing.",
    icon: <DollarSign className="h-7 w-7" />,
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export const Services: React.FC<ServicesProps> = ({
  onRequestQuote,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("construction");

  const [activeSubService, setActiveSubService] =
    useState<string>("residential");

  /*
   * This key is intentionally incremented every time the user
   * changes category or sub-service.
   *
   * It forces the content and image elements to re-mount,
   * allowing the slide animation to run every time.
   */
  const [animKey, setAnimKey] = useState(0);

  /* ============================================================
     CATEGORY CHANGE
     ============================================================ */

  const handleCategoryClick = (category: Category) => {
    let nextSubService = activeSubService;

    if (category === "construction") {
      nextSubService = "residential";
    }

    if (category === "interior") {
      nextSubService = "kitchen";
    }

    if (category === "other") {
      nextSubService = "electrical";
    }

    setActiveCategory(category);
    setActiveSubService(nextSubService);
    setAnimKey((prev) => prev + 1);
  };

  /* ============================================================
     SUB SERVICE CHANGE
     ============================================================ */

  const handleSubServiceClick = (id: string) => {
    if (id === activeSubService) {
      /*
       * Even when the user clicks the already-selected item,
       * restart the animation.
       */
      setAnimKey((prev) => prev + 1);
      return;
    }

    setActiveSubService(id);
    setAnimKey((prev) => prev + 1);
  };

  /* ============================================================
     GET SUB SERVICES
     ============================================================ */

  const getSubServices = (): SubService[] => {
    switch (activeCategory) {
      case "construction":
        return constructionServices;

      case "interior":
        return interiorServices;

      case "other":
        return otherServices;

      default:
        return [];
    }
  };

  /* ============================================================
     GET CURRENT SERVICE
     ============================================================ */

  const getCurrentSubService = (): SubService | null => {
    const services = getSubServices();

    if (!services.length) {
      return null;
    }

    return (
      services.find(
        (service) => service.id === activeSubService
      ) || services[0]
    );
  };

  const currentSubService = getCurrentSubService();

  /* ============================================================
     MAIN CATEGORY CARD
     ============================================================ */

  const CategoryCard = ({
    category,
    title,
    image,
  }: {
    category: Category;
    title: string;
    image: string;
  }) => {
    const selected = activeCategory === category;

    return (
      <button
        type="button"
        onClick={() => handleCategoryClick(category)}
        aria-pressed={selected}
        className={`group relative h-[205px] overflow-hidden text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#D9AE00] ${
          selected ? "ring-2 ring-[#D9AE00]" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#084928]/95 via-[#084928]/60 to-[#084928]/30 transition-transform duration-300 ${
            selected
              ? "translate-y-0"
              : "translate-y-full group-hover:translate-y-0"
          }`}
        />

        <div className="absolute inset-x-0 bottom-7 z-10 text-center">
          <h3 className="px-2 text-lg font-black uppercase text-white">
            {title}
          </h3>
        </div>
      </button>
    );
  };

  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-[#084928] text-white"
    >
      {/* ======================================================
          ANIMATIONS
          ====================================================== */}

      <style>{`
        /*
         * Main content animation.
         * Used for the middle text and category content.
         */
        @keyframes serviceSlideFromRight {
          0% {
            opacity: 0;
            transform: translate3d(80px, 0, 0);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /*
         * Image comes from the right.
         */
        @keyframes serviceImageFromRight {
          0% {
            opacity: 0;
            transform: translate3d(110px, 0, 0) scale(0.96);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        /*
         * Existing-style arrow animation:
         * arrow travels from the left viewport into its
         * selected button position.
         */
        @keyframes arrowSlideFromLeftViewport {
          0% {
            opacity: 0;
            transform: translate3d(-100vw, 0, 0);
          }

          35% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes serviceFadeUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .service-content-slide {
          animation:
            serviceSlideFromRight
            0.75s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .service-image-slide {
          animation:
            serviceImageFromRight
            0.85s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.12s
            forwards;
          opacity: 0;
        }

        .service-arrow-slide {
          animation:
            arrowSlideFromLeftViewport
            0.8s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
          opacity: 0;
        }

        .service-fade-up {
          animation:
            serviceFadeUp
            0.7s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        /*
         * Respect reduced-motion preferences.
         */
        @media (prefers-reduced-motion: reduce) {
          .service-content-slide,
          .service-image-slide,
          .service-arrow-slide,
          .service-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          PAGE BANNER
          ====================================================== */}

      <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-y border-[#D9AE00]/30 text-center sm:h-[310px]">
        <div
          className="absolute inset-0 z-0 bg-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,73,40,0.75), rgba(8,73,40,0.75)), url('/sub-bnr-bg.jpg')",
            backgroundSize: "auto",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white drop-shadow-md sm:text-4xl">
            Services
          </h1>

          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D9AE00] drop-shadow-md">
            We Have 25 Years Experience In Plumbing
          </p>
        </div>
      </div>

      {/* ======================================================
          FIVE MAIN SERVICE IMAGE BUTTONS
          ====================================================== */}

      <div className="bg-[#084928] py-10 sm:py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">

            <CategoryCard
              category="construction"
              title="Construction"
              image={categoryImages.construction}
            />

            <CategoryCard
              category="renovation"
              title="Renovation"
              image={categoryImages.renovation}
            />

            <CategoryCard
              category="interior"
              title="Interior Work"
              image={categoryImages.interior}
            />

            <CategoryCard
              category="waterproofing"
              title="Water Proofing"
              image={categoryImages.waterproofing}
            />

            <CategoryCard
              category="other"
              title="Other Services"
              image={categoryImages.other}
            />

          </div>

        </div>
      </div>

      {/* ======================================================
          WELCOME TO OUR HANDYMAN
          ====================================================== */}

      <div className="bg-[#084928] py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="text-xl font-black uppercase text-white sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>

          {/* ==================================================
              RENOVATION
              LEFT CONTENT + RIGHT IMAGE
              ================================================== */}

          {activeCategory === "renovation" && (
            <div
              key={`renovation-${animKey}`}
              className="service-content-slide grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* LEFT */}
              <div className="min-w-0">

                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  Renovation Services
                </h3>

                <div className="mt-5 space-y-5 text-sm leading-7 text-white/90">

                  <p>
                    <strong className="text-[#D9AE00]">
                      Comprehensive Scope:
                    </strong>{" "}
                    All types of renovation work across residential,
                    commercial, and property spaces.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Structural Updates:
                    </strong>{" "}
                    Space remodeling, wall alterations, layout
                    reconfigurations, and structural improvements.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Surface Refinishing:
                    </strong>{" "}
                    Comprehensive interior and exterior paint jobs,
                    wall repairs, wall paneling installation, and
                    accent features.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Flooring & Tiling Upgrades:
                    </strong>{" "}
                    Removal and fresh installation of marble, granite,
                    ceramic, or modern tiling.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Utility & Systems Modernization:
                    </strong>{" "}
                    Upgrading existing electrical wiring, lighting
                    systems, plumbing fixtures, and waterproofing
                    barriers.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Custom Woodwork & Storage Integration:
                    </strong>{" "}
                    Full refurbishment or new builds for modern kitchen
                    setups, wardrobes, loft storage, TV units, wall
                    units, and custom Pooja cabinets.
                  </p>

                  <p>
                    <strong className="text-[#D9AE00]">
                      Metalwork & Fabrication Refits:
                    </strong>{" "}
                    Upgrades involving M.S (mild steel), S.S
                    (stainless steel), and aluminum fixtures or frames.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    onRequestQuote("Renovation Services")
                  }
                  className="mt-7 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00]"
                >
                  Learn More
                </button>

              </div>

              {/* RIGHT IMAGE */}
              <div
                key={`renovation-image-${animKey}`}
                className="flex justify-center md:justify-end"
              >
                <img
                  src={categoryImages.renovation}
                  alt="Renovation Services"
                  loading="lazy"
                  className="service-image-slide h-[420px] w-full max-w-[500px] object-cover"
                />
              </div>
            </div>
          )}

          {/* ==================================================
              WATER PROOFING
              LEFT CONTENT + RIGHT IMAGE
              ================================================== */}

          {activeCategory === "waterproofing" && (
            <div
              key={`waterproofing-${animKey}`}
              className="service-content-slide grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* LEFT */}
              <div className="min-w-0">

                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  Water Proofing Services
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/90">
                  We provide complete waterproofing solutions to protect
                  residential, commercial and industrial properties from
                  water leakage, seepage and moisture damage.
                </p>

                <ul className="mt-6 space-y-3">

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>Terrace & Roof Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>Bathroom Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>Basement Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>Wall Seepage Treatment</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>
                      External & Internal Waterproofing
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                    <span>
                      Crack Sealing & Leakage Repairs
                    </span>
                  </li>

                </ul>

                <button
                  type="button"
                  onClick={() =>
                    onRequestQuote("Water Proofing")
                  }
                  className="mt-7 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00]"
                >
                  Learn More
                </button>

              </div>

              {/* RIGHT IMAGE */}
              <div
                key={`waterproofing-image-${animKey}`}
                className="flex justify-center md:justify-end"
              >
                <img
                  src={categoryImages.waterproofing}
                  alt="Water Proofing Services"
                  loading="lazy"
                  className="service-image-slide h-[420px] w-full max-w-[500px] object-cover"
                />
              </div>

            </div>
          )}

          {/* ==================================================
              CONSTRUCTION / INTERIOR / OTHER
              THREE COLUMN DESIGN
              ================================================== */}

          {(activeCategory === "construction" ||
            activeCategory === "interior" ||
            activeCategory === "other") && (
            <div
              key={`${activeCategory}-${animKey}`}
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]"
            >

              {/* ==================================================
                  LEFT SERVICE BUTTONS
                  ================================================== */}

              <div
                key={`service-menu-${activeCategory}`}
                className="service-fade-up border border-white/10 bg-[#062D1A] shadow-xl"
              >

                {getSubServices().map((service) => {
                  const selected =
                    service.id === activeSubService;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        handleSubServiceClick(service.id)
                      }
                      aria-pressed={selected}
                      className={`group relative flex min-h-[48px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D9AE00] ${
                        selected
                          ? "border-2 border-[#E3FC03] bg-[#D9AE00] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35)]"
                          : "border-b border-white/10 text-white/85 hover:bg-white/5 hover:text-white"
                      }`}
                    >

                      <span className="relative z-10 flex items-center gap-2">

                        {service.icon}

                        <span>
                          {service.title}
                        </span>

                      </span>

                      {/* ==================================================
                          IMPORTANT:
                          THIS IS THE ORIGINAL-STYLE RIGHT ARROW ANIMATION.
                          IT RESTARTS EVERY TIME animKey CHANGES.
                          ================================================== */}

                      {selected && (
                        <span
                          key={`arrow-${activeCategory}-${service.id}-${animKey}`}
                          className="service-arrow-slide relative z-10 flex shrink-0 items-center"
                        >
                          <ChevronRight
                            className="h-6 w-6"
                            strokeWidth={2.5}
                          />
                        </span>
                      )}

                    </button>
                  );
                })}

              </div>

              {/* ==================================================
                  MIDDLE CONTENT
                  SLIDES FROM RIGHT
                  ================================================== */}

              {currentSubService && (
                <div
                  key={`content-${activeCategory}-${activeSubService}-${animKey}`}
                  className="service-content-slide min-w-0"
                >

                  <h3 className="text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
                    {currentSubService.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-white/90">
                    {currentSubService.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {currentSubService.features.map(
                      (feature, index) => (
                        <li
                          key={`${currentSubService.id}-${index}`}
                          className="flex items-start gap-3 text-sm font-medium text-white"
                        >
                          <span className="mt-[3px] text-[#D9AE00]">
                            ◆
                          </span>

                          <span>{feature}</span>
                        </li>
                      )
                    )}

                  </ul>

                  <button
                    type="button"
                    onClick={() =>
                      onRequestQuote(
                        currentSubService.title
                      )
                    }
                    className="mt-7 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00]"
                  >
                    Learn More
                  </button>

                </div>
              )}

              {/* ==================================================
                  RIGHT IMAGE
                  SLIDES FROM RIGHT
                  ================================================== */}

              {currentSubService && (
                <div
                  key={`image-container-${activeCategory}-${activeSubService}-${animKey}`}
                  className="flex justify-center md:justify-end"
                >
                  <img
                    key={`image-${activeCategory}-${activeSubService}-${animKey}`}
                    src={currentSubService.image}
                    alt={currentSubService.title}
                    loading="lazy"
                    className="service-image-slide h-[300px] w-full max-w-[340px] object-cover"
                  />
                </div>
              )}

            </div>
          )}

        </div>
      </div>

      {/* ======================================================
          WHY CHOOSE US
          ====================================================== */}

      <div className="bg-[#084928] py-12 sm:py-16">

        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">

            <h2 className="text-xl font-black uppercase text-white sm:text-2xl">
              Why Choose Us
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">

            {whyChooseReasons.map((reason) => (

              <div
                key={reason.num}
                className="flex min-h-[115px] items-start gap-5 border-b border-white/10 pb-7"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#D9AE00]">
                  {reason.icon}
                </div>

                <div>

                  <h3 className="text-base font-black uppercase text-white">
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

      {/* ======================================================
          CALL US
          ====================================================== */}

      <div
        className="relative overflow-hidden border-y border-[#D9AE00]/30 py-8 text-center sm:py-10"
        style={{
          backgroundColor: "#084928",
        }}
      >

        <div
          className="absolute inset-0 z-0 bg-repeat"
          style={{
            backgroundImage: "url('/call-us-bg.jpg')",
            backgroundSize: "auto",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="absolute inset-0 z-0 bg-[#084928]/90" />

        <div className="relative z-10">

          <p className="text-sm font-bold uppercase text-white drop-shadow-md">
            Don&apos;t See What You Need? Call Us Today!
          </p>

          <a
            href="tel:+91123456789"
            className="mt-2 block text-xl font-black text-[#D9AE00] drop-shadow-md hover:text-white"
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