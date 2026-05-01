"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Explore_More_About_Health() {
  const [currentPage, setCurrentPage] = useState("articles");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "Nutrition", path: "/health/health_articles/Nutrition" },
    { name: "mental health", path: "/health/health_articles/mental_health" },
    { name: "Trending Topics", path: "/health/health_articles/Trending_Topics" },
  ];

  function setIsPopupOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto ">
        <h2 className="text-[64px] font-bold mb-2 ">
          Explore More About Health
        </h2>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => router.push("/health/health_articles")}
              className="px-5 py-2 w-[129px] h-[72px] bg-[#F178B6] text-[32px] font-bold rounded-lg shadow-md hover:bg-pink-500 transition-colors"
            >
              All
            </button>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => router.push(tab.path)}
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all bg-[#5D5FEF85] text-gray-300 hover:bg-indigo-800 "
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#5D5FEF6E] backdrop-blur-md border-none rounded-lg py-2 pl-4 pr-10  placeholder-[#FFFFFF] focus:ring-2 ring-blue-400 transition-all"
            />
          </div>
        </div>
      </section>
      {/* ////////////////////// */}
      <main className="relative py-20 px-4 md:px-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          {/* Conditional Grid Layout */}
          <div
            className={`grid ${currentPage === "articles" ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2"} gap-y-20 gap-x-12 mb-20 w-full`}
          >
            {[1, 2, 3, 4].map((i) =>
              currentPage === "articles" && i > 4 ? null : (
                <div
                  key={i}
                  className="group relative cursor-pointer"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <div className="absolute inset-0 bg-[#8b5a96]/30 rounded-3xl transform translate-x-4 translate-y-4"></div>
                  <div className="relative bg-[#5D5FEF29] p-1.5  shadow-xl border border-white/10 overflow-hidden">
                    <div className="relative aspect-[4/3]  overflow-hidden ">
                      <img
                        src={
                          currentPage === "articles"
                            ? "/images/health/health4.jpg"
                            : "/images/health/health4.jpg"
                        }
                        className="w-[616.4562377929688] h-[371.875] object-cover group-hover:scale-110 transition-transform duration-700"
                        alt="article"
                      />
                      <div className="absolute bottom-0 left-0 bg-[#A77AB9A8] text-[#000000] px-8 py-3 font-black text-[48px] uppercase">
                        {currentPage === "Mental Health" ? "Headline" : "Mental Health"}
                      </div>
                    </div>
                    <div className="bg-[#5D5FEF85]/52 p-6 rounded-b-2xl min-h-[120px]">
                      <p className="text-[#FFFFFF] text-[20px] font-bold opacity-90 leading-relaxed">
                        It has one principle and one motto that can be read
                        individually, meaning each word on its own, or as a
                        whole, we believe that reality and maturity are core for
                        truth
                      </p>
                      <button className="ml-100 px-8 py-2.5 bg-[#F178B6A3] text-[16px] hover:bg-pink-500 text-[#FFFFFF]  font-bold rounded-md transition-colors shadow-lg">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </main>
    </>
  );
}
