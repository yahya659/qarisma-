import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Latest_News() {
  const newsItems = [
    {
      id: 1,
      title: "Headline",
      category: "Project",
      image:
        "/images/Youth/Youth2.jpg",
    },
    {
      id: 2,
      title: "Headline",
      category: "Headline",
      image:
        "/images/Youth/Youth2.jpg",
    },
    {
      id: 3,
      title: "Headline",
      category: "Headline",
      image:
        "/images/Youth/Youth2.jpg",
    },
    {
      id: 4,
      title: "Headline",
      category: "Headline",
      image:
        "/images/Youth/Youth2.jpg",
    },
  ];
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-[64px] font-bold text-[#5D5FEF] mb-2">
          Latest News
        </h2>
        <p className="text-[#000000] text-[40px] font-semibold">
          Top headlines and In-depth across the world
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#E8C1C559] backdrop-blur-sm p-3  shadow-lg  transition-transform hover:-translate-y-2"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-pink-600 font-bold text-[36px] block mb-1 bg-[#A77AB9A8]">
              {item.category}
            </span>
            <h3 className="font-bold text-[24px] mb-2">{item.title}</h3>
            <p className="text-[20px] text-[#000000] mb-4 line-clamp-3">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, we believe that reality and maturity
              are core for truth.
            </p>
            <button className="bg-[#5D5FEF33] text-[#FFFFFF] w-[212.4107208251953] h-[44.779788970947266] px-4 py-1.5 rounded text-[24px]  hover:bg-white transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
