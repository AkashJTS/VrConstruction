import React, { useState, useEffect, useRef } from 'react';
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
  Zap,
  HardHat,
  Home as HomeIcon,
  Paintbrush,
  ShieldCheck,
  MoreHorizontal,
  Building2,
  Warehouse,
  Hammer,
  Ruler,
  Award,
  Users
} from 'lucide-react';

// @ts-ignore
import video from "/public/VRConstruction.mp4";

interface HomeProps {
  videoSrc?: string;
  onNavigate?: (section: any) => void;
  onRequestQuote?: (prefilledService?: string) => void;
}

type Category = "construction" | "renovation" | "interior" | "waterproofing" | "other";

interface SubService {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

const categoryImages: Record<Category, string> = {
  construction: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  renovation: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=85",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  waterproofing: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  other: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
};

const constructionServices: SubService[] = [
  {
    id: "residential",
    title: "Residential",
    icon: <HomeIcon className="h-5 w-5 shrink-0" />,
    description: "Complete residential construction solutions delivered with professional workmanship, quality materials and careful attention to every detail.",
    features: [
      "New Residential Construction",
      "House Extensions & Additions",
      "Structural Construction Work",
      "Civil & Masonry Work",
      "Complete Home Development",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: <Building2 className="h-5 w-5 shrink-0" />,
    description: "Professional commercial construction services for offices, shops, showrooms and business properties with reliable project execution.",
    features: [
      "Commercial Building Construction",
      "Office Construction",
      "Shop & Showroom Construction",
      "Commercial Civil Work",
      "Project Planning & Execution",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "warehouse",
    title: "Warehouse",
    icon: <Warehouse className="h-5 w-5 shrink-0" />,
    description: "Durable warehouse construction and development solutions designed for storage, industrial and commercial requirements.",
    features: [
      "Warehouse Construction",
      "Industrial Structures",
      "Storage Facility Development",
      "Flooring & Concrete Work",
      "Structural & Fabrication Work",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
];

const interiorServices: SubService[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    icon: <Hammer className="h-5 w-5 shrink-0" />,
    description: "Custom kitchen solutions designed around your space, storage requirements and preferred style.",
    features: [
      "Modular Kitchen",
      "Custom Kitchen Cabinets",
      "Kitchen Storage Solutions",
      "Countertop Installation",
      "Complete Kitchen Interior",
    ],
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "wall-unit",
    title: "Wall Unit",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description: "Elegant custom wall units that combine modern design with practical storage.",
    features: [
      "Custom Wall Units",
      "Storage Cabinets",
      "Display Shelves",
      "Decorative Panels",
      "Complete Wall Design",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "wardrobes-loft",
    title: "Wardrobes & Loft",
    icon: <Warehouse className="h-5 w-5 shrink-0" />,
    description: "Space-efficient wardrobes and loft storage designed to maximize every available area.",
    features: [
      "Sliding Wardrobes",
      "Walk-in Wardrobes",
      "Loft Storage",
      "Bedroom Storage",
      "Custom Internal Layouts",
    ],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "tv-cabinet",
    title: "T.V Cabinet",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description: "Modern TV cabinets designed to provide attractive entertainment spaces with practical storage.",
    features: [
      "Custom TV Cabinets",
      "Floating TV Units",
      "Media Storage",
      "Cable Management",
      "Decorative Back Panels",
    ],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pooja-cabinet",
    title: "Pooja Cabinet",
    icon: <HomeIcon className="h-5 w-5 shrink-0" />,
    description: "Beautifully designed pooja cabinets and prayer spaces created to suit your home interior.",
    features: [
      "Custom Pooja Cabinets",
      "Wall-Mounted Pooja Units",
      "Decorative Woodwork",
      "Storage Drawers",
      "Traditional & Modern Designs",
    ],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "wall-paneling",
    title: "Wall Paneling",
    icon: <Ruler className="h-5 w-5 shrink-0" />,
    description: "Transform plain walls with modern decorative wall panels, textures and custom design elements.",
    features: [
      "Wooden Wall Panels",
      "Decorative Wall Panels",
      "Accent Walls",
      "TV Back Panels",
      "Custom Interior Features",
    ],
    image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=85",
  },
];

const otherServices: SubService[] = [
  {
    id: "electrical",
    title: "Electrical",
    icon: <Zap className="h-5 w-5 shrink-0" />,
    description: "Professional electrical installation, repair and maintenance services for homes, offices and commercial spaces.",
    features: [
      "Electrical Wiring",
      "Lighting Installation",
      "Switch & Socket Installation",
      "Electrical Repairs",
      "Electrical Maintenance",
    ],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "plumbing",
    title: "Plumbing",
    icon: <Droplet className="h-5 w-5 shrink-0" />,
    description: "Reliable plumbing installation, repair and maintenance services for residential and commercial properties.",
    features: [
      "Water Line Installation",
      "Leak Repairs",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Drainage Solutions",
    ],
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "tiles",
    title: "Tiles Laying",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description: "Professional tile installation services including marble, granite, ceramic and modern flooring solutions.",
    features: [
      "Marble",
      "Granite",
      "Ceramic Tiles",
      "Floor Tiles",
      "Wall Tiles",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "carpentry",
    title: "Carpentry Works",
    icon: <Hammer className="h-5 w-5 shrink-0" />,
    description: "Complete carpentry services for custom furniture, repairs, doors, cabinets and interior woodwork.",
    features: [
      "Custom Furniture",
      "Door & Window Work",
      "Cabinet Work",
      "Wooden Partitions",
      "Interior Woodwork",
    ],
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "fabrication",
    title: "Fabrication",
    icon: <Wrench className="h-5 w-5 shrink-0" />,
    description: "Custom fabrication solutions using M.S, S.S and aluminium for residential and commercial requirements.",
    features: [
      "M.S",
      "S.S",
      "Aluminium",
      "Railings & Grills",
      "Custom Metal Structures",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling",
    icon: <Layers className="h-5 w-5 shrink-0" />,
    description: "Modern false ceiling solutions designed to improve lighting, appearance and functionality.",
    features: [
      "Gypsum False Ceiling",
      "POP Ceiling",
      "LED Lighting Integration",
      "Decorative Ceiling",
      "Commercial Ceiling",
    ],
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "painting",
    title: "Painting",
    icon: <Paintbrush className="h-5 w-5 shrink-0" />,
    description: "Professional painting services for both interior and exterior spaces with careful preparation and quality finishing.",
    features: [
      "Interior",
      "Exterior",
      "Wall Preparation",
      "Texture Painting",
      "Repainting & Maintenance",
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85",
  },
];

export const Home: React.FC<HomeProps> = ({
  videoSrc = video,
  onNavigate,
  onRequestQuote,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('construction');
  const [activeSubService, setActiveSubService] = useState<string>('residential');
  const [animKey, setAnimKey] = useState<number>(0);

  const welcomeSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToWelcome = () => {
    window.setTimeout(() => {
      welcomeSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 40);
  };

  const handleCategoryClick = (category: Category) => {
    let firstSubService = activeSubService;

    if (category === "construction") {
      firstSubService = "residential";
    } else if (category === "interior") {
      firstSubService = "kitchen";
    } else if (category === "other") {
      firstSubService = "electrical";
    }

    setActiveCategory(category);
    setActiveSubService(firstSubService);
    setAnimKey((prev) => prev + 1);

    scrollToWelcome();
  };

  const handleSubServiceClick = (serviceId: string) => {
    setActiveSubService(serviceId);
    setAnimKey((prev) => prev + 1);
  };

  const getSubServices = (): SubService[] => {
    if (activeCategory === "construction") return constructionServices;
    if (activeCategory === "interior") return interiorServices;
    if (activeCategory === "other") return otherServices;
    return [];
  };

  const getCurrentSubService = (): SubService | null => {
    const services = getSubServices();
    if (services.length === 0) return null;
    return services.find((service) => service.id === activeSubService) || services[0];
  };

  const currentSubService = getCurrentSubService();

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

  const serviceCategories = [
    { id: 'construction' as Category, label: 'Construction', icon: HardHat },
    { id: 'renovation' as Category, label: 'Renovation', icon: HomeIcon },
    { id: 'interior' as Category, label: 'Interior Work', icon: Paintbrush },
    { id: 'waterproofing' as Category, label: 'Water Proofing', icon: ShieldCheck },
    { id: 'other' as Category, label: 'Other Services', icon: MoreHorizontal },
  ];

  return (
    <div className="w-full bg-[#084928] text-white">

      {/* ============================================================
          1. HERO SECTION WITH VIDEO
          ============================================================ */}
      <section
        id="home"
        className="relative w-full h-[88vh] min-h-[620px] overflow-hidden bg-[#e5e7eb] text-[#084928] flex items-center justify-center px-6"
      >
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

        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(#000000 1px, transparent 1px), ` +
              `linear-gradient(90deg, #000000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes blinkCursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
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
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes arrowSlideFromLeftViewport {
            0% { transform: translateX(-100vw); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: translateX(0); opacity: 1; }
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

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-1">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-[#084928] min-h-[100px] sm:min-h-[130px]">
            <span>{typedLine1}</span>
            {!isLine1Done && <span className="typing-cursor" />}
            <br />
            <span className="text-[#000000]">{typedLine2}</span>
            {isLine1Done && <span className="typing-cursor" />}
          </h1>

          <div className={`pt-3 ${isMounted ? "anim-btn-active" : "opacity-0"}`}>
            <p className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-[#084928]/40 backdrop-blur-md text-[#ffffff] text-sm font-semibold leading-8">
              From planning and design to construction and final handover,
              we deliver high-quality residential and commercial construction
              solutions with transparent pricing, skilled workmanship, and
              reliable project execution.
            </p>
          </div>

          <div className={`pt-3 ${isMounted ? "anim-btn-active" : "opacity-0"}`}>
            <button
              onClick={() => onNavigate && onNavigate('services')}
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

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          3. OUR SERVICES SECTION
          ============================================================ */}
      <section className="w-full bg-[#05351c] py-14 px-5 sm:px-8 border-y border-white/10">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceCategories.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleCategoryClick(item.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-amber-400 text-[#084928] border-amber-400 font-bold shadow-lg scale-105'
                      : 'bg-white/5 text-white border-white/10 hover:border-amber-400/50 hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 transition-colors ${isActive ? 'text-[#084928]' : 'text-amber-400'}`} />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-center">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. WELCOME TO OUR HANDYMAN SECTION (DYNAMIC CONTENT)
          ============================================================ */}
      <div ref={welcomeSectionRef} className="bg-[#084928] py-12 sm:py-16 scroll-mt-6">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="mb-9 border-l-[5px] border-[#D9AE00] pl-4">
            <h2 className="font-exo text-xl font-black uppercase text-white sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>

          {/* RENOVATION SPECIAL VIEW */}
          {activeCategory === "renovation" && (
            <div key={`renovation-${animKey}`} className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="animate-stagger-1 min-w-0">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  Renovation Services
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-white/90">
                  <p><strong className="text-[#D9AE00]">Comprehensive Scope:</strong> All types of renovation work across residential, commercial, and property spaces.</p>
                  <p><strong className="text-[#D9AE00]">Structural Updates:</strong> Space remodeling, wall alterations, layout reconfigurations, and structural improvements.</p>
                  <p><strong className="text-[#D9AE00]">Surface Refinishing:</strong> Interior and exterior paint jobs, wall repairs, paneling installation, and accent features.</p>
                  <p><strong className="text-[#D9AE00]">Flooring & Tiling Upgrades:</strong> Removal and fresh installation of marble, granite, ceramic, or modern tiling.</p>
                  <p><strong className="text-[#D9AE00]">Utility Modernization:</strong> Upgrading existing electrical wiring, lighting systems, plumbing fixtures, and waterproofing barriers.</p>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestQuote && onRequestQuote("Renovation Services")}
                  className="mt-7 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00]"
                >
                  Learn More
                </button>
              </div>

              <div className="animate-stagger-2 flex justify-center md:justify-end">
                <img
                  src={categoryImages.renovation}
                  alt="Renovation Services"
                  className="h-[380px] w-full max-w-[480px] object-cover rounded-md shadow-lg"
                />
              </div>
            </div>
          )}

          {/* WATERPROOFING SPECIAL VIEW */}
          {activeCategory === "waterproofing" && (
            <div key={`waterproofing-${animKey}`} className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="animate-stagger-1 min-w-0">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  Water Proofing Services
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/90">
                  We provide complete waterproofing solutions to protect residential, commercial and industrial properties from water leakage, seepage and moisture damage.
                </p>

                <ul className="mt-6 space-y-3">
                  {["Terrace & Roof Waterproofing", "Bathroom Waterproofing", "Basement Waterproofing", "Wall Seepage Treatment", "External & Internal Waterproofing", "Crack Sealing & Leakage Repairs"].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white">
                      <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#D9AE00]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onRequestQuote && onRequestQuote("Water Proofing")}
                  className="mt-7 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00]"
                >
                  Learn More
                </button>
              </div>

              <div className="animate-stagger-2 flex justify-center md:justify-end">
                <img
                  src={categoryImages.waterproofing}
                  alt="Water Proofing Services"
                  className="h-[380px] w-full max-w-[480px] object-cover rounded-md shadow-lg"
                />
              </div>
            </div>
          )}

          {/* DYNAMIC CATEGORIES VIEW (CONSTRUCTION, INTERIOR, OTHER) */}
          {(activeCategory === "construction" || activeCategory === "interior" || activeCategory === "other") && (
            <div key={`${activeCategory}-${animKey}`} className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]">

              {/* Dynamic Side Navigation Menu */}
              <div className="border border-white/10 bg-[#062D1A] shadow-xl">
                {getSubServices().map((service) => {
                  const selected = service.id === activeSubService;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleSubServiceClick(service.id)}
                      className={`group relative flex min-h-[44px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase transition-all duration-200 ${
                        selected
                          ? 'z-20 border-2 border-[#E3FC03] bg-[#D9AE00] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35),inset_0_1px_0_rgba(255,255,255,0.4)]'
                          : 'border-b border-white/10 text-white/85 hover:text-white last:border-b-0'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </span>

                      {selected && (
                        <div className="relative z-10 animate-arrow-viewport-glide">
                          <img
                            src="/right-arrow1.png"
                            alt=""
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Middle Text Content */}
              {currentSubService && (
                <div key={`content-${currentSubService.id}-${animKey}`} className="min-w-0">
                  <h3 className="animate-stagger-1 font-exo text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
                    {currentSubService.title}
                  </h3>

                  <p className="animate-stagger-2 mt-4 text-sm font-medium leading-6 text-white/90">
                    {currentSubService.description}
                  </p>

                  <ul className="animate-stagger-3 mt-5 space-y-2.5">
                    {currentSubService.features.map((feature, index) => (
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
                        onRequestQuote && onRequestQuote(currentSubService.title)
                      }
                      className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#D9AE00] hover:shadow-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )}

              {/* Dynamic Right Image Content */}
              {currentSubService && (
                <div key={`image-${currentSubService.id}-${animKey}`} className="flex justify-center md:justify-end">
                  <img
                    src={currentSubService.image}
                    alt={currentSubService.title}
                    className="animate-stagger-2 h-[300px] w-full max-w-[340px] object-cover rounded-md shadow-lg"
                  />
                </div>
              )}

            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Home;