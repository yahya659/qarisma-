import { Play } from "lucide-react";

export default function Latest_programs_Reports() {
  return (
    <>
      {" "}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-[64px] font-bold text-center mb-16">
          Latest programs & Reports
        </h2>

        <div className="w-full h-[500px]  overflow-hidden shadow-2xl mb-12 relative border-8 border-white/10">
          <img
            src="/images/Youth/Youth7.jpg"
            className="w-full h-full object-cover"
            alt="Featured Program"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <div className="w-full flex justify-between items-center">
             
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-pink-400/40 p-4   border border-white/20 shadow-lg group cursor-pointer"
            >
              <div className="relative h-48  overflow-hidden mb-4">
                <img
                  src={`https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400&sig=${item}`}
                  className="w-full h-full object-cover"
                  alt="Report"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play fill="white" />
                  </div>
                </div>
              </div>
              <h4 className="text-[32px] text-[#000000] font-bold mb-2">Headline</h4>
              <p className="text-[14px] text-[#000000] opacity-80 mb-4 font-bold ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own.
              </p>
              <button className="text-[16px] text-[#5D5FEF] font-bold ">View more</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 py-20">
          <button className="text-3xl font-bold opacity-60 hover:opacity-100">
            &laquo;
          </button>
          <button className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-500/30">
            1
          </button>
          <button className="w-12 h-12 rounded-xl bg-blue-400/50 text-white font-bold text-xl">
            2
          </button>
          <button className="w-12 h-12 rounded-xl bg-blue-400/50 text-white font-bold text-xl">
            3
          </button>
          <button className="text-3xl font-bold opacity-60 hover:opacity-100">
            &raquo;
          </button>
        </div>
      </section>
    </>
  );
}
