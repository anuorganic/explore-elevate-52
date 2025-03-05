
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Home/Hero';
import TripPlanner from '@/components/Home/TripPlanner';
import DestinationExplorer from '@/components/Home/DestinationExplorer';
import Features from '@/components/Home/Features';
import Testimonials from '@/components/Home/Testimonials';

const Index: React.FC = () => {
  // Smooth scroll to section when URL has hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <TripPlanner />
        <DestinationExplorer />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
