import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import Top_story from "./components/Top_story";
import Top_headlines_and_In_depth from "./components/Top_headlines_and_In_depth ";
import Top_Topics from "./components/Top_Topics";

export default function categories_articles_linked() {
  return (
    <>
      {" "}
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
        {/* Background Gradient (في الخلف) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

        {/* Hero Section */}

        {/* Discover Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />
          <Top_story />
          <Top_headlines_and_In_depth />
          <Top_Topics/>
          <Footer />
        </div>
      </div>
    </>
  );
}
