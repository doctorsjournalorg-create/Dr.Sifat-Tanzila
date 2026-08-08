import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Building2, CheckCircle2, ShieldCheck, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { DOCTOR_INFO, QUALIFICATIONS } from '../data/doctorData';
import { Qualification, Language } from '../types';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const [selectedDegree, setSelectedDegree] = useState<Qualification | null>(null);
  const isBn = language === 'bn';

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden text-slate-800 scroll-mt-24">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D6E]/10 text-[#0F3D6E] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-cyan-600" />
            <span>{isBn ? 'আমার পরিচয় ও শিক্ষাগত যোগ্যতা' : 'About & Medical Qualifications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D6E] tracking-tight font-sans">
            {isBn
              ? 'নিবেদিতপ্রাণ সার্জন ও সহকারী অধ্যাপক'
              : 'Dedicated Surgeon & Assistant Professor'}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {isBn
              ? 'আন্তর্জাতিক মানের ডিগ্রি ও ফেলোশিপের মাধ্যমে রোগীদের সর্বোত্তম চিকিৎসা সেবা প্রদানে অঙ্গীকারবদ্ধ।'
              : 'Combining prestigious British Royal College certification and specialized fellowships in minimal access laparoscopic & colorectal surgery.'}
          </p>
        </div>

        {/* Two-Column Grid: Academic Role + Qualifications Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Current Role & Professional Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0F3D6E] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#0F3D6E]/20">
                <Building2 className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  {isBn ? 'বর্তমান পদবী' : 'Current Academic Role'}
                </span>
                <h3 className="text-xl font-bold text-[#0F3D6E] font-sans">
                  {isBn ? 'সহযোগী অধ্যাপক (সার্জারি বিভাগ)' : 'Associate Professor of Surgery'}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-1">
              <div className="text-xs font-semibold text-cyan-800 uppercase tracking-wider">
                {isBn ? 'কর্মস্থল' : 'Institutional Attachment'}
              </div>
              <p className="text-sm font-semibold text-[#0F3D6E]">
                {isBn ? DOCTOR_INFO.workplaceBn : DOCTOR_INFO.workplace}
              </p>
            </div>

            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>
                {isBn
                  ? 'ডাঃ সিফাত তানজিলা চট্টগ্রাম মেডিকেল কলেজ (CMC) থেকে কৃতিত্বের সাথে এমবিবিএস সম্পন্ন করেন। পরবর্তীতে সার্জারিতে এফসিপিএস এবং যুক্তরাজ্যের রয়্যাল কলেজ অফ সার্জনস থেকে বিশ্বখ্যাত এমআরসিএস (MRCS England) অর্জন করেন।'
                  : 'Dr. Shifat Tanjila completed her MBBS from Chittagong Medical College (CMC) with academic distinction. She subsequently earned her FCPS in Surgery and cleared the rigorous Royal College exams to attain the MRCS (England/UK).'}
              </p>
              <p>
                {isBn
                  ? 'চিকিৎসা বিজ্ঞানের আধুনিক অগ্রগতির সাথে সঙ্গতি রেখে তিনি ভারতের ঐতিহ্যবাহী জিইএম হাসপাতাল (চেন্নাই) থেকে অ্যাডভান্সড ল্যাপারোস্কোপিক কোলোরেক্টাল সার্জারিতে বিশেষায়িত ফেলোশিপ এবং ফোর্টিস হাসপাতাল (দিল্লি) থেকে প্রশিক্ষণপ্রাপ্ত লেজার প্রোক্টোলজিস্ট হিসেবে খ্যাতি অর্জন করেন।'
                  : 'She pursued advanced specialized fellowships at GEM Hospital (Chennai, India) in Advanced Laparoscopic Colorectal Surgery and Fortis Hospital (Delhi) in Painless Laser Proctology.'}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <ShieldCheck className="w-4 h-4" />
                <span>{isBn ? 'BMDC রেজিস্টার্ড সার্জন' : 'Verified BMDC Registered Specialist'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Comprehensive Qualifications Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#0F3D6E] flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-600" />
                <span>{isBn ? 'অর্জিত ডিগ্রি ও অ্যাফিলিয়েশন' : 'Degrees & Board Certifications'}</span>
              </h3>
              <span className="text-xs text-slate-500">
                {isBn ? 'বিস্তারিত জানতে ক্লিক করুন' : 'Click card to view verification details'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUALIFICATIONS.map((qual, idx) => (
                <motion.div
                  key={qual.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setSelectedDegree(qual)}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-extrabold border border-cyan-100">
                      {qual.degree}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {qual.location}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0F3D6E] transition-colors leading-snug">
                    {qual.fullTitle}
                  </h4>

                  <p className="text-xs font-semibold text-cyan-700 mt-1">
                    {qual.institution}
                  </p>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {qual.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-cyan-600 font-semibold">
                    <span>{qual.badge}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Academic Distinction Banner & Publications Link */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F3D6E] to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isBn ? 'আন্তর্জাতিক সার্জিক্যাল মেম্বারশিপ ও পিয়ার-রিভিউড প্রকাশনা' : 'Royal College Standing & Published Research'}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Member of Royal College of Surgeons of England (MRCS UK) & PubMed-indexed author.
                  </p>
                </div>
              </div>

              <a
                href="#publications"
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs font-bold transition-all shadow-md hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>{isBn ? 'গবেষণাপত্র দেখুন' : 'View Publications'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Degree Modal */}
      {selectedDegree && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-cyan-100 animate-fadeIn">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-600" />
                <h3 className="text-lg font-bold text-[#0F3D6E]">{selectedDegree.fullTitle}</h3>
              </div>
              <button
                onClick={() => setSelectedDegree(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Degree / Certification</span>
                <div className="text-xl font-extrabold text-cyan-600">{selectedDegree.degree}</div>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Awarding Institution</span>
                <div className="text-sm font-semibold text-slate-800">{selectedDegree.institution} ({selectedDegree.location})</div>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Clinical Significance</span>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{selectedDegree.description}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Official Medical Credential
              </span>
              <button
                onClick={() => setSelectedDegree(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                {isBn ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
