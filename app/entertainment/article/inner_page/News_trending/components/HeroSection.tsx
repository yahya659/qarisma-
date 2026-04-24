export default function HeroSection() {
  const editorsPicks = [1, 2, 3, 4].map((id) => ({
    id,
    title: "Beyond the Headlines",
    desc: "It has one principle and one motto that can be read individually, meaning each word on its own.",
  }));
  const newspaperItems = [1, 2].map((id) => ({
    id,
    title: "Beyond the Headlines",
    desc: "It has one principle and one motto that can be read individually, meaning each word on its own.",
  }));
  return (
    <>
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Story Column */}
          <div className="lg:col-span-8">
            <div className="bg-[#F178B6A3]/60 backdrop-blur-md rounded-[2rem]  p-4 shadow-2xl h-full flex flex-col">
              <div className="relative rounded-xl overflow-hidden h-[350px] shadow-lg mb-6 border-2 border-white/20">
                <img
                  src="/images/entertainment/enterainment6.png"
                  alt="Top Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-0 bg-[#F178B6F5] backdrop-blur-sm px-6 py-2.5  shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                  <span className="text-[#FFFFFF]  font-black text-2xl uppercase tracking-wider">
                    top story
                  </span>
                </div>
              </div>
              <div className="px-2 flex-1 flex flex-col justify-between">
                <p className="text-white font-bold leading-relaxed text-[24px] mb-6 drop-shadow-sm">
                  Understanding major global cuisines allows chefs to stay
                  relevant in today's dynamic culinary scene. With the world
                  becoming increasingly interconnected, diners are more
                  adventurous and interested in trying new and niche flavors.
                  Chefs well-versed in global cuisines can tap into this growing
                  foodservice trend and attract a wider customer base by
                  offering authentic and fusion dishes that showcase a blend of
                  different culinary traditions.
                </p>
                <div>
                  <button className="px-8 py-2.5 bg-[#5D5FEFAB] text-[24px] hover:bg-blue-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebars Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Editors Picks */}
            <div className="bg-[#F178B6B0] rounded-3xl p-6 shadow-xl border border-white/20 flex-1">
              <h3 className="text-white font-black text-[32px] mb-4 tracking-wide uppercase drop-shadow-md">
                Editors Picks
              </h3>
              <div className="space-y-3">
                {editorsPicks.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#5D5FEF85] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="text-gray-900 font-bold text-[24px] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white text-[11px] font-semibold leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newspaper */}
            <div className="bg-[#df7bc9] rounded-3xl p-6 shadow-xl border border-white/20">
              <h3 className="text-white font-black text-[32px] mb-4 tracking-wide uppercase drop-shadow-md">
                Newspaper
              </h3>
              <div className="space-y-3">
                {newspaperItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#eba0db] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="text-gray-900 font-bold text-[24px] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white text-[11px] font-semibold leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
