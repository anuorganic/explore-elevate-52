
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';
import Chip from '../ui/Chip';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=3270&auto=format&fit=crop"
          alt="Scenic mountain landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container px-4 mx-auto relative z-10 pt-20">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          <Chip 
            label="AI-Powered Travel Platform" 
            color="primary" 
            className="mb-2"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Discover hidden gems with personalized travel plans
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl">
            Experience travel like never before with AI-powered itineraries tailored 
            to your preferences, revealing unique destinations others miss.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <PrimaryButton 
              size="lg" 
              endIcon={<ArrowRight className="h-4 w-4" />}
            >
              Plan Your Trip
            </PrimaryButton>
            <SecondaryButton 
              size="lg" 
              variant="outline"
            >
              Explore Destinations
            </SecondaryButton>
          </div>
          
          <div className="pt-8 flex flex-wrap items-center gap-8 text-sm font-medium text-foreground/70">
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100+ Countries</span>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5000+ Hidden Gems</span>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-pulse-slow">
        <div className="h-14 w-8 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="h-3 w-1 bg-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
