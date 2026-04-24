export default function Global_Cuisine(){
    
  const globalCuisines = [
    { id: 1, title: "Italian Cuisine", img: "/images/entertainment/Middle1.png", },
    { id: 2, title: "French Cuisine", img: "/images/entertainment/Middle3.png", },
    { id: 3, title: "American Cuisine", img: "/images/entertainment/Middle4.png", },
    { id: 4, title: "Asian Cuisine",img: "/images/entertainment/Middle2.jpg", },
  ];
    return (
          <div className="text-center">
      {/* Header */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <h3 className="text-[30px] font-black text-white drop-shadow-sm mt-20">
          Middle East Cuisine
        </h3>
        <a
          href="#"
          className="text-white font-bold text-[32px] underline mt-20 ml-[1000px] hover:text-pink-300 transition-colors"
        >
          View more
        </a>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {globalCuisines.map((item) => (
            <div
              key={item.id}
              className="bg-[#5D5FEF85] border border-[#a28df4] rounded-xl p-3 shadow-lg hover:-translate-y-1 transition-transform group text-center"
            >
              <div className="w-full h-32 rounded-lg overflow-hidden mb-3 border border-white/20">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <h4 className="text-[#5D5FEF] bg-[#F178B680] font-black text-[24px] mb-2">
                {item.title}
              </h4>

              <p className="text-[#FFFFFF] text-[15px] font-semibold leading-tight mb-3 line-clamp-3">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality.
              </p>

            
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}