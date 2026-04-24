export default function HeroSection(){
    return(
            <section className="relative h-[100vh] flex items-center overflow-hidden">
        {/* Background Image with magical/gaming vibe */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/entertainment/addedgames1.jpg')",
          }}
        >
          {/* Gradient Overlay for the mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E]/80 via-[#3B1D5C]/60 to-[#1A0B2E]/60"></div>
          <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay"></div>
          {/* Fading bottom edge to match next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B09CE6] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-12 md:px-24 text-white">
          <h3 className="text-2xl font-bold mb-1 tracking-wide">welcome to your</h3>
          <h1 className="text-5xl md:text-6xl font-black text-[#F48BBE] mb-6 drop-shadow-lg tracking-wider">world of Gaming</h1>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-md text-white/95">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
        </div>
      </section>
    );
}