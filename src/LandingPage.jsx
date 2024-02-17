import React from 'react';
import Navbar from './Navbar';
import Features from './sections/Features';
import HeroSection from './sections/HeroSection';
import CTA from './sections/CTA';
import Faq from './sections/Faq';
import Footer from './sections/Footer';

function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default LandingPage
