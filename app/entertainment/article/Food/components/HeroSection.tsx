export default function HeroSection(){
    return (
        <section className="relative h-[100vh] flex items-center justify-start overflow-hidden px-6 md:px-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Overlay متوازن */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

        <img
          src="/images/entertainment/entertainment3.png"
          className="w-full h-full object-cover opacity-40"
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-4 leading-tight drop-shadow-lg">
          Explore your <br />
          <span className="text-[#F178B6] drop-shadow-md">JOY & Happiness</span>
        </h1>

        <p className="text-[30px] text-gray-200 mb-8 leading-relaxed ">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth
        </p>

        <button className="bg-[#5D5FEF] w-[257px] hover:bg-indigo-700 text-white px-10 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
    );
}