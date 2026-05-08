import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Vision_Of_Latest_stories from './components/Vision_Of_Latest_stories';
import Latest_Articles from './components/Latest_Articles';
import Vision_Of_Luxury from './components/Vision_Of_Luxury';
import Top_reviews from './components/Top_reviews';
import Stay_informed from './components/Stay_informed';

export default function categories_articles() {
  return (
<>
  <Header />

  <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">

    {/* Background Gradient */}
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

    {/* Hero Section */}
    <HeroSection />

    {/* Content Wrapper */}
    <div className="relative w-full">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{
          backgroundImage: "url('/images/social/macaws1.png')",
        }}
      />

      {/* Sections */}
      <div className="space-y-0">

        <Vision_Of_Latest_stories />
        <Latest_Articles />
        <Vision_Of_Luxury />
        <Top_reviews />
        <Stay_informed />

      </div>

      <Footer />

    </div>

  </div>
</>
  );
}
