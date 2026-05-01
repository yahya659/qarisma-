import { ArrowRight } from "lucide-react";
import React from "react";
import HeroSection from "./components/HeroSection";
import Explore_More_About from "./components/Explore_More_About";
import Latest_news from "./components/Latest_news";
import Child_Health from "./components/Child_Health";
import This_Week_Selection from "./components/This_Week_Selection";
import Clips_Movies from "./components/Clips_Movies";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function child() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <HeroSection />
      <div className="min-h-screen bg-[#e196be]/60 font-sans text-white overflow-x-hidden selection:bg-purple-300 selection:text-purple-90">
        <Explore_More_About />
        <Latest_news />
        <Child_Health />
        <This_Week_Selection />
        <Clips_Movies />
      </div>
      <Footer/>
    </>
  );
}
