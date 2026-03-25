"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  // الحالة لتحديد الرابط النشط (Active Link)
  const [activeLink, setActiveLink] = useState('HOME');

  const navLinks = [
    { name: 'HOME', href: '/Home' },
    { name: 'About Us', href: '/AboutUs' },
    { name: 'News', href: '/News' },
    { name: 'Categories', href: '/categories' },
    { name: 'Support us', href: '/Supportus' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full h-24 bg-white shadow-sm flex items-center px-6 md:px-12 fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
        
        {/* 1. شعار الموقع (Logo) */}
        <div className="flex-shrink-0 relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
          <Image 
            src="/images/logo.png" // تأكد من وجود شعارك في مجلد public
            alt="Quarisma Logo" 
            fill 
            className="object-cover"
          />
        </div>

        {/* 2. القائمة الرئيسية (Navigation Links) */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-xl font-bold transition-colors duration-200 
                ${activeLink === link.name 
                  ? 'text-[#6366F1]' // اللون الأزرق للرابط النشط كما في الفيجما
                  : 'text-[#0A0B3B] hover:text-[#6366F1]' // اللون الكحلي الغامق
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. الأيقونات الجانبية (Notification & Profile) */}
        <div className="flex items-center space-x-4">
          
          {/* أيقونة الجرس (Notification) */}
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" 
                fill="#E67EAF" // اللون الوردي للجرس
              />
            </svg>
          </button>

          {/* أيقونة الملف الشخصي (User Profile) */}
          <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors border border-gray-200">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                fill="#E67EAF" // اللون الوردي للملف الشخصي
              />
            </svg>
          </button>

        </div>

      </div>
    </header>
  );
}