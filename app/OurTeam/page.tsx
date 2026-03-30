"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "@/app/components/Header";

// ✅ تعريف النوع
type TeamMember = {
  name: string;
  role: string;
  description: string;
};

type TeamSectionProps = {
  title: string;
  subtitle: string;
  members: TeamMember[];
  activeDot?: number;
};

// مكون كرت عضو الفريق
const TeamMemberCard = ({ name, role, description }: TeamMember) => (
  <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-6 border border-white/20 shadow-xl flex flex-col items-center text-center w-full max-w-[280px] transition-transform duration-300 hover:scale-105 group cursor-pointer">
    
    <div className="relative w-40 h-40 mb-5 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-orange-200 to-orange-100 border-4 border-white/40 shadow-inner group-hover:border-white transition-colors">
      <img 
        src="/images/sarah-avatar.png"
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://via.placeholder.com/160/FFA07A/FFFFFF?text=Sarah";
        }}
      />
    </div>

    <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
    <p className="text-pink-300 text-[11px] font-black uppercase tracking-[0.2em] mb-3">{role}</p>
    <p className="text-white/60 text-[12px] leading-relaxed line-clamp-3">
      {description}
    </p>
  </div>
);

// قسم الفريق
const TeamSection = ({ title, subtitle, members, activeDot = 1 }: TeamSectionProps) => (
  <div className="relative mb-20">
    <div className="text-center mb-12">
      <h2 className="text-white text-3xl font-extrabold mb-2 tracking-tight">{title}</h2>
      <p className="text-white/60 text-base">{subtitle}</p>
    </div>

    <div className="bg-black/30 backdrop-blur-sm rounded-[3rem] p-10 border border-white/5 shadow-inner relative">
      
      <button className="absolute left-[-28px] top-1/2 -translate-y-1/2 bg-blue-600/90 p-3 rounded-2xl text-white hover:bg-blue-500 transition-all z-10 shadow-lg active:scale-95 hidden lg:block border border-white/10">
        <ChevronLeft size={28} />
      </button>

      <button className="absolute right-[-28px] top-1/2 -translate-y-1/2 bg-blue-600/90 p-3 rounded-2xl text-white hover:bg-blue-500 transition-all z-10 shadow-lg active:scale-95 hidden lg:block border border-white/10">
        <ChevronRight size={28} />
      </button>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {members.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {[1, 2, 3, 4].map((dot) => (
          <div 
            key={dot} 
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              dot === activeDot 
                ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] scale-110'
                : 'bg-blue-500/20 hover:bg-blue-500/50'
            }`} 
          />
        ))}
      </div>
    </div>
  </div>
);

export default function OurTeam() {

  const prTeam: TeamMember[] = Array(3).fill({
    name: "Sarah",
    role: "Content Creator",
    description: "Crafts engaging narratives that resonate with audiences."
  });

  return (
    
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/images/Articles2.png')" }} 
      />

      <Header />

      <div className="flex pt-24 h-screen">
        <main className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar pb-24">
          
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-black text-white mb-4 drop-shadow-md">
                Our Team
              </h1>
              <p className="text-white/80 text-xl font-medium">
                Meet the people building our platform
              </p>
            </div>

            <TeamSection 
              title="Public Relations" 
              subtitle="Building relationships and managing communications." 
              members={prTeam} 
              activeDot={1}
            />

            <TeamSection 
              title="Marketing" 
              subtitle="Promoting products and services to target audiences." 
              members={prTeam} 
              activeDot={2}
            />

            <div className="h-10" />
          </div>

        </main>
      </div>
    </div>
  );
}