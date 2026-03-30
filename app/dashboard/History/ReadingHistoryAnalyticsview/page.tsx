"use client";

import React from 'react';
import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/Header";
import Link from 'next/link';

export default function ReadingHistory() {
  // 1. بيانات الإحصائيات العلوية
  const stats = [
    { label: "Total Articles Read", value: "234" },
    { label: "Weekly Progress", value: "75%" },
    { label: "Top Category", value: "Technology" },
  ];

  // 2. بيانات قائمة السجل (أضفنا مسار الصورة هنا)
  const historyItems = [
    { 
      category: "Technology", 
      title: "The Future of AI in Healthcare", 
      time: "Last read: 2 days ago", 
      image: "/images/Bookmarks Empty Stateory timeline.png" // ضع مسار صورتك هنا
    },
    { 
      category: "Environment", 
      title: "Sustainable Living Practices", 
      time: "Last read: 5 days ago", 
      image: "/images/Bookmarks Empty Stateory timeline.png" 
    },
    { 
      category: "Wellness", 
      title: "The Art of Mindfulness", 
      time: "Last read: 1 week ago", 
      image: "/images/Bookmarks Empty Stateory timeline.png" 
    },
    { 
      category: "Science", 
      title: "Exploring the Cosmos", 
      time: "Last read: 2 weeks ago", 
      image: "/images/Bookmarks Empty Stateory timeline.png" 
    },
    { 
      category: "History", 
      title: "The History of Ancient Civilizations", 
      time: "Last read: 1 month ago", 
      image: "/images/Bookmarks Empty Stateory timeline.png" 
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* الخلفية الثابتة */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/dashbord.png')" }} 
      />

     

      <div className="flex  h-screen">
        {/* الشريط الجانبي */}
        <div className="hidden md:block w-64 shrink-0">
          <Sidebar />
        </div>

        {/* منطقة المحتوى الرئيسية */}
        <main className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar">
            <br/>
            <br/>
            <br/>
            <br/>
          
          <div className="max-w-5xl mx-auto">
            
            <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Reading History</h1>

            {/* كروت الإحصائيات العلوية */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#D800B9] p-7 rounded-[1.8rem] shadow-2xl border border-white/20">
                  <p className="text-white/80 text-xs font-semibold mb-1 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-white text-3xl font-black">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* قائمة سجل القراءة */}
            <div className="space-y-12">
              {historyItems.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-10 group">
                  
                  {/* قسم النصوص والأزرار (الجانب الأيسر) */}
                  <div className="flex-1 order-2 md:order-1">
                    <p className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl font-bold mb-1 group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-[10px] mb-5 italic font-light">
                      {item.time}
                    </p>
                    
                    <button className="bg-[#D800B9] hover:bg-[#be185d] text-white text-[10px] font-black px-10 py-2.5 rounded-full transition-all active:scale-90 shadow-lg uppercase">
                      View
                    </button>
                  </div>

                  {/* قسم الصور الحقيقية (الجانب الأيمن) */}
                  <div className="w-full md:w-[320px] h-[180px] overflow-hidden border border-white/20 shadow-2xl order-1 md:order-2 relative group-hover:scale-105 transition-transform duration-500">
                    {/* الصورة الحقيقية */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"

                      
                    />
                    
                    {/* تأثير "الزجاج" فوق الصورة عند الـ Hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                </div>
              ))}
            </div>

            {/* مسافة سفلية للتمرير */}
            <div className="h-24" />
          </div>
        </main>
      </div>
    </div>
  );
}