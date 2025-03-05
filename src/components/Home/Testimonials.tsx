
import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    quote: "WanderTrip helped me discover hidden villages in Himachal that weren't on any tourist map. The AI somehow knew exactly what kind of experiences I was looking for!",
    trip: "Solo trip to Himachal Pradesh"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    quote: "The price prediction feature saved us thousands on our honeymoon. We booked flights exactly when the AI suggested and got amazing deals!",
    trip: "Honeymoon in Bali"
  },
  {
    id: 3,
    name: "Anjali Desai",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2531&auto=format&fit=crop",
    quote: "As someone who hates planning, WanderTrip was a game-changer. One questionnaire, and I had the perfect itinerary with activities I never would've found myself.",
    trip: "Weekend getaway to Goa"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const current = testimonials[activeIndex];
  
  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="What Our Travelers Say"
          subtitle="Real stories from people who've experienced the WanderTrip difference."
          align="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-card rounded-2xl p-8 shadow-lg">
            {/* Quote marks */}
            <div className="absolute top-6 left-8 text-primary opacity-20">
              <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4 36C9.4 36 6.1 34.6 3.5 31.8C1.2 29 0 25.5 0 21.3C0 17.9 0.8 14.5 2.4 11.1C4 7.7 6.3 4.8 9.3 2.4L18.1 8.8C15.3 10.4 13.2 12.4 11.8 14.8C10.4 17.2 9.9 19.6 10.3 22C10.9 22 11.8 22.1 13 22.3C14.2 22.5 15.3 22.9 16.3 23.5C17.6 24.3 18.7 25.4 19.5 26.7C20.3 28 20.7 29.6 20.7 31.5C20.7 33.1 20.1 34.3 18.9 35.2C17.7 35.8 15.9 36 13.4 36ZM37.7 36C33.7 36 30.4 34.6 27.8 31.8C25.5 29 24.3 25.5 24.3 21.3C24.3 17.9 25.1 14.5 26.7 11.1C28.3 7.7 30.6 4.8 33.6 2.4L42.4 8.8C39.6 10.4 37.5 12.4 36.1 14.8C34.7 17.2 34.2 19.6 34.6 22C35.2 22 36.1 22.1 37.3 22.3C38.5 22.5 39.6 22.9 40.6 23.5C41.9 24.3 43 25.4 43.8 26.7C44.6 28 45 29.6 45 31.5C45 33.1 44.4 34.3 43.2 35.2C42 35.8 40.2 36 37.7 36Z"/>
              </svg>
            </div>
            
            {/* Content */}
            <div className="pt-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/10">
                <img 
                  src={current.avatar} 
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-lg md:text-xl italic text-foreground/90 mb-6">
                  "{current.quote}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg">{current.name}</h4>
                  <p className="text-muted-foreground">{current.location}</p>
                  <p className="text-primary text-sm mt-1">{current.trip}</p>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/70 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-primary w-6" : "bg-secondary hover:bg-secondary/60"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
