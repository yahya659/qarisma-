"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../Header";
import Footer from "../Footer";

export default function Sidebar() {
  const pathname = usePathname();
type Path = string;

const linkClass = (path: Path) => {
  return `px-4 py-2 rounded-lg transition ${
    pathname === path
      ? "bg-pink-500 text-white shadow-lg"
      : "text-white hover:bg-white/10"
  }`;
};

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="top-0 left-0 h-screen w-64 
       bg-[#5D5FEF80] from-purple-500/40 to-blue-500/40 
        backdrop-blur-xl shadow-xl border-r border-white/20 p-4">

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/images/profile-placeholder.jpg"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-semibold">Sophia Carter</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">

          <Link href="/dashboard/Homecontact" className={linkClass("/dashboard/Homecontact")}>
            Home
          </Link>

          <Link href="/dashboard/Explore" className={linkClass("/dashboard/Explore")}>
            Explore
          </Link>

          <Link href="/dashboard/Bookmarks" className={linkClass("/dashboard/Bookmarks")}>
            Bookmarks
          </Link>

          <Link href="/dashboard/History" className={linkClass("/dashboard/History")}>
            History
          </Link>

          <Link href="/dashboard/Feedback" className={linkClass("/dashboard/Feedback")}>
            Feedback
          </Link>

        </nav>
        
        
      </div>
      
    </>
    
  );
}