"use client";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function Filter_Search() {
  const categories = ["All", "Arts & Culture", "Education", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Summer Camp & Art Therapy",
      by: "by Art Group",
      category: "Arts & Culture",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own.",
      location: "Middle East",
      image: "/images/Youth/Youth5.jpg",
    },
    {
      id: 2,
      title: "Summer Camp & Art Therapy",
      by: "by Art Group",
      category: "Education",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own.",
      location: "Middle East",
      image: "/images/Youth/Youth5.jpg",
    },
    {
      id: 3,
      title: "Summer Camp & Art Therapy",
      by: "by Art Group",
      category: "Arts & Culture",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own.",
      location: "Middle East",
      image: "/images/Youth/Youth5.jpg",
    },
    {
      id: 4,
      title: "Summer Camp & Art Therapy",
      by: "by Art Group",
      category: "Community",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own.",
      location: "Middle East",
      image: "/images/Youth/Youth5.jpg",
    },
  ];
  return (
    <section className="px-8  py-10 max-w-7xl mx-auto">
      <div className="flex flex-col  w-[1100px] h-full md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2  transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-pink-400 text-white shadow-lg text-[20px]"
                  : "bg-[#5D5FEF85] hover:bg-indigo-400 text-white text-[25px]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="search project"
            className="w-full px-6 py-2  bg-white text-[#5D5FEF] shadow-md"
          />
          <Search className="absolute right-4 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#F178B6A3]    overflow-hidden shadow-xl hover:scale-[1.02] transition-transform"
          >
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute w-[248px] h-[54px] top-45 left-4 bg-[#F178B6] px-3 py-1  text-[24px] text-[#000000] font-bold uppercase">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-[24px] font-bold mb-1">{project.title}</h3>
              <p className="text-pink-100 text-[20px] mb-4 italic">{project.by}</p>
              <p className="text-[20px] text-[#000000] font-bold mb-6 line-clamp-2">{project.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-[24px] font-semibold">
                  {project.location}
                </span>
                {/* <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-pink-300 bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-pink-300 bg-gray-500"></div>
                </div> */}
              </div>

              <button className="w-full mt-6 py-3 bg-[#F178B6] text-[24px] hover:bg-pink-500 rounded-2xl font-bold transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition">
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === 1 ? "bg-blue-400" : "bg-pink-300"}`}
            ></div>
          ))}
        </div>
        <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
