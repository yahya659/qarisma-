export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center">
      {/* Background Overlay with Gradient and Shape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/social/freepik1.jpg"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 to-purple-800/60 mix-blend-multiply"></div>

        {/* Butterfly SVG patterns mimicking the background */}
        <div className="absolute top-10 right-20 opacity-20 transform rotate-12">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="white">
            <path d="M50 50 C 70 20 100 30 90 50 C 100 70 70 80 50 50 C 30 80 0 70 10 50 C 0 30 30 20 50 50" />
          </svg>
        </div>
      </div>

      {/* Content Box */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className=" text-white bg-[#5D5FEF4A] p-8 ">
          <h1 className="text-[96px] text-[#000000] font-bold mb-6">
            Top story
          </h1>
          <p className="text-[32px] leading-relaxed mb-8 opacity-90">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>
          <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white px-10 py-3 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
