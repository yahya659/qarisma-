"use client";
import CategoriesPage from '../components/CategoriesPage';
import ExploreAboutUs from '../components/ExploreAboutUs';
import ExplorePage from '../components/ExplorePage';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'
import LatestNews from '../components/LatestNews';
import MarriagePlatform from '../components/MarriagePlatform';
import MeetOurTeam from '../components/MeetOurTeam';

export default function Home () {
  return (
    
     
     <>
     <Header/>
     <HeroSection />
     <ExplorePage/>
     <LatestNews/>
     <CategoriesPage/>
     <ExploreAboutUs/>
     <MeetOurTeam/>
     <MarriagePlatform/>
     <FAQSection/>
     <Footer/>

     </>
  )
};