import React from 'react';
import TopTradersSection from './TopTradersSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import HeroSection from './HeroSection'
import Footer from './Footer';
import Header from './Header';


function Home() {
  return (
    <div className="flex flex-col items-center bg-slate-950">
     
     
      <HeroSection />
      <TopTradersSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;