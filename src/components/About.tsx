import React, { useState } from "react";
import {
  Clock3,
  UserRound,
  DollarSign,
  ThumbsUp,
  Settings,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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


const services = [
  {
    title: "24/7 Availability",
    icon: Clock3,
    text: "Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor.",
  },
  {
    title: "Genius Workers",
    icon: UserRound,
    text: "Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor.",
  },
  {
    title: "Low Pricing",
    icon: DollarSign,
    text: "Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor.",
  },
  {
    title: "Free Estimation",
    icon: ThumbsUp,
    text: "Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor.",
  },
];

const accordionItems = [
  {
    id: "collapseOne",
    title: "Awards & Recognition",
    icon: Settings,
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipo sci velit, sed quia non numquam eius modi temora incidunt ut labore etum dolore tha magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quius nostrum sak exercitationem ullam corporis suscipit.",
  },
  {
    id: "collapseTwo",
    title: "Our Company History",
    icon: Bell,
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipo sci velit, sed quia non numquam eius modi temora incidunt ut labore etum dolore tha magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quius nostrum sak exercitationem ullam corporis suscipit.",
  },
  {
    id: "collapseThree",
    title: "HandyMan Future Plan",
    icon: Settings,
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipo sci velit, sed quia non numquam eius modi temora incidunt ut labore etum dolore tha magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quius nostrum sak exercitationem ullam corporis suscipit.",
  },
];

const teamMembers = [
  {
    name: "Nissan Waser",
    role: "HandyMan Engineer",
    image: "/images/team-1.jpg",
  },
  {
    name: "Benjamin Thomas",
    role: "HandyMan Engineer",
    image: "/images/team-2.jpg",
  },
  {
    name: "Isabella",
    role: "HandyMan Engineer",
    image: "/images/team-3.jpg",
  },
  {
    name: "Alexander",
    role: "HandyMan Engineer",
    image: "/images/team-4.jpg",
  },
];

const testimonials = [
  {
    avatar: "/images/avatar-1.jpg",
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae qicknit vitae dicta sunt explicabo.",
    name: "Jenny Nair",
    role: "Home Owner",
  },
  {
    avatar: "/images/avatar-2.jpg",
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae qicknit vitae dicta sunt explicabo.",
    name: "Jenny Nair",
    role: "Home Owner",
  },
  {
    avatar: "/images/avatar-3.jpg",
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae qicknit vitae dicta sunt explicabo.",
    name: "Jenny Nair",
    role: "Home Owner",
  },
];

const partners = [
  "/images/parthner-img-1.png",
  "/images/parthner-img-2.png",
  "/images/parthner-img-3.png",
  "/images/parthner-img-4.png",
  "/images/parthner-img-5.png",
];

export const About: React.FC<AboutProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const [openAccordion, setOpenAccordion] = useState("collapseOne");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((current) => (current === id ? "" : id));
  };

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

  return (
    <main className="w-full bg-[#084928] text-white overflow-hidden">
      {/* =========================================================
          ABOUT PAGE BANNER
          ========================================================= */}
      <section
        className="relative min-h-[330px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/about-banner.jpg')",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[3px] bg-[#D9AE00]"
        />

        <div className="relative z-10 text-center text-white px-5 pt-5">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
            About Us
          </h1>

          <p className="mt-4 text-sm md:text-base font-bold uppercase">
            We Have 25 Years Experience in Plumbing
          </p>

        </div>
      </section>

      <section className="bg-[#084928] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="relative pl-6">
                <span
                  className="absolute left-0 top-1 bg-[#D9AE00] w-[5px] h-8"
                  
                />

                <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-[1.35]">
                  We Fix All Your
                  <br />
                  HandyMan
                  <br />
                  Problems
                </h2>
              </div>

              <p className="mt-7 text-[17px] leading-9 text-white max-w-[360px]">
                Sedquis viverra enim. Vivamus aliquet rutrusm dui a varius.
                Mauris ornoare tortor in eleifends blanditullam ut legula et
                neque Praesent egset bibendum purus quis.
              </p>

              <button
                type="button"
                onClick={onRequestQuote}
                className="mt-8 min-w-[228px] border-2 px-8 py-4 font-bold uppercase transition-all hover:text-white"
                style={{
                  color: "#e1cb00",
                }}
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
                      <Icon className="w-12 h-12 shrink-0 text-[#D9AE00]"
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

      {/* =========================================================
          WHO WE ARE
          ========================================================= */}
      <section className="bg-[#084928] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            <div>
              <div className="relative pl-6 mb-12">
                <span
                  className="absolute left-0 bg-[#084928] top-0 w-[5px] h-9"
                />
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
                          <Icon className="w-5 h-5 text-[#D9AE00]"
                            strokeWidth={2.5}
                          />
                          <span className="text-lg font-bold uppercase">
                            {item.title}
                          </span>
                        </span>

                        {isOpen ? (
                          <span className="text-2xl font-light">−</span>
                        ) : (
                          <Plus className="w-6 h-6" strokeWidth={1.5} />
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

            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="/images/about-img.jpg"
                  alt="Handyman working"
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-[58px] flex items-center justify-center gap-2 bg-black/45"
              >
                <span
                  className="w-3 h-3 rounded-full bg-[#D9AE00]"
                />
                <span className="w-3 h-3 rounded-full bg-[#062D1A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM MEMBERS
          ========================================================= */}
      <section id="team" className="bg-[#084928] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="relative pl-6 mb-12">
            <span
              className="absolute left-0 top-0 bg-[#D9AE00] w-[5px] h-9"
            />
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className="text-center px-4 py-7 border-b-[3px]"
                  
                >
                  <h3 className="text-lg font-bold uppercase">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm uppercase text-gray-500">
                    {member.role}
                  </p>
                </div>

                <div className="flex justify-center gap-3 py-4">
                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors text-[#084928]"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>

                  <a
                    href="#twitter"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors text-[#084928]"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>

                  <a
                    href="#linkedin"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:text-white transition-colors text-[#084928]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="mx-5 mb-5 w-[calc(100%-40px)] border px-4 py-2 text-xs font-bold uppercase hover:text-white transition-colors"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEEDBACK FROM CLIENTS
          ========================================================= */}
      <section id="feedback" className="bg-[#084928] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-16">
            <div className="relative pl-6">
              <span
                className="absolute left-0 top-0 w-[5px] h-9 bg-[#D9AE00]"
              />
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
                Feedback From Clients
              </h2>
            </div>

            <div className="hidden sm:flex gap-4">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="w-14 h-14 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center hover:text-white transition-colors text-[#084928]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-14 h-14 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center hover:text-white transition-colors text-[#084928]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.avatar}
                className={`relative bg-[#062D1A] border border-gray-100 px-8 pt-20 pb-10 text-center ${
                  index === currentTestimonial
                    ? "shadow-md"
                    : "shadow-sm"
                }`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <p className="text-[17px] leading-9 text-white">
                  {testimonial.text}
                </p>

                <h3 className="mt-7 text-sm font-bold uppercase">
                  {testimonial.name} -
                  <span className="font-normal"> {testimonial.role}</span>
                </h3>
              </div>
            ))}
          </div>

          <div className="flex sm:hidden justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={previousTestimonial}
              className="w-12 h-12 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center text-[#084928]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#062D1A] shadow-md flex items-center justify-center text-[#084928]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERS / CLIENTS
          ========================================================= */}
      <section className="bg-[#084928] py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="relative pl-6 mb-12">
            <span
              className="absolute left-0 top-0 w-[5px] h-9 bg-[#D9AE00]"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
              Partners / Clients
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="h-[180px] border border-gray-200 bg-[#062D1A] flex items-center justify-center p-8 shadow-sm"
              >
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM MEMBER MODAL
          ========================================================= */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-5">
          <div className="relative w-full max-w-lg bg-[#062D1A] shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile"
              className="absolute right-4 top-4 w-10 h-10 bg-[#062D1A] shadow flex items-center justify-center hover:text-white transition-colors z-10 text-[#084928]"
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

              <p
                className="mt-2 text-sm font-bold uppercase text-[#084928]"
              >
                {selectedMember.role}
              </p>

              <p className="mt-6 text-gray-500 leading-8">
                Experienced HandyMan engineer providing professional,
                reliable and high-quality repair services for residential
                and commercial customers.
              </p>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="mt-7 px-7 py-3 text-white font-bold uppercase bg-[#084928]"
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