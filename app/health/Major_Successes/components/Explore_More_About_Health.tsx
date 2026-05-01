"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Explore_More_About_Health() {
      const [currentPage, setCurrentPage] = useState("articles");
    
    function setIsPopupOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

  return (
       <>
      <main className="relative py-20 px-4 md:px-20">
        <h1 className="font-poppins font-semibold mb-20 text-[64px] leading-[50px] tracking-[0.1px] text-center">
  Explore More About Health
</h1>
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
                        {currentPage === "Mental Health"
                          ? "Headline"
                          : "Mental Health"}
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
