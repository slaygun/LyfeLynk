import React from 'react';
import Navbar from './Navbar';
import Features from './sections/Features';
import HeroSection from './sections/HeroSection';
import CTA from './sections/CTA';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
//import Features2 from './sections/Features2';

function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Features2/>
    <AboutUs/>
    <CTA/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default LandingPage
