import HeroSection from "../social_concerns_inner/components/HeroSection";
import Explore_Latest_Stories_Section from "./components/Explore_Latest_Stories_Section";
import Explore_More_Section from "../../social_concerns_pg/components/Explore_More _Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact_Banner_Section from "./components/Contact_Banner_Section";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function social_concerns_inner() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
      <div className="min-h-screen font-sans text-white selection:bg-[#5D5FEF6E] overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#8a1a8a] to-[#d63384] -z-10" />
        <HeroSection />
        <main className="max-w-7xl mx-auto px-6 py-12">
          <Explore_Latest_Stories_Section />
          {/* social_concerns_pg */}
          <Explore_More_Section />
          {/* Contact Banner Section */}
         <Contact_Banner_Section/>
        </main>
      </div>
      <Footer/>
    </>
  );
}
