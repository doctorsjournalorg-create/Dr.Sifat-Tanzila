import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Zap, Sparkles, CheckCircle2, Clock, ShieldCheck, Activity, Award, Flame, Heart, Crosshair } from 'lucide-react';
import { ADVANCED_TRAINING, PROCEDURES } from '../data/doctorData';
import { Language } from '../types';

interface SpecializationsSectionProps {
  language: Language;
}

export const SpecializationsSection: React.FC<SpecializationsSectionProps> = ({
  language
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isBn = language === 'bn';

  const categoryTabs = [
    { id: 'all', name: isBn ? 'সকল প্রসিডিউর' : 'All Procedures' },
    { id: 'laser', name: isBn ? 'লেজার প্রোক্টোলজি (পাইলস)' : 'Laser Proctology (Piles)' },
    { id: 'laparoscopic', name: isBn ? 'ল্যাপারোস্কোপিক সার্জারি' : 'Laparoscopic Surgery' },
    { id: 'breast', name: isBn ? 'স্তন সার্জারি (টিউমার)' : 'Breast Care & Tumors' },
    { id: 'colorectal', name: isBn ? 'কোলোরেক্টাল সার্জারি' : 'Colorectal Surgery' }
  ];

  const filteredProcedures = activeCategory === 'all'
    ? PROCEDURES
    : PROCEDURES.filter(p => p.category === activeCategory);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-indigo-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-400" />;
      default: return <Stethoscope className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="specializations" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>{isBn ? 'বিশেষায়িত প্রশিক্ষণ ও সার্জারি পদ্ধতি' : 'Specializations & Advanced Clinical Training'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {isBn ? 'আন্তর্জাতিক ফেলোশিপ ও আধুনিক প্রযুক্তি' : 'Advanced International Fellowships & Keyhole Techniques'}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {isBn
              ? 'চেন্নাই এর জিইএম হাসপাতাল এবং দিল্লির ফোর্টিস হাসপাতাল থেকে অর্জিত বিশ্বমানের সার্জিক্যাল প্রশিক্ষণ।'
              : 'Subspecialized training backgrounds from Asia’s leading gastroenterology and laser centers.'}
          </p>
        </div>

        {/* 1. VISUALLY DISTINCT ADVANCED TRAINING FELLOWSHIPS */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ADVANCED_TRAINING.map((train) => (
            <motion.div
              key={train.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/90 via-slate-800 to-slate-850 p-7 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden group hover:border-cyan-400 transition-all duration-300"
            >
              {/* Corner Glowing Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                  {train.tag}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {train.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-sans">
                {train.title}
              </h3>

              <div className="text-sm font-semibold text-cyan-400 mb-6 flex items-center gap-2">
                <Building2Icon />
                <span>{train.institution}</span>
              </div>

              {/* Fellowship Key Training Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-slate-700/80">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isBn ? 'বিশেষ প্রশিক্ষণ ও অর্জিত দক্ষতা:' : 'Key Clinical Training Highlights:'}
                </p>
                {train.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. PROCEDURES FILTER & EXPANDABLE CARDS GRID */}
        <div id="procedures" className="pt-8 border-t border-slate-800 scroll-mt-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-cyan-400" />
                <span>{isBn ? 'প্রধান সার্জিক্যাল প্রসিডিউরসমূহ' : 'Surgical Procedures & Treatments'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isBn ? 'আপনার প্রয়োজন অনুযায়ী প্রসিডিউর সিলেক্ট করুন' : 'Filter by category to view detailed recovery times and key benefits'}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Procedures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProcedures.map((proc) => (
              <motion.div
                key={proc.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {getIconComponent(proc.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-[11px] font-semibold border border-cyan-800">
                      <Clock className="w-3 h-3" />
                      <span>Recovery: {proc.recoveryTime}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-sans mb-2">
                    {isBn ? proc.titleBn : proc.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isBn ? proc.descriptionBn : proc.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-700/60">
                    {proc.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

function Building2Icon() {
  return (
    <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
    </svg>
  );
}
