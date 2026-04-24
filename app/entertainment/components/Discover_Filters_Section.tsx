"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Discover_Filters_Section() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", path: "" },
    { name: "Articles", path: "/entertainment/article" },
    { name: "Programs", path: "/entertainment/Programs" },
    { name: "funny jokes", path: "/entertainment/funny_jokes" },
    { name: "Games", path: "/entertainment/Games" },
    { name: "Anecdotes", path: "/entertainment/Anecdotes" },
    { name: "Youth", path: "/entertainment/Youth" },
  ];

  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto ">
        <h2 className="text-[64px] font-bold mb-2 ">Discover your world</h2>
        <p className="text-[40px] text-[#000000] font-bold mb-10">
          Top headlines and in-depth across the world
        </p>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-3">
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
              className="w-full bg-[#FFFFFF] backdrop-blur-md border-none rounded-lg py-2 pl-4 pr-10  placeholder-[#5D5FEF] focus:ring-2 ring-blue-400 transition-all"
            />
            <Search
              className="absolute right-3 top-2.5 text-blue-200 "
              size={18}
            />
          </div>
        </div>
      </section>
    </>
  );
}
