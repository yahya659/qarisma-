import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Footer from '@/app/components/Footer';
import Genres from './components/Genres_Latest_Boy_Girls';
import This_Week_Selection from './components/This_Week_Selection';
import Stay_informed from './components/Stay_informed';

export default function child_main_clip() {
  return (
    <>
       <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-[#FBD9EB]" />

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
<Genres/>
<This_Week_Selection/>
    <Stay_informed/>
    <Footer/>
  </div>
  
</div>

</>
  );
}
