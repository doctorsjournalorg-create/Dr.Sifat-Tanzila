import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Stethoscope, ShieldCheck, ChevronRight, Image as ImageIcon, Facebook, Youtube } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageToggle
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'specializations', 'publications', 'chambers', 'procedures'];
      const navHeight = 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navHeight && rect.bottom >= navHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isBn = language === 'bn';

  const navLinks = [
    { name: isBn ? 'হোম' : 'Home', href: '#hero', id: 'hero' },
    { name: isBn ? 'পরিচয়' : 'About', href: '#about', id: 'about' },
    { name: isBn ? 'বিশেষজ্ঞতা' : 'Specializations', href: '#specializations', id: 'specializations' },
    { name: isBn ? 'প্রকাশনা' : 'Publications', href: '#publications', id: 'publications' },
    { name: isBn ? 'চেম্বার' : 'Chambers', href: '#chambers', id: 'chambers' },
    { name: isBn ? 'প্রসিডিউর' : 'Procedures', href: '#procedures', id: 'procedures' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 py-3 border-b border-cyan-500/20'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4 text-white border-b border-white/5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Doctor Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Stethoscope className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors duration-200">
                  Dr. Shifat Tanjila
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-inner">
                  <ShieldCheck className="w-3 h-3 mr-1 text-cyan-400" /> FCPS, MRCS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide line-clamp-1">
                {isBn ? 'সহকারী অধ্যাপক ও জেনারেল সার্জারি স্পেশালিস্ট' : 'Assistant Professor & General Surgeon'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links & Pictures Button */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-950/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/20 shadow-md shadow-cyan-500/25 border border-cyan-400/40 ring-1 ring-cyan-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Pictures Page Link */}
            <a
              href="/pictures"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/25 border border-cyan-500/30 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isBn ? 'ছবি' : 'Pictures'}</span>
            </a>
          </nav>

          {/* Right Action Controls (Social Icons & Language Switcher) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social Links */}
            <div className="flex items-center gap-2 border-r border-slate-800 pr-3">
              <a
                href="https://www.facebook.com/drshifattanjila"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@dr.shifattanjila"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher Pill */}
            <button
              onClick={onLanguageToggle}
              className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-cyan-950/80 text-xs font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-md cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন করুন"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              <span className="tracking-wide">{isBn ? 'English' : 'বাংলা'}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="px-2.5 py-1 rounded-full bg-slate-800 text-xs font-bold text-cyan-300 border border-cyan-500/30"
            >
              {isBn ? 'EN' : 'বাংলা'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-200 hover:text-white border border-slate-700/60 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              );
            })}

            {/* Mobile Pictures Link */}
            <a
              href="/pictures"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
            >
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <span>{isBn ? 'ছবির গ্যালারি (Pictures)' : 'Pictures Gallery'}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-around pt-4 border-t border-slate-800/80 mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-800"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-800"
              >
                <Youtube className="w-4 h-4 text-red-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
