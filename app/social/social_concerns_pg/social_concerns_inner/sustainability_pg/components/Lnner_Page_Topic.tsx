export default function Inner_Page_Topic(){
    return(

         <main className="max-w-7xl mx-auto px-6 py-16">
          <section className="mb-32 relative">
           <div className="grid md:grid-cols-2 gap-24 items-center">
              {/* Block 1 */}
              <div className="relative z-10">
                 <h3 className="text-[64px] font-bold  text-[#000000] leading-tight">Headline</h3>
                 <p className="text-white/80 mb-8 leading-relaxed text-[20px] max-w-md">
                   It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
                 </p>
                 <div className="w-[427px] h-[427px]   overflow-hidden border-4 border-white/10 ">
                    <img src="/images/social/sustainability2.jpg" className="w-full h-full object-cover" alt="Social Impact" />
                 </div>
              </div>

              {/* Block 2 */}
              <div className="relative md:text-right flex flex-col items-end z-10">
                 <div className="w-[427px] h-[427px]   overflow-hidden border-4 border-white/10 ">
                    <img src="/images/social/sustainability2.jpg" className="w-full h-full object-cover" alt="Community Growth" />
                 </div>
                 <h3 className="text-[64px] font-bold  text-[#000000] leading-tight">Headline</h3>
               <p className="text-white/80 mb-8 leading-relaxed text-[20px] max-w-md">
                   It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
                 </p>
              </div>
           </div>
           
           {/* CTA Button */}
           <div className="flex justify-center mt-12">
              <button className="px-14 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-xl hover:shadow-blue-500/30 uppercase tracking-widest text-sm">
                Explore More
              </button>
           </div>

           {/* Decorative Background Elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-[20rem] pointer-events-none select-none">🦋</div>
           <div className="absolute top-0 right-1/4 opacity-20 text-7xl animate-pulse">🦋</div>
           <div className="absolute bottom-10 left-1/4 opacity-20 text-7xl animate-bounce">🦋</div>
        </section>
        </main>
    );
}