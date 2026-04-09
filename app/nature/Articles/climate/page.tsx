import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
export default function climate() {
  const cards = [
    { img: "/images/nature/climate1.png" },
    { img: "/images/nature/climate2.jpg" },
    { img: "/images/nature/climate3.jpg" },
    { img: "/images/nature/climate4.jpg" },
  ];

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <section className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/nature/weather.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center ml-[100] h-full px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-[#FFFFFF] text-[60px] font-bold mb-4">
            Beyond the Headlines
          </h1>

          <p className="text-[#000000] text-[32px] font-bold mb-6 opacity-90 ">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are .
          </p>

          <button className="self-start w-[327px] h-[64px] rounded-[17px] bg-[#4f46e5] font-medium transition hover:bg-[#4f46e5]">
            Learn More
          </button>
        </div>
      </section>
      <section className="max-w-[1711px] min-h-[821px] mx-auto  px-6 pb-10 bg-[#F178B64F]">
        <div className="bg-gradient-to-r from-[#c084fc]/40 to-[#F178B64F]/31 backdrop-blur-md p-10 shadow-xl flex flex-col md:flex-row gap-12 items-center h-full ">
          {/* الصورة */}
          <div className="relative w-[529px] h-[591px]">
            <img
              src="/images/nature/climate4.jpg"
              className="w-full h-full object-cover "
            />
          </div>

          {/* النص */}
          <div className="flex flex-col justify-center h-full md:w-1/2 items-start text-left">
            <span className="text-[#5D5FEF] bg-[#FFFFFF6E] font-bold text-[48px]">
              climate change
            </span>

            <h2 className="text-[#000000] text-[64px] font-bold mb-4">
              Beyond the Headlines
            </h2>

            <p className="text-[#FFFFFF] text-[30px] leading-relaxed max-w-[500px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>

            <button className="mt-6 w-[180px] h-[50px] rounded-xl bg-[#5D5FEF] text-[#FFFFFF] shadow-lg hover:bg-[#4f46e5] transition">
              Read Full Story
            </button>
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
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
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
                    <h3 className="font-bold text-black">
                      Beyond the Headlines
                    </h3>
                    <p className="text-[#5D5FEF] text-black/80">
                      It has one principle and one motto that can be read
                      individually.
                    </p>
                  </div>

                  {/* Card White */}

                  <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md">
                    <h3 className="font-bold text-black">
                      Beyond the Headlines
                    </h3>
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
          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="text-white text-2xl">«</button>

            {[1, 2].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 rounded-lg ${
                  num === 1
                    ? "bg-[#5D5FEF] text-white"
                    : "bg-white/40 text-white"
                }`}
              >
                {num}
              </button>
            ))}

            <Link href="/nature/Articles/climate/nextpage">
              <button className="text-white text-2xl">»</button>
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
