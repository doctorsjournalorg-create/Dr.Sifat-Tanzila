import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Award, ShieldCheck, Stethoscope, Sparkles, Zap, Rotate3d } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface ThreeDoctorPortrait3DProps {
  language: 'en' | 'bn';
}

export const ThreeDoctorPortrait3D: React.FC<ThreeDoctorPortrait3DProps> = ({
  language
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [is3DActive, setIs3DActive] = useState(true);

  // Motion scroll bindings
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Smooth springs for buttery scroll rotation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // 3D transforms as user scrolls down from Hero into About
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, 25, -15]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, -15, 10]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const translateY = useTransform(smoothProgress, [0, 1], [0, 80]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3DActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const isBn = language === 'bn';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto py-4 perspective-1000 select-none"
      id="3d-doctor-portrait-stage"
    >
      {/* 3D Interactive Control Pill */}
      <div className="absolute -top-4 right-0 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-cyan-100 text-xs font-medium text-slate-700">
        <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
        <span>{isBn ? '৩ডি ইন্টারঅ্যাক্টিভ ভিউ' : 'Interactive 3D Stage'}</span>
        <button
          onClick={() => setIs3DActive(!is3DActive)}
          className={`ml-1 p-1 rounded-full transition-colors ${
            is3DActive ? 'bg-cyan-500 text-white' : 'bg-slate-200 text-slate-600'
          }`}
          title="Toggle 3D Mouse Tilt"
        >
          <Rotate3d className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Outer Glowing Light Halo */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-teal-400/20 rounded-3xl filter blur-2xl -z-10 transform scale-105"
      />

      {/* Main 3D Card Stage */}
      <motion.div
        style={{
          rotateY: is3DActive ? mousePos.x * 30 : rotateY,
          rotateX: is3DActive ? -mousePos.y * 30 : rotateX,
          scale,
          y: translateY,
          transformStyle: 'preserve-3d'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-3 rounded-3xl border border-cyan-500/30 shadow-2xl overflow-visible"
      >
        {/* Decorative 3D Frame Edge Lines */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

        {/* Doctor Image Container */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] shadow-inner group">
          <img
            src={DOCTOR_INFO.portraitImage}
            alt={DOCTOR_INFO.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay for depth & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

          {/* Bottom Card Title Banner */}
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isBn ? 'সহযোগী অধ্যাপক' : 'Associate Professor'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
              {isBn ? DOCTOR_INFO.nameBn : DOCTOR_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-200/90 font-light mt-0.5 line-clamp-1">
              {isBn ? DOCTOR_INFO.specialtyBn : DOCTOR_INFO.specialty}
            </p>
          </div>
        </div>

        {/* Floating 3D Depth Badge 1 - FCPS & MRCS UK */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotateZ: [0, 2, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(40px)' }}
          className="absolute -top-3 -left-3 sm:-left-6 bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl border border-cyan-400/40 shadow-xl flex items-center gap-2.5 text-white z-20 max-w-[210px]"
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-400/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold">
              UK & FCPS Board
            </div>
            <div className="text-xs font-semibold text-white">
              MRCS (England) | FCPS
            </div>
          </div>
        </motion.div>

        {/* Floating 3D Depth Badge 2 - Laser Proctology */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotateZ: [0, -2, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transform: 'translateZ(50px)' }}
          className="absolute bottom-16 -right-3 sm:-right-6 bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl border border-teal-400/40 shadow-xl flex items-center gap-2.5 text-white z-20 max-w-[210px]"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 border border-teal-400/30">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-teal-300 font-bold">
              Fortis Hospital Delhi
            </div>
            <div className="text-xs font-semibold text-white">
              Laser Proctologist
            </div>
          </div>
        </motion.div>

        {/* Floating 3D Depth Badge 3 - GEM Hospital Fellowship */}
        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ transform: 'translateZ(35px)' }}
          className="absolute -bottom-4 left-4 sm:left-8 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg flex items-center gap-2 text-white z-20 text-xs"
        >
          <Stethoscope className="w-4 h-4 text-cyan-400" />
          <span className="font-medium text-slate-200">
            {isBn ? 'জিইএম চেন্নাই ল্যাপারোস্কোপিক ফেলোশিপ' : 'GEM Chennai Colorectal Fellowship'}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
