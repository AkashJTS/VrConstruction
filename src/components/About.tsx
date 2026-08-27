import React, { useEffect, useState } from "react";
import {
  Clock3,
  UserRound,
  DollarSign,
  ThumbsUp,
  Settings,
  Bell,
  ChevronRight,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Plus,
  X,
} from "lucide-react";
import { NavSection } from "../types";

interface AboutProps {
  onNavigate: (section: NavSection, subTarget?: string) => void;
  onRequestQuote: () => void;
}

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    title: "24/7 Availability",
    icon: Clock3,
    text: "Professional handyman services available whenever you need reliable help.",
  },
  {
    title: "Genius Workers",
    icon: UserRound,
    text: "Experienced professionals providing dependable and high-quality workmanship.",
  },
  {
    title: "Low Pricing",
    icon: DollarSign,
    text: "Affordable and transparent pricing without compromising service quality.",
  },
  {
    title: "Free Estimation",
    icon: ThumbsUp,
    text: "Get a clear estimate before work begins with no hidden surprises.",
  },
];

/* =========================================================
   WHO WE ARE ACCORDION
   ========================================================= */

const accordionItems = [
  {
    id: "collapseOne",
    title: "Awards & Recognition",
    icon: Settings,
    content:
      "Our commitment to quality workmanship, professional service and customer satisfaction has helped us build a trusted reputation. We continuously improve our services and maintain high standards across every project.",
  },
  {
    id: "collapseTwo",
    title: "Our Company History",
    icon: Bell,
    content:
      "Our company was built with a simple goal: provide dependable handyman and home improvement services while making the entire experience easy for our customers. Over the years, our team has continued to grow through experience, trust and excellent service.",
  },
  {
    id: "collapseThree",
    title: "HandyMan Future Plan",
    icon: Settings,
    content:
      "Our future plan is to expand our professional service network, introduce better technology and continue delivering fast, reliable and affordable solutions for residential and commercial customers.",
  },
];

/* =========================================================
   WHO WE ARE - 3 AUTO SLIDER IMAGES
   ========================================================= */

const whoWeAreImages = [
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85",
    alt: "Professional handyman working on home maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",
    alt: "Handyman tools and home repair equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1200&q=85",
    alt: "Professional worker doing home improvement work",
  },
];

/* =========================================================
   TEAM MEMBERS
   ========================================================= */

const teamMembers = [
  {
    name: "Nissan Waser",
    role: "HandyMan Engineer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Benjamin Thomas",
    role: "HandyMan Engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Isabella",
    role: "HandyMan Engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Alexander",
    role: "HandyMan Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
    text:
      "The service was professional, quick and reliable. The team understood exactly what we needed and completed the work beautifully.",
    name: "Jenny Nair",
    role: "Home Owner",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
    text:
      "Very happy with the workmanship and communication. The team arrived on time and completed everything as promised.",
    name: "Rahul Sharma",
    role: "Home Owner",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=85",
    text:
      "Excellent experience from beginning to end. Professional workers, reasonable pricing and great customer service.",
    name: "Priya Mehta",
    role: "Home Owner",
  },
];

/* =========================================================
   PARTNERS
   ========================================================= */

const partners = [
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
];

/* =========================================================
   ABOUT COMPONENT
   ========================================================= */

