export default function Best_of_The_Week() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-[64px] text-[#000000]  font-bold text-center mb-12 tracking-wide">
        Best of The Week
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative group">
            {/* خلفية ديكور */}
            <div className="absolute inset-0 bg-[#8b6b9e] translate-x-3 translate-y-3 rounded-md shadow-lg"></div>

            {/* الكرت */}
            <div className="relative border-[5px] w-full max-w-[525px] h-[466px] mx-auto border-[#a084ba] rounded-md overflow-hidden bg-white shadow-xl">
              {/* الصورة */}
              <img
                src="/images/social/sustainability13.jpg"
                alt="Weekly highlight"
                className="w-full h-[320px] object-cover"
              />

              {/* النص */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#5D5FEF85]">
                <h3 className="text-black bg-[#B976B1] w-[300px] mx-auto font-black text-[32px] md:text-[40px] mb-2 text-center">
                  Headline
                </h3>

                <p className="text-[14px] md:text-[18px] leading-snug font-semibold text-white text-center">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12">
        <button className="w-8 h-8 rounded-full bg-[#6a5ced] flex items-center justify-center hover:bg-[#584be0] shadow-md">
          ◀
        </button>

        <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>

        <button className="w-8 h-8 rounded-full bg-[#6a5ced] flex items-center justify-center hover:bg-[#584be0] shadow-md">
          ▶
        </button>
      </div>
    </div>
  );
}
