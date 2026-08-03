import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpecializationsSection } from './components/SpecializationsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ChambersSection } from './components/ChambersSection';
import { FaqSection } from './components/FaqSection';
import { BackToTopButton } from './components/BackToTopButton';
import { Footer } from './components/Footer';
import Pictures from './pages/Pictures'; // নতুন গ্যালারি পেজ ইমপোর্ট
import { Language } from './types';

// Intersection Observer wrapper component for smooth section fade-in on scroll every time it enters view
function FadeInSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// মূল হোমপেজ কম্পোনেন্ট
function HomePage({ language }: { language: Language }) {
  return (
    <>
      <FadeInSection>
        <HeroSection language={language} />
      </FadeInSection>

      <FadeInSection>
        <AboutSection language={language} />
      </FadeInSection>

      <FadeInSection>
        <SpecializationsSection language={language} />
      </FadeInSection>

      <FadeInSection>
        <PublicationsSection language={language} />
      </FadeInSection>

      <FadeInSection>
        <ChambersSection language={language} />
      </FadeInSection>

      <FadeInSection>
        <FaqSection language={language} />
      </FadeInSection>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [scrollYProgress, setScrollYProgress] = useState(0);

  // Monitor scroll progress for 3D background animation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollYProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans relative selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
        
        {/* 3D WebGL Background Canvas */}
        <ThreeCanvas scrollYProgress={scrollYProgress} />

        {/* Main Top Navigation (Navbar-এ Pictures বাটন ও সোশ্যাল লিংক যুক্ত আছে) */}
        <Navbar
          language={language}
          onLanguageToggle={handleLanguageToggle}
        />

        {/* Main Content Flow with Routes */}
        <main className="relative z-10">
          <Routes>
            {/* মূল হোমপেজ রাউট */}
            <Route path="/" element={<HomePage language={language} />} />
            
            {/* পিকচার গ্যালারি পেজ রাউট */}
            <Route path="/pictures" element={<Pictures />} />
          </Routes>
        </main>

        {/* Footer & Legal Disclaimers */}
        <FadeInSection>
          <Footer language={language} />
        </FadeInSection>

        {/* Floating Back to Top Button */}
        <BackToTopButton language={language} />

      </div>
    </Router>
  );
}
