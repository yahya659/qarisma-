"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-700">

      {/* 🔮 Page Background */}
      <Image
        src="/images/onboardingbackground.png"
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
          src="/butterflybackground.png"
          alt="butterflies"
          fill
          className="object-cover opacity-35"
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
          <h2 className="text-lg md:text-xl font-light mb-10 text-white/90 leading-relaxed">
            create an account to get full access to unlimited <br />
            resources
          </h2>

          {/* Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">

            {/* Get Started */}
            <button
              onClick={() => router.push("/Getstartednow")}
              className="
                w-50
                h-12
                rounded-[15px]
                bg-[#FDEBF4]
                text-purple-700
                font-medium
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get started now
            </button>

            {/* Sign In */}
            <button
              onClick={() => router.push("/signup")}
              className="
                w-50
                h-12
                rounded-[15px]
                bg-[#FDEBF4]/40
                text-gray-800
                shadow-[5px_4px_4px_rgba(0,0,0,0.4)]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              sign in
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}