"use client";

import React, { useState } from 'react'; // أضفنا useState للتحكم في التنقل
import { Home, Search, BookOpen, History, MessageSquare } from 'lucide-react';
import Header from '../Header';
import Link from 'next/link';
// استيراد المكونات من المجلدات الخاصة بك
// ملاحظة: تأكد من استيراد باقي المكونات هنا إذا كانت جاهزة لديك

const Sidebar = () => {
  // الحالة الافتراضية هي صفحة الهوم
  const [activeTab, setActiveTab] = useState('/');

  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, href: '/' },
    { name: 'Explore', icon: <Search size={18} />, href: '/explore' },
    { name: 'Articles', icon: <BookOpen size={18} />, href: '/articles' },
    { name: 'History', icon: <History size={18} />, href: '/history' },
    { name: 'Feedback', icon: <MessageSquare size={18} />, href: '/feedback' },
  ];

  return (
    <>
      <Header />
      <br /><br /><br /><br />
      <div className="relative min-h-screen w-full bg-cover bg-center">
        
        {/* Sidebar Container */}
        <div className="absolute left-4 top-4 bottom-4 w-64 rounded-xl bg-indigo-500/40 backdrop-blur-md border border-white/20 flex flex-col p-4 shadow-2xl">
          
          {/* User Profile Section */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <img 
              src="/images/profile-placeholder.jpg" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white/50"
            />
            <span className="text-white font-medium text-sm">Sophia Carter</span>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.href)} // عند الضغط يغير المحتوى
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === item.href 
                  ? 'bg-gradient-to-r from-pink-600 to-pink-400 text-white shadow-lg' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="text-sm font-light">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <main className="ml-80 p-8 min-h-screen bg-cover bg-center">
          {/* عرض المكون بناءً على الزر المضغوط */}
          {activeTab === '/' && <Home />}
          
          {activeTab === '/explore' && (
             <div className="text-white">
               <h1 className="text-2xl font-bold">صفحة Explore</h1>
               {/* يمكنك استدعاء مكون Explore هنا بنفس طريقة الهوم */}
             </div>
          )}

          {/* يمكنك إضافة باقي الصفحات هنا بنفس الطريقة */}
        </main>
      </div>
    </>
  );
};

export default Sidebar;