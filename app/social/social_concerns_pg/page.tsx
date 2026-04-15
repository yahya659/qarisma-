"use client";
import React, { useState } from 'react';
import { 
    Bell,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  User, 

} from 'lucide-react';
import Filters_and_Search from './components/Filters_and_Search';
import HeroSection from './components/HeroSection';
import Explore_More_Section from './components/Explore_More _Section';
import Footer from '@/app/components/Footer';
import Video_Headline_Section from './components/Video_Headline_Section';
import Header from '@/app/components/Header';


const App = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'sustainability', 'mental health', 'weekly columns'];

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="min-h-screen font-sans text-white selection:bg-purple-500">
      {/* Background Gradient */}
      
      <div className="fixed inset-0 bg-gradient-to-br from-[#5D5FEF] via-[#8a1a8a] to-[#d63384] -z-10" />
      

      {/* Navigation Header */}
    

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Title Section */}
    <Filters_and_Search/>

        {/* Filters and Search */}
        

        {/* Hero Section (Beyond the Headlines) */}
       <HeroSection/>
       

        {/* Explore More Section */}
       <Explore_More_Section/>

        {/* Video / Headline Section */}
       <Video_Headline_Section/>
      </main>

      {/* Footer Section */}
   <Footer/>
    </div>
    </>
  );
};

export default App;
