import React from 'react'
import HeroSection from './components/HeroSection';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Happening_Now from './components/Happening_Now';
import Shaping_Explore_the_Future from './components/Shaping_Explore_the_Future';
import Joinour_community from './components/Joinour_community';

export default function categories_live_linked_page_next_page() {
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
 <Happening_Now/>
 <Shaping_Explore_the_Future/>
 <Joinour_community/>
    <Footer/>
  </div>
  
</div>

</>
  );
}
