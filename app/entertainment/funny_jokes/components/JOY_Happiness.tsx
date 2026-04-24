export default function JOY_Happiness(){
    return(
            <section className="py-16 container mx-auto px-6">
        <div className="bg-pink-300/40 backdrop-blur-md rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center border border-white/30 shadow-2xl">
          <div className="w-full lg:w-1/2 relative">
             <img 
               src="/images/funny_jokes/funny_jokes.png" 
               className="rounded-2xl shadow-xl w-full" 
               alt="Standup" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-[48px] font-bold mb-6 text-[#5D5FEF]">JOY & Happiness</h2>
            <p className="text-[40px] text-[#FFFFFF] leading-relaxed mb-8">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
            </p>
            
            <div className="flex gap-4 mb-8">
               {[1,2,3].map(i => (
                 <div key={i} className="w-24 aspect-video  overflow-hidden  cursor-pointer hover:scale-110 transition-transform">
                   <img src="/images/funny_jokes/funny_jokes.png" className="w-full h-full object-cover" alt="thumb" />
                 </div>
               ))}
            </div>

            <button className="bg-white text-[#F178B6] px-10 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1">
              Read more
            </button>
          </div>
        </div>
      </section>
    );
}