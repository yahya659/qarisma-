"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaYoutube, 
  FaTelegramPlane 
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

export default function Footer() {
  return (
  
  <footer className="w-full bg-[#BD9FA9] font-sans shadow-[0px_4px_4px_0px_#00000040]">

  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

    {/* Top section */}
    <div className="flex flex-col md:flex-row justify-between gap-10">

      {/* Links */}
      <div className="grid grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4">

        <div className="flex flex-col gap-3">
          <Link href="/news" className="text-white text-base md:text-xl hover:text-gray-200 transition">News</Link>
          <Link href="/feedback" className="text-white text-base md:text-xl hover:text-gray-200 transition">Feed Back</Link>
          <Link href="/about" className="text-white text-base md:text-xl hover:text-gray-200 transition">About Us</Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/fields" className="text-white text-base md:text-xl hover:text-gray-200 transition">Fields</Link>
          <Link href="/support" className="text-white text-base md:text-xl hover:text-gray-200 transition">Support</Link>
          <Link href="/upload" className="text-white text-base md:text-xl hover:text-gray-200 transition">Upload</Link>
        </div>

      </div>

      {/* Logo + Social */}
      <div className="flex flex-col items-center gap-6">

        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/30 shadow-lg">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <SocialButton color="bg-[#4267B2]" icon={<FaFacebookF />} />
          <SocialButton color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" icon={<FaInstagram />} />
          <SocialButton color="bg-black" icon={<RiTwitterXFill />} />
          <SocialButton color="bg-[#25D366]" icon={<FaWhatsapp />} />
          <SocialButton color="bg-[#FF0000]" icon={<FaYoutube />} />
          <SocialButton color="bg-[#0088cc]" icon={<FaTelegramPlane />} />
        </div>

      </div>

      {/* Store buttons */}
      <div className="flex flex-col gap-4 items-center md:items-start">

        <Link href="#" className="hover:scale-105 transition">
          <Image
            src="/google-play.png"
            alt="Google Play"
            width={160}
            height={50}
            className="rounded-lg shadow-md"
          />
        </Link>

        <Link href="#" className="hover:scale-105 transition">
          <Image
            src="/app-store.png"
            alt="App Store"
            width={160}
            height={50}
            className="rounded-lg shadow-md"
          />
        </Link>

      </div>

    </div>

    {/* Bottom */}
    <div className="mt-10 pt-6 border-t border-white/20 text-center">

      <p className="text-black text-sm md:text-lg font-semibold tracking-wide">
        All Copy Rights are Reserved
      </p>

    </div>

  </div>
</footer>
  );
}

// مكون فرعي للأزرار الاجتماعية
function SocialButton({ color, icon }: { color: string, icon: React.ReactNode }) {
  return (
    <button className={`${color} w-10 h-10 rounded-full flex items-center justify-center text-white text-xl shadow-md hover:scale-110 transition-transform active:scale-90`}>
      {icon}
    </button>
  );
}