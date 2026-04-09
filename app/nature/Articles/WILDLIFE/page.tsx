import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const cards = [
    { img: "/images/nature/climate1.png" },
    { img: "/images/nature/climate2.jpg" },
    { img: "/images/nature/climate3.jpg" },
    { img: "/images/nature/climate4.jpg" },
  ];
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden font-sans">
        {/* الخلفية الرئيسية - استبدل المسار بصورتك */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/nature/weather1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* طبقة تعتيم خفيفة لتحسين قراءة النص */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* الحاوية الرئيسية للمحتوى */}
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* القسم الأيسر: النصوص والصورة الصغيرة */}
          <div className="flex flex-col space-y-6">
            <div className="relative">
              {/* الصورة الصغيرة العلوية مع تأثير الزجاج الخلفي */}
              <div className="absolute -top-12 -left-8 w-64 h-48 bg-white/10 backdrop-blur-md rounded-xl z-0"></div>
              <img
                src="/images/nature/weather1.jpg"
                alt="Nature"
                className="relative z-10 w-64 h-44 object-cover rounded-lg shadow-2xl"
              />

              {/* العنوان الرئيسي */}
              <h1 className="relative z-20 -mt-10 text-white text-5xl md:text-7xl font-bold leading-tight">
                Beyond the <br /> Headlines
              </h1>
            </div>

            {/* الوصف القصير */}
            <p className="max-w-md text-white/90 text-lg leading-relaxed drop-shadow-md">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </p>

            {/* زر Learn More */}
            <button className="w-fit px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-lg active:scale-95">
              Learn More
            </button>
          </div>

          {/* القسم الأيمن: مشغل الفيديو (Thumbnail) */}
          <div className="flex justify-center md:justify-end relative">
            {/* الإطار الزجاجي الكبير خلف الفيديو */}
            <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl">
              <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl group">
                <img
                  src="/images/nature/weather1.jpg"
                  alt="Video Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* أيقونة التشغيل الوسطى */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-indigo-500/80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-600 transition-colors shadow-2xl">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-white ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen w-full bg-gradient-to-br from-[#c084fc]/40 to-[#a78bfa]/31 py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 🟣 Left Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-xl p-4 rounded-xl shadow-xl relative"
              >
                {/* صورة */}
                <div className="relative">
                  <img
                    src={card.img}
                    className="w-full h-[220px] object-contain rounded-md"
                  />

                  {/* Label */}
                  <div className="absolute bottom-2 left-2 bg-pink-400/80 px-4 py-1 text-black font-bold text-xl">
                    Earth
                  </div>
                </div>

                {/* نص */}
                <p className="text-[#5D5FEF] text-[16px] font-bold mt-4 leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            ))}
          </div>

          {/* 🟣 Right Sidebar */}
          <div className="flex flex-col gap-6 bg-[#5D5FEF30]  ">
            <h2 className="text-white font-bold text-xl  ml-6 mt-6 ">
              The Newpaper
            </h2>

            {[1, 2].map((item) => (
              <div key={item} className="flex flex-col gap-4  ">
                {/* Card Pink */}
                <div className="bg-pink-400/30 backdrop-blur-md p-4 rounded-xl shadow-md">
                  <h3 className="font-bold text-black">Beyond the Headlines</h3>
                  <p className="text-[#5D5FEF] text-black/80">
                    It has one principle and one motto that can be read
                    individually.
                  </p>
                </div>

                {/* Card White */}

                <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md">
                  <h3 className="font-bold text-black">Beyond the Headlines</h3>
                  <p className="text-sm text-black/70">
                    It has one principle and one motto that can be read
                    individually.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔢 Pagination */}
        {/* <div className="flex justify-center items-center gap-4 mt-16">
          <button className="text-white text-2xl">«</button>

          {[1, 2].map((num) => (
            <button
              key={num}
              className={`w-10 h-10 rounded-lg ${
                num === 1 ? "bg-[#5D5FEF] text-white" : "bg-white/40 text-white"
              }`}
            >
              {num}
            </button>
          ))} */}

          {/* <Link href="/nature/Articles/climate/nextpage"> */}
            {/* <button className="text-white text-2xl">»</button> */}
          {/* </Link> */}
        {/* </div> */}
      </section>
      <div className="flex flex-col w-full h-full">
        {/* الحاوية الرئيسية للمحتوى (الصورة + النص) */}
        <div className="bg-gradient-to-r from-[#c084fc]/40 to-[#F178B64F]/31 backdrop-blur-md p-10 shadow-xl flex flex-col md:flex-row gap-12 items-center flex-grow">
          {/* الصورة */}
          <div className="relative w-full max-w-[529px] h-[400px] md:h-[591px]">
            <img
              src="/images/nature/climate4.jpg"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              alt="Climate Change"
            />
          </div>

          {/* النص */}
          <div className="flex flex-col justify-center h-full md:w-1/2 items-start text-left">
            <span className="text-[#5D5FEF] bg-[#FFFFFF6E] font-bold text-[32px] md:text-[48px] px-4 rounded-lg mb-4">
              climate change
            </span>

            <h2 className="text-[#000000] text-[40px] md:text-[64px] font-bold mb-4 leading-tight">
              Beyond the Headlines
            </h2>

            <p className="text-[#FFFFFF] text-[20px] md:text-[30px] leading-relaxed max-w-[500px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>

            <button className="mt-8 w-[180px] h-[50px] rounded-xl bg-[#5D5FEF] text-[#FFFFFF] shadow-lg hover:bg-[#4f46e5] transition font-bold">
              Read Full Story
            </button>
          </div>
        </div>

        {/* قسم الأرقام (Pagination) - الآن يظهر تحت البوتن والمحتوى بالكامل */}
        <div className="flex justify-center items-center gap-4 py-8 bg-black/10 backdrop-blur-sm">
          <button className="text-white text-2xl hover:scale-110 transition">
            «
          </button>

          {[1, 2].map((num) => (
            <button
              key={num}
              className={`w-10 h-10 rounded-lg font-bold transition-all ${
                num === 1
                  ? "bg-[#5D5FEF] text-white shadow-lg"
                  : "bg-[#5D5FEF6E] text-white hover:bg-white/60"
              }`}
            >
              {num}
            </button>
          ))}

          <Link href="/nature/Articles/WILDLIFE/nextpage">
            <button className="text-white text-2xl hover:scale-110 transition">
              »
            </button>
          </Link>
        </div>
        {/* <Footer/> */}
      </div>
      
    </>
  );
};

export default HeroSection;
