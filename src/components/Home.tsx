// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Sparkles } from 'lucide-react';

// // @ts-ignore
// import video from "/public/VRConstruction.mp4";

// interface HomeSectionProps {
//   videoSrc?: string;
//   onNavigate?: (section: any) => void;
//   onRequestQuote?: () => void;
// }

// export const HomeSection: React.FC<HomeSectionProps> = ({ 
//   videoSrc = video,
//   onNavigate
// }) => {
//   const [isMounted, setIsMounted] = useState(false);
  
//   // Typing animation state
//   const line1Full = "Build Your Vision";
//   const line2Full = "From The Ground Up";
  
//   const [typedLine1, setTypedLine1] = useState("");
//   const [typedLine2, setTypedLine2] = useState("");
//   const [isLine1Done, setIsLine1Done] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     // 1. Type First Line
//     let index1 = 0;
//     const timer1 = setInterval(() => {
//       if (index1 < line1Full.length) {
//         setTypedLine1(line1Full.slice(0, index1 + 1));
//         index1++;
//       } else {
//         clearInterval(timer1);
//         setIsLine1Done(true);
//       }
//     }, 60);

//     return () => clearInterval(timer1);
//   }, []);

//   useEffect(() => {
//     // 2. Type Second Line after First Line completes
//     if (!isLine1Done) return;

//     let index2 = 0;
//     const timer2 = setInterval(() => {
//       if (index2 < line2Full.length) {
//         setTypedLine2(line2Full.slice(0, index2 + 1));
//         index2++;
//       } else {
//         clearInterval(timer2);
//       }
//     }, 60);

//     return () => clearInterval(timer2);
//   }, [isLine1Done]);

//   return (
//     <section 
//       id="home"
//       className="relative w-full h-[88vh] min-h-[620px] overflow-hidden bg-[#e5e7eb] text-slate-900 flex items-center justify-center px-6"
//     >
//       {/* 1. Video Background */}
//       <video 
//         autoPlay 
//         loop 
//         muted 
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover scale-100 opacity-95"
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support video playback.
//       </video>

//       {/* 2. Blueprint Grid Overlay */}
//       <div 
//         className="absolute inset-0 opacity-15 pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
//           backgroundSize: '40px 40px'
//         }}
//       />

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes blinkCursor {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         .anim-badge-active { animation: heroFadeUp 0.6s 0.1s ease-out forwards; opacity: 0; }
//         .anim-sub-active   { animation: heroFadeUp 0.8s 2.2s ease-out forwards; opacity: 0; }
//         .anim-btn-active   { animation: heroFadeUp 0.8s 2.5s ease-out forwards; opacity: 0; }

//         .typing-cursor {
//           display: inline-block;
//           width: 4px;
//           height: 0.85em;
//           background-color: #f59e0b;
//           margin-left: 4px;
//           vertical-align: middle;
//           animation: blinkCursor 0.8s infinite;
//         }
//       `}</style>

//       {/* 3. Hero Content Container */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
//         {/* Real-time Typing Headline */}
//         <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-slate-950 min-h-[120px] sm:min-h-[150px]">
//           <span>{typedLine1}</span>
//           {!isLine1Done && <span className="typing-cursor" />}
          
//           <br />
          
//           <span className="text-amber-500">
//             {typedLine2}
//           </span>
//           {isLine1Done && <span className="typing-cursor" />}
//         </h1>

//         {/* Subtitle */}
//         <p className={`text-base sm:text-lg md:text-xl text-slate-800 font-bold max-w-2xl leading-relaxed ${isMounted ? "anim-sub-active" : "opacity-0"}`}>
//           Precision structural planning, parametric blueprints, and cutting-edge digital assembly engineered to bring your luxury architectural concepts to life.
//         </p>

//         {/* Transparent Glass CTA Button */}
//         <div className={`pt-3 ${isMounted ? "anim-btn-active" : "opacity-0"}`}>
//           <button 
//             onClick={() => onNavigate && onNavigate('services')}
//             className="group inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-white/20 hover:bg-white/40 backdrop-blur-md text-slate-950 font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-900/40 hover:border-slate-900 cursor-pointer"
//           >
//             <span>Explore Our Services</span>
//             <ArrowRight className="w-5 h-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-1.5" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HomeSection;









import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Clock, 
  UserCheck, 
  DollarSign, 
  ThumbsUp, 
  ChevronRight, 
  Droplet 
} from 'lucide-react';

