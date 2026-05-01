import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Footer from '@/app/components/Footer';
import Explore_More_About from './components/Explore_More_About';
import Top_story from './components/Top_story';
import Early_Child_Development from './components/Early_Child_Development';
import Why_Nutrition_Matters from './components/Why_Nutrition_Matters';
import Stay_informed from './components/Stay_informed';

export default function child_Health_proper() {
  return (
    <>
       <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[##5D5FEF]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5D5FEF] via-[#5D5FEF] to-[#F178B6]" />

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
<Explore_More_About/>
<Top_story/>
<Early_Child_Development/>
<Why_Nutrition_Matters/>
<Stay_informed/>
    
    <Footer/>
  </div>
  
</div>

</>
  );
}
