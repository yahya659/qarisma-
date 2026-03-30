"use client";
import React from 'react';
import { Bookmark } from 'lucide-react';
import Sidebar from '@/app/components/dashboard/Sidebar';
import Link from 'next/link';

const SavedArticles = () => {

  const articles = [
    { id: 1, title: "The Future of AI in Software Development", category: "Design", date: "Saved on Oct 12, 2023", image: "/images/Articles1.png" },
    { id: 2, title: "Mastering UI/UX Design Principles", category: "UI/UX", date: "Saved on Oct 12, 2023", image: "/images/Articles2.png" },
    { id: 3, title: "The Rise of Remote Work in Tech", category: "Business", date: "Saved on Oct 12, 2023", image: "/images/Articles3.png" },
    { id: 4, title: "Innovations in Educational Technology", category: "Education", date: "Saved on Oct 12, 2023", image: "/images/Articles4.png" },
    { id: 5, title: "The Impact of Design Thinking on Business Strategy", category: "Design", date: "Saved on Oct 12, 2023", image: "/images/Articles5.png" },
  ];

  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/dashbord.png')" }}
    >

      {/* Sidebar */}
      <div className="hidden md:block w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6">
        
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 border border-white/10 shadow-xl overflow-y-auto max-h-[calc(100vh-6rem)] no-scrollbar">
          
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white/90 mb-6 sm:mb-10">
            Saved Articles
          </h1>

          <div className="space-y-3 sm:space-y-4">

            <Link
              href="/dashboard/Bookmarks/BookmarksEmptyStateorytimeline"
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-medium rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              BookmarksEmptyStateorytimeline...page
            </Link>

            {articles.map((article) => (
              <div 
                key={article.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 bg-black/5 hover:bg-black/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5 transition duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-5">
                  
                  <div className="bg-gradient-to-br from-[#db2777]/30 to-[#8d7cdd]/30 p-1 rounded-xl border border-white/10 shadow-inner">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-white transition line-clamp-1">
                      {article.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-light text-white/50 mb-1">
                      {article.date}
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-medium text-[#db2777] uppercase tracking-wider">
                      {article.category}
                    </p>
                  </div>
                </div>

                <Bookmark 
                  size={16} 
                  className="text-white/40 group-hover:text-white transition self-end sm:self-auto"
                />
              </div>
            ))}

          </div>

        </div>

      </main>
    </div>
  );
};

export default SavedArticles;