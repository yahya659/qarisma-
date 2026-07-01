"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import CurtainScene from "../components/scenes/CurtainScene";

export default function Launch_page() {
  

  return (
    <div className="relative">
      {/* الستار — يختفي بعد انتهاء الأنيميشن */}
     <CurtainScene/>

      {/* المحتوى الأصلي */}
      <HeroSection />
    </div>
  );
}