export const About: React.FC<AboutProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [openAccordion, setOpenAccordion] = useState("collapseOne");

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const [currentWhoImage, setCurrentWhoImage] = useState(0);

  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);

  /* =========================================================
     ACCORDION
     ========================================================= */

  const toggleAccordion = (id: string) => {
    setOpenAccordion((current) => (current === id ? "" : id));
  };

  /* =========================================================
     TESTIMONIAL CONTROLS
     ========================================================= */

  const previousTestimonial = () => {
    setCurrentTestimonial(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(
      (current) => (current + 1) % testimonials.length
    );
  };

  /* =========================================================
     WHO WE ARE AUTO SLIDER
     CHANGE IMAGE EVERY 1 SECOND
     ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWhoImage(
        (current) => (current + 1) % whoWeAreImages.length
      );
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const previousWhoImage = () => {
    setCurrentWhoImage(
      (current) =>
        (current - 1 + whoWeAreImages.length) %
        whoWeAreImages.length
    );
  };

  const nextWhoImage = () => {
    setCurrentWhoImage(
      (current) => (current + 1) % whoWeAreImages.length
    );
  };

  return (
    <main className="w-full bg-[#084928] text-white overflow-hidden">

      {/* =====================================================
          ABOUT PAGE BANNER
          ===================================================== */}

      <section className="relative flex h-[260px] items-center justify-center overflow-hidden border-y border-[#D9AE00]/30 text-center sm:h-[310px]">

        <div
          className="absolute inset-0 z-0 bg-repeat [clip-path:inset(0)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,73,40,0.75), rgba(8,73,40,0.75)), url('/sub-bnr-bg.jpg')",
            backgroundSize: "auto",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10 px-5">

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md">
            About Us
          </h1>

          <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D9AE00] drop-shadow-md">
            We Have 25 Years Experience in Plumbing
          </p>

        </div>
      </section>

      {/* =====================================================
          HANDYMAN PROBLEMS SECTION
          ===================================================== */}

      <section className="bg-[#084928] py-16 md:py-20">

        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            <div className="lg:col-span-4">

              <div className="relative pl-6">

                <span className="absolute left-0 top-1 bg-[#D9AE00] w-[5px] h-8" />

                <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-[1.35]">
                  We Fix All Your
                  <br />
                  HandyMan
                  <br />
                  Problems
                </h2>

              </div>

              <p className="mt-7 text-[17px] leading-9 text-white max-w-[360px]">
                We provide professional handyman, repair and maintenance
                services with experienced workers, reliable solutions and
                affordable pricing.
              </p>

              <button
                type="button"
                onClick={onRequestQuote}
                className="mt-8 min-w-[228px] border-2 border-[#D9AE00] px-8 py-4 font-bold uppercase text-[#D9AE00] transition-all hover:bg-[#D9AE00] hover:text-[#084928]"
              >
                About More
              </button>

            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

              {services.map((service) => {

                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="relative min-h-[175px] border border-gray-200 bg-[#062D1A] px-8 py-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  >

                    <div className="flex gap-6 pr-10">

                      <Icon
                        className="w-12 h-12 shrink-0 text-[#D9AE00]"
                        strokeWidth={2}
                      />

                      <div>

                        <h3 className="text-xl md:text-2xl font-extrabold uppercase">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-[16px] leading-8 text-white">
                          {service.text}
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      aria-label={`${service.title} details`}
                      className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-[58px] h-[58px] bg-[#062D1A] border border-gray-200 flex items-center justify-center shadow-sm hover:bg-[#D9AE00] transition-colors group"
                    >
                      <ChevronRight
                        className="w-7 h-7 text-[#D9AE00] group-hover:text-white"
                        strokeWidth={1.8}
                      />
                    </button>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE ARE
          3 IMAGE AUTO SLIDER - EVERY 1 SECOND
          ===================================================== */}

      <section className="bg-[#084928] py-16 md:py-20">

        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

            {/* LEFT CONTENT */}

            <div>

              <div className="relative pl-6 mb-12">

                <span className="absolute left-0 top-0 bg-[#D9AE00] w-[5px] h-9" />

                <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
                  Who We Are
                </h2>

              </div>

              <div className="border-t border-gray-300">

                {accordionItems.map((item) => {

                  const Icon = item.icon;
                  const isOpen = openAccordion === item.id;

                  return (
                    <div
                      key={item.id}
                      className="border-b border-gray-300"
                    >

                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full min-h-[68px] flex items-center justify-between text-left"
                      >

                        <span className="flex items-center gap-5">

                          <Icon
                            className="w-5 h-5 text-[#D9AE00]"
                            strokeWidth={2.5}
                          />

                          <span className="text-lg font-bold uppercase">
                            {item.title}
                          </span>

                        </span>

                        {isOpen ? (
                          <span className="text-2xl font-light">
                            −
                          </span>
                        ) : (
                          <Plus
                            className="w-6 h-6"
                            strokeWidth={1.5}
                          />
                        )}

                      </button>

                      {isOpen && (
                        <div className="pb-8 pl-10 pr-4">

                          <p className="text-[16px] leading-8 text-white">
                            {item.content}
                          </p>

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                RIGHT IMAGE SLIDER
                ================================================= */}

            <div className="relative">

              <div className="relative overflow-hidden h-[420px] md:h-[500px] bg-[#062D1A]">

                {whoWeAreImages.map((image, index) => (

                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`
                      absolute inset-0
                      w-full h-full
                      object-cover
                      transition-all
                      duration-700
                      ease-in-out
                      ${
                        index === currentWhoImage
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }
                    `}
                  />

                ))}

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* PREVIOUS BUTTON */}

                <button
                  type="button"
                  onClick={previousWhoImage}
                  aria-label="Previous Who We Are image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#062D1A]/80 flex items-center justify-center text-white hover:bg-[#D9AE00] hover:text-[#084928] transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* NEXT BUTTON */}

                <button
                  type="button"
                  onClick={nextWhoImage}
                  aria-label="Next Who We Are image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#062D1A]/80 flex items-center justify-center text-white hover:bg-[#D9AE00] hover:text-[#084928] transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* IMAGE INDICATORS */}

                <div className="absolute bottom-0 left-0 right-0 h-[65px] flex items-center justify-center gap-3 bg-black/45 z-20">

                  {whoWeAreImages.map((_, index) => (

                    <button
                      key={index}
                      type="button"
                      aria-label={`Show Who We Are image ${index + 1}`}
                      onClick={() => setCurrentWhoImage(index)}
                      className={`
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === currentWhoImage
                            ? "w-10 h-3 bg-[#D9AE00]"
                            : "w-3 h-3 bg-white/60 hover:bg-white"
                        }
                      `}
                    />

                  ))}

                </div>

              </div>

              {/* SLIDE NUMBER */}

              <div className="absolute top-4 right-4 z-30 bg-[#062D1A]/80 px-4 py-2 text-sm font-bold">
                {String(currentWhoImage + 1).padStart(2, "0")} /{" "}
                {String(whoWeAreImages.length).padStart(2, "0")}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM MEMBERS
          ===================================================== */}

      <section
        id="team"
        className="bg-[#084928] py-16 md:py-20"
      >

        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          <div className="relative pl-6 mb-12">

            <span className="absolute left-0 top-0 bg-[#D9AE00] w-[5px] h-9" />

            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              Team Members
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {teamMembers.map((member) => (

              <div
                key={member.name}
                className="bg-[#062D1A] border border-gray-200 shadow-sm overflow-hidden group"
              >

                <div className="h-[350px] overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="text-center px-4 py-7 border-b-[3px] border-[#D9AE00]">

                  <h3 className="text-lg font-bold uppercase">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm uppercase text-gray-400">
                    {member.role}
                  </p>

                </div>

                <div className="flex justify-center gap-3 py-4">

                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#D9AE00] hover:text-[#084928] transition-colors text-white"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>

                  <a
                    href="#twitter"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#D9AE00] hover:text-[#084928] transition-colors text-white"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>

                  <a
                    href="#linkedin"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#D9AE00] hover:text-[#084928] transition-colors text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="mx-5 mb-5 w-[calc(100%-40px)] border border-[#D9AE00] text-[#D9AE00] px-4 py-2 text-xs font-bold uppercase hover:bg-[#D9AE00] hover:text-[#084928] transition-colors"
                >
                  View Profile
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FEEDBACK FROM CLIENTS
          ===================================================== */}

      <section
        id="feedback"
        className="bg-[#084928] py-16 md:py-20"
      >

        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          <div className="flex items-center justify-between mb-16">

            <div className="relative pl-6">

              <span className="absolute left-0 top-0 w-[5px] h-9 bg-[#D9AE00]" />

              <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
                Feedback From Clients
              </h2>

            </div>

            <div className="hidden sm:flex gap-4">

              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="w-14 h-14 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center hover:bg-[#D9AE00] hover:text-[#084928] transition-colors text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-14 h-14 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center hover:bg-[#D9AE00] hover:text-[#084928] transition-colors text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {testimonials.map((testimonial, index) => (

              <div
                key={testimonial.avatar}
                className={`
                  relative
                  bg-[#062D1A]
                  border
                  border-gray-100
                  px-8
                  pt-20
                  pb-10
                  text-center
                  transition-all
                  duration-500
                  ${
                    index === currentTestimonial
                      ? "shadow-[0_15px_40px_rgba(0,0,0,0.25)] scale-[1.02] border-[#D9AE00]"
                      : "shadow-sm opacity-90"
                  }
                `}
              >

                <div className="absolute -top-10 left-1/2 -translate-x-1/2">

                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />

                </div>

                <div className="text-[#D9AE00] text-4xl leading-none mb-4">
                  "
                </div>

                <p className="text-[17px] leading-9 text-white">
                  {testimonial.text}
                </p>

                <h3 className="mt-7 text-sm font-bold uppercase">

                  {testimonial.name}

                  <span className="font-normal text-gray-400">
                    {" "}
                    - {testimonial.role}
                  </span>

                </h3>

              </div>

            ))}

          </div>

          {/* MOBILE CONTROLS */}

          <div className="flex sm:hidden justify-center gap-4 mt-8">

            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center text-white hover:bg-[#D9AE00] hover:text-[#084928]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center text-white hover:bg-[#D9AE00] hover:text-[#084928]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          PARTNERS / CLIENTS
          ===================================================== */}

      <section className="bg-[#084928] py-16 md:py-20">

        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          <div className="relative pl-6 mb-12">

            <span className="absolute left-0 top-0 w-[5px] h-9 bg-[#D9AE00]" />

            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              Partners / Clients
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            {partners.map((partner, index) => (

              <div
                key={`${partner}-${index}`}
                className="h-[180px] border border-gray-200 bg-[#062D1A] flex items-center justify-center p-8 shadow-sm overflow-hidden"
              >

                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  loading="lazy"
                  className="max-w-full max-h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM MEMBER MODAL
          ===================================================== */}

      {selectedMember && (

        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-5"
          onClick={() => setSelectedMember(null)}
        >

          <div
            className="relative w-full max-w-lg bg-[#062D1A] shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
              className="absolute right-4 top-4 w-10 h-10 rounded-full bg-[#D9AE00] text-[#084928] shadow flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h3 className="text-2xl font-extrabold uppercase">
                {selectedMember.name}
              </h3>

              <p className="mt-2 text-sm font-bold uppercase text-[#D9AE00]">
                {selectedMember.role}
              </p>

              <p className="mt-6 text-gray-300 leading-8">
                Experienced HandyMan engineer providing professional,
                reliable and high-quality repair services for residential
                and commercial customers.
              </p>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="mt-7 px-7 py-3 text-[#084928] font-bold uppercase bg-[#D9AE00] hover:bg-white transition-colors"
              >
                Close Profile
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};