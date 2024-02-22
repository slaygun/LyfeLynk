import React from 'react';
import Navbar from './Navbar';
import HeroSection from './sections/HeroSection';
import CTA from './sections/CTA';
import Faq from './sections/Faq';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
import Feature from './sections/feature';

function LandingPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <AboutUs/>
    <CTA/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default LandingPage
