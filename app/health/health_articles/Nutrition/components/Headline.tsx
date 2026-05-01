import React from 'react'

export default function Headline() {
  return (
     <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">

  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

    {/* Image */}
    <div className="w-full md:w-1/2">

      <div className="p-3 md:p-4 shadow-2xl rounded-xl overflow-hidden">

        <img
          src="/images/health/health1.jpg"
          alt="Nutritional Plate"
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />

      </div>

    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-black mb-4 md:mb-6 leading-tight">
     Studies & Exclusive
      </h2>

      <p className="text-base sm:text-xl md:text-2xl lg:text-[36px] text-white font-bold leading-relaxed mb-6 md:mb-8">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole, we believe that reality
        and maturity are core for truth
      </p>

      <button className="px-6 md:px-10 py-3 bg-[#5D5FEF] text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-bold rounded-xl transition  ">
        Read More
      </button>

    </div>

  </div>

</div>
<section className="bg-[#F178B6A3] mb-20 mt-30 w-full max-w-[1417px] mx-auto px-4 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold">
          Stay informed, learn more & contact us
        </h3>

        <button className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-[#5D5FEF] hover:bg-blue-700 transition rounded-xl">
          send message
        </button>
      </section>
    </>
  );
}
