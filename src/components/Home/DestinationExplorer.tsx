
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import PrimaryButton from '../ui/PrimaryButton';
import Chip from '../ui/Chip';
import { cn } from '@/lib/utils';
import ImageWithOverlay from '../ui/ImageWithOverlay';

const destinations = [
  {
    id: 1,
    name: 'Coorg, Karnataka',
    description: 'Discover the "Scotland of India" with its misty hills and coffee plantations.',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df3f3307?q=80&w=2574&auto=format&fit=crop',
    rating: 4.8,
    category: 'Hidden Gem'
  },
  {
    id: 2,
    name: 'Spiti Valley, Himachal',
    description: 'Experience the high-altitude desert with Buddhist monasteries and starlit skies.',
    image: 'https://images.unsplash.com/photo-1578291115684-a04b642a8da2?q=80&w=2574&auto=format&fit=crop',
    rating: 4.9,
    category: 'Adventure'
  },
  {
    id: 3,
    name: 'Gokarna, Karnataka',
    description: 'Enjoy pristine beaches and laid-back vibes at this coastal paradise.',
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=2670&auto=format&fit=crop',
    rating: 4.7,
    category: 'Beach'
  },
  {
    id: 4,
    name: 'Ziro Valley, Arunachal',
    description: 'Explore the rice fields and tribal culture of this northeastern valley.',
    image: 'https://images.unsplash.com/photo-1623165563976-ec6060fea491?q=80&w=2574&auto=format&fit=crop',
    rating: 4.6,
    category: 'Cultural'
  }
];

const categories = [
  "All", "Hidden Gem", "Adventure", "Beach", "Cultural", "Mountain", "Luxury"
];

const DestinationExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  return (
    <section className="py-24 gradient-bg">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Discover Hidden Gems"
          subtitle="Explore unique destinations that most travelers miss, curated by our AI based on real traveler experiences."
          align="center"
          titleClassName="gradient-text"
        />
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-background shadow-soft hover:shadow-md hover:-translate-y-0.5 hover:bg-background/80"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map(destination => (
            <div 
              key={destination.id}
              className={cn(
                "group bg-card rounded-xl overflow-hidden card-hover",
                hoveredCard === destination.id && "scale-[1.02]"
              )}
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-56 overflow-hidden">
                <ImageWithOverlay
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  overlayOpacity="20"
                />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <Chip 
                    label={destination.category} 
                    color="accent" 
                    size="sm" 
                    className="shadow-sm"
                  />
                  <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {destination.description}
                </p>
                
                <PrimaryButton 
                  size="sm"
                  className="w-full mt-2 transition-transform group-hover:translate-y-0"
                  endIcon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                >
                  Explore
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <PrimaryButton 
            variant="outline" 
            endIcon={<ArrowRight className="h-4 w-4" />}
            className="hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Destinations
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default DestinationExplorer;
