

"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";

export default function Homecontact() {
  const stats = [
    { title: "Total Articles", value: "120" },
    { title: "Read Articles", value: "85" },
    { title: "Saved Items", value: "30" },
    { title: "Feedback Count", value: "15" },
  ];

  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/dashbord.png')" }}
    >
      {/* Sidebar: مخفي في الجوال (hidden) ويظهر في الشاشات المتوسطة وما فوق (md:block) */}
      <div className="hidden md:block w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content: يأخذ كامل الشاشة في الجوال (ml-0) ويعود لطبيعته في الشاشات الكبيرة (md:ml-0) */}
      <main className="flex-grow p-4 md:p-10 overflow-y-auto w-full">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* عنوان متجاوب */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10 drop-shadow-md text-center md:text-left">
          Dashboard
        </h1>

        {/* Overview: شبكة تتغير من عمود واحد في الجوال إلى 4 أعمدة في الشاشات الكبيرة */}
        <section className="mb-8">
          <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4">
            Overview
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#8d7cdd]/90 backdrop-blur-sm p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-white/10 text-white"
              >
                <p className="text-[10px] opacity-70 mb-1">{stat.title}</p>
                <p className="text-2xl md:text-4xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Article Analysis */}
        <section className="mb-8">
          <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4">
            Article Analysis
          </p>
          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 shadow-lg">
            <div className="flex justify-between items-end mb-4 text-white">
              <span className="text-xs md:text-sm font-light">
                Reading Progress
              </span>
              <span className="text-xl md:text-2xl font-bold">70%</span>
            </div>
            <div className="w-full bg-white/20 h-3 md:h-4 rounded-full">
              <div
                className="bg-[#8d7cdd] h-full rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-[#8d7cdd] font-semibold text-sm">
                Most-Read Categories
              </p>
              {["Technology", "Design", "Business", "Education"].map(
                (cat, i) => (
                  <div
                    key={cat}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                  >
                    <span className="text-white/90 text-[10px] md:text-xs w-20">
                      {cat}
                    </span>
                    <div className="flex-1 bg-white/10 h-2 rounded-full">
                      <div
                        className="bg-[#8d7cdd] h-full rounded-full"
                        style={{ width: `${85 - i * 15}%` }}
                      ></div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Articles List: أزرار الفلترة تصبح قابلة للتمرير في الجوال */}
        <section className="mb-8">
          <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4">
            Articles
          </p>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
            {["Technology", "Design", "Business", "Education"].map((c) => (
              <button
                key={c}
                className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#db70ac]/30 text-white text-[10px] border border-white/10"
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-end mt-8 pb-10">
          <button className="w-full md:w-auto bg-[#7986cb] text-white px-8 py-4 rounded-xl font-bold shadow-2xl active:scale-95 transition-all">
            Submit Feedback
          </button>
        </div>
      </main>
    </div>
  );
}
