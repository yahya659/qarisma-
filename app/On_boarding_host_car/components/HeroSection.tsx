"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const carRef = useRef<HTMLDivElement>(null);
  const [animating, setAnimating] = useState(false);

  function handleNext() {
    if (animating) return;
    setAnimating(true);

    const car = carRef.current;
    if (!car) return;

    const duration = 2500;
    const start = performance.now();

    function ease(t: number) {
      return t * t * t; // accelerate
    }

    function tick(now: number) {
      const t = ease(Math.min((now - start) / duration, 1));
      const moveX = t * 120; // يتحرك لليمين
      const opacity = 1 - t;

      car.style.transform = `translateX(${moveX}%)`;
      car.style.opacity = String(opacity);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        router.push("/Getstartednow");
      }
    }

    requestAnimationFrame(tick);
  }
  function sign_in() {
    if (animating) return;
    setAnimating(true);

    const car = carRef.current;
    if (!car) return;

    const duration = 2500;
    const start = performance.now();

    function ease(t: number) {
      return t * t * t; // accelerate
    }

    function tick(now: number) {
      const t = ease(Math.min((now - start) / duration, 1));
      const moveX = t * 120; // يتحرك لليمين
      const opacity = 1 - t;

      car.style.transform = `translateX(${moveX}%)`;
      car.style.opacity = String(opacity);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        router.push("/sign_in");
      }
    }

    requestAnimationFrame(tick);
  }

  return (
    <>
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full text-center">
        {/* الشعار */}
        <div className="w-24 h-24 rounded-full border-4 border-white/10 p-1 mb-8 shadow-2xl bg-white/5 backdrop-blur-xl">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-pink-400/30">
            <img
              src="/images/logo.png"
              className="w-full h-full object-cover"
              alt="Brand"
            />
          </div>
        </div>

        {/* العناوين */}
        <h2 className="text-[48px] font-bold mb-1 text-[#FFFFFF] drop-shadow-md">
          welcome to
        </h2>
        <h1 className="text-[36px] text-[#F178B6] font-extrabold mb-8 tracking-tight drop-shadow-xl">
          our community
        </h1>

        {/* النصوص */}
        <div className="space-y-4 mb-12">
          <p className="text-[36px] text-[#FFFFFF] leading-relaxed font-bold opacity-90">
            Explore more about world and be updated with the latest news, your
            exclusive journey awaits
          </p>
        </div>

        {/* السيارة */}
        <div className="w-full max-w-md mb-12 relative group">
          <div
            ref={carRef}
            className="relative w-[719px] right-30 h-[200px]"
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src="/images/On_boarding_host_car/On_boarding_host_car1.png"
              alt="car"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex w-full gap-4 max-w-sm">
          <button
            onClick={handleNext}
            disabled={animating}
            className="flex-1 bg-[#F178B6]/38 backdrop-blur-md border border-white/20 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            Next
          </button>
          <button
            onClick={sign_in} disabled={animating}
            className="flex-1 bg-[#F178B6]/38 backdrop-blur-md border border-white/20 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
