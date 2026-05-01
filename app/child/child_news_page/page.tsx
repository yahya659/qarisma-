import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Footer from '@/app/components/Footer';
import Latest_news from './components/Latest_news';
import Health_Menta from './components/Health_Menta';
import Top_Stories_News from './components/Top_Stories_News';
import Watch_Explore from './components/Watch_Explore';

export default function child_news_page(){
  return (
    <>
      <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#F178B636] via-[#a380ce] to-[#d89fd1]" />

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
<Latest_news/>
<Health_Menta/>
<Watch_Explore/>
<Top_Stories_News/>
    <Footer/>
  </div>
  
</div>

</>
  );
}
