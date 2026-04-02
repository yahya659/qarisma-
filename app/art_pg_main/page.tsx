import React from "react";
import { Search, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
const ArtPortal = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen text-white font-sans p-4 md:p-8 bg-[url('/images/NEWSS.jpg')] bg-cover bg-center">
        {/* Header Section */}
        <header className="max-w-7xl mx-auto mb-8">
          <h1 className="text-5xl font-bold text-[#4F46E5] mb-2">ART</h1>
          <p className="text-xl text-black font-semibold mb-6">
            Top headlines and In-depth across the world
          </p>

          {/* Navigation Tags & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
              Top
            </button>
            <Link href="/art_pg_main/Articles">
              <button className="bg-[#EC4899] px-6 py-2 rounded-md shadow-md">
                Articles
              </button>
            </Link>
            <Link href="/art_pg_main/Reports">
              {" "}
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Reports
              </button>
            </Link>
            <Link href="/art_pg_main/Interviews">
              {" "}
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Interviews
              </button>
            </Link>

            <div className="flex-grow flex justify-end">
              <div className="relative w-full max-w-xs">
                <input
                  type="text"
                  placeholder="search"
                  className="w-full bg-[#A5B4FC] rounded-md py-2 px-4 placeholder-white focus:outline-none"
                />
                <Search
                  className="absolute right-3 top-2 text-white"
                  size={20}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <Link href="/art_pg_main/Scoop">
              {" "}
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Scoop
              </button>
            </Link>
            <Link href="/art_pg_main/Talents">
              {" "}
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Talents
              </button>
            </Link>

            <Link href="/art_pg_main/TeamofTheWeek">
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md text-sm">
                Team of The Week
              </button>
            </Link>
          </div>
        </header>

        {/* Main Content Grid */}
        <Header />

        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Video Card */}
          <div className="lg:col-span-2 relative group overflow-hidden rounded-xl border-4 border-yellow-600/50 shadow-2xl">
            <div className="aspect-video bg-black/40 relative flex items-center justify-center">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-[url('/images/NEWSS.jpg')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                <Play className="fill-white text-white" size={48} />
              </div>
              <div className="absolute bottom-0 left-0 p-8  bg-gradient-to-t from-black/80 to-transparent w-full">
                <h2 className="text-3xl font-bold text-blue-400">
                  Beyond the Headlines
                </h2>
                <p className="mt-2 text-gray-200 max-w-md text-sm leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole...
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Sections */}
          <div className="space-y-6">
            <section>
              <h3 className="text-blue-900 font-bold mb-3 uppercase tracking-wider">
                Editors Picks
              </h3>
              <SidebarCard title="Beyond the Headlines" active />
              <SidebarCard title="Beyond the Headlines" active={undefined} />
            </section>

            <section>
              <h3 className="text-blue-900 font-bold mb-3 uppercase tracking-wider">
                Newspaper
              </h3>
              <SidebarCard title="Beyond the Headlines" active={undefined} />
              <SidebarCard title="Beyond the Headlines" active={undefined} />
            </section>
          </div>
        </main>

        {/* Bottom Cards Section */}
        <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard title="Article" highlight />
          <ArticleCard title="Reports" highlight={undefined} />
          <ArticleCard title="Interview" highlight={undefined} />
          <ArticleCard title="Talents" highlight={undefined} />
          <ArticleCard title="War On Gaza" highlight={undefined} />
          <ArticleCard title="War On Gaza" highlight={undefined} />
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12 pb-12">
          <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === 1 ? "bg-blue-600" : "bg-blue-300"}`}
              ></div>
            ))}
          </div>
          <button className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Sub-components for cleaner code
const SidebarCard = ({ title, active }) => (
  <div
    className={`mb-3 p-4 rounded-lg backdrop-blur-md transition 
${active ? "bg-[#F178B6] border-l-4 border-blue-500" : "bg-[]/70 hover:bg-[#F178B6]"}`}
  >
    <h4 className="font-bold text-blue-900">{title}</h4>
    <p className="text-[10px] text-gray-700 mt-1 line-clamp-2">
      It has one principle and one motto that can be read individually...
    </p>
  </div>
);

const ArticleCard = ({ title, highlight }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
    <div className="h-40 bg-gray-300 relative overflow-hidden">
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-[url('/images/news1.png')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 bg-white/80 px-4 py-1 font-bold text-gray-800 rounded-tr-xl">
        {title}
      </div>
    </div>
    <div className="p-4 bg-white">
      <p className="text-xs text-gray-600 leading-relaxed">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole...
      </p>
    </div>
  </div>
);

export default ArtPortal;
