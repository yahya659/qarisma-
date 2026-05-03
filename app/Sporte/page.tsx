import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sports from './components/Sports';
import Explore_More_About_Sports from './components/Explore_More_About_Sports';
import Exclusive_Interviews from './components/Exclusive_Interviews';
import Beyond_Headlines from './components/Beyond_Headlines';

export default function Sporte() {
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
  {/* <HeroSection /> */}

  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
      style={{
        backgroundImage: "url('/images/Sporte/Sporte_back.png')",
      }}
    />

     <Sports/>
     <Explore_More_About_Sports/>
     <Exclusive_Interviews/>
     <Beyond_Headlines/>
    <Footer/>
  </div>
  
</div>

</>
     );
}
