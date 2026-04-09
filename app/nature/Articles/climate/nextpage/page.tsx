import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function nextpage(){
     const cards = [
    { img: "/images/nature/climate1.png" },
    { img: "/images/nature/climate2.jpg" },
    { img: "/images/nature/climate3.jpg" },
    { img: "/images/nature/climate4.jpg" },
  ];
    return(
        <>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/nature/nextpage1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20" ></div>
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

          <button className="self-start w-[327px] h-[64px] rounded-[17px] bg-[#5D5FEF] shadow-[1px_4px_4px_0px_rgba(0,0,0,1)] opacity-100 font-medium transition hover:bg-[#4f46e5]">
            Learn More
          </button>
        </div>
      </section>
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
              <h2 className="text-white font-bold text-xl  ml-6 mt-6 " >The Newpaper</h2>

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
             <Link href="/nature/Articles/climate"><button className="text-white text-2xl">«</button></Link>
            

            {[1, 2].map((num) => (
              <button
                key={num}
                className={`w-10 h-10 rounded-lg ${
                  num === 1
                    ? "bg-white/40 text-white"
                    : "bg-[#5D5FEF] text-white"
                }`}
              >
                {num}
              </button>
            ))}

            <button className="text-white text-2xl">»</button>
          </div>
        </section>
      <Footer/>
      </>
    );
}