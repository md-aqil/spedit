import React from "react";
import TopTradersSection from "./landing/TopTradersSection";
import HowItWorksSection from "./landing/HowItWorksSection";
import TestimonialsSection from "./landing/TestimonialsSection";
import HeroSection from "./landing/HeroSection";
import Footer from "./landing/Footer";

export default function Home() {
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
