import React, { useState } from 'react';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';

export default function Pictures() {
  // ভাষা ডিটেক্ট করার জন্য লোকাল স্টেট (প্রয়োজনে প্রপস বা গ্লোবাল স্টেট ব্যবহার করতে পারেন)
  const [language] = useState<'en' | 'bn'>('en');
  const isBn = language === 'bn';

  // গ্যালারি ছবি ও টাইটেল
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-6xl mx-auto">
        
        {/* Gallery Header Section */}
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
