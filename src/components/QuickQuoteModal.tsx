import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Sparkles, Phone } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'HandyMan Repairs',
    suburb: '',
    urgency: 'Standard (Next 2 Days)',
    notes: ''
  });

  const [isDone, setIsDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsDone(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3" />
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full inline-block mb-1">
              Priority Confirmed
            </span>
            <h3 className="font-exo font-bold text-2xl uppercase text-slate-900">
              Estimate Dispatched!
            </h3>
            <p className="text-xs text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
              Our Melbourne dispatch team received your inquiry for <strong>{formData.service}</strong>. We're calling you at <strong>{formData.phone}</strong> right away.
            </p>
            <button
              onClick={() => {
                setIsDone(false);
                onClose();
              }}
              className="mt-6 bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase px-8 py-2.5 rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Fast 15-Minute Response
            </div>
            
            <h3 className="font-exo font-black text-2xl uppercase text-slate-900">
              Get A Free Service Estimate
            </h3>
            
            <p className="text-xs text-gray-500 mt-1 mb-5">
              Fill out your details to receive an upfront flat-rate price quotation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  >
                    <option>HandyMan Repairs</option>
                    <option>Drain Cleaning</option>
                    <option>Gas Lines & Heating</option>
                    <option>Sewer Lines</option>
                    <option>Water Damage Prevention</option>
                    <option>Tankless Water Heaters</option>
                    <option>HandyMan Inspections</option>
                    <option>Emergency Service Callout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Melbourne Suburb / Postcode
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Richmond 3121"
                    value={formData.suburb}
                    onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Brief description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your issue or preferred time..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#448aff]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#ffc107] hover:bg-amber-400 text-slate-950 font-exo font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow transition-all border border-amber-300"
                >
                  {submitting ? 'Submitting Estimate Request...' : 'Send My Free Estimate'}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
