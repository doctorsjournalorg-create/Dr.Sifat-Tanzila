import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Phone, Navigation, ExternalLink, ShieldCheck, CheckCircle2, Building, ChevronRight } from 'lucide-react';
import { CHAMBERS } from '../data/doctorData';
import { Chamber, Language } from '../types';

interface ChambersSectionProps {
  language: Language;
}

export const ChambersSection: React.FC<ChambersSectionProps> = ({
  language
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'labaid' | 'amz'>('all');
  const isBn = language === 'bn';

  const visibleChambers = selectedTab === 'all'
    ? CHAMBERS
    : CHAMBERS.filter(c => c.id === selectedTab);

  return (
    <section id="chambers" className="py-20 bg-slate-50 relative text-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F3D6E]/10 text-[#0F3D6E] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-cyan-600" />
            <span>{isBn ? 'চেম্বার ও ভিজিটিং সময়সূচী' : 'Chamber Locations & Practice Hours'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D6E] tracking-tight font-sans">
            {isBn ? 'রোগী দেখার নির্ধারিত চেম্বারসমূহ' : 'Consultation Chambers in Gulshan & Badda'}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {isBn
              ? 'আপনার সুবিধাজনক চেম্বার বেছে নিয়ে অনলাইনে দ্রুত অ্যাপয়েন্টমেন্ট কনফার্ম করুন।'
              : 'Select your preferred location below for instant appointment scheduling and direct map directions.'}
          </p>

          {/* Toggleable View Selector Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1">
              <button
                onClick={() => setSelectedTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTab === 'all'
                    ? 'bg-[#0F3D6E] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0F3D6E]'
                }`}
              >
                {isBn ? 'সকল চেম্বার (পার্শ্ববর্তী ভিউ)' : 'Both Chambers (Side-by-Side)'}
              </button>
              <button
                onClick={() => setSelectedTab('labaid')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTab === 'labaid'
                    ? 'bg-[#0F3D6E] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0F3D6E]'
                }`}
              >
                {isBn ? '১. ল্যাবএইড গুলশান-২' : '1. Labaid Gulshan-2'}
              </button>
              <button
                onClick={() => setSelectedTab('amz')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTab === 'amz'
                    ? 'bg-[#0F3D6E] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0F3D6E]'
                }`}
              >
                {isBn ? '২. এএমজেড বাড্ডা' : '2. AMZ Hospital Badda'}
              </button>
            </div>
          </div>
        </div>

        {/* Chamber Cards Grid (Side-by-Side or Focused Tab) */}
        <div className={`grid gap-8 ${visibleChambers.length === 1 ? 'max-w-2xl mx-auto grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {visibleChambers.map((chamber) => (
            <motion.div
              key={chamber.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Card Header Banner */}
              <div className="p-6 bg-gradient-to-r from-[#0F3D6E] to-slate-900 text-white relative">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                    {chamber.centerType}
                  </span>
                  {chamber.isPrimary && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-400/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Preferred Diagnostic Center
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                  {isBn ? chamber.nameBn : chamber.name}
                </h3>

                <p className="text-xs text-cyan-200/90 font-light mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{isBn ? chamber.addressBn : chamber.address}</span>
                </p>
              </div>

              {/* Card Main Body Details */}
              <div className="p-6 space-y-6">
                {/* Schedule Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-800 uppercase tracking-wider">
                      <Calendar className="w-4 h-4 text-cyan-600" />
                      <span>{isBn ? 'রোগী দেখার দিন' : 'Visiting Days'}</span>
                    </div>
                    <div className="text-sm font-extrabold text-[#0F3D6E]">
                      {isBn ? chamber.visitingDaysBn : chamber.visitingDays}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{isBn ? 'রোগী দেখার সময়' : 'Visiting Hours'}</span>
                    </div>
                    <div className="text-sm font-extrabold text-[#0F3D6E]">
                      {isBn ? chamber.visitingHoursBn : chamber.visitingHours}
                    </div>
                  </div>
                </div>

                {/* Landmark Info */}
                <div className="text-xs text-slate-600 bg-slate-100 p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-500 shrink-0" />
                  <span><strong>Landmark:</strong> {chamber.landmark}</span>
                </div>

                {/* Embedded Interactive Google Map Simulation & Direction Button */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0F3D6E]">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-cyan-600" /> Google Maps Location
                    </span>
                    <a
                      href={chamber.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:underline flex items-center gap-1"
                    >
                      Open in Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="w-full h-36 rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 relative group/map">
                    <iframe
                      title={`${chamber.name} Map`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://maps.google.com/maps?q=${chamber.mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <a
                  href={`tel:${chamber.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#0F3D6E] hover:bg-cyan-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>{isBn ? 'চেম্বার হটলাইনে কল করুন:' : 'Call Chamber Hotline:'} {chamber.phone}</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
