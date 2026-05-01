"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/Home" },
    { name: "About Us", href: "/AboutUs" },
    { name: "News", href: "/News" },
    { name: "Categories", href: "/categories" },
    { name: "Support us", href: "/Supportus" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full h-20 md:h-24 bg-white shadow-sm flex items-center px-4 md:px-12 fixed top-0 left-0 z-50">

        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Quarisma Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-lg xl:text-xl font-bold transition-colors duration-200
                  ${
                    activeLink === link.name
                      ? "text-[#6366F1]"
                      : "text-[#0A0B3B] hover:text-[#6366F1]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Notification */}
            <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                  fill="#E67EAF"
                />
              </svg>
            </button>

            {/* Profile */}
            <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition border border-gray-200">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#E67EAF"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#0A0B3B"
                  strokeWidth="2"
                />
              </svg>
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-20 md:top-24 left-0 w-full bg-white shadow-lg z-40 lg:hidden">

          <div className="flex flex-col p-6 space-y-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`text-lg font-bold ${
                  activeLink === link.name
                    ? "text-[#6366F1]"
                    : "text-[#0A0B3B]"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}
    </>
  );
}