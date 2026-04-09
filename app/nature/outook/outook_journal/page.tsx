import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function outook_journal(){
    return (
        <>
          <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
         <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden font-sans">
        {/* 1. خلفية الصورة مع تأثير التدرج اللوني */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nature/world1.jpg"
            alt="Nature Landscape"
            className="w-full h-full object-cover"
          />
          {/* الطبقة البنفسجية الشفافة التي تغطي نصف التصميم كما في الصورة */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F178B6]/40 via-[#5D5FEF]/20 to-transparent"></div>
        </div>

        {/* 2. الستائر الجانبية (محاكاة التأثير البصري) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10 hidden md:block"></div>

        {/* 3. محتوى النصوص والبحث */}
        <div className="relative z-20 max-w-4xl px-6 text-left">
          <h3 className="text-black text-[48px] font-semibold leading-[98px] ">
            Explore your
          </h3>

          <h1 className="text-black text-[96px] font-semibold leading-[98px]">
            Destination
          </h1>

          <p className="text-white text-[40px] font-medium leading-[50px] tracking-[0.1px] max-w-2xl mb-10   bg-white/0 align-middle">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>

          {/* شريط البحث الممتد (Search Bar) */}
          <div className="relative group max-w-3xl">
            <button className="w-full bg-[#F178B6A3]/60 backdrop-blur-md border-2 border-[#F178B6A3]/40 py-4 px-8 rounded-full text-black text-2xl font-bold text-center hover:bg-[#ec82ab]/80 transition-all shadow-xl">
              search
            </button>
            {/* تأثير الظل تحت الزر كما في الفيقما */}
            <div className="absolute -bottom-1 inset-x-4 h-full bg-black/10 blur-lg -z-10 rounded-full"></div>
          </div>
        </div>
      </section>
      
        <section className="min-h-screen bg-[#F178B6A3] font-sans">
      {/* 1. الجزء العلوي (Trending & Headlines) */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* النص (يسار) */}
        <div className="space-y-8">
          <div className="inline-block bg-[#F178B6A3] px-8 py-3 rounded-md">
            <span className="text-[#5D5FEF] text-[48px] font-black italic tracking-tighter">
              trending
            </span>
          </div>
          
          <h2 className="text-white text-[48px] md:text-6xl font-black leading-tight">
            Beyond the Headlines
          </h2>
          
          <p className="text-[#000000] text-[32px] font-bold leading-relaxed max-w-xl">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          
          <button className="bg-[#5D5FEF] text-white px-12 py-4 rounded-2xl font-black text-xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform">
            Learn More
          </button>
        </div>

        {/* الصور المتداخلة (يمين) */}
        <div className="relative h-[500px] w-full">
          {/* الصورة الكبيرة في الخلف */}
          <div className="absolute right-0 top-0 w-[85%] h-[90%] rounded-[3rem] overflow-hidden  border-10 border-[#5D5FEFAB]">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
              alt="Mountain view" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* الصورة الصغيرة المتداخلة في الأمام */}
          <div className="absolute left-0 bottom-4 w-[65%] h-[55%] rounded-[2rem] overflow-hidden  z-10">
            <div className="absolute inset-0 bg-[#6366f1]/20 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
              alt="Village view" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. شريط التنقل السفلي (Latest Stories) */}
      <div className="w-full bg-[#9B7CB8] py-8 mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 border-b border-white/30 pb-4">
            <h3 className="text-[#000000] text-[32px] font-black cursor-pointer hover:text-white transition">
              Latest stories
            </h3>
            <span className="text-[#FFFFFF] text-[24px] font-bold cursor-pointer opacity-80 hover:opacity-100">
              Travel Diaries
            </span>
            <span className="text-[#FFFFFF] text-[24px] font-bold cursor-pointer opacity-80 hover:opacity-100">
              Photography Tips
            </span>
            <span className="text-[#FFFFFF] text-[24px] font-bold cursor-pointer opacity-80 hover:opacity-100">
              Popular
            </span>
          </div>
        </div>
      </div>
    </section>
     <section className="min-h-screen bg-[#F178B6A3] font-sans">
        <br/>
        <br/>
        <br/>
      <div className="container mx-auto max-w-6xl bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* الجانب الأيسر: الصورة */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="/images/nature/village3.jpg" 
              alt="Sea Landscape" 
              className="w-[787.4896240234375] h-[644.2218017578125] object-cover"
            />
          </div>

          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="flex flex-col space-y-6">
            
            {/* بطاقة العنوان الفرعي (Featured Story) */}
            <div className="self-start bg-white px-6 py-2 rounded-full shadow-md">
              <span className="text-[#6366f1] font-bold text-[36px] tracking-wide">
                Featured Story
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-white text-[64px] md:text-5xl font-black leading-tight drop-shadow-sm">
              Beyond the Headlines
            </h2>

            {/* النص الوصفي */}
            <p className="text-[#000000] text-[32px] font-bold leading-relaxed max-w-lg">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
            </p>

            {/* زر القراءة */}
            <button className="self-start mt-4 bg-[#FFFFFF8F]/56 backdrop-blur-sm border-2 border-[#6366f1]/30 text-[#6366f1] px-10 py-3 rounded-xl font-black text-xl hover:bg-[#6366f1] hover:text-white transition-all shadow-lg active:scale-95">
              Read full story
            </button>
          </div>

        </div>
      </div>
     </section>
     <section className="py-16 px-6 container mx-auto b bg-[#F178B6A3]/60 backdrop-blur-md">
        <div className="flex justify-between items-center mb-10 text-white">
          <h2 className="text-[64px] text-[#000000] font-extrabold tracking-tight">
           Recent Articles
          </h2>
          <button className="text-[40px] text-[#000000] font-solid hover:underline">
           all articles
          </button>
        </div>

        {/* شبكة الكروت - يدوياً */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {/* الكرت الأول: Sea & oceans */}
          <div className="bg-[#F178B6]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Sea"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Sea & oceans</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الثاني: village */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Village"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">village</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الثالث: Mountain */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village3.jpg"
                alt="Mountain"
                className="w-full  object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Mountain</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* الكرت رابع: Sea & oceans */}
          <div className="bg-[#F178B6]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Sea"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Sea & oceans</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الخامس: village */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Village"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">village</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت السادس: Mountain */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village3.jpg"
                alt="Mountain"
                className="w-full  object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Mountain</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* الكرت رابع: Sea & oceans */}
          <div className="bg-[#F178B6]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Sea"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Sea & oceans</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الخامس: village */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Village"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">village</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت السادس: Mountain */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village3.jpg"
                alt="Mountain"
                className="w-full  object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Mountain</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>
        </div>

        {/* نقاط وأسهم التصفح */}
        <div className="flex justify-center items-center gap-4">
          <button className="bg-[#6366f1] p-3 rounded-full text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5 rotate-180"
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
          </div>
          <button className="bg-[#6366f1] p-3 rounded-full text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </section>
      <div className="relative min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#8a70f5] via-[#a686ef] to-[#ee8bb1]">
        {/* يمكنك إضافة صورة خلفية هنا بـ opacity منخفضة لمحاكاة النمط الموجود في الصورة */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
        
        {/* Header */}
        <h1 className="mb-8 text-[#F178B6] font-bold leading-tight md:text-[64px] lg:text-6xl ">
          Join our community & share your feedback with us
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-[36px] leading-relaxed text-[#FFFFFF">
          It has one principle and one motto that can be read 
          individually, meaning each word on its own, or as a whole, 
          we believe that reality and maturity are core for truth
        </p>

        {/* Primary Button */}
        <button className="mb-24 rounded-lg bg-[#5D5FEF] px-8 py-3 font-semibold text-[24px] transition-transform hover:scale-105 active:scale-95 shadow-lg">
          join & share
        </button>

        {/* Glassmorphism Contact Bar */}
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/20 bg-[#F178B6A3] p-6 backdrop-blur-md shadow-2xl">
          <span className="text-[32px] font-medium text-white/90">
            stay informed, learn more & contact us
          </span>
          <button className="rounded-xl bg-[#6366f1] px-10 py-3 font-medium text-white transition-all hover:bg-[#5254e0] shadow-md">
            send message
          </button>
        </div>

      </div>
    </div>
    <Footer/>

</>
    );
}