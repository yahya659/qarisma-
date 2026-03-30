import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';

const ArtVibePortal = () => {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="relative min-h-screen  font-sans antialiased overflow-x-hidden text-slate-900">
      
      {/* 1. الخلفية الثابتة (صورة + طبقة لون) */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/reports2.png" 
          className="w-full h-full object-cover" 
          alt="background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C4B5FD]/60 to-[#D8CCFA]" />
      </div>

      <div className="relative z-10 p-4 md:p-10 max-w-7xl mx-auto">
        
        {/* 2. الهيدر (Header) */}
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

        {/* 3. القسم الرئيسي (Hero + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* فيديو رئيسي بإطار ذهبي مضيء */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border-[6px] border-[#8b6e2d] shadow-2xl bg-black aspect-video group">
            <img 
              src="/images/news2.png" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              alt="main content"
            />
            {/* زر تشغيل SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 p-5 rounded-full backdrop-blur-md cursor-pointer hover:scale-110 transition-all">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/40 to-transparent">
              <h2 className="text-3xl font-black text-[#6366F1] mb-2">Beyond the Headlines</h2>
              <p className="text-sm text-gray-200 leading-relaxed max-w-lg">
                It has one principle and one motto that can be read individually, meaning each word on its own...
              </p>
            </div>
          </div>

          {/* القائمة الجانبية (Sidebar) */}
         
        </div>

        {/* 4. قسم الاستكشاف (Explore More About Art) */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-white mb-2">Explore More About Art</h2>
            <p className="text-xl font-bold text-black">Top show and In-depth across the world</p>
          </div>

           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {/* البطاقة الأولى - Gallery */}
              <div className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col">
                <div className="relative h-64 bg-gray-200">
                  {/* مكان الصورة */}
                  <img
                    src="/images/artival1.png"
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                  {/* الملصق الزجاجي */}
                  <div className="absolute bottom-6 left-0 bg-[#BD9FA9]/60 backdrop-blur-md px-10 py-3 rounded-tr-2xl">
                    <span className="text-3xl font-bold text-white uppercase">
                      Gallery
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-black leading-relaxed font-semibold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>

              {/* البطاقة الثانية - Artists */}
              <div className="bg-[#5D5FEF45] rounded-[40px] shadow-xl overflow-hidden p-3 flex flex-col">
                <div className="relative h-60 rounded-[30px] overflow-hidden">
                  <img
                    src="/images/artival2.jpg"
                    alt="Artists"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 bg-[#5D5FEFF0]/60 backdrop-blur-sm px-6 py-1">
                    <span className="text-2xl font-bold text-white uppercase">
                      Artists
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-black leading-relaxed font-bold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>

              {/* البطاقة الثالثة - Artists (مكررة) */}
              <div className="bg-[#5D5FEF45] rounded-[40px] shadow-xl overflow-hidden p-3 flex flex-col">
                <div className="relative h-60 rounded-[30px] overflow-hidden">
                  <img
                    src="/images/artival2.jpg"
                    alt="Artists"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 bg-[#5D5FEFF0]/60 backdrop-blur-sm px-6 py-1">
                    <span className="text-2xl font-bold text-white  uppercase">
                      Artists
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-black leading-relaxed font-bold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* 5. الفوتر والتحكم (Pagination) */}
        <footer className="flex justify-center items-center gap-4 pb-20">
          <button className="bg-[#6366F1] p-3 rounded-full text-white shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="flex gap-2">
             <div className="w-10 h-10 bg-white text-[#6366F1] flex items-center justify-center font-black rounded-lg shadow-md">1</div>
             <div className="w-10 h-10 bg-[#6366F1]/40 text-white flex items-center justify-center font-black rounded-lg">2</div>
             <div className="w-10 h-10 bg-[#6366F1]/40 text-white flex items-center justify-center font-black rounded-lg">3</div>
          </div>
          <button className="bg-[#6366F1] p-3 rounded-full text-white shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </footer>
        <Footer/>

      </div>
      
    </div>
    
    </>
  );
};

export default ArtVibePortal;