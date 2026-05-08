"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Luxurious_limousine from "./Luxurious_limousine";
import Selection_Cards from "./Selection_Cards";

export default function HeroSection() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(
      [...Array(8)].map(() => ({
        top: Math.random() * 100,
        right: Math.random() * 50,
        scale: 0.5 + Math.random(),
        rotate: Math.random() * 360,
      }))
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-700">
      {/* 🔮 Page Background */}
      <Image
        src="/images/onboardingbackground.png"
        alt="background"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95] via-[#1e103d] to-[#831843] opacity-80"></div>

        {/* Animated Butterfly Overlays */}
        {items.map((item, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-40"
            style={{
              top: `${item.top}%`,
              right: `${item.right}%`,
              transform: `scale(${item.scale}) rotate(${item.rotate}deg)`,
              filter: "drop-shadow(0 0 10px #f472b6)",
            }}
          />
        ))}

        {/* image--farasha */}
        <Image
          src="/images/launch_page/launch_page2.png"
          alt="heart"
          width={738}
          height={905}
          className="object-cover ml-150"
        />

        {/* Decorative Curtains Effect */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black/40 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black/40 to-transparent blur-3xl opacity-50"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-12 pb-24 text-center">
        {/* Brand Logo Header */}
        <div className="w-24 h-24 rounded-full border-4 border-white/10 p-1 mb-8 shadow-2xl bg-white/5 backdrop-blur-xl">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-pink-400/30">
            <img
              src="/images/logo.png"
              className="w-full h-full object-cover"
              alt="Brand"
            />
          </div>
        </div>

        <h1 className="text-[48px] font-black italic tracking-tight text-pink-400 mb-6 drop-shadow-lg">
          welcome to Quarisma
        </h1>

        <p className="text-lg md:text-xl font-medium text-white/90 max-w-2xl mb-16 leading-relaxed">
          Explore more about world and be updated <br />
          with the latest news, your exclusive journey awaits
        </p>

        {/* Host Selection Cards */}
        <Selection_Cards />

        {/* Footer Message */}
        <Luxurious_limousine />
      </main>
    </div>
  );
}