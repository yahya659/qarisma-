import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Vision_Of_Luxury from './components/Vision_Of_Luxury';
import Explore_more from './components/Explore_more';
import Vision_Of_Latest_news from './components/Vision_Of_Latest_news';
// import Welcome_to_Quarisma from './components/welcome_to_Quarisma';
import Stay_informed from './components/Stay_informed';


export default function categories_home() {
  return (
    <>   <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans selection:bg-[#5D5FEF6E]">
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-[#F178B62E]/18" />

  {/* Hero Section */}
  {/* <HeroSection /> */}

  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30-z-10"
      style={{
        backgroundImage: "url('/images/categories/categories_home1 .png')",
      }}
    />
 <Vision_Of_Luxury/>
 <Explore_more/>
 <Vision_Of_Latest_news/>
 <Stay_informed/>
 
  
    <Footer/>
  </div>
  
</div>

</>
  );
}
