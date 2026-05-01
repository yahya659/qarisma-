import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Latest_News from './components/Latest_News';
import Headline from './components/Headline';
import Headline_2 from './components/Headline_2';

export default function Nutrition() {
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
<Latest_News/>
<Headline_2/>
<Headline/>


    {/* <Discover_Filters_Section />
    <Featured_Card /> */}
    <Footer/>
  </div>
  
</div>

</>
  );
}
