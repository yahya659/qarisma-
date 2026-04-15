export default function HeroSection_sustainability_pg() {
  return (
    <header className="relative w-full h-[100vh] overflow-hidden ">
      <div className="relative h-[500px]  md:h-[650px] flex items-center justify-center ">
        {/* Main Background Image */}
        <img
          src="/images/social/concerns.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Background"
        />

        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-[#9A6AAB]/70 mix-blend-multiply">
        </div>

        {/* Curtains Effect (Left & Right) */}
        <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/6 pointer-events-none">
          <div className="h-full bg-gradient-to-r from-[#d18fbc] to-transparent opacity-80"></div>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/6 pointer-events-none">
          <div className="h-full bg-gradient-to-l from-[#d18fbc] to-transparent opacity-80"></div>
        </div>

        {/* Content Over the Hero Image */}
        <div className="relative z-10 text-center px-6 max-w-4xl ">
               <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/images/nature/Rectangle2.png')",
            }}
          />
          <h1 className="text-[50px]  font-black text-[#F178B6] mb-4 drop-shadow-lg ">
            What Is Social Sustainability?
          </h1>
          <p className="text-[#FFFFFF] text-[32px] md:text-2xl font-bold leading-tight mb-8 drop-shadow-md">
            Social sustainability is centred on people’s well-being and the
            strength of communities. It strives to build fairer, more resilient
            societies where everyone has equal access to resources, fair
            treatment, and a good quality of life. Alongside environmental and
            economic sustainability, it forms a crucial part of sustainable
            development.
          </p>
          <button className="bg-[#F178B6A3] hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-black text-sm uppercase shadow-2xl transition-all border border-white/20">
            Read More
          </button>
        </div>
      </div>
    </header>
  );
}
