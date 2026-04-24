export default function The_Generation() {
  return (
    <>
      <section className="py-20 px-8 bg-black/10">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Story 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <div className="w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-4 border-white/20">
                <img
                  src="/images/Youth/Youth4.jpg"
                  className="w-full h-full object-cover"
                  alt="Story"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white/30 shadow-xl z-20">
                <img
                  src="/images/Youth/Youth4.jpg"
                  className="w-full h-full object-cover"
                  alt="Small story"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-[48px] font-bold leading-tight">
                The Generation That Refused <br />
                <span className="text-[#F178B6] indigo-400 font-bold ">to Forget"</span>
              </h2>
              <p className="text-[35px] text-[#000000] font-bold  opacity-90 leading-relaxed">
                In a world moving faster than ever, many feared that culture
                would fade into memory. But across neighborhoods, cities, and
                digital spaces, a new generation is proving otherwise.
              </p>
              <button className="text-[36px] font-bold underline hover:text-indigo-300 transition">
                View more
              </button>
            </div>
          </div>

          {/* Story 2 - Reverse */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 relative">
              <div className="w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=600"
                  className="w-full h-full object-cover"
                  alt="Story"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-[50px] text-[#5D5FEF] font-bold underline decoration-indigo-400 decoration-4">
                The Last Storyteller
              </h2>
              <p className="text-[30px] text-[#FFFFFF] opacity-90 leading-relaxed">
                In a world moving faster than ever, many feared that culture
                would fade into memory. But across neighborhoods, cities, and
                digital spaces, a new generation is proving otherwise.
              </p>
              <button className="text-[#5D5FEF] text-[36px] font-bold underline hover:text-indigo-300 transition">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
