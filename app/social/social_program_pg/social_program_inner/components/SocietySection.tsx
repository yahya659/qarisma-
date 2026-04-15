"use client";
export default function SocietySection() {
  function setShowPopup(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <main className={"relative py-20 px-4 md:px-20 "}>
        {/* Background texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-[64px] font-bold text-center text-[#351e39] mb-16">
            Explore More about{" "}
            <span className="text-white text-[64px] font-bold">cultures</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/social/freepik1.jpg",
                title: "Headlines",
                color: "bg-purple-900/80",
              },
              {
                img: "/images/social/freepik2 .jpg",
                title: "Headlines",
                color: "bg-indigo-900/80",
              },
              {
                img: "/images/social/freepik3 .jpg",
                title: "Headlines",
                color: "bg-blue-900/80",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative  overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-white/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className={` bg-[#000000] backdrop-blur-sm p-6 text-left`}>
                  <h4 className="text-xl font-bold mb-4 bg-[#F178B669] w-[100px]">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#5D5FEF7D] backdrop-blur-md mt-20 rounded-2xl p-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border border-white/20 shadow-2xl">
      <h2 className="text-3xl md:text-[45px] font-black text-center text-[#351e39] mb-16 tracking-tight">
          Explore More about{" "}
          <span className="text-white font-medium">cultures</span>
        </h2>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#6665ff] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold uppercase text-sm shadow-xl transition-all"
          >
            send message
          </button>
        </div>
      </main>
    </>
  );
}
