
import {
  PhoneCall,
  MapPin,
  Tag,
  Send,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { NavSection, ServiceRequest } from '../types';
import { useState } from 'react';

interface ContactProps {
  onNavigate: (section: NavSection) => void;
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({
  onNavigate,
  prefilledService,
}) => {
  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: prefilledService || 'HandyMan Repairs',
    preferredDate: '',
    preferredTime: 'Morning (8AM - 12PM)',
    urgency: 'routine',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] =
    useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const referenceId = `HM-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      setBookingConfirmation(referenceId);
    }, 900);
  };

  return (
    <section id="contact" className="w-full overflow-hidden bg-[#084928] text-white">
      {/* ============================================================
          CONTACT BANNER — SAME AS VIDEO
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
          <h1 className="font-exo text-4xl font-black uppercase text-white sm:text-5xl">
            Contact
          </h1>

          <p className="mt-3 font-exo text-xs font-bold uppercase text-white sm:text-sm">
            We Have 25 Years Experience In Plumbing
          </p>
        </div>
      </div>

      {/* ============================================================
          THREE CONTACT BOXES — SAME VIDEO ORDER
          ============================================================ */}
      <div className="bg-[#084928] py-10 sm:py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 border border-white/10 bg-[#062D1A] md:grid-cols-3">
            {/* CALL */}
            <div className="flex min-h-[210px] flex-col items-center justify-center border-b border-white/10 px-6 text-center md:border-b-0 md:border-r">
              <PhoneCall className="h-7 w-7 text-[#D9AE00]" />

              <h2 className="mt-4 font-exo text-sm font-black uppercase leading-6 text-white">
                Call Us 24/7
                <br />
                For Emergency Service!
              </h2>

              <div className="my-3 h-[2px] w-8 bg-[#D9AE00]" />

              <a
                href="tel:+61123456789"
                className="font-exo text-lg font-black text-[#D9AE00] hover:text-white"
              >
                +61 (123) 456 789
              </a>

              <p className="mt-2 text-[10px] uppercase text-white/45">
                Request Service Now
              </p>
            </div>

            {/* ADDRESS */}
            <div className="flex min-h-[210px] flex-col items-center justify-center border-b border-white/10 px-6 text-center md:border-b-0 md:border-r">
              <MapPin className="h-7 w-7 text-[#D9AE00]" />

              <h2 className="mt-4 font-exo text-sm font-black uppercase text-white">
                Contact Address
              </h2>

              <div className="my-3 h-[2px] w-8 bg-[#D9AE00]" />

              <p className="text-xs leading-6 text-white/65">
                44 New Design Street,
                <br />
                Melbourne 005, VIC Australia
              </p>

              <div className="mt-2 text-[10px] leading-5 text-white/45">
                <p>Tel: +61 (123) 456 789</p>
                <p>Email: info@example.com</p>
              </div>
            </div>

            {/* SPECIAL OFFERS */}
            <div className="flex min-h-[210px] flex-col items-center justify-center px-6 text-center">
              <Tag className="h-7 w-7 text-[#D9AE00]" />

              <h2 className="mt-4 font-exo text-sm font-black uppercase text-white">
                Special Offers
              </h2>

              <div className="my-3 h-[2px] w-8 bg-[#D9AE00]" />

              <p className="max-w-[240px] text-xs font-bold uppercase leading-6 text-white/70">
                Get <span className="text-[#D9AE00]">$25 OFF</span> Any
                Tankless Water Heater Installation
              </p>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    serviceType: 'Tankless Water Heaters ($25 Promo)',
                  })
                }
                className="mt-4 border border-[#D9AE00] bg-transparent px-5 py-2.5 text-[10px] font-bold uppercase text-white hover:bg-[#D9AE00] hover:text-[#084928]"
              >
                View Our Specials
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          REQUEST SERVICE FORM — SAME VIDEO LAYOUT
          ============================================================ */}
      <div className="bg-[#084928] py-12 sm:py-16">
        <div className="mx-auto max-w-[950px] px-5 sm:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-exo text-2xl font-black uppercase text-white sm:text-3xl">
              Request Service or Estimate
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-white/60">
              Feel free to call us directly or simply complete our form below
              and we will follow up with you immediately.
            </p>
          </div>

          {bookingConfirmation ? (
            <div className="border border-[#D9AE00] bg-[#062D1A] p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#D9AE00]" />

              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#D9AE00]">
                Booking Reference ID
              </p>

              <h3 className="mt-2 font-exo text-2xl font-black text-white">
                {bookingConfirmation}
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/65">
                Thank you, <strong>{formData.name}</strong>! Your service
                request has been logged. A technician will contact you at{' '}
                <strong>{formData.phone}</strong>.
              </p>

              <button
                type="button"
                onClick={() => {
                  setBookingConfirmation(null);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    serviceType: 'HandyMan Repairs',
                    preferredDate: '',
                    preferredTime: 'Morning (8AM - 12PM)',
                    urgency: 'routine',
                    message: '',
                  });
                }}
                className="mt-6 border border-[#D9AE00] bg-[#D9AE00] px-6 py-3 text-xs font-bold uppercase text-[#084928] hover:bg-[#084928] hover:text-[#D9AE00]"
              >
                Submit Another Ticket
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-white/10 bg-[#062D1A] p-6 sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-4 py-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#D9AE00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-4 py-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#D9AE00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        phone: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-4 py-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#D9AE00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Full Service Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street address & suburb, Melbourne"
                    value={formData.address}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        address: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-4 py-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#D9AE00]"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Service Required
                  </label>

                  <select
                    value={formData.serviceType}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        serviceType: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-3 py-3 text-xs text-white outline-none focus:border-[#D9AE00]"
                  >
                    <option>HandyMan Repairs</option>
                    <option>Drain Cleaning</option>
                    <option>Gas Lines & Heating</option>
                    <option>Sewer Lines</option>
                    <option>Water Damage Prevention</option>
                    <option>Tankless Water Heaters</option>
                    <option>HandyMan Inspections</option>
                    <option>Emergency Service Callout</option>
                    <option>Tankless Water Heaters ($25 Promo)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        preferredDate: event.target.value,
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-3 py-3 text-xs text-white outline-none focus:border-[#D9AE00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                    Urgency Level
                  </label>

                  <select
                    value={formData.urgency}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        urgency: event.target.value as ServiceRequest['urgency'],
                      })
                    }
                    className="w-full border border-white/10 bg-[#084928] px-3 py-3 text-xs text-white outline-none focus:border-[#D9AE00]"
                  >
                    <option value="routine">Routine (Next 2-3 days)</option>
                    <option value="urgent">Urgent (Today / Tomorrow)</option>
                    <option value="emergency">
                      24/7 Active Emergency (Immediate)
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-white/70">
                  Description of work or services needed
                </label>

                <textarea
                  rows={5}
                  placeholder="Provide any details about the leak, noises, appliance models, or specific plumbing requirements..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  className="w-full resize-none border border-white/10 bg-[#084928] p-3 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#D9AE00]"
                />
              </div>

              <div className="mt-6 text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 border border-[#D9AE00] bg-[#D9AE00] px-7 py-3 text-xs font-bold uppercase text-[#084928] hover:bg-[#084928] hover:text-[#D9AE00] disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Processing Request...' : 'Send Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ============================================================
          GOOGLE MAPS — AFTER CONTACT FORM
          ============================================================ */}
      <section
        id="map"
        className="relative overflow-hidden border-t border-white/10 bg-[#062D1A]"
      >
        <div className="relative h-[420px] w-full">
          <iframe
            title="HandyMan Melbourne Location"
            src="https://www.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Map information card */}
          <div className="absolute left-5 top-5 z-10 w-[calc(100%-40px)] max-w-[360px] border border-[#D9AE00] bg-[#062D1A]/95 p-6 shadow-2xl backdrop-blur-sm sm:left-8 sm:top-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#D9AE00] text-[#084928]">
                <MapPin className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="font-exo text-[10px] font-black uppercase tracking-[0.18em] text-[#D9AE00]">
                  Our Location
                </p>

                <h3 className="mt-1 font-exo text-base font-black uppercase text-white">
                  HandyMan Melbourne HQ
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/70">
                  121 King St, Melbourne VIC 3000
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-2 text-xs font-bold uppercase text-[#D9AE00]">
                  <Clock className="h-4 w-4" />
                  Open 24/7
                </span>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=121%20King%20St%2C%20Melbourne%20VIC%203000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white transition-colors hover:text-[#D9AE00]"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};