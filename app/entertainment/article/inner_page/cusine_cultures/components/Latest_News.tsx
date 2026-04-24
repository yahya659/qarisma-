import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Latest_News() {
  const latestNews = [
    {
      id: 1,
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own.",
      img: "/images/entertainment/Latest3.png",
      bg: "bg-[#5D5FEF6E]",
    },
    {
      id: 2,
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own.",
      img: "/images/entertainment/Latest2.png",
      bg: "bg-[#F178B6]",
    },
    {
      id: 3,
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own.",
      img: "/images/entertainment/Latest1.png",
      bg: "bg-[#5D5FEF6E]/40",
    },
  ];
  return (
    <div className="bg-[#cd83b7] py-16 relative z-10 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[64px] font-black text-white mb-12 drop-shadow-md">
          Latest News
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
          <button className="hidden md:flex text-white hover:text-pink-200 transition-colors">
            <ChevronsLeft size={36} strokeWidth={3} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className={`${news.bg}  p-4 shadow-xl text-left border border-white/20 transform hover:-translate-y-2 transition-transform`}
              >
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-white/30">
                  <img
                    src={news.img}
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-[15px] font-bold leading-relaxed line-clamp-4">
                  {news.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="hidden md:flex text-white hover:text-pink-200 transition-colors">
            <ChevronsRight size={36} strokeWidth={3} />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-3">
          <span className="h-4 w-4 rounded-full bg-[#5b67f6] opacity-50 cursor-pointer"></span>
          <span className="h-4 w-4 rounded-full bg-[#5b67f6] opacity-50 cursor-pointer"></span>
          <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[#d9a8db] to-[#6b62ff] shadow-lg border-2 border-white/50 cursor-pointer"></span>
          <span className="h-4 w-4 rounded-full bg-[#5b67f6] opacity-50 cursor-pointer"></span>
          <span className="h-4 w-4 rounded-full bg-[#5b67f6] opacity-50 cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
}
