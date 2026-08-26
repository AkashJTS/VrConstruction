import { ServiceItem, TeamMember, Testimonial, AccordionItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'plumb',
    title: 'HandyMan Repairs',
    category: 'residential',
    iconName: 'Wrench',
    shortDesc: 'Comprehensive repairs for faucets, sinks, leaks, fixtures, and everyday household fixes.',
    fullDesc: 'Our licensed technicians have state-of-the-art tools, electronic diagnostic equipment, and durable supplies to fix fixtures and unclog any drain in a timely manner.',
    priceRange: 'From $89 / visit',
    features: [
      'Sinks and Faucets Repair & Replacement',
      'Hot Water Dispenser & Mixer Taps',
      'Polybutylene Pipe Replacement & Relining',
      'Bathtubs, Showers & Showerhead Upgrades',
      'Sump Pump and Sewage Ejector Pumps'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    category: 'residential',
    iconName: 'Droplet',
    shortDesc: 'High-pressure hydro-jetting, motorized augers, and electronic CCTV pipeline scans.',
    fullDesc: 'Fast clearance of grease, roots, and stubborn blockages with zero mess left behind in your kitchen, bathroom, or storm drain.',
    priceRange: 'From $119 / drain',
    features: [
      'Kitchen Sink & Dishwasher Line Jetting',
      'Bathroom Basin & Shower Floor Trap Clearing',
      'CCTV Video Pipe Camera Inspection',
      'Root Intrusion Removal & Descaling',
      'Eco-Friendly Enzymatic Maintenance Treatment'
    ],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gas',
    title: 'Gas Lines & Heating',
    category: 'emergency',
    iconName: 'Flame',
    shortDesc: 'Certified gas fitting, leak detection, burner calibrations, and pipeline installations.',
    fullDesc: 'Safety-first gas plumbers providing carbon monoxide checks, stove hookups, gas barbecue line installations, and emergency shutoff interventions.',
    priceRange: 'From $149 / service',
    features: [
      'Emergency Gas Leak Testing & Repair',
      'Gas Cooktop & Oven Installation',
      'Gas Hot Water Unit Commissioning',
      'Outdoor BBQ & Fire Pit Gas Lines',
      'Compliance Certification & Pressure Testing'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sewer',
    title: 'Sewer Lines',
    category: 'commercial',
    iconName: 'Layers',
    shortDesc: 'Trenchless sewer pipe relining, mainline replacements, and backflow preventers.',
    fullDesc: 'Heavy-duty sewer solutions for homes and commercial businesses. We restore damaged underground mains with minimal yard excavation.',
    priceRange: 'From $199 / diagnostic',
    features: [
      'Trenchless Pipe Relining (No Digging)',
      'Collapsed Main Sewer Line Replacement',
      'Backflow Prevention Device Testing',
      'Tree Root Cutting & Hydro-Scouring',
      'Municipal Compliance Documentation'
    ],
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'water',
    title: 'Water Damage Prevention',
    category: 'residential',
    iconName: 'ShieldAlert',
    shortDesc: 'Automated flood shut-off valves, leak sensors, and foundation waterproofing checks.',
    fullDesc: 'Protect your building against devastating burst pipes and seepage. We install smart shut-off valves and reinforce sub-floor drainage.',
    priceRange: 'From $135 / assessment',
    features: [
      'Smart Automatic Water Shut-Off Valves',
      'Sub-Floor Moisture & Seepage Defense',
      'Washing Machine & Dishwasher Hose Upgrades',
      'Rainwater Sump Pump Backup Systems',
      'Emergency Flooding Extraction Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tankless',
    title: 'Tankless Water Heaters',
    category: 'residential',
    iconName: 'Zap',
    shortDesc: 'Continuous hot water with up to 40% energy savings. Get $25 OFF installation!',
    fullDesc: 'Upgrade to high-efficiency continuous flow systems from top brands like Rinnai, Rheem, and Bosch with full warranty coverage.',
    priceRange: 'From $250 / install',
    features: [
      'Endless On-Demand Hot Water Supply',
      'Compact Wall-Mounted Space-Saving Design',
      'Up to 40% Energy Efficiency Improvement',
      'Digital Temperature Controllers Installation',
      'Complimentary Old Tank Removal & Recycling'
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'plimbing',
    title: 'HandyMan Inspections',
    category: 'maintenance',
    iconName: 'ClipboardCheck',
    shortDesc: 'Comprehensive 40-point home plumbing and handyman inspection with detailed report.',
    fullDesc: 'Ideal for home buyers, landlords, and pre-winter property checks. Detect silent leaks, pressure spikes, and worn fittings before disaster strikes.',
    priceRange: '$99 Flat Rate',
    features: [
      '40-Point Water Pressure & Pipe Health Audit',
      'Visual Thermal Camera Wall Leak Check',
      'Water Meter Flow & Silent Leak Detection',
      'Valves, Taps & Fixtures Safety Testing',
      'Comprehensive Written Report & Quotation'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  }
];

export const teamMembersData: TeamMember[] = [
  {
    id: '1',
    name: 'Nissan Waser',
    role: 'Lead HandyMan Engineer',
    experience: '12+ Years Experience',
    bio: 'Master certified plumber specializing in high-pressure gas installations, commercial boilers, and trenchless sewer pipe relining.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' }
  },
  {
    id: '2',
    name: 'Benjamin Thomas',
    role: 'Senior Plumbing Specialist',
    experience: '10+ Years Experience',
    bio: 'Expert in residential renovations, smart tankless water heaters, emergency pipe bursts, and water damage remediation.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' }
  },
  {
    id: '3',
    name: 'Isabella Rodriguez',
    role: 'Diagnostic & Inspection Engineer',
    experience: '8+ Years Experience',
    bio: 'Specialist in CCTV pipeline diagnostics, acoustic leak detection, and environmental backflow prevention systems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' }
  },
  {
    id: '4',
    name: 'Alexander Mitchell',
    role: 'Emergency Response Technician',
    experience: '9+ Years Experience',
    bio: 'Rapid-response team lead equipped for 24/7 night-time floods, gas leaks, and critical commercial facility shutdowns.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', twitter: '#', linkedin: '#' }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Jenny Nair',
    role: 'Home Owner, Melbourne',
    text: 'Our basement was flooding from a burst pipe at 2 AM on a Sunday. HandyMan arrived in under 30 minutes and resolved the issue cleanly! Outstanding professionalism.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'March 18, 2026'
  },
  {
    id: '2',
    name: 'Rock Lancer',
    role: 'Founder of Lara Consult',
    text: 'HandyMan replaced the entire sewer line for our office building without interrupting business operations. Transparent pricing with no surprises.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'April 02, 2026'
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Property Manager',
    text: 'We manage over 45 residential units across Melbourne. HandyMan is our sole vendor for all plumbing inspections, gas lines, and tenant maintenance.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    date: 'May 14, 2026'
  }
];

