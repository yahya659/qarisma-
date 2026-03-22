"use client";
import CategoriesPage from '../components/CategoriesPage';
import ExplorePage from '../components/ExplorePage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'
import LatestNews from '../components/LatestNews';

export default function Home () {
  return (
    
     
     <>
     <Header/>
     <HeroSection />
     <ExplorePage/>
     <LatestNews/>
     <CategoriesPage/>
     <Footer/>

     </>
  )
};