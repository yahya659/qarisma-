import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- المكونات الفرعية (Sub-components) ---

const SideItem = ({ color }) => (
  <div className={`${color} p-4 rounded-2xl backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer border border-white/20 group`}>
    <h4 className="font-bold text-black text-lg mb-1 group-hover:text-[#5b5df5]">Beyond the Headlines</h4>
    <p className="text-[10px] leading-tight text-gray-800">
      It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
    </p>
  </div>
);

const NewsCard = () => (
  <div className="bg-[#bda7b2] rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer transition-all hover:scale-[1.02]">
    <div className="relative h-60 w-full">
      <img 
        src="/images/news2.png" 
        alt="News" 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
      />
      <div className="absolute bottom-6 left-0 bg-white/40 backdrop-blur-md py-2 px-8 rounded-r-xl">
        <h3 className="text-[#5b5df5] font-black text-2xl tracking-tight">War On Gaza</h3>
      </div>
    </div>
    <div className="p-8">
      <p className="text-black text-[15px] leading-relaxed font-bold opacity-80">
        It has one principle and one motto that can be read individually, meaning each word on its own, 
        or as a whole, in a single sentence, whether from right to left or left to right: (Elegance, Personality, Strength).
      </p>
    </div>
  </div>
);

const Pagination = () => (
  <div className="flex items-center justify-center gap-4 mt-16 pb-10">
    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b8b0e5] text-white text-2xl">«</button>
    <button className="w-12 h-14 flex items-center justify-center rounded-xl bg-[#5b5df5] text-white font-black text-xl shadow-lg shadow-indigo-300">1</button>
    <button className="w-12 h-14 flex items-center justify-center rounded-xl bg-[#b8b0e5] text-white font-black text-xl">2</button>
    <button className="w-12 h-14 flex items-center justify-center rounded-xl bg-[#b8b0e5] text-white font-black text-xl">3</button>
    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b8b0e5] text-white text-2xl">»</button>
  </div>
);

// --- المكون الرئيسي (Main Layout) ---

const NewsLayout = () => {
  return (
    <div className="min-h-screen bg-[#d6cbd7] font-sans relative overflow-x-hidden">
      {/* 1. الهيدر (Header) */}
      <Header />
      
      {/* 2. حاوية صورة الخلفية العامة (اختياري) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/images/breaking news.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      {/* المحتوى الرئيسي */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        
        {/* قسم العنوان والبحث (Hero Section) */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="text-[#5b5df5]">Vision Of</span> <span className="text-black">Latest news</span>
          </h1>
          <p className="text-xl md:text-2xl text-black font-bold mb-10 opacity-90">
            Top headlines and In-depth reporting across the world.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <button className="px-8 py-3 bg-[#5b5df5] text-white rounded-xl font-bold shadow-lg hover:bg-opacity-90 transition-all">Top</button>
              <button className="px-8 py-3 bg-[#ec81bc] text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">World</button>
              <button className="px-8 py-3 bg-[#ec81bc] text-white rounded-xl font-bold hover:bg-opacity-90 transition-all">Breaking News</button>
            </div>
            <button className="w-full md:w-72 py-4 bg-[#6366f1] text-white rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200">
              search news
            </button>
          </div>
        </section>

        {/* شبكة المحتوى الرئيسي (Featured Content Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* اليمين: الكارت الكبير (Main Feature Card) */}
          <div className="lg:col-span-8 bg-black rounded-[3rem] p-4 md:p-8 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-end border-4 border-[#8c2a41]/30">
            <div className="relative z-10">
              <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden mb-8 border-2 border-white/10 shadow-2xl">
                <img src="/images/news2.png" className="w-full h-full object-cover" alt="Main News" />
              </div>
              <h2 className="text-4xl font-bold text-[#5b5df5] mb-4">Beyond the Headlines</h2>
              <p className="text-white text-lg leading-relaxed opacity-95 max-w-2xl">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
              </p>
            </div>

            {/* أزرار التنقل السفلية للـ Slider */}
            <div className="flex items-center gap-4 mt-8 justify-center">
              <button className="w-10 h-10 rounded-full bg-[#5b5df5] text-white flex items-center justify-center">←</button>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-[#5b5df5]' : 'bg-white/30'}`}></div>
                ))}
              </div>
              <button className="w-10 h-10 rounded-full bg-[#5b5df5] text-white flex items-center justify-center">→</button>
            </div>
          </div>

          {/* اليسار: القوائم الجانبية (Sidebars) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#b8b0e5]/50 backdrop-blur-md rounded-[2.5rem] p-7 shadow-xl border border-white/20">
              <h3 className="text-white text-2xl font-black mb-6 uppercase tracking-wider">EDITORS PICKS</h3>
              <div className="space-y-4">
                <SideItem color="bg-white/40" />
                <SideItem color="bg-[#ec81bc]/60" />
              </div>
            </div>

            <div className="bg-[#b8b0e5]/50 backdrop-blur-md rounded-[2.5rem] p-7 shadow-xl border border-white/20">
              <h3 className="text-white text-2xl font-black mb-6 uppercase tracking-wider">Newspaper</h3>
              <div className="space-y-4">
                <SideItem color="bg-white/40" />
                <SideItem color="bg-[#ec81bc]/60" />
              </div>
            </div>
          </div>
        </section>

        {/* شبكة بطاقات الأخبار السفلية (Bottom News Cards) */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <Pagination />
        </section>

      </main>

      {/* الفوتر (Footer) */}
      <Footer />
    </div>
  );
};

export default NewsLayout;