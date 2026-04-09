import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Play } from "lucide-react";

export default function outook_world() {
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
      <nav className="w-full bg-[#B074B8] py-6 px-4 flex justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* زر All - اللون الوردي المميز */}
          <button className="bg-[#F178B6] text-white w-[167px] h-[56px] flex items-center justify-center rounded-2xl font-bold text-[32px] shadow-md hover:bg-[#e0759e] transition-all transform hover:scale-105">
            All
          </button>

          {/* زر Forests */}
          <button className="bg-[#5D5FEF85] text-white w-[167px] h-[56px] flex items-center justify-center rounded-2xl font-bold text-[32px] shadow-md hover:bg-[#e0759e] transition-all transform hover:scale-105">
            Forests
          </button>

          {/* زر Sea & Beaches */}
          <button className="bg-[#5D5FEF85] text-white w-[167px] h-[56px] flex items-center justify-center rounded-2xl font-bold text-[22px] shadow-md hover:bg-[#e0759e] transition-all transform hover:scale-105">
            Sea & Beaches
          </button>

          {/* زر Mountains */}
          <button className="bg-[#5D5FEF85] text-white w-[167px] h-[56px] flex items-center justify-center rounded-2xl font-bold text-[32px] shadow-md hover:bg-[#e0759e] transition-all transform hover:scale-105">
            Mountains
          </button>

          {/* زر islands */}
          <button className="bg-[#5D5FEF85] text-white w-[167px] h-[56px] flex items-center justify-center rounded-2xl font-bold text-[32px] shadow-md hover:bg-[#e0759e] transition-all transform hover:scale-105">
            islands
          </button>
        </div>
      </nav>
      {/* 1. قسم Trending outlooks */}
      <section className="py-16 px-6 container mx-auto b bg-[#F178B6A3]/60 backdrop-blur-md">
        <div className="flex justify-between items-center mb-10 text-white">
          <h2 className="text-[48px] font-extrabold tracking-tight">
            Trending outlooks
          </h2>
          <button className="text-[40px] font-medium hover:underline">
            view all
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
      {/* Culture and outlook (الصور المتداخلة)  */}
      <section className="bg-[#5D5FEF85] py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-[50px] text-[#F178B6] font-bold">
              Culture and outlook
            </h2>
            <p className="text-[36px] font-bold ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="bg-[#6366f1] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#4f46e5] transition-all">
              Explore More
            </button>
          </div>

          {/* الصور المتداخلة */}
          <div className="relative h-[400px] w-full ">
            {/* الصورة الكبيرة في الخلف */}
            <div className="absolute right-0 top-0 w-4/5 h-4/5  overflow-hidden border-20 border-[#F178B6A3]/40 shadow-2xl">
              <img
                src="/images/nature/wild11.jpg"
                alt="Background"
                className="object-cover"
              />
            </div>
            {/* الصورة الصغيرة في الأمام */}
            <div className="absolute  left-0 bottom-0 w-3/5 h-1/2 overflow-hidden border-20 border-[#5D5FEF85] shadow-2xl z-10">
              <img
                src="/images/nature/wild8.jpg"
                alt="Foreground"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#F178B6A3]/60 py-20 px-6 font-sans">
        <div className="container mx-auto max-w-6xl">
          {/* العنوان الرئيسي */}
          <h2 className="text-white text-[48px] md:text-5xl font-black text-center mb-16 tracking-tight">
            Explore more about our programs
          </h2>

          {/* منطقة السلايدر المتداخل (Cards Carousel) */}
          <div className="relative flex items-center justify-center h-[500px] mb-20">
            {/* سهم يسار */}
            <button className="absolute left-0 z-30 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8 rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* الكرت الجانبي (يسار) */}
            <div className="absolute left-4 md:left-20 transform scale-75  z-10 bg-[#e4c7e6]  p-4 w-72 md:w-80 shadow-xl border-4 border-white/30 hidden md:block">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-300">
                <img
                  src="/images/nature/plant2.jpg"
                  alt="Main Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="text-[#ec82ab] fill-[#ec82ab] w-10 h-10" />
                </div>
              </div>
              <h3 className="text-[#000000] font-bold text-[25px] mb-2 text-center">
                Eco-friendly projects
              </h3>
              <p className="text-[#000000] text-[22px] text-center leading-relaxed">
                It has one principle and one motto that can be read
                individually...
              </p>
            </div>

            {/* الكرت المركزي (الأمامي) */}
            <div className="relative z-20 bg-[#e4c7e6]  p-6 w-80 md:w-[450px] ">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 group cursor-pointer shadow-inner">
                <img
                  src="/images/nature/plant1.jpg"
                  alt="Main Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all">
                  <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <Play className="text-white fill-white w-8 h-8 ml-1" />
                  </div>
                </div>
              </div>
              <div className="text-center space-y-3 px-2 pb-4">
                <h3 className="text-[#000000]  font-bold text-[30px]">
                  Eco-friendly projects
                </h3>
                <p className="text-[#5D5FEF] font-bold text-[15px] leading-relaxed italic">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>

            {/* الكرت الجانبي (يمين) */}
            <div className="absolute right-4 md:right-20 transform scale-75 z-10 bg-[#e4c7e6]  p-4 w-72 md:w-80 shadow-xl border-4 border-white/30 hidden md:block">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-300">
                <img
                  src="/images/nature/plant2.jpg"
                  alt="Main Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="text-[#ec82ab] fill-[#ec82ab] w-10 h-10" />
                </div>
              </div>
              <h3 className="text-[#000000] font-bold text-[25px] mb-2 text-center">
                Eco-friendly projects
              </h3>
              <p className="text-[#000000] text-[22px] text-center leading-relaxed">
                It has one principle and one motto that can be read
                individually...
              </p>
            </div>

            {/* سهم يمين */}
            <button className="absolute right-0 z-30 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* نقاط التصفح الملونة */}
          <div className="flex justify-center gap-4 mb-24">
            <span className="w-5 h-5 rounded-full bg-[#6366f1]"></span>
            <span className="w-5 h-5 rounded-full bg-[#7c3aed]"></span>
            <span className="w-5 h-5 rounded-full bg-[#ec82ab]"></span>
            <span className="w-5 h-5 rounded-full bg-[#e0759e]"></span>
          </div>

          {/* بار التواصل السفلي (Stay informed) */}
          <div className="bg-[#F178B6A3] backdrop-blur-sm rounded-[2.5rem] p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl border-[12px] border-white/10">
            <h3 className="text-white text-[32px] md:text-2xl font-bold tracking-tight text-center md:text-left">
              stay informed, learn more & contact us
            </h3>
            <button className="bg-[#5D5FEF] hover:bg-[#5254e0] text-white px-12 py-4 rounded-2xl font-extrabold text-lg shadow-lg transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider">
              send message
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
