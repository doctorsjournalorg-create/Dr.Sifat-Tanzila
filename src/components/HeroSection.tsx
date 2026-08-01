import React from 'react';
import { motion } from 'motion/react';
import { Phone, ShieldCheck, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { DOCTOR_INFO, QUALIFICATIONS } from '../data/doctorData';
import { ThreeDoctorPortrait3D } from './ThreeDoctorPortrait3D';
import { Language } from '../types';

interface HeroSectionProps {
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const isBn = language === 'bn';

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0F3D6E] via-[#0D335C] to-slate-900 text-white scroll-mt-24"
    >
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Qualifications & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Academic Designation Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>
                {isBn
                  ? 'সহকারী অধ্যাপক, সার্জারি বিভাগ | সিকদার মেডিকেল কলেজ'
                  : 'Assistant Professor, Surgery Dept | Z.H. Sikder Medical College'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none font-sans">
                {isBn ? DOCTOR_INFO.titleBn : DOCTOR_INFO.title}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-cyan-300 font-sans tracking-wide">
                {isBn ? DOCTOR_INFO.specialtyBn : DOCTOR_INFO.specialty}
              </p>
            </div>

            {/* Key Qualifications Pill Badges Grid */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2.5">
                {isBn ? 'মেডিকেল ডিগ্রি ও আন্তর্জাতিক যোগ্যতা:' : 'Medical Qualifications & Affiliations:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {QUALIFICATIONS.map((q) => (
                  <span
                    key={q.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-medium text-slate-100 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <strong className="text-white">{q.degree}</strong> ({q.institution.split(' ')[0]})
                  </span>
                ))}
              </div>
            </div>

            {/* Brief Bio Summary */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
              {isBn ? DOCTOR_INFO.summaryBn : DOCTOR_INFO.summary}
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              {/* Call Hotline */}
              <a
                href={`tel:${DOCTOR_INFO.hotline}`}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-slate-950 animate-pulse" />
                <span>{DOCTOR_INFO.rawPhone}</span>
              </a>

              {/* Publications & Articles CTA Button */}
              <a
                href="#publications"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-cyan-300 font-bold text-sm border border-cyan-400/40 shadow-lg hover:text-white hover:border-cyan-300 transition-all duration-300 hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{isBn ? 'প্রকাশনা ও গবেষণা (PubMed)' : 'Publications & Research'}</span>
              </a>
            </div>

            {/* Chamber Locations Quick Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span><strong className="text-white">Gulshan-2:</strong> Labaid Diagnostic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span><strong className="text-white">North Badda:</strong> AMZ Hospital</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Doctor Portrait Stage (Without 3D Badge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <ThreeDoctorPortrait3D language={language} />
          </motion.div>

        </div>

        {/* Hero Bottom Key Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl">
          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-sans">12+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'বছরের সার্জিক্যাল অভিজ্ঞতা' : 'Years Surgical Experience'}
            </div>
          </div>
          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="text-2xl sm:text-4xl font-extrabold text-teal-300 font-sans">3,500+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'সফল সার্জারি প্রসিডিউর' : 'Successful Surgeries'}
            </div>
          </div>
          <div className="text-center p-2 border-r last:border-0 border-white/10">
            <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-sans">2</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'প্রধান চেম্বার (গুলশান ও বাড্ডা)' : 'Chambers (Gulshan & Badda)'}
            </div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-4xl font-extrabold text-teal-300 font-sans">4.9 / 5</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {isBn ? 'রোগী সন্তুষ্টি রেটিং' : 'Patient Satisfaction'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
