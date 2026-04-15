"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SocietySection() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "sustainabilty", "mental healt", "weekly columns"];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full relative">
      <div className="text-center text-[#F178B6] mb-12">
        <h2 className="text-[64px] font-bold">
          Explore More about{" "}
          <span className="text-white font-black">Social life</span>
        </h2>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#F178B6] text-white"
                  : "bg-[#5D5FEF85] text-gray-300 hover:bg-indigo-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-blue-600/80 backdrop-blur-md border-none rounded-lg py-2 pl-4 pr-10 text-white placeholder-blue-200 focus:ring-2 ring-blue-400 transition-all"
          />
          <Search
            className="absolute right-3 top-2.5 text-blue-200"
            size={18}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-white/5 p-8 rounded-3xl border border-white/5">
        <div className="relative overflow-hidden  ">
          <img
            src="/images/social/scoli2.jpg"
            className="w-full h-full object-cover"
            alt="Main"
          />
        </div>
        <div>
          <h3 className="text-[#000000] text-[64px] font-bold mb-6">
            Beyond the Headlines
          </h3>
          <p className="text-[#FFFFFF] text-[32px] mb-8 leading-relaxed">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole.
          </p>
          <button
            className="bg-[#5D5FEF] 
                 px-8 py-3 rounded-lg font-bold"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
