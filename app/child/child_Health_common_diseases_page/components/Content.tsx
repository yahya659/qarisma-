"use client";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Cloud,
} from "lucide-react";
import React, { useState } from "react";

export default function Content() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("General Health");
  const categories = [
    { name: "All", color: "bg-pink-400" },
    { name: "common", color: "bg-blue-500" },
    { name: "mental health & disorders", color: "bg-indigo-500" },
    { name: "Oral Health", color: "bg-blue-600" },
  ];
  const faqs = [
    {
      question: "How often should my child see a pediatrician",
      color: "bg-blue-500",
    },
    {
      question: "What Temperature is considered a fever",
      color: "bg-pink-400",
    },
    {
      question: "What Temperature is considered a fever",
      color: "bg-pink-400",
    },
    {
      question: "What Temperature is considered a fever",
      color: "bg-pink-400",
    },
    {
      question: "What Temperature is considered a fever",
      color: "bg-pink-400",
    },
  ];
  return (
    <>
      {" "}
      <section className="relative mt-10 z-30 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Cloud Illustration */}
          <div className="absolute -right-10 md:right-10 -top-20 animate-bounce transition-all duration-1000">
            {/* <div className="relative">
                <Cloud className="w-32 h-32 text-pink-200 fill-current opacity-90" />
                <div className="absolute top-8 left-8 text-2xl">😊</div>
            </div> */}
          </div>

          {/* Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`${cat.color} text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-all whitespace-nowrap border-b-4 border-black/10`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Accordion List */}
        
          {/* Pagination */}
         
        </div>
      </section>
    </>
  );
}
