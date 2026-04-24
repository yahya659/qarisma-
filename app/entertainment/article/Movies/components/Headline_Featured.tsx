export default function Headline_Featured(){
    return(
        <>  {/* Headline_Featured Section */}
                <section className="px-12 py-12 max-w-5xl mx-auto">
                  <div className="relative bg-[#F178B6A3]/64   flex flex-col md:flex-row items-center gap-10 shadow-xl overflow-hidden">
                    {/* Left Decorative Bar */}
                    <div className="absolute left-3 top-4 bottom-4 w-2 bg-[#D18BBA] rounded-full"></div>
                    
                    <div className="flex-1 pl-6">
                      <h3 className="text-[64px] font-black text-black mb-4 tracking-tight">Headline</h3>
                      <p className="text-black/80 font-medium text-[20px] leading-relaxed mb-6 pr-4">
                        It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                      </p>
                      <a href="#" className="text-white font-bold text-[32px] hover:underline decoration-2 underline-offset-4">
                        View more
                      </a>
                    </div>
                    
                    <div className="flex-1 w-full relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                      <img src="https://images.unsplash.com/photo-1614113489855-66422ad300a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Featured" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </section></>
    );
}