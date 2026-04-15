export default function HeroSection(){
    return(
         <section className="relative h-[100vh] flex items-center justify-start overflow-hidden px-6 md:px-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <img
              src="/images/social/scoli.jpg"
              className="w-full h-full object-cover "
              alt="Background"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pink-400 tracking-tight">
              Beyond the Headlines
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg">
              Learn More
            </button>
          </div>
        </section>
    );
}