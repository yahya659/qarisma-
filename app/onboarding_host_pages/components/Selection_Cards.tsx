"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Selection_Cards() {
  const [selectedHost, setSelectedHost] = useState("null");
  const [stage, setStage] = useState<"idle" | "running">("idle");
  const carRef = useRef<HTMLDivElement>(null);
  const driverRef = useRef<HTMLDivElement>(null);
  const doorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const hosts = [
    {
      id: "female",
      name: "Ms. Sarah",
      role: "Female Host",
      image: "/images/person9.jpg",
      color: "bg-[#F178B6D4]/80",
      shadow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    },
    {
      id: "male",
      name: "Mr. Ahmed",
      role: "Male Host",
      image: "/images/person2.png",
      color: "bg-[#5D5FEFB8]/70",
      shadow: "shadow-[0_0_30px_rgba(147,51,234,0.3)]",
    },
  ];

  function easeOut(t: number) { return 1 - (1 - t) * (1 - t); }
  function easeIn(t: number) { return t * t * t; }

  function anim(duration: number, onTick: (t: number) => void, onDone?: () => void) {
    const start = performance.now();
    function tick(now: number) {
      const raw = Math.min((now - start) / duration, 1);
      onTick(raw);
      if (raw < 1) requestAnimationFrame(tick);
      else if (onDone) onDone();
    }
    requestAnimationFrame(tick);
  }

  function handleChoose(hostId: string) {
    if (stage === "running") return;
    setSelectedHost(hostId);
    setStage("running");

    const car = carRef.current;
    const driverEl = driverRef.current;
    const doorEl = doorRef.current;
    if (!car || !driverEl || !doorEl) return;

    // ١ - السائق يظهر
    anim(600, (t) => {
      driverEl.style.opacity = String(easeOut(t));
      driverEl.style.transform = `translateY(${(1 - easeOut(t)) * 20}px)`;
    }, () => {
      // ٢ - الباب يفتح (يدور من اليمين للخارج)
      setTimeout(() => {
        anim(900, (t) => {
          // الباب يفتح للخارج — transform-origin من اليمين
          doorEl.style.transform = `perspective(500px) rotateY(${easeOut(t) * 60}deg)`;
        }, () => {
          setTimeout(() => {
            // ٣ - الباب يغلق + السائق يختفي
            anim(500, (t) => {
              doorEl.style.transform = `perspective(500px) rotateY(${60 - easeOut(t) * 60}deg)`;
              driverEl.style.opacity = String(1 - t);
            }, () => {
              // ٤ - السيارة تنطلق
              setTimeout(() => {
                anim(1100, (t) => {
                  car.style.transform = `translateX(${easeIn(t) * 130}%)`;
                  car.style.opacity = String(Math.max(0, 1 - easeIn(t) * 1.3));
                  doorEl.style.opacity = String(Math.max(0, 1 - t * 2));
                }, () => {
                  router.push("/On_boarding_host_car");
                });
              }, 200);
            });
          }, 900);
        });
      }, 400);
    });
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-5xl">

      {/* البطاقات */}
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
        {hosts.map((host) => (
          <div
            key={host.id}
            onClick={() => setSelectedHost(host.id)}
            className={`relative group cursor-pointer transition-all duration-500 transform ${
              selectedHost === host.id ? "scale-105 -translate-y-2" : "hover:scale-102"
            }`}
          >
            <div className={`${host.color} backdrop-blur-xl p-10 w-72 md:w-80 border-2 ${
              selectedHost === host.id ? "border-white" : "border-white/10"
            } ${host.shadow} transition-all duration-500`}>
              <div className={`w-24 h-24 mx-auto mb-8 rounded-full border-4 overflow-hidden shadow-xl transition-all ${
                selectedHost === host.id ? "border-white scale-110" : "border-white/20"
              }`}>
                <img src={host.image} className="w-full h-full object-cover" alt={host.name} />
              </div>
              <h3 className="text-2xl font-black italic mb-2 tracking-wide">{host.name}</h3>
              <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-8">{host.role}</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleChoose(host.id); }}
                disabled={stage === "running"}
                className={`w-full py-3 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/30 transition-all ${
                  selectedHost === host.id
                    ? "bg-white text-purple-900 shadow-xl"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {selectedHost === host.id ? "Selected ✓" : "choose host"}
              </button>
            </div>
            <div className="absolute -inset-2 rounded-[50px] border border-white/5 pointer-events-none group-hover:border-white/20 transition-all" />
          </div>
        ))}
      </div>

      {/* مشهد الليموزين */}
      <div className="relative w-full flex items-end justify-center overflow-hidden" style={{ height: "220px" }}>

        {/* السجادة الحمراء */}
        <div className="absolute bottom-8 left-0 right-0 h-4 bg-gradient-to-b from-red-900 via-red-600 to-red-900 opacity-80" />

        {/* الليموزين */}
        <div
          ref={carRef}
          className="relative z-10"
          style={{ willChange: "transform, opacity", width: "560px", height: "172px" }}
        >
          <Image
            src="/images/On_boarding_host_car/On_boarding_host_car1.png"
            alt="limo"
            fill
            className="object-contain drop-shadow-2xl"
          />

          {/*
            الباب الظاهر للمستخدم:
            الصورة 560px عرض × 172px ارتفاع
            الباب الخلفي الكبير (يمين الصورة) يبدأ من ~58% حتى ~80% عرضاً
            ومن ~20% حتى ~78% ارتفاعاً
            transform-origin من اليمين لأن الباب يفتح للخارج يميناً
          */}
          <div
            ref={doorRef}
            style={{
              position: "absolute",
              top: "22%",
              left: "58%",
              width: "22%",   // ~123px من 560
              height: "56%",  // ~96px من 172
              background: "rgba(8, 4, 20, 0.88)",
              border: "1.5px solid #4a3a8a",
              borderRadius: "3px",
              transformOrigin: "right center",
              willChange: "transform, opacity",
              zIndex: 20,
            }}
          />
        </div>

        {/* السائق — يظهر بجانب الباب */}
        <div
          ref={driverRef}
          className="absolute z-30"
          style={{
            bottom: "100px",
            // يقف عند نهاية الباب من اليمين
            left: "calc(50% + 148px)",
            width: "48px",
            height: "95px",
            opacity: 0,
            willChange: "transform, opacity",
          }}
        >
          <svg viewBox="0 0 55 110" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="42" width="31" height="45" rx="6" fill="#111" />
            <rect x="22" y="42" width="11" height="20" rx="2" fill="#eee" />
            <polygon points="27,44 28,58 27,60 26,58" fill="#8b0000" />
            <circle cx="27" cy="26" r="14" fill="#d4956a" />
            <ellipse cx="27" cy="14" rx="12" ry="7" fill="#1a0a0a" />
            <line x1="12" y1="55" x2="1" y2="65" stroke="#d4956a" strokeWidth="5" strokeLinecap="round" />
            <line x1="43" y1="55" x2="54" y2="48" stroke="#d4956a" strokeWidth="5" strokeLinecap="round" />
            <rect x="16" y="84" width="10" height="22" rx="4" fill="#111" />
            <rect x="29" y="84" width="10" height="22" rx="4" fill="#111" />
            <ellipse cx="20" cy="106" rx="9" ry="4" fill="#222" />
            <ellipse cx="34" cy="106" rx="9" ry="4" fill="#222" />
          </svg>
        </div>
      </div>
    </div>
  );
}