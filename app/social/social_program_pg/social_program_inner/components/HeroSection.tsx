"use client";
export default function HeroSection() {
  function setShowPopup(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {/* --- HERO SECTION --- */}
               <header className="relative w-full h-[100vh] overflow-hidden ">
        <div className="relative h-[500px]  md:h-[650px] flex items-center justify-center ">
          {/* Main Background Image */}
          <img 
            src="/images/social/social6.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
          
          {/* Purple tint overlay */}
          <div className="absolute inset-0 bg-[#9A6AAB]/70 mix-blend-multiply"></div>

          {/* Curtains Effect (Left & Right) */}
          <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/6 pointer-events-none">
             <div className="h-full bg-gradient-to-r from-[#d18fbc] to-transparent opacity-80"></div>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/6 pointer-events-none">
             <div className="h-full bg-gradient-to-l from-[#d18fbc] to-transparent opacity-80"></div>
          </div>

          {/* Content Over the Hero Image */}
          <div className="relative z-10 text-center px-6 max-w-4xl bg-[#F178B6A3]/10 ">
            <h2 className="text-black md:text-5xl text-[64px] font-extrabold uppercase tracking-wide leading-tight drop-shadow-md">
    Beyond the Headlines
  </h2>

  <p className="max-w-4xl mx-auto text-white text-[32px] font-semibold leading-[1.6] mb-10 opacity-100 drop-shadow-sm">
    It has one principle and one motto that can be read individually,
    meaning each word on its own, or as a whole, we believe that
    reality and maturity are core for truth
  </p>

  <button className="bg-[#5D5FEF] text-white font-semibold border border-white/30 px-12 py-4 rounded-xl shadow-lg hover:scale-105 transition">
    Watch More
  </button>
          </div>
        </div>
        
 
      </header>
    </>
  );
}
