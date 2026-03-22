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
    <footer className="w-full bg-[#B89DA9] pt-12 pb-6 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* الجزء العلوي: الروابط، الشعار، وأزرار المتاجر */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* 1. الروابط اليسرى (News, Feedback, About, etc.) */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <div className="flex flex-col gap-3">
              <Link href="/news" className="text-white text-xl hover:text-gray-200 transition-colors">News</Link>
              <Link href="/feedback" className="text-white text-xl hover:text-gray-200 transition-colors">Feed Back</Link>
              <Link href="/about" className="text-white text-xl hover:text-gray-200 transition-colors">About Us</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/fields" className="text-white text-xl hover:text-gray-200 transition-colors">fields</Link>
              <Link href="/support" className="text-white text-xl hover:text-gray-200 transition-colors">Support</Link>
              <Link href="/upload" className="text-white text-xl hover:text-gray-200 transition-colors">Upload</Link>
            </div>
          </div>

          {/* 2. الشعار وأيقونات التواصل الاجتماعي (المنتصف) */}
          <div className="flex flex-col items-center gap-6">
            {/* الشعار الدائري */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
              <img 
                src="images/logo.png" //
                alt="Logo" 
                 
                className="object-cover"
              />
            </div>
            
            {/* أيقونات التواصل الاجتماعي الدائرية والملونة */}
            <div className="flex items-center gap-4">
              <SocialButton color="bg-[#4267B2]" icon={<FaFacebookF />} />
              <SocialButton color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" icon={<FaInstagram />} />
              <SocialButton color="bg-black" icon={<RiTwitterXFill />} />
              <SocialButton color="bg-[#25D366]" icon={<FaWhatsapp />} />
              <SocialButton color="bg-[#FF0000]" icon={<FaYoutube />} />
              <SocialButton color="bg-[#0088cc]" icon={<FaTelegramPlane />} />
            </div>
          </div>

          {/* 3. أزرار متاجر التطبيقات (اليمين) */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="transform hover:scale-105 transition-transform">
              <Image 
                src="/google-play.png" 
                alt="Google Play" 
                width={170} 
                height={50} 
                className="rounded-lg shadow-md"
              />
            </Link>
            <Link href="#" className="transform hover:scale-105 transition-transform">
              <Image 
                src="/app-store.png" 
                alt="App Store" 
                width={170} 
                height={50} 
                className="rounded-lg shadow-md"
              />
            </Link>
          </div>
        </div>

        {/* الجزء السفلي: حقوق النشر */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-black text-lg font-semibold tracking-wide">
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