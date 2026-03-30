"use client";
import Sidebar from "@/app/components/dashboard/Sidebar";
import React, { useState } from 'react';
import { Briefcase, DollarSign, Clock, History } from 'lucide-react'
import Link from "next/link";
export default function Explore() {
    const [activeTab, setActiveTab] = useState('Today');
    const historyData = [
    { id: 1, title: "The Future of Work: Navigating the New Normal", category: "Business", icon: <Briefcase size={16} />, type: 'work' },
    { id: 2, title: "Sustainable Investing: A Guide for Beginners", category: "Finance", icon: <DollarSign size={16} />, type: 'finance' },
    { id: 3, title: "The Art of Mindful Productivity", category: "Productivity", icon: <Clock size={16} />, type: 'time' },
    { id: 4, title: "The Future of Work: Navigating the New Normal", category: "Business", icon: <Briefcase size={16} />, type: 'work' },
    { id: 5, title: "Sustainable Investing: A Guide for Beginners", category: "Finance", icon: <DollarSign size={16} />, type: 'finance' },
    { id: 6, title: "The Art of Mindful Productivity", category: "Productivity", icon: <Clock size={16} />, type: 'time' },
  ];
  return (
    <>
      <div
        className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/dashbord.png')" }}
      >
        <div className="hidden md:block w-64 shrink-0">
          <Sidebar />
        </div>

        <main className="flex-grow p-4 md:p-10 overflow-y-auto w-full">
          <br />
          <br />
          <br />
          <br />
          <br />

            
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">Reading History</h1>
 <Link
              href="/dashboard/History/ReadingHistoryAnalyticsview"
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-medium rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              ReadingHistoryAnalyticsview..page
            </Link>
            {/* أزرار التبديل (Tabs) */}
            <div className="bg-[#5D5FEF]/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 flex items-center mb-12 shadow-lg">
              {['Today', 'This Week', 'This Month'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab 
                    ? 'bg-[#db2777] text-white shadow-lg scale-[1.02]' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* قائمة التاريخ مع الخط الزمني (Timeline) */}
            <div className="relative space-y-8 pl-4">
              {/* الخط العمودي الواصل */}
              <div className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

              {historyData.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                  
                  {/* الدائرة والأيقونة (نقطة الزمن) */}
                  <div className="relative z-10 flex items-center justify-center w-[26px] h-[26px] mt-1 bg-white/10 rounded-full border border-white/30 backdrop-blur-sm group-hover:border-pink-400 transition-colors">
                    <div className="text-white/70 group-hover:text-pink-400 transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* محتوى المقال */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-white font-medium text-lg leading-tight group-hover:text-pink-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-indigo-300 text-xs font-medium mt-1 opacity-100 uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-24" /> {/* مساحة للتمرير المريح */}
          </div>

        </main>
      </div>
    </>
  );
}
