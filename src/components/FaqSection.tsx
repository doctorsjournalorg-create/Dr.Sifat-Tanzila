import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, HeartPulse, Phone } from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../data/doctorData';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const isBn = language === 'bn';

  const filteredFaqs = FAQS.filter(faq => {
    const q = isBn ? faq.questionBn : faq.question;
    const a = isBn ? faq.answerBn : faq.answer;
    return q.toLowerCase().includes(searchQuery.toLowerCase()) || a.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>{isBn ? 'সাধারণ প্রশ্নাবলী ও উত্তর' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {isBn ? 'রোগীদের সাধারণ জিজ্ঞাসা ও উত্তর' : 'Patient Information & FAQ Guide'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {isBn
              ? 'অপারেশন ও লেজার চিকিৎসা সম্পর্কে আপনার প্রশ্নের স্পষ্ট ও বৈজ্ঞানিক উত্তর।'
              : 'Clear, compassionate explanations regarding laser surgery benefits, recovery timeline, and chamber guidelines.'}
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'প্রশ্ন খুঁজুন (যেমন: পাইলস, ল্যাপারোস্কোপি...)' : 'Search questions (e.g., piles, laser, recovery)...'}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg font-sans">
                    {isBn ? faq.questionBn : faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-4 animate-fadeIn">
                    <p>{isBn ? faq.answerBn : faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Need Personal Consultation Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-900/60 via-slate-800 to-slate-900 border border-cyan-500/30 text-center space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto border border-cyan-400/30">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-sans">
            {isBn ? 'আপনার কোনো বিশেষ স্বাস্থ্য সমস্যা নিয়ে দ্বিধায় আছেন?' : 'Have a Specific Medical Question?'}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {isBn
              ? 'চেম্বারে সরাসরি সাক্ষাতে সহকারী অধ্যাপক ডাঃ সিফাত তানজিলা এর পরামর্শ নিন।'
              : 'Schedule a private, empathetic in-person consultation at Labaid Gulshan-2 or AMZ Hospital Badda.'}
          </p>
          <a
            href={`tel:${DOCTOR_INFO.hotline}`}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            <span>{isBn ? 'হটলাইনে কল করুন:' : 'Call Hotline:'} {DOCTOR_INFO.rawPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
