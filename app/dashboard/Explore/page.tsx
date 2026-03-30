import Sidebar from "@/app/components/dashboard/Sidebar";

export default function Explore() {
  return (
    <>
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
        
    <br/>
    <br/>
    <br/>
    <br/>
        <div className="p-6 text-white">
          {/* 🔍 Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 rounded-xl 
          bg-white/20 backdrop-blur-lg 
          border border-white/30 outline-none"
            />
          </div>

          {/* ⭐ Featured Card */}
          <div className="flex gap-6 mb-6">
            <img
              src="/images/explore1.png"
              className="w-80 h-44 object-cover rounded-2xl"
            />

            <div>
              <h2 className="text-xl font-bold mb-2">
                The Future of Work: Embracing Flexibility and Innovation
              </h2>
              <p className="text-white/70 text-sm">
                Explore how modern workplaces adapt to remote work and evolving
                trends.
              </p>
            </div>
          </div>

          {/* 🏷️ Tags */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {["Technology", "Design", "Business", "Education"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full bg-pink-500/80 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 🔥 Trending */}
          <h3 className="mb-4 text-lg font-semibold">Trending Stories</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Card */}
            {[
              {
                title: "Sustainable Fashion",
                img: "/images/exploredasc2.png",
              },
              {
                title: "Digital Photography",
                img: "/images/exploredasc3.png",
              },
              {
                title: "AI Healthcare",
                img: "/images/exploredasc4.png",
              },
              {
                title: "Coffee Brewing",
                img: "/images/exploredasc5.png",
              },
              {
                title: "Happiness",
                img: "/images/exploredasc6.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-2 backdrop-blur-lg"
              >
                <img
                  src={item.img}
                  className="rounded-lg h-24 w-full object-cover mb-2"
                />

                <p className="text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
