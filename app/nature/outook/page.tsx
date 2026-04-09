import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <main className="min-h-screen font-sans">
        {/* 1. قسم الهيرو (البوابة) */}
        <section className="relative h-screen w-full text-white bg-[#5D5FEF] overflow-hidden">
          {/* الخلفية */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/nature/weather8.jpg"
              alt="Nature Gates"
              className="w-full h-full object-cover opacity-50"
            />

            {/* طبقة تغميق */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* </section> */}

          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center max-w-4xl">
            <h3 className="text-[96px] text-[#FFFFFF] md:text-2xl font-medium tracking-tight mb-2">
              Explore your
            </h3>
            <h1 className="text-[#000000] text-[96px] md:text-7xl font-extrabold mb-6">
              Environment
            </h1>
            <p className="text-[#FFFFFF] text-[36px] md:text-xl font-light text-gray-100 mb-10 leading-relaxed max-w-2xl">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="self-start px-12 py-3 bg-[#5D5FEF] text-[#FFFFFF] rounded-full font-medium text-lg shadow-lg hover:bg-[#5a5ddf] transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* 2. قسم "Explore more about Nature" */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#F178B699] to-[#5D5FEF42]">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[#2E1065]">
              <h2 className="text-[#000000] text-[64px] md:text-5xl font-bold ">
                Explore more about Nature
              </h2>
              <p className="text-[#5D5FEF] text-[40px] font-bold leading-[41px] tracking-[0.1px]">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
              <button className="px-10 py-3 bg-[#F178B6] text-[#FFFFFF] rounded-full font-medium text-lg hover:bg-[#e0759e] transition duration-300">
                Learn More
              </button>
            </div>
            <div className="relative bg-[#08232A] aspect-square w-[707px] h-[638px]  overflow-hidden shadow-xl border-8 border-black/10">
              <div className="flex justify-center items-center">
                <img
                  src="/images/nature/weather8.jpg"
                  alt="Nature Scene"
                  className="w-[577px] h-[577px] object-cover rounded-[39px] mix-blend-color-dodge"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. قسم "Discover your world" */}
        <section className="bg-[#5D5FEF6E] py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center text-white mb-16 space-y-4">
              <h2 className="text-[#FFFFFF] text-[64px] font-bold">
                Discover your world
              </h2>
              <p className="text-[#FFFFFF] text-[40px] font-bold">
                Top headlines and In-depth across the world
              </p>
            </div>

            {/* الفلاتر والبحث */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <button className="px-6 py-2 bg-[#F178B6] text-white rounded-full font-medium">
                All
              </button>
              <button className="px-6 py-2 bg-[#5D5FEF85]/80 text-white rounded-full font-medium">
                middle east
              </button>
              <button className="px-6 py-2 bg-[#5D5FEF85]/80 text-white rounded-full font-medium">
                Journal
              </button>
              <button className="px-6 py-2 bg-[#5D5FEF85]/80 text-white rounded-full font-medium">
                Destinations & worldwide
              </button>
              <button className="px-6 py-2 bg-[#5D5FEF] w-[431px] h-[60px] text-white rounded-[12px] font-medium ml-auto">
                search
              </button>
            </div>

            {/* الكروت - تم كتابتها يدوياً واحداً تلو الآخر */}
            <div className="relative flex items-center justify-center w-full gap-4 md:gap-8 mb-10">
              {/* حاوية الكروت */}
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                {/* كارد 1 */}
                <div className="relative w-[300px] h-[420px] bg-[#222]  overflow-hidden shadow-2xl ">
                  <img
                    src="/images/nature/wild2.jpg"
                    className="w-full h-1/2 object-cover"
                    alt="Earth"
                  />
                  <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                    <span className="text-black font-bold text-2xl">
                      Everest
                    </span>
                  </div>
                  <div className="p-4 pt-10 text-white text-xs leading-tight">
                    It has one principle and one motto that can be read
                    individually...
                  </div>
                </div>

                {/* كارد 2 (الأوسط - أكبر قليلاً) */}
                <div className="relative w-[320px] h-[450px] bg-[#222] overflow-hidden shadow-2xl  transform scale-105 z-10">
                  <img
                    src="/images/nature/wild3.jpg"
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
                    src="/images/nature/wild1.jpg"
                    className="w-full h-1/2 object-cover"
                    alt="Earth"
                  />
                  <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                    <span className="text-black font-bold text-2xl">
                      wild life
                    </span>
                  </div>
                  <div className="p-4 pt-10 text-white text-xs leading-tight">
                    It has one principle and one motto that can be read
                    individually...
                  </div>
                </div>
              </div>
            </div>

            {/* الترقيم والأسهم */}
            <div className="flex justify-center items-center gap-4 mb-20">
              <button className="p-3 bg-[#6366F1] rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 rotate-180"
                >
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              <div className="flex gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E4C7E6]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#E4C7E6]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#7C3AED]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#E4C7E6]"></span>
              </div>
              <button className="p-3 bg-[#6366F1] rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center items-center gap-3 text-white">
              <span className="w-10 h-10 flex items-center justify-center bg-[#6366F1] rounded-lg font-bold text-xl">
                1
              </span>
              <Link
                href="/nature/outook/outookmiddleeast"
                className="w-10 h-10 flex items-center justify-center bg-[#7C3AED]/60 rounded-lg font-bold text-xl"
              >
                2
              </Link>
              <span className="w-10 h-10 flex items-center justify-center bg-[#7C3AED]/60 rounded-lg font-bold text-xl">
                3
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
