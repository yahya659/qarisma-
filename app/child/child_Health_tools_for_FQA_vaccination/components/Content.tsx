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
    { name: "General Health", color: "bg-pink-400" },
    { name: "Nutrition", color: "bg-blue-500" },
    { name: "Vaccination", color: "bg-indigo-500" },
    { name: "Growth & Development", color: "bg-blue-600" },
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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${faq.color} rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${openFaq === index ? "ring-4 ring-white" : ""}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-white font-bold group"
                >
                  <span className="text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-md group-hover:bg-white/40 transition-colors">
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-8 text-white/90 animate-fadeIn">
                    
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6 mt-20 text-3xl font-bold">
            <ChevronLeft className="w-10 h-10 text-purple-300 cursor-pointer hover:text-purple-600 transition-colors" />
            <span className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-xl shadow-lg border-2 border-white">
              1
            </span>
            <span className="text-purple-600 cursor-pointer">2</span>
            <span className="text-purple-600 cursor-pointer">3</span>
            <ChevronRight className="w-10 h-10 text-purple-600 cursor-pointer hover:text-purple-800 transition-colors" />
          </div>
        </div>
      </section>
    </>
  );
}
