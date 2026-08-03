import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ArrowLeft, Globe, Stethoscope, ShieldCheck, Menu, X, Facebook, Youtube } from 'lucide-react';
import { Language } from '../types';

export default function Pictures() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ভাষা পরিবর্তনের হ্যান্ডলার
  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  const isBn = language === 'bn';

  // গ্যালারি ছবি ও টাইটেল (ভাষা অনুযায়ী পরিবর্তনশীল)
  const images = [
    { 
      url: "/images/pic1.jpg", 
      titleEn: "Dr. Sifat Tanzila at Chamber", 
      titleBn: "চেম্বারে ডঃ শিফাত তানজিলা" 
    },
    { 
      url: "/images/pic2.jpg", 
      titleEn: "Medical Conference & Seminar", 
      titleBn: "মেডিকেল কনফারেন্স ও সেমিনার" 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navbar Integration */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 py-3 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand */}
            <a href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-lg">
                  <Stethoscope className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-100">
                    Dr. Sifat Tanzila
                  </span>
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <ShieldCheck className="w-3 h-3 mr-1 text-cyan-400" /> FCPS, MRCS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                  {isBn ? 'সহযোগী অধ্যাপক ও জেনারেল সার্জারি স্পেশালিস্ট' : 'Associate Professor & General Surgeon'}
                </p>
              </div>
            </a>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2 border-r border-slate-800 pr-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              {/* Language Toggle Button */}
              <button
                onClick={handleLanguageToggle}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-cyan-950 text-xs font-semibold text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer shadow-md"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isBn ? 'English' : 'বাংলা'}</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={handleLanguageToggle}
                className="px-2.5 py-1 rounded-full bg-slate-800 text-xs font-bold text-cyan-300 border border-cyan-500/30"
              >
                {isBn ? 'EN' : 'বাংলা'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-800 text-slate-200 border border-slate-700"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-slate-950/95 border-b border-cyan-500/30 px-4 py-4 space-y-3">
            <a href="/" className="block text-xs font-bold text-slate-200 hover:text-cyan-300 py-1">
              {isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}
            </a>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 flex items-center gap-1">
                <Facebook className="w-4 h-4 text-blue-400" /> Facebook
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 flex items-center gap-1">
                <Youtube className="w-4 h-4 text-red-400" /> YouTube
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Gallery Content */}
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-cyan-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isBn ? 'ফটো গ্যালারি' : 'Photo Gallery'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {isBn ? 'মুহূর্ত ও গ্যালারি' : 'Moments & Gallery'}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              {isBn ? 'ডঃ শিফাত তানজিলা এর বিভিন্ন প্রফেশনাল কার্যক্রম ও মুহূর্তসমূহের ছবি।' : 'Collection of professional moments and activities.'}
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all w-fit shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isBn ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
          </a>
        </div>

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={img.url}
                    alt={isBn ? img.titleBn : img.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {isBn ? img.titleBn : img.titleEn}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">{isBn ? 'কোনো ছবি পাওয়া যায়নি।' : 'No pictures found.'}</p>
          </div>
        )}

      </main>
    </div>
  );
}
