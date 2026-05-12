"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CATEGORIES() {
  const [activeCategory, setActiveCategory] = useState("Biennales");
  const router = useRouter();

  const CATEGORIES = [
    "All",
    "Festivals",
    "Gallery openings",
    "Biennales",
    "Workshops",
  ];

  const handleClick = (cat: string) => {
    setActiveCategory(cat);

    if (cat === "All") {
      router.push("/art_pg_main/Articles/art_articles_events_pg");
    }
     if (cat === "Festivals") {
      router.push("/art_pg_main/Articles/art_articles_gallery_pg/art_articles_gallery_latest_stories_pg/art_articles_gallery_exhibition_reviews_pg");
    }
     if (cat === "Gallery openings") {
      router.push("/art_pg_main/Articles/art_articles_gallery_pg");
    }
     if (cat === "Workshops") {
      router.push("/art_pg_main/Articles/art_articles_gallery_pg");
    }
     if (cat === "Biennales") {
      router.push("/art_pg_main/Articles/art_articles_events_pg/art_articles_events_festivals_pg");
    }
    
  };

  return (
    <section className="max-w-[1343px] p-10 mx-auto px-6 relative z-20">
      <div className="flex flex-wrap items-center gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`px-6 py-2 text-[24px] font-bold transition-all ${
              activeCategory === cat
                ? "bg-[#F178B6] text-white shadow-lg"
                : "bg-[#5D5FEFED]/80 text-white/90 hover:bg-indigo-700"
            }`}
          >
            {cat}
          </button>
        ))}

        <div className="ml-auto bg-[#F178B6A3]/80 px-8 py-2 w-[298px] text-[24px] text-white font-bold cursor-pointer hover:bg-indigo-700 transition-colors flex items-center gap-2">
          Search
        </div>
      </div>
      
    </section>
  );
}