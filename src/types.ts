export type NavSection = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'emergency' | 'residential' | 'commercial' | 'maintenance';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  priceRange: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  message: string;
}
