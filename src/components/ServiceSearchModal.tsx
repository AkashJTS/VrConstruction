import React, { useState, useMemo } from 'react';
import { Search, X, Wrench, ArrowRight, Tag, PhoneCall } from 'lucide-react';
import { servicesData } from '../data/handymanData';
import { NavSection } from '../types';

interface ServiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
  onNavigate: (section: NavSection, subTarget?: string) => void;
}

export const ServiceSearchModal: React.FC<ServiceSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchQuery = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCat = selectedCategory === 'all' || service.category === selectedCategory;
      return matchQuery && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative border border-gray-100 max-h-[85vh] flex flex-col">
        
        {/* Header & Search Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-slate-900 font-exo font-black text-lg uppercase">
            <Search className="w-5 h-5 text-[#448aff]" />
            <span>Search HandyMan Services</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-slate-900 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Box */}
        <div className="mt-4 relative">
          <input
            type="text"
            autoFocus
            placeholder="Type e.g. 'drain', 'tankless heater', 'leak', 'gas', 'faucet'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#448aff] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-xs text-gray-400 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] whitespace-nowrap transition-colors ${
              selectedCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Categories ({servicesData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('emergency')}
            className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] whitespace-nowrap transition-colors ${
              selectedCategory === 'emergency' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            Emergency 24/7
          </button>
          <button
            onClick={() => setSelectedCategory('residential')}
            className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] whitespace-nowrap transition-colors ${
              selectedCategory === 'residential' ? 'bg-[#ffc107] text-slate-950' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setSelectedCategory('commercial')}
            className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] whitespace-nowrap transition-colors ${
              selectedCategory === 'commercial' ? 'bg-[#448aff] text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredServices.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p className="text-sm">No services found matching "{searchQuery}".</p>
              <p className="text-xs text-gray-400 mt-1">
                Need specialized assistance? Call us directly at <span className="text-[#448aff] font-bold">+61 (123) 456 789</span>.
              </p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="p-4 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-blue-50/50 hover:border-[#448aff]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">
                      {service.category}
                    </span>
                    <span className="text-xs font-bold text-amber-600">
                      {service.priceRange}
                    </span>
                  </div>
                  <h4 className="font-exo font-bold text-sm uppercase text-slate-900">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate('services', service.id);
                    }}
                    className="px-3 py-1.5 bg-white hover:bg-gray-100 text-slate-800 text-xs font-bold rounded-lg border border-gray-200"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(service.title);
                    }}
                    className="px-3 py-1.5 bg-[#ffc107] hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shadow-sm"
                  >
                    Book Quote
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Instant booking & same-day service</span>
          <a href="tel:+61123456789" className="text-[#448aff] font-bold hover:underline inline-flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5" /> Call +61 (123) 456 789
          </a>
        </div>

      </div>
    </div>
  );
};
