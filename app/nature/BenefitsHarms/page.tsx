"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

export default function functionBenefitsHarms() {
  const router = useRouter();

  return (
    <>
      <Header />
      <br />
      <br />
      <br />

      {/* ================= HERO WRAPPER ================= */}
      <div className="w-full relative overflow-x-hidden bg-[linear-gradient(180deg,rgba(241,120,182,0.6)_0%,rgba(93,95,239,0.258)_100%)]">

        <section className="relative h-[500px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/nature/weather5.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 max-w-4xl mx-auto text-center">
            <h1 className="text-[#FFFFFF] text-[32px] md:text-[60px] font-bold mb-4">
              Beyond the Headlines
            </h1>

            <p className="text-[#000000] text-[18px] md:text-[32px] font-bold mb-6 opacity-90">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are .
            </p>

            <button className="w-[220px] md:w-[327px] h-[54px] md:h-[64px] rounded-[17px] bg-[#5D5FEF] shadow-[1px_4px_4px_0px_rgba(0,0,0,1)] font-medium transition hover:bg-[#4f46e5]">
              Learn More
            </button>
          </div>
        </section>

        {/* ================= FILTER SECTION ================= */}
        <section className="px-4 md:px-6 py-10 max-w-6xl mx-auto">
          <h1 className="text-[#5D5FEF] text-[40px] md:text-[64px] font-bold mb-2">
            Nature
          </h1>

          <p className="text-[#FFFFFF] text-[20px] md:text-[40px] mb-6">
            Top headlines and In-depth across the world
          </p>

          <div className="flex flex-wrap gap-3 mb-6 items-center">
            <button className="bg-[#F178B6] text-white px-6 py-2 rounded-lg font-semibold">
              All
            </button>

            <button
              onClick={() => router.push("/nature/Articles/climate")}
              className="bg-[#5D5FEF85] px-6 py-2 rounded-lg font-semibold"
            >
              Climate
            </button>

            <button
              onClick={() => router.push("/nature/Articles/WILDLIFE")}
              className="bg-[#5D5FEF85] px-6 py-2 rounded-lg font-semibold"
            >
              Wild Life
            </button>

            <button className="bg-[#5D5FEF85] px-6 py-2 rounded-lg font-semibold">
              Environment
            </button>

            <input
              placeholder="Search..."
              className="bg-[#5D5FEF] px-4 py-2 outline-none w-48 md:w-60 text-center text-white"
            />
          </div>
        </section>

        {/* ================= MAIN SECTION ================= */}
        <div className="min-h-screen p-4 md:p-10 flex flex-col items-center justify-center font-sans">

          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-7 bg-[#4F726B]/90 p-4 md:p-6 shadow-2xl">

              <div className="relative w-full aspect-video overflow-hidden mb-8 group">
                <img
                  src="/images/nature/plant1.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-white/30 rounded-full flex items-center justify-center">
                    <Play className="text-white w-8 md:w-10 h-8 md:h-10" />
                  </div>
                </div>
              </div>

              <div className="text-white space-y-4">
                <h1 className="text-[28px] md:text-[48px] text-black font-bold">
                  Eco-friendly projects
                </h1>

                <p className="text-[18px] md:text-[24px] text-white">
                  It has one principle and one motto that can be read individually...
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5 space-y-6">

              {[1, 2].map((i) => (
                <div key={i} className="bg-[#5D5FEFBA] p-4 md:p-6 space-y-4">
                  <h3 className="text-white text-[20px] md:text-[24px] font-bold uppercase">
                    Editors Picks
                  </h3>

                  <div className="bg-white p-4 rounded-2xl">
                    <p className="text-black text-[18px] md:text-[24px] font-bold">
                      Beyond the Headlines...
                    </p>
                  </div>

                  <div className="bg-[#F178B6]/40 p-4 rounded-2xl">
                    <p className="text-black text-[18px] md:text-[24px] font-bold">
                      Beyond the Headlines...
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= CARDS SECTION ================= */}
      <div className="bg-[#5D5FEF85] min-h-screen p-10 flex flex-col items-center font-sans overflow-hidden">
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

      </div>

      <Footer />
    </>
  );
}