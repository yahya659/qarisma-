export default function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background with Purple Curtains Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-[#1a1a2e] to-[#1a1a2e]"></div>
        <div
          className="absolute top-0 left-0 w-full h-full opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/social/scoli2.jpg')",
          }}
        ></div>{" "}
        {/* Curtain Overlay */}
        <div className="absolute inset-0">
          {/* Overlay effect */}
          <div className="absolute inset-0 border-[40px] border-purple-900/20 border-t-purple-500/30 " />
        </div>{" "}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left">
        <div className="bg-white/10  p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <h2 className="text-[96px] md:text-2xl font-light mb-2">
            Explore your
          </h2>
          <h1 className="text-[96px] text-[#000000] md:text-7xl font-bold mb-6 tracking-tight bg-clip-text  bg-gradient-to-r from-white to-purple-200">
            community
          </h1>
          <p className="text-[32px]   mb-8 ">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>
          <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