// @ts-ignore
import video from "/public/VRConstruction.mp4";

interface HomeProps {
  videoSrc?: string;
  onNavigate?: (section: any) => void;
  onRequestQuote?: () => void;
}

const serviceTabsData = [
  {
    id: 'plumb',
    title: 'HANDYMAN REPAIRS',
    description: 'Our experts have state-of-the-art tools, electronic equipment, and supplies to handle any general home repair in a timely manner.',
    items: [
      'Sinks and Faucets',
      'Hot Water Dispenser',
      'Polybutylene Pipe Replacement',
      'Bathtubs and Showers',
      'Sump Pump and Sewage Ejector Pumps'
    ],
    image: 'public/offer-img.png'
  },
  {
    id: 'drain',
    title: 'DRAIN CLEANING',
    description: 'Advanced video camera inspection and high-pressure water jetting to eliminate stubborn clogs and restore optimal flow.',
    items: [
      'Main Line Sewer Cleaning',
      'Kitchen Sink Drain Unclogging',
      'Shower and Tub Drain Relief',
      'Clog Prevention Treatments',
      'Hydro-Jetting Services'
    ],
    image: 'public/nav-img.png'
  },
  {
    id: 'gas',
    title: 'GAS LINES',
    description: 'Certified technicians specializing in leak detection, line installation, and emergency gas line repair to keep your home safe.',
    items: [
      'Gas Leak Detection & Repair',
      'New Appliance Gas Hookups',
      'Gas Line Maintenance',
      'Emergency Shut-off Valves',
      'Flexible Gas Piping Systems'
    ],
    image: 'public/offer-img.png'
  },
  {
    id: 'sewer',
    title: 'SEWER LINES',
    description: 'Comprehensive sewer main inspection, trenchless pipe repair, and complete line replacements for residential properties.',
    items: [
      'Trenchless Sewer Repair',
      'Sewer Main Line Replacement',
      'Tree Root Intrusion Removal',
      'Sewer Camera Inspections',
      'Backflow Prevention Systems'
    ],
    image: 'public/nav-img.png'
  },
  {
    id: 'water',
    title: 'WATER DAMAGE PREVENTION',
    description: 'Proactive installations and moisture management solutions designed to safeguard your home against costly structural leaks.',
    items: [
      'Automatic Shut-off Valves',
      'Basement Sump Pump Systems',
      'Leak Detection Sensors',
      'Pipe Insulation Protection',
      'Drainage System Upgrades'
    ],
    image: 'public/offer-img.png'
  },
  {
    id: 'tankless',
    title: 'TANKLESS WATER HEATERS',
    description: 'Energy-efficient instant hot water solutions tailored for continuous performance and lower utility costs.',
    items: [
      'Tankless Unit Installation',
      'Descaling & Annual Flushing',
      'Heating Element Replacement',
      'Gas & Electric Conversions',
      'Thermostat Calibration'
    ],
    image: 'public/nav-img.png'
  },
  {
    id: 'plumbing',
    title: 'HANDYMAN INSPECTIONS',
    description: 'Thorough point-by-point property assessments identifying potential risks before they turn into costly structural damage.',
    items: [
      'Complete Plumbing Audits',
      'Structural Joint Inspections',
      'Fixture & Value Safety Checks',
      'Pressure Testing Assessment',
      'Detailed Inspection Reports'
    ],
    image: 'public/offer-img.png'
  }
];

