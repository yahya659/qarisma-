export default function The_Last_Storyteller(){

    return(
        <>  <section className="max-w-6xl mx-auto mb-32 flex flex-col md:flex-row items-center gap-12 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
          <div className="flex-1 text-left">
            <h2 className="text-[#5D5FEF] text-[44px] font-black mb-6   bg-clip-text bg-gradient-to-r from-white to-pink-300">
              The Last Storyteller
            </h2>
            <p className="text-[36px] text-purple-100 mb-8 leading-relaxed">
              In a world moving faster than ever, many feared that culture would fade into memory. 
              But across neighborhoods, cities, and digital spaces, a new generation is proving otherwise.
            </p>
            <a href="#" className="inline-block   text-[36px] text-[#5D5FEF] font-bold">
              View more
            </a>
          </div>
          <div className="flex-1 w-full">
            <div className="relative  overflow-hidden shadow-2xl    duration-500">
              <img src="/images/youth/Youth8.jpg" alt="Culture" className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60  "></div>
            </div>
          </div>
        </section></>
    );
}