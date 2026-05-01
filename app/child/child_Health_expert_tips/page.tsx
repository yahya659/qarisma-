import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Explore_expert_backed from './components/Explore_expert_backed';
import Videos_of_Expert from './components/Videos_of_Expert';
import From_Our_Selection from './components/From_Our_Selection';

export default function child_Health_expert_tips_page() {
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
<Explore_expert_backed/>
<Videos_of_Expert/>
<From_Our_Selection/>
  
  
    <Footer/>
  </div>
  
</div>

</>
  );
}
