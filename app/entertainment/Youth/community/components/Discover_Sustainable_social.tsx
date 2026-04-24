export default function Discover_Sustainable_social() {
  const projects = Array(6).fill({
    title: "Summer camp & art therapy",
    by: "by Art group",
    category: "Education",
    location: "Morocco",
    description:
      "It has one principle and one motto that can be read individually, meaning each word on its own.",
  });
  return (
    <>
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center ">
          <p className="font-[Poppins] font-bold text-[48px] text-[#FFFFFF] leading-[58px] text-center">
            Discover Sustainable & social projects
          </p>
        </div>
        <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Floating Butterfly Decorations */}
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 pointer-events-none rotate-12">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#5D5FEF38] backdrop-blur-md  overflow-hidden border border-white/20 shadow-2xl hover:scale-[1.03] transition-transform duration-500 group"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=400&sig=${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="project"
                />
                <span className="absolute top-4 mt-30 bg-[#5D5FEF] text-[20px] px-3 py-1 w-[178px]  h-[38px] uppercase font-bold tracking-widest shadow-lg">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[20px] mb-1">{p.title}</h3>
                <p className="text-[16px] italic opacity-70 mb-3">{p.by}</p>
                <p className="text-[16px] text-[#000000] leading-relaxed opacity-90 mb-6 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-bold uppercase tracking-tighter">
                      {p.location}
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-white bg-gray-400"></div>
                      <div className="w-6 h-6 rounded-full border border-white bg-gray-500"></div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-[#5D5FEF] hover:bg-blue-700 text-white rounded-xl text-[20px] font-bold transition-all shadow-md active:scale-95">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
