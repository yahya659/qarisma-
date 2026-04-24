export default function Latest_stories() {
  const latestStories = [
    {
      id: 1,
      tag: "Food trends",
      title: "It has one principle and one motto",
      bg: "bg-[#F178B6]",
    },
    {
      id: 2,
      tag: "Food items",
      title: "It has one principle and one motto",
      bg: "bg-[#5D5FEF]",
    },
    {
      id: 3,
      tag: "Sustainability",
      title: "It has one principle and one motto",
      bg: "bg-[#F178B6]",
    },
    {
      id: 4,
      tag: "Food industry",
      title: "It has one principle and one motto",
      bg: "bg-[#F178B6]",
    },
    {
      id: 5,
      tag: "Beverage",
      title: "It has one principle and one motto",
      bg: "bg-[#F178B6]",
    },
    {
      id: 6,
      tag: "Food trends & nutritional pyramids",
      title: "It has one principle and one motto",
      bg: "bg-[#F178B6]",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-[64px]  font-black text-white drop-shadow-md">
          Latest stories
        </h2>
        <a
          href="#"
          className="text-white font-bold text-[36px] underline hover:text-pink-200 drop-shadow-sm mb-1"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestStories.map((story) => (
          <div
            key={story.id}
            className={`${story.bg}  shadow-xl overflow-hidden border border-white/10 flex flex-col transform hover:-translate-y-1 transition-transform`}
          >
            <div className="relative h-40 w-full">
              <img
                src="/images/entertainment/enterainment5.jpg"
                alt={story.tag}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0  left-0 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-tr-lg">
                <span className="text-[24px]  font-black text-xs uppercase">
                  {story.tag}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1">
              <h4 className="text-[24px] font-black text-[#000000] mb-2 drop-shadow-sm">
                {story.title}
              </h4>
              <p className="text-[16px] text-xs font-bold leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Pagination */}
      <div className="flex items-center justify-center space-x-3 mt-10">
        <span className="h-4 w-4 rounded-full bg-[#f6a5cf] shadow-md cursor-pointer"></span>
        <span className="h-4 w-4 rounded-full bg-[#f6a5cf] shadow-md cursor-pointer"></span>
        <span className="h-5 w-5 rounded-full bg-gradient-to-r from-[#d9a8db] to-[#a196ec] shadow-lg border-2 border-white/30 cursor-pointer"></span>
        <span className="h-4 w-4 rounded-full bg-[#f6a5cf] shadow-md cursor-pointer"></span>
        <span className="h-4 w-4 rounded-full bg-[#f6a5cf] shadow-md cursor-pointer"></span>
      </div>
    </div>
  );
}
