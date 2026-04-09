import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import {
  ArrowLeft,
  ArrowRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Teams_Of_The_Week() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden font-sans ">
        {/* 1. خلفية الصورة مع تأثير التدرج اللوني */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nature/world2.jpg"
            alt="Nature Landscape"
            className="w-full h-full object-cover"
          />
          {/* الطبقة البنفسجية الشفافة التي تغطي نصف التصميم كما في الصورة */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F178B6]/80 via-[#5D5FEF6E] to-transparent"></div>
        </div>

        {/* 2. الستائر الجانبية (محاكاة التأثير البصري) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10 hidden md:block"></div>

        {/* 3. محتوى النصوص والبحث */}
        <div className="relative z-20 max-w-4xl px-6 text-left">
          <h3 className="text-[#FFFFFF] text-[48px] font-semibold leading-[98px] ">
            Explore your
          </h3>

          <h1 className="text-black text-[96px] font-semibold leading-[98px]">
            Environment
          </h1>

          {/* شريط البحث الممتد (Search Bar) */}
          <div className="relative group max-w-3xl">
            <button className="w-full bg-[#5D5FEF]/60 backdrop-blur-md  py-4 px-8 rounded-full text-black text-2xl font-bold text-center hover:bg-[#ec82ab]/80 transition-all shadow-xl">
              search
            </button>
            {/* تأثير الظل تحت الزر كما في الفيقما */}
            <div className="absolute -bottom-1 inset-x-4 h-full bg-black/10 blur-lg -z-10 rounded-full"></div>
          </div>
        </div>
      </section>
      <div className="min-h-screen w-full bg-[#F178B6]/40 p-10 flex flex-col items-center font-sans">
        {/* Heading Section */}
        <h1 className="text-6xl font-black text-black mb-16  tracking-tighter">
          he
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 max-w-7xl">
          {/* Card 1 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative group">
            {/* Background Layers for Styling */}
            <div className="absolute -inset-4  rounded-sm translate-x-2 translate-y-2"></div>
            <div className="absolute -inset-2 bg-purple-900/20 blur-sm"></div>

            <div className="relative bg-[#2a2a2a] overflow-hidden shadow-2xl border border-black">
              <img
                src="/images/nature/freepik3.jpg"
                alt="Hourglass Earth"
                className="w-full h-64 object-cover grayscale-[0.2]"
              />
              <div className="p-0 relative">
                <div className="absolute -top-10 left-0 bg-[#F178B6A3] px-6 py-2">
                  <span className="text-[40px] font-bold text-black italic">
                    Earth
                  </span>
                </div>
                <div className="bg-[#333333] p-6 pt-10">
                  <p className="text-[16px] leading-relaxed text-gray-200">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
      <section className="w-full min-h-screen bg-[#0d1b1e] flex items-center justify-center p-6 md:p-12 font-sans">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Explore more about <br />
              <span className="relative inline-block">
                Nature
                {/* ظل خلفي خفيف للنص لمحاكاة التأثير في الصورة */}
                <span className="absolute inset-0 text-indigo-500/30 blur-sm -z-10 translate-x-1 translate-y-1">
                  Nature
                </span>
              </span>
            </h2>

            <p className="text-[#d966a0] text-xl md:text-2xl max-w-lg leading-relaxed font-medium">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>

            <button className="w-fit bg-[#6366f1] hover:bg-[#5254e0] text-white font-bold py-3 px-12 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] uppercase tracking-wider text-sm">
              more
            </button>
          </div>

          {/* Right Image Container */}
          <div className="relative group cursor-pointer">
            {/* Main Image */}
            <div className="rounded-sm overflow-hidden border border-white/5 shadow-2xl">
              <img
                src="/images/nature/plant2.jpg" // استبدل المسار بصورتك
                alt="Nature Plant"
                className="w-full h-auto object-cover aspect-[4/3] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* الدائرة الخلفية الشفافة */}
                <div className="absolute inset-0 bg-[#5b65a5]/60 rounded-full blur-sm"></div>
                {/* مثلث التشغيل الوردي */}
                <div className="relative z-10 w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#e68eb5] border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen w-full bg-[#d1b3ff] flex flex-col items-center py-16 px-4 font-sans relative overflow-hidden">
        {/* Background Overlay لمحاكاة النقوش في الخلفية */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

        {/* Main Title */}
        <h2 className="relative z-10 text-white text-[64px] md:text-5xl font-bold mb-16 tracking-wide drop-shadow-md">
          MEET OUR TEAM
        </h2>

        {/* Cards Container */}
        <div className="relative z-10 flex flex-wrap justify-center items-end gap-6 mb-16 w-full max-w-6xl">
          {/* Card 1 - Large / Purple */}
          <div className="w-[280px] h-[380px] bg-[#9a9df5] rounded-[20px] p-6 flex flex-col items-center shadow-xl transform transition-transform hover:scale-105">
            <div className="w-full h-32 rounded-[40px] overflow-hidden mb-8 border-2 border-white/20">
              <img
                src="/images/person3.png"
                alt="Team 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-2xl font-bold text-center leading-tight drop-shadow-sm">
              Beyond the <br /> Headlines
            </h3>
          </div>

          {/* Card 2 - Medium / Pink-Purple */}
          <div className="w-[260px] h-[340px] bg-[#d3a1e3] rounded-[20px] p-6 flex flex-col items-center shadow-xl transform transition-transform hover:scale-105">
            <div className="w-full h-28 rounded-[40px] overflow-hidden mb-6 border-2 border-white/20">
              <img
                src="/images/person9.jpg"
                alt="Team 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold text-center leading-tight drop-shadow-sm">
              Beyond the <br /> Headlines
            </h3>
          </div>

          {/* Card 3 - Small / Light Purple */}
          <div className="w-[180px] h-[240px] bg-[#d197e0] rounded-[20px] p-4 flex flex-col items-center shadow-xl transform transition-transform hover:scale-105">
            <div className="w-full h-20 rounded-[30px] overflow-hidden mb-4 border-2 border-white/20">
              <img
                src="/images/women3.jpg"
                alt="Team 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-base font-bold text-center leading-tight drop-shadow-sm">
              Beyond the <br /> Headlines
            </h3>
          </div>
        </div>

        {/* Carousel Controls (Arrows and Dots) */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Simple Arrows & Dots */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white shadow-lg">
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full bg-white/40 border border-white/20"
                ></div>
              ))}
            </div>
            <button className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center text-white shadow-lg">
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Numbers Pagination */}
          <div className="flex items-center gap-4 bg-white/20 p-2 rounded-2xl backdrop-blur-sm">
            <button className="text-white hover:text-indigo-200">
              <ChevronsLeft size={32} />
            </button>

            <div className="flex gap-2">
              <span className="w-12 h-12 flex items-center justify-center bg-[#6366f1] text-white text-2xl font-bold rounded-lg shadow-md cursor-pointer">
                1
              </span>
              <span className="w-12 h-12 flex items-center justify-center text-white text-2xl font-bold hover:bg-white/10 rounded-lg cursor-pointer">
                2
              </span>
              <span className="w-12 h-12 flex items-center justify-center text-white text-2xl font-bold hover:bg-white/10 rounded-lg cursor-pointer">
                3
              </span>
            </div>

            <button className="text-white hover:text-indigo-200">
              <ChevronsRight size={32} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
