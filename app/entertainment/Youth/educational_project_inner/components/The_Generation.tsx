export default function The_Generation() {
  return (
    <>
      <section className="py-20 px-8 bg-black/10">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Story 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <div className="w-full h-[400px] opacity-20   overflow-hidden shadow-2xl relative z-10 ">
                <img
                  src="/images/Youth/Youth4.jpg"
                  className="w-full h-full object-cover"
                  alt="Story"
                />
              </div>
            
            </div>
            <div className="flex-1 space-y-6">
              
              <p className="text-[35px] text-[#000000] font-bold  opacity-90 leading-relaxed">
                In a world moving faster than ever, many feared that culture
                would fade into memory. But across neighborhoods, cities, and
                digital spaces, a new generation is proving otherwise.
              </p>
              
            </div>
          </div>

          {/* Story 2 - Reverse */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 relative">
              <div className="w-full h-[400px]   overflow-hidden shadow-2xl  ">
                <img
                  src="/images/Youth/Youth4.jpg"
                  className="w-full h-full opacity-20 object-cover"
                  alt="Story"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
             
              <p className="text-[30px] text-[#000000] opacity-90 font-bold leading-relaxed">
                In a world moving faster than ever, many feared that culture
                would fade into memory. But across neighborhoods, cities, and
                digital spaces, a new generation is proving otherwise.
              </p>
             
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center gap-4 pt-32 pb-16">
        <button className="text-3xl font-bold opacity-60 hover:opacity-100">&laquo;</button>
        <button className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-lg">1</button>
        <button className="w-12 h-12 rounded-xl bg-indigo-400/50 text-white font-bold text-xl hover:bg-indigo-400 transition">2</button>
        <button className="w-12 h-12 rounded-xl bg-indigo-400/50 text-white font-bold text-xl hover:bg-indigo-400 transition">3</button>
        <button className="text-3xl font-bold opacity-60 hover:opacity-100">&raquo;</button>
      </div>
    </>
  );
}
