import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Shaping_Explore_the_Future from './components/Shaping_Explore_the_Future';
import Vision_Of_Luxury_Personality from './components/Vision_Of_Luxury_Personality';
import Happening_Now from './components/Happening_Now';
import Joinour_community from './components/Joinour_community';

export default function categories_live_linked_page_next_page_all_categories() {
  return (
    <>
        <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

  {/* Hero Section */}
  <HeroSection />

  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
      style={{
        backgroundImage: "url('/images/social/macaws1.png')",
      }}
    />

    <Shaping_Explore_the_Future/>
    <Vision_Of_Luxury_Personality/>
    <Happening_Now/>
    <Joinour_community/>
    <Footer/>
  </div>
  
</div>

</>
  );
}
