import Footer from '@/app/components/Footer';
import React from 'react'
import HeroSection from './components/HeroSection';
import Header from '@/app/components/Header';
import Popular_for_kids from './components/Popular_for_kids';
import Stay_informed from './components/Stay_informed';

export default function child_main_clip_movies_movies() {
  return (
            <>
               <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
       <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
      
      {/* Background Gradient (في الخلف) */}
    <div className="fixed inset-0 -z-10 bg-[linear-gradient(277deg,#5D5FEF,#6761EB,#F178B6)]" />
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
    <Popular_for_kids/>
    <Stay_informed/>
        <Footer/>
      </div>
      
    </div>
    
    </>
  );
}
