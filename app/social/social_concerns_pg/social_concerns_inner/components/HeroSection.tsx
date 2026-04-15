export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/social/freepik1.jpg"
            className="w-[] h-full object-cover opacity-100"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 items-end text-right md:text-left md:items-start">
          <div className="max-w-xl md:ml-auto">
            <h3 className="text-2xl font-bold mb-2">Top story</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-400">
              Beyond Headlines
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg">
              Learn More
            </button>
          </div>
          {/* Decorative Butterfly Pattern (SVG or Emoji) */}
          <div className="absolute right-10 top-1/4 opacity-20 text-9xl pointer-events-none hidden md:block">
            🦋
          </div>
        </div>
      </section>

    </>
  );
}
