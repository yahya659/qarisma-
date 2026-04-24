import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Recently_Added() {
  return (
    <section className="px-12 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8 px-4">
        <h2 className="text-[64px] font-black text-black">Recently Added</h2>
        <div className="flex gap-4 text-xs font-bold">
          <a href="#" className="text-blue-700 text-[24px] hover:underline">
            Review all games
          </a>
          <a href="#" className="text-black text-[24px] hover:underline">
            Browse all screens
          </a>
        </div>
      </div>

      <div className="flex items-center  justify-between gap-4">
        <button className="text-white hover:text-pink-200 transition-colors">
          <ChevronsLeft size={40} strokeWidth={3} />
        </button>

        <div className="grid grid-cols-1 w-[374px] h-[360px] md:grid-cols-3 gap-6 flex-1">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#5D5FEF6E] ml-[20px] overflow-hidden shadow-xl"
            >
              <div className="h-[168px] w-[315px]">
                <img
                  src="/images/entertainment/Games1.jpg"
                  alt="Game thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-[#8165D6]">
                <p className="text-white text-[15px] leading-relaxed mt-[30px] font-medium">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="text-white hover:text-pink-200 transition-colors">
          <ChevronsRight size={40} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
