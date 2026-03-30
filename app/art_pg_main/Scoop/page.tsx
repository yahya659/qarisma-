import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';

const LatestStoriesPage = () => {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="relative min-h-screen bg-[#C4B5FD]/80 text-white font-sans p-4 md:p-8 overflow-x-hidden">
      
      {/* 1. Header Section */}
      <header className="max-w-7xl mx-auto mb-10">
        <h1 className="text-5xl font-extrabold text-[#4F46E5] mb-2 tracking-tight">Latest stories</h1>
        <p className="text-xl text-black font-bold mb-8">Top headlines and In-depthg across the world</p>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#EC4899] px-8 py-2.5 rounded-lg font-bold shadow-lg">Top</button>
            <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">Artists</button>
            <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">Galleries</button>
            <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">Feativals</button>
          </div>
          <div className="w-full md:w-64">
            <button className="w-full bg-[#6366F1] py-2.5 px-6 rounded-lg font-bold shadow-lg text-right opacity-90">
              search
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Grid (Hero + Sidebar) */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Featured Video (الإطار الذهبي) */}
        <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden border-[6px] border-yellow-600/60 shadow-2xl bg-black">
          {/* الصورة الداخلية */}
          <img 
            src="/images/NEWSS.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          {/* زر التشغيل */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 p-5 rounded-full backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          {/* النص فوق الفيديو */}
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/60 to-transparent">
            <h2 className="text-3xl font-extrabold text-[#6366F1] mb-2">Beyond the Headlines</h2>
            <p className="text-sm text-gray-200 leading-relaxed max-w-lg font-medium">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 ">
          <section className='bg-[#5D5FEF4A]'>
            <h3 className=" font-black mb-4 text-[#FFFFFF] uppercase text-lg">EIDIORS PICKS</h3>
            <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl border-l-4 border-blue-600 mb-3 hover:bg-white/40 transition">
              <h4 className="font-bold text-blue-950">Beyond the Headlines</h4>
              <p className="text-[10px] text-gray-800 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
            </div>
            <div className="bg-pink-400/40 backdrop-blur-md p-4 rounded-xl border-l-4 border-pink-500 hover:bg-pink-400/50 transition">
              <h4 className="font-bold text-pink-950">Beyond the Headlines</h4>
              <p className="text-[10px] text-gray-800 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
            </div>
          </section>
          
          <section className='bg-[5D5FEF4A]'>
            <h3 className=" font-black mb-4 uppercase  text-[#FFFFFF] text-lg">Newspaper</h3>
            <div className="bg-[#F178B6] backdrop-blur-md p-4 rounded-xl mb-3">
              <h4 className="font-bold text-white">Beyond the Headlines</h4>
              <p className="text-[10px] text-white/80 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
            </div>
            <div className="bg-[#F178B6] backdrop-blur-md p-4 rounded-xl">
              <h4 className="font-bold text-white">Beyond the Headlines</h4>
              <p className="text-[10px] text-white/80 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
            </div>
          </section>
        </div>
      </main>

      {/* 3. Grid of Story Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-yellow-700/40 shadow-xl group">
             <img 
               src="/images/NEWSS.jpg" 
               alt="Story" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        ))}
      </section>

      {/* 4. Pagination */}
      <footer className="flex justify-center items-center gap-4 pb-12">
        <button className="bg-[#6366F1] p-2.5 rounded-xl shadow-lg hover:bg-blue-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
        </button>
        <div className="flex gap-2">
          <button className="w-12 h-12 bg-white text-[#6366F1] font-bold rounded-xl shadow-inner">1</button>
          <button className="w-12 h-12 bg-[#6366F1]/40 text-white font-bold rounded-xl shadow-lg">2</button>
          <button className="w-12 h-12 bg-[#6366F1]/40 text-white font-bold rounded-xl shadow-lg">3</button>
        </div>
        <button className="bg-[#6366F1] p-2.5 rounded-xl shadow-lg hover:bg-blue-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
        </button>
      </footer>

    </div>
    <Footer/>
    </>
  );
};

export default LatestStoriesPage;