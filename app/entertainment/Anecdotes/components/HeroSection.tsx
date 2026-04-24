import { ChevronsLeft, ChevronsRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[940px] flex items-center overflow-hidden">
        {/* Background Image with arcade/gaming vibe */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Anecdotes/Anecdotes.jpg')",
          }}
        >
          {/* Gradient Overlay for the dark purple mood */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E]/90 via-[#2D1B4E]/70 to-[#1A0B2E]/90"></div> */}
          <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-2xl px-20 text-white">
          <h2 className="text-[48px] font-semibold mb-1">Explore your</h2>
          <h1 className="text-[40px] font-black text-[#F07CB4] mb-4 drop-shadow-lg tracking-wide">
            JOY & Happiness
          </h1>
          <p className="text-lg font-medium mb-8 max-w-lg leading-relaxed drop-shadow-md pl-4">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth{" "}
          </p>
        </div>
      </section>
      {/* //////////////////////////// */}
    </>
  );
}
