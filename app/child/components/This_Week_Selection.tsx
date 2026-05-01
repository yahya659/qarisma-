import React from 'react'

export default function This_Week_Selection() {
  return (
   <section className="py-16 md:py-20 px-4">
  <div className="container mx-auto text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold mb-10 md:mb-16 italic">
      This Week Selection
    </h2>

    {/* Card wrapper */}
    <div className="max-w-4xl mx-auto bg-[#F178B6]/80 rounded-[30px] md:rounded-[40px] p-6 md:p-10 lg:p-12">

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">

        {/* Avatar */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-xl shrink-0">
          <img
            src="https://i.pravatar.cc/150?u=a"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-4">

          <h3 className="text-xl md:text-2xl lg:text-[32px] text-black font-bold leading-snug">
            Have you subscribed to our weekly newsletter yet?
          </h3>

          <p className="text-white text-base md:text-lg lg:text-[24px] leading-relaxed">
            Don't miss out on our curated selection of stories, tips, and innovation updates
            delivered straight to your inbox every Sunday.
          </p>

          <button className="text-black text-base md:text-lg lg:text-[24px] font-bold border-b border-pink-400 hover:opacity-70 transition">
            Read more
          </button>

        </div>

      </div>

    </div>
  </div>
</section>
  )
}
