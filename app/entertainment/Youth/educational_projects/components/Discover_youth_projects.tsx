export default function Discover_youth_projects(){
      const projectCards = [
    { id: 1, category: "Education", title: "Summer camp & art therapy", author: "by Al-Ahram", description: "It has one principle and one motto that can be read individually, meaning each word on its own." },
    { id: 2, category: "Education", title: "Creative Writing Workshop", author: "by Youth Hub", description: "Empowering the next generation of storytellers through digital tools and local spaces." },
    { id: 3, category: "Education", title: "Science for Tomorrow", author: "by Global Lab", description: "Discover and support incredible projects started by very talented youth with us." },
  ];
    return(
        <>  <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover youth projects</h2>
            <p className="text-[40px] text-[#000000] font-bold">Top headlines and in-depth across the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectCards.map((card, idx) => (
              <div 
                key={card.id} 
                className={`group bg-[#5D5FEF38] backdrop-blur-lg   p-6   transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${idx === 1 ? 'md:scale-110 bg-white/20 border-white/40 z-10' : ''}`}
              >
                <div className="h-48   overflow-hidden mb-6 relative">
                  <img src="/images/youth/Youth9.jpg" alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 left-0 bg-purple-600 text-[24px] text-[#000000] h-[54px] w-[233.40220642089844] mt-35 uppercase font-bold px-3 py-1 ">{card.category}</div>
                </div>
                <h3 className="text-[20px] font-bold mb-2 leading-tight">{card.title}</h3>
                <p className="text-[20px] text- #FFFFFF mb-4 font-semibold uppercase">{card.author}</p>
                <p className="text-[16px] text-[#000000] mb-6 flex-grow">{card.description}</p>
                <button className="w-full py-3 bg-[#F178B6]  text-[24px] hover:text-purple-700 font-bold   transition border border-white/30">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </section></>
    );
}