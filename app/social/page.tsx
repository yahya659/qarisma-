"use client";
import { ChevronLeft, ChevronRight, Play, Search, Send } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "./components/HeroSection";
import SocietySection from "./components/SocietySection";
import DiscoverSection from "./components/DiscoverSection";
import ContactBanner from "./components/ContactBanner";

export default function social() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 bg-[linear-gradient(272.99deg,rgba(241,120,182,0.87)_-17.02%,rgba(93,95,239,0.87)_117.79%)]">
        {/* HeroSection */}
        <HeroSection />

        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />

          {/* Dark Overlay (اختياري لتحسين وضوح النص) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Society Section */}
            <SocietySection />
            {/* Discover Section */}
            <DiscoverSection />
            {/* Contact Banner */}
            <ContactBanner />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
