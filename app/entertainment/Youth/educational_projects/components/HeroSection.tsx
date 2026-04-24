export default function HeroSection() {
  return (
    <>
      {" "}
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden bg-[linear-gradient(270deg,rgba(93,95,239,0.99)_0%,rgba(93,95,239,0.5148)_25.89%,rgba(241,120,182,0.99)_61.61%)]">
        
  {/* Animated Background Shapes */}
  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
      Discover youth projects
    </h1>

    <p className="text-lg md:text-[40px] text-[#000000] font-bold max-w-2xl mx-auto leading-relaxed opacity-90">
      It has one principle and one motto that can be read individually,
      meaning each word on its own, or as a whole, we believe that reality
      and maturity are core for truth.
    </p>

    <div className="mt-12 flex justify-center gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-20 h-20 md:w-28 md:h-28 overflow-hidden shadow-xl transform hover:scale-105 transition"
        >
          <img
            src="/images/youth/Youth8.jpg"
            alt="Gallery"
            className="w-[197.46240234375] h-[197.46240234375] object-cover opacity-20"
          />
        </div>
      ))}
    </div>
  </div>

</header>
    </>
  );
}
