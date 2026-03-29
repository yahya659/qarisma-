import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- المكونات الفرعية (Sub-components) ---

const HeroSection = () => (
  <>
  <Header/>
  <br/>
  <br/>
  <br/>
  <br/>
  <section className="relative w-full py-20 px-8 md:px-24 bg-[#e5d5e1] overflow-hidden">
    
    <div className="relative z-10 max-w-7xl mx-auto">
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="text-[#6366f1]">Vision Of</span>{" "}
        <span className="text-black">Latest news</span>
      </h1>
      <p className="text-xl md:text-2xl text-black font-semibold mb-12 opacity-90">
        Top headlines and In-depth reportind across the world
      </p>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-[#6366f1] text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform">Top</button>
          <button className="px-8 py-3 bg-[#ec81bc] text-white rounded-2xl font-bold hover:scale-105 transition-transform">World</button>
          <button className="px-8 py-3 bg-[#ec81bc] text-white rounded-2xl font-bold hover:scale-105 transition-transform">Breking Newws</button>
        </div>
        <button className="w-full md:w-72 py-4 bg-[#6366f1] text-white rounded-[1.5rem] font-bold text-xl shadow-xl shadow-indigo-200 hover:bg-opacity-90">
          search news
        </button>
      </div>
    </div>
  </section>
  </>
);

const FeatureCard = () => (
  <section className="py-16 px-8 md:px-24 bg-[#e5d5e1]">
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#c8b7e0] rounded-[2.5rem] overflow-hidden shadow-2xl p-6 md:p-10 gap-10 items-stretch">
      {/* العمود الزخرفي الأيسر */}
      
      <div className="hidden md:flex w-16 flex-shrink-0 bg-gradient-to-b from-[#5d172e] to-[#8c2a41] rounded-2xl items-center justify-center p-2">
         <div className="w-full h-full border-2 border-white/20 rounded-lg opacity-30"></div>
      </div>
      
      <div className="flex-grow flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-inner">
          <img src="images/NEWSS.jpg" alt="Feature" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-black text-black mb-8">Beyond the Headlines</h2>
            <p className="text-2xl text-[#6366f1] font-bold leading-snug mb-12">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gray-300 border-4 border-white shadow-lg overflow-hidden">
               <img src="https://via.placeholder.com/100" alt="Author" />
            </div>
            <span className="text-2xl font-bold text-black italic">john william</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NewsCard = () => (
  <div className="bg-[#bda7b2] rounded-[2.5rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
    <div className="relative h-64 w-full">
      <img src="images/news2.png" alt="News" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      <div className="absolute bottom-6 left-0 bg-white/40 backdrop-blur-md py-2 px-8 rounded-r-xl">
        <h3 className="text-[#5b5df5] font-black text-2xl tracking-tight">War On Gaza</h3>
      </div>
    </div>
    <div className="p-10">
      <p className="text-black text-lg leading-relaxed font-bold opacity-80">
        It has one principle and one motto that can be read individually, meaning each word on its own... (Elegance, Personality, Strength)
      </p>
    </div>
  </div>
);

const Pagination = () => (
  <div className="flex items-center justify-center gap-4 py-16">
    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b8b0e5] text-white text-2xl">«</button>
    <button className="w-14 h-16 flex items-center justify-center rounded-2xl bg-[#5b5df5] text-white font-black text-2xl shadow-lg shadow-indigo-300">1</button>
    <button className="w-14 h-16 flex items-center justify-center rounded-2xl bg-[#b8b0e5] text-white font-black text-2xl">2</button>
    <button className="w-14 h-16 flex items-center justify-center rounded-2xl bg-[#b8b0e5] text-white font-black text-2xl">3</button>
    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b8b0e5] text-white text-2xl">»</button>
  </div>
);

// --- الصفحة الرئيسية (Main Page) ---

export default function FigmaProject() {
  return (
    <>
    <div className="min-h-screen bg-[#d6cbd7] font-sans">
      <HeroSection />
      
      <FeatureCard />
      
      <section className="px-8 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <Pagination />
      </section>
    </div>
    <Footer/>
    </>
  );
}