import React, { useRef, useState } from "react";
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
   INTERIOR WORK
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
      "Marble",
      "Granite",
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
      "M.S",
      "S.S",
      "Aluminium",
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
      "Professional painting services for both interior and exterior spaces with careful preparation and quality finishing.",
    features: [
      "Interior",
      "Exterior",
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
   MAIN COMPONENT
   ============================================================ */

export const Services: React.FC<ServicesProps> = ({
  onRequestQuote,
}) => {
  /* ==========================================================
     STATE
     ========================================================== */

  const [activeCategory, setActiveCategory] =
    useState<Category>("construction");

  const [activeSubService, setActiveSubService] =
    useState<string>("residential");
  const [animationKey, setAnimationKey] = useState(0);


  /*
   * IMPORTANT:
   * The scroll target is the actual "Welcome to Our Handyman"
   * heading, not the outer section.
   *
   * Previously the code scrolled to the top of the whole section
   * and then subtracted a hard-coded 180px. Because the section
   * itself has top padding, the heading was left too far down
   * after clicking a category image.
   */
  const welcomeTitleRef = useRef<HTMLDivElement | null>(null);

  /* ==========================================================
     SCROLL TO WELCOME
     ========================================================== */

  const scrollToWelcome = () => {
    /*
     * Wait until React has rendered the newly selected category.
     * Two animation frames are more reliable than a fixed timeout:
     * frame 1 -> React/layout update
     * frame 2 -> final browser layout
     */
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = welcomeTitleRef.current;

        if (!target) return;

        /*
         * Read the real header height instead of assuming 180px.
         * This keeps the scroll position correct if the header
         * height changes on desktop/mobile.
         */
        const header = document.querySelector("header");

        const headerHeight = header
          ? header.getBoundingClientRect().height
          : 120;

        /*
         * Keep the Welcome heading clearly below the sticky header.
         * 18px gives a small, clean visual gap.
         */
        const extraGap = 18;

        const targetTop =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          extraGap;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
      });
    });
  };

  /* ==========================================================
     CATEGORY CLICK
     ========================================================== */

  const handleCategoryClick = (category: Category) => {
    let firstSubService = activeSubService;

    if (category === "construction") {
      firstSubService = "residential";
    }

    if (category === "interior") {
      firstSubService = "kitchen";
    }

    if (category === "other") {
      firstSubService = "electrical";
    }

    setActiveCategory(category);
    setActiveSubService(firstSubService);

    /*
     * Restart animation.
     */
    setAnimationKey((previous) => previous + 1);

    scrollToWelcome();
  };

  /* ==========================================================
     SUB SERVICE CLICK
     ========================================================== */

  const handleSubServiceClick = (serviceId: string) => {
    setActiveSubService(serviceId);

    /*
     * Restart arrow, middle content and right image animation.
     */
    setAnimationKey((previous) => previous + 1);
  };

  /* ==========================================================
     GET SUB SERVICES
     ========================================================== */

  const getSubServices = (): SubService[] => {
    if (activeCategory === "construction") {
      return constructionServices;
    }

    if (activeCategory === "interior") {
      return interiorServices;
    }

    if (activeCategory === "other") {
      return otherServices;
    }

    return [];
  };

  /* ==========================================================
     GET CURRENT SUB SERVICE
     ========================================================== */

  const getCurrentSubService = (): SubService | null => {
    const services = getSubServices();

    if (services.length === 0) {
      return null;
    }

    return (
      services.find(
        (service) => service.id === activeSubService
      ) || services[0]
    );
  };

  const currentSubService = getCurrentSubService();

  /* ==========================================================
     CATEGORY CARD
     ========================================================== */

  const CategoryCard = ({
    category,
    title,
    image,
  }: {
    category: Category;
    title: string;
    image: string;
  }) => {
    const isActive = activeCategory === category;

    return (
      <button
        type="button"
        onClick={() => handleCategoryClick(category)}
        aria-pressed={isActive}
        className={`group relative h-[205px] w-full overflow-hidden text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#EBC815] ${
          isActive ? "ring-2 ring-[#EBC815]" : ""
        }`}
      >
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#084928]/95 via-[#084928]/65 to-[#084928]/30 transition-transform duration-300 ${
            isActive
              ? "translate-y-0"
              : "translate-y-full group-hover:translate-y-0"
          }`}
        />

        {/* TITLE - EXISTING DESIGN PRESERVED, WITH FULL-WIDTH GREEN BLUR + GOLD BORDER */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex w-full items-center justify-center gap-4 border-y border-[#EBC815] bg-[#084928]/75 px-2 py-4 text-center backdrop-blur-md">
          <h3 className="text-lg font-black uppercase text-[#EBC815]">
            {title}
          </h3>
        </div>
      </button>
    );
  };

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <section
      id="services"
      className="w-full overflow-x-hidden bg-[#084928] text-white"
    >
      {/* ======================================================
          ANIMATIONS
          ====================================================== */}

      <style>{`
        /*
         * Middle content enters from RIGHT.
         */
        @keyframes serviceContentFromRight {
          0% {
            opacity: 0;
            transform: translate3d(90px, 0, 0);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /*
         * Right image enters from RIGHT.
         */
        @keyframes serviceImageFromRight {
          0% {
            opacity: 0;
            transform: translate3d(120px, 0, 0);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /*
         * YOUR RIGHT ARROW:
         *
         * The supplied right-arrow1.png travels from
         * the LEFT side of the viewport into the selected
         * service button.
         */
        @keyframes serviceArrowFromLeft {
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

        /*
         * IMPORTANT:
         * Welcome to Our Handyman has NO animation.
         *
         * Only service content/image/arrow animate.
         */

        .service-content-slide {
          animation:
            serviceContentFromRight
            0.75s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .service-image-slide {
          opacity: 0;
          animation:
            serviceImageFromRight
            0.85s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.12s
            forwards;
        }

        .service-arrow-slide {
          opacity: 0;
          animation:
            serviceArrowFromLeft
            0.8s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-content-slide,
          .service-image-slide,
          .service-arrow-slide {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ======================================================
          PAGE BANNER
          ====================================================== */}

      <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-y border-[#EBC815]/30 text-center sm:h-[310px]">
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

          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#EBC815] drop-shadow-md">
            We Have 25 Years Experience In Plumbing
          </p>
        </div>
      </div>

      {/* ======================================================
          FIVE IMAGE CATEGORY BUTTONS
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

      <div
        id="welcome-to-our-handyman"
        className="bg-[#084928] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          {/* ==================================================
              STATIC WELCOME TITLE
              ==================================================
              This is the exact element used as the scroll target.
              It prevents the section's top padding from affecting
              the final scroll position.
              ================================================== */}

          <div
            ref={welcomeTitleRef}
            className="mb-9 border-l-[5px] border-[#EBC815] pl-4 scroll-mt-[140px] sm:scroll-mt-[150px]"
          >
            <h2 className="text-xl font-black uppercase text-[#EBC815] sm:text-2xl">
              Welcome to Our Handyman
            </h2>
          </div>


          {activeCategory === "renovation" && (
            <div
              key={`renovation-${animationKey}`}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* LEFT CONTENT */}

              <div
                key={`renovation-content-${animationKey}`}
                className="service-content-slide min-w-0"
              >
                <h3 className="text-2xl font-black uppercase tracking-wide text-[#EBC815]">
                  Renovation Services
                </h3>

                <div className="mt-5 space-y-5 text-sm leading-7 text-white/90">

                  <p>
                    <strong className="text-[#EBC815]">
                      Comprehensive Scope:
                    </strong>{" "}
                    All types of renovation work across residential,
                    commercial, and property spaces.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Structural Updates:
                    </strong>{" "}
                    Space remodeling, wall alterations, layout
                    reconfigurations, and structural improvements.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Surface Refinishing:
                    </strong>{" "}
                    Comprehensive interior and exterior paint jobs,
                    wall repairs, wall paneling installation, and
                    accent features.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Flooring & Tiling Upgrades:
                    </strong>{" "}
                    Removal and fresh installation of marble,
                    granite, ceramic, or modern tiling.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Utility & Systems Modernization:
                    </strong>{" "}
                    Upgrading existing electrical wiring, lighting
                    systems, plumbing fixtures, and waterproofing
                    barriers.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Custom Woodwork & Storage Integration:
                    </strong>{" "}
                    Full refurbishment or new builds for modern
                    kitchen setups, wardrobes, loft storage, TV
                    units, wall units, and custom Pooja cabinets.
                  </p>

                  <p>
                    <strong className="text-[#EBC815]">
                      Metalwork & Fabrication Refits:
                    </strong>{" "}
                    Upgrades involving M.S (mild steel), S.S
                    (stainless steel), and aluminum fixtures or
                    frames.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    onRequestQuote("Renovation Services")
                  }
                  className="mt-7 border border-[#EBC815] bg-[#EBC815] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#EBC815]"
                >
                  Learn More
                </button>
              </div>

              {/* RIGHT IMAGE */}

              <div
                key={`renovation-image-${animationKey}`}
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


          {activeCategory === "waterproofing" && (
            <div
              key={`waterproofing-${animationKey}`}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* LEFT CONTENT */}

              <div
                key={`waterproofing-content-${animationKey}`}
                className="service-content-slide min-w-0"
              >
                <h3 className="text-2xl font-black uppercase tracking-wide text-[#EBC815]">
                  Water Proofing Services
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/90">
                  We provide complete waterproofing solutions to
                  protect residential, commercial and industrial
                  properties from water leakage, seepage and
                  moisture damage.
                </p>

                <ul className="mt-6 space-y-3">

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
                    <span>Terrace & Roof Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
                    <span>Bathroom Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
                    <span>Basement Waterproofing</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
                    <span>Wall Seepage Treatment</span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
                    <span>
                      External & Internal Waterproofing
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-white">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#EBC815]" />
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
                  className="mt-7 border border-[#EBC815] bg-[#EBC815] px-8 py-3 text-xs font-black uppercase text-[#084928] transition-all duration-300 hover:bg-[#084928] hover:text-[#EBC815]"
                >
                  Learn More
                </button>
              </div>

              {/* RIGHT IMAGE */}

              <div
                key={`waterproofing-image-${animationKey}`}
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


          {(activeCategory === "construction" ||
            activeCategory === "interior" ||
            activeCategory === "other") && (
            <div
              key={`${activeCategory}-${animationKey}`}
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-[250px_1fr_310px] lg:grid-cols-[270px_1fr_340px]"
            >
              {/* ==================================================
                  LEFT SERVICE MENU
                  ================================================== */}

              <div className="border border-white/10 bg-[#062D1A] shadow-xl">

                {getSubServices().map((service) => {
                  const isSelected =
                    service.id === activeSubService;

                  return (
                    <button
                      key={`${service.id}-${animationKey}`}
                      type="button"
                      onClick={() =>
                        handleSubServiceClick(service.id)
                      }
                      aria-pressed={isSelected}
                      className={`group relative flex min-h-[50px] w-full items-center justify-between px-4 text-left text-[11px] font-bold uppercase outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#EBC815] ${
                        isSelected
                          ? "border-2 border-[#EBC815] bg-[#EBC815] text-[#084928] shadow-[0_4px_14px_rgba(167,111,19,0.35)]"
                          : "border-b border-white/10 text-white/85 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {/* SERVICE NAME */}

                      <span className="relative z-10 flex min-w-0 items-center gap-2">
                        {service.icon}

                        <span className="truncate">
                          {service.title}
                        </span>
                      </span>


                      {isSelected && (
                        <span
                          key={`arrow-${activeCategory}-${service.id}-${animationKey}`}
                          className="service-arrow-slide relative z-10 ml-3 flex h-7 w-9 shrink-0 items-center justify-center overflow-visible"
                        >
                          <img
                            src="/right-arrow1.png"
                            alt=""
                            aria-hidden="true"
                            className="block h-7 w-9 object-contain"
                          />
                        </span>
                      )}
                    </button>
                  );
                })}

              </div>

              {/* ==================================================
                  MIDDLE CONTENT

                  THIS SLIDES FROM RIGHT
                  EVERY TIME USER CLICKS A SERVICE.
                  ================================================== */}

              {currentSubService && (
                <div
                  key={`middle-${activeCategory}-${activeSubService}-${animationKey}`}
                  className="service-content-slide min-w-0"
                >
                  <h3 className="text-xl font-black uppercase tracking-wide text-[#EBC815] sm:text-2xl">
                    {currentSubService.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-white/90">
                    {currentSubService.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {currentSubService.features.map(
                      (feature, index) => (
                        <li
                          key={`${currentSubService.id}-${feature}-${index}`}
                          className="flex items-start gap-3 text-sm font-medium text-white"
                        >
                          <span className="mt-[3px] text-[#EBC815]">
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
                    className="mt-7 border border-[#EBC815] bg-[#EBC815] px-8 py-3 text-xs font-black uppercase text-[#084928] shadow-md transition-all duration-300 hover:bg-[#084928] hover:text-[#EBC815]"
                  >
                    Learn More
                  </button>
                </div>
              )}

              {/* ==================================================
                  RIGHT IMAGE

                  THIS SLIDES FROM RIGHT
                  EVERY TIME USER CLICKS A SERVICE.
                  ================================================== */}

              {currentSubService && (
                <div
                  key={`right-image-${activeCategory}-${activeSubService}-${animationKey}`}
                  className="flex justify-center md:justify-end"
                >
                  <img
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

      <div className="bg-[#084928] py-12 sm:py-8">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">

          <div className="mb-9 border-l-[5px] border-[#EBC815] pl-4">
            <h2 className="text-xl font-black uppercase text-[#EBC815] sm:text-2xl">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">

            {whyChooseReasons.map((reason) => (
              <div
                key={reason.num}
                className="flex min-h-[115px] items-start gap-5 border-b border-white/10 pb-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#EBC815]">
                  {reason.icon}
                </div>

                <div>
                  <h3 className="text-base font-black uppercase text-[#EBC815]">
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
        className="relative overflow-hidden border-y border-[#EBC815]/30 py-8 text-center sm:py-10"
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
            className="mt-2 block text-xl font-black text-[#EBC815] drop-shadow-md hover:text-white"
          >
            +91 (123) 456 789
          </a>

          <button
            type="button"
            onClick={() => onRequestQuote()}
            className="mt-5 inline-flex items-center gap-2 border border-[#EBC815] bg-[#EBC815] px-7 py-3 text-xs font-bold uppercase text-[#084928] shadow-md transition-colors hover:bg-[#084928] hover:text-[#EBC815]"
          >
            Request Service

            <Phone className="h-4 w-4" />
          </button>

        </div>
      </div>

    </section>
  );
};