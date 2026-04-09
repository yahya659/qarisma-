import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Weldnextpage() {
  return (
    <>
      <Header />
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
      {/* الحاوية الرئيسية - أضفنا justify-center لتوسيط الكروت */}
      <div className="bg-gradient-to-br from-[#c084fc]/40 to-[#a78bfa]/31 min-h-screen p-10 flex flex-col items-center font-sans overflow-hidden">
        {/* 1. قسم العنوان والوصف العلوي */}
        <div className="text-center mb-12 max-w-3xl">
          <h2 className="text-[#FFFFFF] text-[64px] font-bold mb-4">
            Explore More Stories
          </h2>
          <p className="text-[#000000] text-[40px]  font-bold">
            It has one principle and one motto that can be read individually,
            meaning each word on its own
          </p>
        </div>

        {/* 2. منطقة الكروت مع أزرار التنقل الجانبية */}
        <div className="relative flex items-center justify-center w-full gap-4 md:gap-8 mb-10">
          {/* حاوية الكروت */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* كارد 1 */}
            <div className="relative w-[300px] h-[420px] bg-[#222]  overflow-hidden shadow-2xl ">
              <img
                src="/images/nature/Rectangle3.png"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-10 text-white text-xs leading-tight">
                It has one principle and one motto that can be read
                individually...
              </div>
            </div>

            {/* كارد 2 (الأوسط - أكبر قليلاً) */}
            <div className="relative w-[320px] h-[450px] bg-[#222] overflow-hidden shadow-2xl  transform scale-105 z-10">
              <img
                src="/images/nature/freepik3.jpg"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[200px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-12 text-white text-sm leading-snug">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole...
              </div>
            </div>

            {/* كارد 3 */}
            <div className="relative w-[300px] h-[420px] bg-[#222] overflow-hidden shadow-2xl">
              <img
                src="/images/nature/freepik2.jpg"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-10 text-white text-xs leading-tight">
                It has one principle and one motto that can be read
                individually...
              </div>
            </div>
          </div>
        </div>

        {/* 3. مؤشرات النقاط (Dots) */}
        <div className="flex gap-3 mb-8">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <div className="w-6 h-6 rounded-full bg-white/40"></div>
          <div className="w-6 h-6 rounded-full bg-white/60"></div>
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
        </div>

        {/* 4. الترقيم السفلي (Pagination) */}
        <div className="flex items-center gap-4">
          <span className="text-white text-3xl cursor-pointer">«</span>
          <div className="flex gap-2">
            <button className="w-12 h-12 bg-white/30 text-white rounded-xl font-bold text-2xl flex items-center justify-center shadow-lg">
              1
            </button>
            <button className="w-12 h-12   bg-[#5D5FEF] text-white rounded-xl font-bold text-2xl flex items-center justify-center hover:bg-white/50">
              2
            </button>
      
          </div>
          <span className="text-white text-3xl cursor-pointer">»</span>
        </div>
      </div>
      <Footer/>
    </>
  );
}
