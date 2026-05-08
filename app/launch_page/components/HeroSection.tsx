"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-700">
      {/* 🔮 Page Background */}
      <Image
        src="/images/launch_page/launch_page1.jpg"
        alt="background"
        fill
        priority
        className="object-cover blur-sm scale-110 "
      />

      {/* 🎨 Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/40 to-black/80" />

      {/* 🎯 Glass Card */}
      <div className="relative z-10 w-full max-w-2xl px-10 py-16 rounded-3xl overflow-hidden ">
        {/* 🦋 Butterfly Background (Soft) */}
        <Image
          src="/images/launch_page/launch_page2.png"
          alt="butterflies"
          fill
          className="object-cover opacity-20 shadow-[6px_8px_4px_0px_#5D5FEF]"
        />

        {/* 🌫 Card Overlay */}

        {/* 🎯 Content */}
        <div className="relative text-center text-white">
          {/* Logo */}
          <div className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border border-white/30 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Qarisma Logo"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Title */}
         <h1 className="text-[60px]   font-bold tracking-tight mb-4 text-center">
          welcome to <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-300">Quarisma</span>
        </h1>

        {/* Quote */}
        <p className="text-[32px]   text-white/70 italic mb-2 text-center   -md px-6">
          "News is the first draft of history."
        </p>
        <p className="text-[24px]   text-white/70 italic mb-11 text-center   -md px-6">
          Explore more about world
        </p>
        

          {/* Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            {/* Get Started */}
            <button
              onClick={() => router.push("/Onboarding")}
              className="
                w-50
                h-12
                rounded-[15px]
                bg-[#FDEBF4]
                text-[#5D5FEF]
                text-[24px]
                font-Bold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Continue
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
}
