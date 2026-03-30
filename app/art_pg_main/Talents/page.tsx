import React from 'react';

const TalentsPage = () => {
  return (
    <div className="min-h-screen bg-[#b1a2e3] font-sans pb-20">
      
      {/* 1. Hero Section - قسم الهيرو العلوي */}
      <section className="relative h-[550px] overflow-hidden bg-gray-900 text-white">
      <img 
  src="/images/talents.jpg" 
  alt="Gallery Background" 
  className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
/>
        
        {/* Pink Curtains - تأثير الستائر الوردية */}
        <div className="absolute left-0 top-0 h-full w-24 bg-[#ff8ec7] opacity-70 blur-2xl"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-[#ff8ec7] opacity-70 blur-2xl"></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-16 max-w-3xl">
          <h2 className="text-2xl font-semibold">Explore your</h2>
          <h1 className="text-7xl font-bold text-[#ff8ec7] mb-4">Talents</h1>
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-10 py-3 rounded-xl font-bold transition shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* 2. Top Talents - قسم السلايدر */}
      <section className="py-20 text-center">
        <h2 className="text-6xl font-black text-[#4f46e5] mb-4">Top Talents</h2>
        <p className="text-xl font-bold text-gray-800 mb-16">Top Events and In-depthg across the world</p>
        
        <div className="flex items-center justify-center gap-6 mb-12">
          {/* زر السهم الأيسر */}
          <button className="w-12 h-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center text-xl shadow-md">←</button>
          
          {/* منطقة البطاقات (مباشرة دون Props) */}
          <div className="flex gap-6 items-end">
            
            {/* بطاقة فنان 1 (يسار) */}
            <div className="bg-[#c4b5fd] rounded-2xl p-4 w-44 opacity-80 shadow-md">
              <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5" className="h-28 w-full object-cover rounded-xl mb-3" />
              <div className="text-left">
                <h4 className="font-bold text-base text-gray-900">Artists</h4>
                <p className="text-[10px] text-gray-800 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
              </div>
            </div>

            {/* البطاقة الكبيرة في المنتصف */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-72 transform scale-110 z-20 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1544967082-d9d25d867d66" className="h-48 w-full object-cover" />
              <div className="p-5 text-left">
                <h3 className="font-extrabold text-2xl text-gray-800">Gallery</h3>
                <p className="text-sm text-gray-600 italic mt-2 font-medium">
                  It has one principle and one motto that can be read individually, meaning each word on its own...
                </p>
                <p className="text-xs text-[#6366f1] font-bold mt-2">(Elegance, Personality, Strength)</p>
              </div>
            </div>

            {/* بطاقة فنان 2 (يمين) */}
            <div className="bg-[#c4b5fd] rounded-2xl p-4 w-44 opacity-80 shadow-md">
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f" className="h-28 w-full object-cover rounded-xl mb-3" />
              <div className="text-left">
                <h4 className="font-bold text-base text-gray-900">Artists</h4>
                <p className="text-[10px] text-gray-800 leading-tight mt-1">It has one principle and one motto that can be read individually...</p>
              </div>
            </div>

          </div>

          {/* زر السهم الأيمن */}
          <button className="w-12 h-12 rounded-full bg-[#6366f1] text-white flex items-center justify-center text-xl shadow-md">→</button>
        </div>

        {/* دوائر الترقيم السفلي */}
        <div className="flex justify-center gap-3">
          <div className="w-4 h-4 rounded-full bg-[#4f46e5]"></div>
          <div className="w-4 h-4 rounded-full bg-[#818cf8]"></div>
          <div className="w-4 h-4 rounded-full bg-[#818cf8]"></div>
          <div className="w-4 h-4 rounded-full bg-[#818cf8]"></div>
        </div>
      </section>

      {/* 3. Explore More - قسم المحتوى السفلي */}
      <section className="flex flex-col md:flex-row items-center gap-16 px-20 py-10">
        <div className="w-full md:w-2/5">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#ff8ec7] rounded-3xl blur opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1554907984-15263bfd63bd" 
              className="relative rounded-3xl shadow-2xl border-2 border-white w-full h-[350px] object-cover"
              alt="Art Exhibition"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="text-5xl font-black text-[#4f46e5] mb-8">Explore more</h2>
          <p className="text-xl text-gray-900 leading-relaxed font-semibold">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, in a single sentence, whether from right to left or left to right:
          </p>
          <p className="text-2xl font-black text-gray-800 mt-6 bg-white/30 inline-block px-4 py-2 rounded-lg">
            (Elegance, Personality, Strength)
          </p>
        </div>
      </section>

      {/* 4. Contact Bar - شريط التواصل */}
      <div className="px-12 mt-10">
        <div className="bg-[#9381d6] rounded-2xl p-5 flex justify-between items-center text-white shadow-2xl">
          <p className="text-lg font-bold tracking-wide">stay informed, share your talent with us & contact us</p>
          <button className="bg-[#6366f1] hover:bg-[#4f46e5] px-10 py-3 rounded-xl text-base font-black uppercase shadow-lg transition-all active:scale-95">
            send message
          </button>
        </div>
      </div>

      {/* 5. Bottom Pagination - أرقام الصفحات */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="w-10 h-10 flex items-center justify-center bg-[#a78bfa] rounded-lg text-white font-bold shadow">«</button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#6366f1] rounded-lg text-white font-black shadow-lg">1</button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#a78bfa] rounded-lg text-white font-bold shadow">2</button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#a78bfa] rounded-lg text-white font-bold shadow">3</button>
        <button className="w-10 h-10 flex items-center justify-center bg-[#a78bfa] rounded-lg text-white font-bold shadow">»</button>
      </div>

    </div>
  );
};

export default TalentsPage;