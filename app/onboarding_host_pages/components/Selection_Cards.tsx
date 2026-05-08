"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Selection_Cards() {
      const [selectedHost, setSelectedHost] = useState("null");
      const router = useRouter();
      const hosts = [
        {
          id: "female",
          name: "Ms. Sarah",
          role: "Female Host",
          image: "/images/person9.jpg",
          color: "bg-[#F178B6D4]/80",
          hoverColor: "hover:bg-pink-400",
          shadow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
        },
        {
          id: "male",
          name: "Mr. Ahmed",
          role: "Male Host",
          image: "/images/person2.png",
          color: "bg-[#5D5FEFB8]/70",
          hoverColor: "hover:bg-purple-500",
          shadow: "shadow-[0_0_30px_rgba(147,51,234,0.3)]",
        },
      ];
  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-5xl">
          {hosts.map((host) => (
            <div
              key={host.id}
              onClick={() => setSelectedHost(host.id)}
              className={`relative group cursor-pointer transition-all duration-500 transform ${
                selectedHost === host.id
                  ? "scale-105 -translate-y-2"
                  : "hover:scale-102"
              }`}
            >
              {/* Card Container */}
              <div
                className={`${host.color} backdrop-blur-xl   p-10 w-72 md:w-80 border-2 ${
                  selectedHost === host.id ? "border-white" : "border-white/10"
                } ${host.shadow} transition-all duration-500`}
              >
                {/* Host Image */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-full border-4 border-white/20 overflow-hidden shadow-xl group-hover:border-white/40 transition-all">
                  <img
                    src={host.image}
                    className="w-full h-full object-cover"
                    alt={host.name}
                  />
                </div>

                <h3 className="text-2xl font-black italic mb-2 tracking-wide">
                  {host.name}
                </h3>
                <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-8">
                  {host.role}
                </p>

                <button
                  className={`w-full py-3 rounded-2xl text-xs font-black uppercase tracking-widest border border-white/30 transition-all ${
                    selectedHost === host.id
                      ? "bg-white text-purple-900 shadow-xl"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {selectedHost === host.id ? "Selected" : "choose host"}
                </button>
              </div>

              {/* Glowing Frame Decoration */}
              <div className="absolute -inset-2 rounded-[50px] border border-white/5 pointer-events-none group-hover:border-white/20 transition-all"></div>
            </div>
          ))}
        </div>
  )
}
