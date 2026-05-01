import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './components/HeroSection';
import Filters from './components/Filters';
import Top_Story from './components/Top_Story';
import Latest_News from './components/Latest_News';
import Health_Achievements from './components/Health_Achievements';

export default function health() {
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
    <Filters/>
    <Top_Story/>
    <Latest_News/>
    <Health_Achievements/>

    {/* <Discover_Filters_Section />
    <Featured_Card /> */}
    <Footer/>
  </div>
  
</div>

</>
  );
}
