export default function HeroSection() {
  return (
    <section className="relative w-full bg-black flex flex-col items-center">
      {/* Top Image Section */}
      <div className="bg-[#b35e84] text-white px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
        <img
          src="/images/social/modern.jpg"
          className="w-[1568.0088126531841] h-[619.0132566851879] object-cover"
          alt="Cityscape Architecture"
        />
      </div>

      {/* Purple Curved Content Box */}
      <div className="w-full bg-[#F178B673] rounded-t-[50px] -mt-16 relative z-10 px-8 py-16 md:px-24 md:py-20 flex flex-col gap-6 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="inline-block self-start bg-[#F178B673]">
          <span className="bg-[#b35e84] text-white px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
            Beyond Headlines
          </span>
        </div>
        <h1 className="text-4xl md:text-[64px] font-black text-[#6665FF] leading-none tracking-tighter">
          Beyond Headlines
        </h1>
        <p className="max-w-4xl text-white text-lg md:text-2xl font-bold leading-relaxed opacity-90">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth
        </p>
      </div>
    </section>
  );
}
