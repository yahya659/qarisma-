import DiscoverSection from "../../components/DiscoverSection";

export default function HeroSection() {
  return (
    <>
      {/* Inner Hero Section */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row bg-[#5D5FEF9C]/81  overflow-hidden shadow-2xl min-h-[500px]">
          {/* Image Side with Curtains Effect */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="/images/social/scoli2.jpg"
              className="w-[703.0004272460938] h-[703.0005493164062] object-cover"
              alt="Story Main"
            />
            {/* Purple Curtains Overlay Effect */}
            <div className="absolute inset-0 flex justify-between pointer-events-none">
              <div className="h-full w-24 bg-purple-600/40 backdrop-blur-[2px] rounded-r-3xl border-r-4 border-purple-500/50"></div>
              <div className="h-full w-24 bg-purple-600/40 backdrop-blur-[2px] rounded-l-3xl border-l-4 border-purple-500/50"></div>
            </div>
            {/* Top Curtain Valance */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-purple-600/40 backdrop-blur-[2px] rounded-b-[50%] border-b-4 border-purple-500/50"></div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white relative">
            {/* Background Butterflies */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none p-10">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
                <path d="M50 50 C 70 20 100 30 90 50 C 100 70 70 80 50 50 C 30 80 0 70 10 50 C 0 30 30 20 50 50" />
              </svg>
            </div>

            <span className="bg-[#F178B687] w-[252px] h-[56px] text-[24px] font-bold self-start border border-white/30 flex items-center justify-center">
              Beyond Headlines
            </span>
            <h1 className="text-[#000000] md:text-[48px] font-black mt-5 mb-6 uppercase">
              Top story
            </h1>
            <p className="text-lg leading-relaxed mb-10 opacity-90 max-w-lg">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white  w-[327px] px-10 py-3 rounded-2xl font-bold w-fit shadow-xl transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* social_story_pg */}
      <DiscoverSection/>
    </>
  );
}
