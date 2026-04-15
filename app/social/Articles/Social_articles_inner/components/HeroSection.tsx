export default function HeroSection(){
    return (
        <>
        
          {/* --- HERO SECTION --- */}
      <header className="relative w-full ">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src="/images/social/scoli2.jpg" 
            className="w-full h-full object-cover "
              alt="Background"
          />
          {/* Purple tint overlay */}
          <div className="absolute inset-0 bg-[#5D5FEF85]/40 mix-blend-multiply"></div>
        </div>
        
        <div className="bg-[#5D5FEF85] py-12 px-6 md:px-32 text-white">
          <h1 className="text-[64px] md:text-5xl font-bold text-[#000000] mb-6">Beyond the Headlines</h1>
          <p className="max-w-4xl text-[#FFFFFF] md:text-[32px] font-bold leading-relaxed mb-8">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          <button className="bg-[#5D5FEF] border border-white/20 hover:bg-[#6255d6] px-10 py-3 rounded-lg font-bold shadow-xl transition-all">
            Learn More
          </button>
        </div>
      </header>
      </>
    );
}