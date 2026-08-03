import React from 'react';
import { Stethoscope, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { DOCTOR_INFO, CHAMBERS } from '../data/doctorData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isBn = language === 'bn';

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Associate Professor Dr. Sifat Tanzila</h3>
                <p className="text-xs text-cyan-400 font-medium">
                  {isBn ? DOCTOR_INFO.specialtyBn : DOCTOR_INFO.specialty}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {isBn
                ? 'আন্তর্জাতিক ফেলোশিপপ্রাপ্ত জেনারেল, ল্যাপারোস্কোপিক, স্তন ও কোলোরেক্টাল সার্জন। ল্যাবএইড ডায়াগনস্টিক সেন্টার গুলশান-২ ও এএমজেড হাসপাতাল বাড্ডায় নিয়মিত রোগী দেখা হয়।'
                : 'Fellowship trained General, Laparoscopic, Breast & Colorectal Surgeon. Assistant Professor of Surgery at Z.H. Sikder Women’s Medical College & Hospital.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${DOCTOR_INFO.hotline}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{DOCTOR_INFO.rawPhone}</span>
              </a>

              <a
                href={`mailto:${DOCTOR_INFO.email}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Email Doctor</span>
              </a>
            </div>
          </div>

          {/* Chamber Locations Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isBn ? 'চেম্বার ও সময়সূচী' : 'Chambers & Schedule'}
            </h4>

            {CHAMBERS.map((ch) => (
              <div key={ch.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isBn ? ch.nameBn : ch.name}</span>
                </div>
                <p className="text-[11px] text-slate-400">{isBn ? ch.addressBn : ch.address}</p>
                <p className="text-[11px] text-cyan-300 font-semibold">
                  {isBn ? ch.visitingDaysBn : ch.visitingDays} ({isBn ? ch.visitingHoursBn : ch.visitingHours})
                </p>
              </div>
            ))}
          </div>

          {/* Quick Nav Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isBn ? 'দ্রুত নেভিগেশন' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Qualifications</a></li>
              <li><a href="#specializations" className="hover:text-cyan-400 transition-colors">Specializations & Fellowships</a></li>
              <li><a href="#publications" className="hover:text-cyan-400 transition-colors">Publications & Research Articles (PubMed)</a></li>
              <li><a href="#chambers" className="hover:text-cyan-400 transition-colors">Chambers & Directions</a></li>
              <li><a href="#procedures" className="hover:text-cyan-400 transition-colors">Laser & Laparoscopic Care</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Patient FAQs</a></li>
            </ul>
          </div>

        </div>

        {/* Standard Medical Legal Disclaimer */}
        <div className="pt-8 space-y-4 text-center max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-400 text-[11px] leading-relaxed">
            <p>
              <strong className="text-cyan-400">Standard Medical Disclaimer:</strong> The information provided on this portfolio website is for general educational and appointment scheduling purposes only and does not constitute formal medical diagnosis or emergency treatment advice. Patients with acute abdominal or surgical emergencies should proceed immediately to the nearest hospital emergency department.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
            <p>© {new Date().getFullYear()} 
            <a href="https://www.doctorsjournal.org/">International Network of Doctors Journal. All Rights Reserved.</a>
            </p>
            <p className="flex items-center gap-1">
              <span>Crafted for patient care with</span> <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
