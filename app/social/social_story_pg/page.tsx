import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "../social_story_pg/components/HeroSection";
import SocietySection from "../social_story_pg/components/SocietySection";
import DiscoverSection from "../social_story_pg/components/DiscoverSection";

export default function social_story_pg() {
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
            {/* <ContactBanner /> */}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
