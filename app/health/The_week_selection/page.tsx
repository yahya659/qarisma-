import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Best_of_the_week from './components/Best_of_the_week';
import Health_Achievements from './components/Health_Achievements';
import Studies_Exclusive from './components/Studies_Exclusive';
import MEET_OUR_Star from './components/MEET_OUR_Star';

export default function The_week_selection() {
  return (
   <>
      <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#F178B6] via-[#a380ce] to-[#d89fd1]" />

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
<Best_of_the_week/>
<Health_Achievements/>
<Studies_Exclusive/>
<MEET_OUR_Star/>
    <Footer/>
  </div>
  
</div>

</>
  );
}
