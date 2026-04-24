export default function Community_sustainability() {
  return (
    <section className="py-20 px-8 bg-black/10">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex items-center justify-center ">
          <p className="font-[Poppins] font-bold text-[48px] text-[#000000] leading-[58px] text-center">
            Community &sustainability
          </p>
        </div>
        {/* Story 1 */}
        <div className="flex flex-col md:flex-row items-center bg-[#F178B6]/30 gap-12">
          <div className="flex-1 relative">
            <div className="w-full h-[400px]    overflow-hidden shadow-2xl relative z-10 ">
              <img
                src="/images/Youth/Youth4.jpg"
                className="w-full h-full object-cover"
                alt="Story"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-[35px] text-[#000000] font-bold   leading-relaxed">
              In a world moving faster than ever, many feared that culture would
              fade into memory. But across neighborhoods, cities, and digital
              spaces, a new generation is proving otherwise.
            </p>
          </div>
        </div>

        {/* Story 2 - Reverse */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-[#5D5FEF85]/30 gap-12">
          <div className="flex-1 relative">
            <div className="w-full h-[400px]   overflow-hidden shadow-2xl  ">
              <img
                src="/images/Youth/Youth4.jpg"
                className="w-full h-full   object-cover"
                alt="Story"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className=" text-[30px] text-[#000000]   font-bold leading-relaxed">
              In a world moving faster than ever, many feared that culture would
              fade into memory. But across neighborhoods, cities, and digital
              spaces, a new generation is proving otherwise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
