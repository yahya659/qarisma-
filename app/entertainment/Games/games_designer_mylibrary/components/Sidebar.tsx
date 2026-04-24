"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  UploadCloud,
  Library,
  BarChart3,
  Users,
  Wallet,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menu = [
    { name: "Home", icon: Home, path: "/entertainment/Games/games_designer_home" },
    { name: "Upload Game", icon: UploadCloud, path: "/entertainment/Games/Games_designer_profile" },
    { name: "My Library", icon: Library, path: "/entertainment/Games/games_designer_mylibrary" },
    { name: "Analytic", icon: BarChart3, path: "/entertainment/Games/Analytic" },
    { name: "Community", icon: Users, path: "/entertainment/Games/games_designer_community" },
    { name: "Payout", icon: Wallet, path: "/entertainment/Games/games_designer_payout" },
    { name: "Feedbacks", icon: MessageSquare, path: "/feedbacks" },
  ];

  return (
    <aside className="w-full md:w-64 bg-indigo-500/40 backdrop-blur-xl border-r border-white/10 flex flex-col z-50">
      <div className="p-6">
        <nav className="space-y-1">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[18px] font-bold transition-all ${
                pathname === item.path
                  ? "bg-[#F178B6A3] text-white shadow-lg"
                  : "hover:bg-white/10 text-gray-200"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Profile */}
      <div className="mt-auto p-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-400 overflow-hidden border-2 border-white/50">
            <img
              src="/images/Games/zainp.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[20px] font-black">Sara smith</p>
          </div>
        </div>
      </div>
    </aside>
  );
}