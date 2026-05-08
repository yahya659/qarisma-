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

  <aside
    className="
      fixed
      top-[80px] md:top-[90px]
      left-0
      z-40
      h-[calc(100vh-80px)] md:h-[calc(100vh-90px)]
      w-[70px] sm:w-[220px] md:w-[250px] lg:w-[280px]
      bg-[#5D5FEF80]
      backdrop-blur-md
      border-r border-white/20
      p-2 sm:p-4 md:p-6
      overflow-y-auto
      transition-all
    "
  >

    {/* Profile */}
    <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">

      <img
        src="/images/profile-placeholder.jpg"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        alt="profile"
      />

      <span className="hidden sm:block text-white text-sm md:text-base font-semibold">
        Sophia Carter
      </span>

    </div>


    {/* Menu */}
    <nav className="flex flex-col gap-2 md:gap-3">

      <Link
        href="/dashboard/Homecontact"
        className={linkClass("/dashboard/Homecontact")}
      >
        Home
      </Link>

      <Link
        href="/dashboard/Explore"
        className={linkClass("/dashboard/Explore")}
      >
        Explore
      </Link>

      <Link
        href="/dashboard/Bookmarks"
        className={linkClass("/dashboard/Bookmarks")}
      >
        Bookmarks
      </Link>

      <Link
        href="/dashboard/History"
        className={linkClass("/dashboard/History")}
      >
        History
      </Link>

      <Link
        href="/dashboard/Feedback"
        className={linkClass("/dashboard/Feedback")}
      >
        Feedback
      </Link>

    </nav>

  </aside>
</>
    
  );
}