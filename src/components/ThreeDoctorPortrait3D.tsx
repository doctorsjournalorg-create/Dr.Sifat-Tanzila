import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Stethoscope, Zap } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface ThreeDoctorPortrait3DProps {
  language: 'en' | 'bn';
}

export const ThreeDoctorPortrait3D: React.FC<ThreeDoctorPortrait3DProps> = ({
  language
}) => {
  const isBn = language === 'bn';

  return (
    <div
      className="relative w-full max-w-lg mx-auto py-4 select-none"
      id="doctor-portrait-stage"
    >
      {/* Outer Glowing Light Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-rose-600/30 to-fuchsia-400/20 rounded-3xl filter blur-2xl -z-10 transform scale-105" />

      {/* Main Doctor Portrait Card */}
      <div className="relative bg-gradient-to-b from-slate-950 via-pink-950/40 to-slate-950 p-2 sm:p-3 rounded-3xl border border-pink-500/30 shadow-2xl overflow-visible">
        {/* Decorative Frame Edge Lines */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

        {/* Doctor Image Container */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] shadow-inner group">
          <img
            src={DOCTOR_INFO.portraitImage}
            alt={DOCTOR_INFO.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

          {/* Bottom Card Title Banner */}
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pink-500/20 text-pink-300 text-xs font-medium border border-pink-500/30 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
              <span>{isBn ? 'সহকারী অধ্যাপক' : 'Assistant Professor'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              {isBn ? DOCTOR_INFO.nameBn : DOCTOR_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-pink-200/90 font-light mt-0.5 line-clamp-1">
              {isBn ? DOCTOR_INFO.specialtyBn : DOCTOR_INFO.specialty}
            </p>
          </div>
        </div>

        {/* Floating Badge 1 - FCPS & MRCS UK */}
        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -left-3 sm:-left-6 bg-slate-950/95 backdrop-blur-md p-3 rounded-2xl border border-pink-400/40 shadow-xl flex items-center gap-2.5 text-white z-20 max-w-[210px]"
        >
          <div className="w-9 h-9 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0 border border-pink-400/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-pink-300 font-bold">
              UK & FCPS Board
            </div>
            <div className="text-xs font-semibold text-white">
              MRCS (England) | FCPS
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 2 - Laser Proctology */}
        <motion.div
          animate={{
            y: [0, 6, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-16 -right-3 sm:-right-6 bg-slate-950/95 backdrop-blur-md p-3 rounded-2xl border border-rose-400/40 shadow-xl flex items-center gap-2.5 text-white z-20 max-w-[210px]"
        >
          <div className="w-9 h-9 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-300 shrink-0 border border-rose-400/30">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-rose-300 font-bold">
              Fortis Hospital Delhi
            </div>
            <div className="text-xs font-semibold text-white">
              Laser Proctologist
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 3 - GEM Hospital Fellowship */}
        <motion.div
          animate={{
            y: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 left-4 sm:left-8 bg-slate-950/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-pink-500/30 shadow-lg flex items-center gap-2 text-white z-20 text-xs"
        >
          <Stethoscope className="w-4 h-4 text-pink-400" />
          <span className="font-medium text-slate-200">
            {isBn ? 'জিইএম চেন্নাই ল্যাপারোস্কোপিক ফেলোশিপ' : 'GEM Chennai Colorectal Fellowship'}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