export const Home: React.FC<HomeProps> = ({ 
  videoSrc = video,
  onNavigate
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('plumb');
  
  // Typing animation state
  const line1Full = "Build Your Vision";
  const line2Full = "From The Ground Up";
  
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

  // Find currently selected tab content
  const activeContent = serviceTabsData.find((t) => t.id === activeTab) || serviceTabsData[0];

  return (
    <div className="w-full bg-[#084928] text-white">
      {/* 1. HERO SECTION WITH VIDEO */}
      <section 
        id="home"
        className="relative w-full h-[88vh] min-h-[620px] overflow-hidden bg-[#e5e7eb] text-slate-900 flex items-center justify-center px-6"
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
            backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* CSS Animations */}
        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blinkCursor {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .anim-badge-active { animation: heroFadeUp 0.6s 0.1s ease-out forwards; opacity: 0; }
          .anim-sub-active   { animation: heroFadeUp 0.8s 2.2s ease-out forwards; opacity: 0; }
          .anim-btn-active   { animation: heroFadeUp 0.8s 2.5s ease-out forwards; opacity: 0; }

          .typing-cursor {
            display: inline-block;
            width: 4px;
            height: 0.85em;
            background-color: #f59e0b;
            margin-left: 4px;
            vertical-align: middle;
            animation: blinkCursor 0.8s infinite;
          }
        `}</style>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-slate-950 min-h-[120px] sm:min-h-[150px]">
            <span>{typedLine1}</span>
            {!isLine1Done && <span className="typing-cursor" />}
            
            <br />
            
            <span className="text-amber-500">
              {typedLine2}
            </span>
            {isLine1Done && <span className="typing-cursor" />}
          </h1>

          <p className={`text-base sm:text-lg md:text-xl text-slate-800 font-bold max-w-2xl leading-relaxed ${isMounted ? "anim-sub-active" : "opacity-0"}`}>
            Precision structural planning, parametric blueprints, and cutting-edge digital assembly engineered to bring your luxury architectural concepts to life.
          </p>

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

      {/* 2. SERVICES FEATURE GRID SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-l-4 border-amber-400 pl-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                We Fix All Your HandyMan Problems
              </h2>
            </div>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Sedquis viverra enim. Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor in eleifends blanditullam ut legula et neque Praesent egset bibendum purus quis.
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
            <div className="bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:border-amber-400/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <Clock className="w-10 h-10 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">24/7 Availability</h3>
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
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">Genius Workers</h3>
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
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">Low Pricing</h3>
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
                  <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2">Free Estimation</h3>
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

      {/* 3. WELCOME BANNER SECTION */}
      <section className="py-16 text-center mx-auto space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white">
            Welcome To Our HandyMan
          </h2>
          <div className="w-12 h-1 bg-amber-400 mx-auto" />
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Sedquis viverra enim. Vivamus aliquet rutrusm dui a varius. Mauris ornoare tortor in eleifends blanditullam
          </p>
        </div>

        <div className="relative">
          <img 
            src="/welcome-img.png" 
            alt="Handyman Team" 
            className="w-full h-auto object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* 4. DYNAMIC TABBED HANDYMAN SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-[#084928] text-white">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="w-1.5 h-7 bg-amber-400 inline-block"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            WELCOME TO OUR HANDYMAN
          </h2>
        </div>

        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sidebar Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-1">
            {serviceTabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 text-xs font-extrabold tracking-wide uppercase transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-white/5 text-emerald-100 hover:bg-white/10'
                  }`}
                >
                  <span>{tab.title}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-slate-950" />}
                </button>
              );
            })}
          </div>

          {/* Middle Column: Tab Content */}
          <div className="lg:col-span-4 space-y-6 pt-1">
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">
              {activeContent.title}
            </h3>
            
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
              {activeContent.description}
            </p>

            <ul className="space-y-3 pt-1">
              {activeContent.items.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-emerald-100 text-xs sm:text-sm">
                  <Droplet className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button 
                type="button"
                className="inline-block border-2 border-amber-400 text-amber-400 font-extrabold uppercase px-6 py-2.5 text-xs hover:bg-amber-400 hover:text-slate-950 transition-colors duration-200 cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Column: Handyman Image (Changes with active tab) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img 
              src={activeContent.image} 
              alt={activeContent.title} 
              className="w-full max-w-sm h-auto object-contain transition-opacity duration-300"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;