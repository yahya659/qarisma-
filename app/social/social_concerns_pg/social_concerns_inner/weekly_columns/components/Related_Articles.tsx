export default function Related_Articles(){
    return (
         <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Top Story */}
          <div className="flex-1 lg:max-w-[45%] bg-[#5D5FEF85]">
            <div className="relative overflow-hidden mb-6 border-[6px] border-[#8a8cc1]">
              <img
                src="/images/social/Alternating3.png"
                alt="Women laughing"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-[#5D5FEF85] px-8 py-3 ">
                <h3 className="text-white font-black  text-[48px] drop-shadow-md">
                  Top Story
                </h3>
              </div>
            </div>
            <h2 className="text-[40px] font-black text-[#1a1c4b] mb-4">
              Top 20 Issues Women Are Facing Today
            </h2>
            <p className="text-[#FFFFFF] font-bold text-[20px] leading-relaxed mb-6">
              The world's rights have improved over the years, but continuing
              progress is not guaranteed. In a time of escalating conflicts,
              climate change and economic distress taking a heavy toll on women,
              women face many issues within the education, work, healthcare,
              legal rights, violence and much more. By acknowledging these
              issues, the world can truly advance to achieve gender equality.
            </p>
            <button className="bg-[#F178B6] hover:bg-[#e0569e] text-[#5D5FEF] font-bold py-2.5 px-8 transition-colors">
              Read Full story
            </button>
          </div>

          {/* Related Articles */}
          <div className="flex-1 lg:max-w-[55%] bg-[#5D5FEF85]">
            <h3 className="text-[40px] font-black text-white text-center mt-10  mb-10 drop-shadow-sm">
              Related Articles
            </h3>
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[#F178B6A3] rounded-2xl p-10 border-2 border-[#00000040] shadow-md hover:-translate-y-1 transition-transform"
                >
                  <h4 className="font-black text-[#1a1c4b] text-[24px] mb-2 leading-tight">
                    Social injustice
                  </h4>
                  <p className="text-[11px] font-medium leading-relaxed text-white">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}