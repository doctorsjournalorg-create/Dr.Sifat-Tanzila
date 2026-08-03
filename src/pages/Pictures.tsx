import React from 'react';
import { Image as ImageIcon, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Pictures() {
  // গ্যালারিতে ছবি দেখানোর জন্য লিস্ট। 
  // নিয়ম: public/images/ ফোল্ডারে ছবি রেখে শুধু নিচের মতো ফাইলের নাম বসিয়ে দেবেন।
  const images = [
    { url: "/images/pic1.jpg", title: "Dr. Sifat Tanzila at Chamber" },
    { url: "/images/pic2.jpg", title: "Medical Conference & Seminar" },
    // নতুন ছবি যোগ করতে চাইলে নিচের লাইনে এভাবেই যোগ করবেন:
    // { url: "/images/pic3.jpg", title: "New Event Title" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Back to Home Button & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-cyan-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Photo Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Moments & Gallery
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              ডঃ শিফাত তানজিলা এর বিভিন্ন প্রফেশনাল কার্যক্রম ও মুহূর্তসমূহের ছবি।
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-bold transition-all w-fit shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোমে ফিরে যান (Back to Home)</span>
          </a>
        </div>

        {/* Instructions Card for Manual Upload */}
        <div className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-5 mb-8 backdrop-blur-md shadow-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-200">কীভাবে নতুন ছবি যুক্ত করবেন?</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                আপনার প্রজেক্টের <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">public/images/</code> ফোল্ডারে ছবিগুলো রেখে এই ফাইলের <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">images</code> অ্যারেতে ছবির পাথ বসিয়ে দিলেই লাইভ সাইটে ছবিগুলো চলে আসবে। কোনো এক্সট্রা সার্ভার বা পেইড স্টোরেজের প্রয়োজন নেই!
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/50"
              >
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // যদি ছবি না পাওয়া যায় তবে ফলব্যাক হিসেবে ডামি প্লেসহোল্ডার দেখাবে
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {img.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">বর্তমানে কোনো ছবি গ্যালারিতে নেই।</p>
          </div>
        )}

      </div>
    </div>
  );
}