export const accordionItems: AccordionItem[] = [
  {
    id: 'collapseOne',
    title: 'Awards & Recognition',
    icon: 'Award',
    content: 'Recognized as Melbourne\'s Best Home Trade Service for three consecutive years. Certified by Master Plumbers Australia with 100% compliance in occupational safety, ISO-grade testing, and customer satisfaction.'
  },
  {
    id: 'collapseTwo',
    title: 'Our Company History',
    icon: 'History',
    content: 'Founded 25 years ago as a humble family-owned workshop, HandyMan has grown into a premier fleet of over 30 fully stocked mobile service vans delivering round-the-clock emergency assistance and top-notch craftsmanship.'
  },
  {
    id: 'collapseThree',
    title: 'HandyMan Future Plan',
    icon: 'TrendingUp',
    content: 'We are pioneering eco-conscious plumbing practices with graywater recycling systems, smart leak detectors powered by IoT sensors, and carbon-neutral service vehicle conversions across all metropolitan zones.'
  }
];

export const whyChooseReasons = [
  {
    num: '01',
    title: '24/7 Availability',
    icon: 'Clock',
    desc: 'Live operators on call every single hour of the day and night with rapid on-site arrival.'
  },
  {
    num: '02',
    title: 'Quality Work',
    icon: 'CheckCircle',
    desc: 'Every repair is backed by our unconditional 100% satisfaction guarantee and warranty.'
  },
  {
    num: '03',
    title: 'Genius Workers',
    icon: 'Users',
    desc: 'Fully licensed, background-checked, and continuous factory-trained plumbing engineers.'
  },
  {
    num: '04',
    title: 'Low Pricing',
    icon: 'DollarSign',
    desc: 'Upfront flat-rate transparent pricing before any work starts with zero surprise add-ons.'
  },
  {
    num: '05',
    title: 'Lifetime Support',
    icon: 'ShieldCheck',
    desc: 'Ongoing maintenance support, priority booking, and seasonal inspections for every client.'
  }
];

export const partnerLogos = [
  { name: 'Rheem Water Heating', logo: 'Rheem Certified' },
  { name: 'Rinnai Australia', logo: 'Rinnai Authorized' },
  { name: 'Caroma Bathrooms', logo: 'Caroma Pro' },
  { name: 'Reece Plumbing', logo: 'Reece Supplier' },
  { name: 'Master Plumbers Assc.', logo: 'Master Plumber' },
  { name: 'Bosch Thermotech', logo: 'Bosch Certified' }
];
