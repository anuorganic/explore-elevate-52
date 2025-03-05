
import React, { useState } from 'react';
import { Search, Calendar, Users, Map, ArrowRight } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

const tripTypes = [
  "Adventure", "Beach", "City Break", "Cultural", "Family", "Luxury",
  "Nature", "Road Trip", "Solo Travel", "Weekend Getaway"
];

const TripPlanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'custom'>('ai');
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [travelers, setTravelers] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const toggleTripType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Plan Your Perfect Trip"
          subtitle="Tell us what you're looking for, and our AI will create a personalized itinerary just for you."
          align="center"
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex rounded-lg bg-secondary p-1 mb-6">
            <button
              className={cn(
                "flex-1 py-2 text-center rounded-md transition-colors",
                activeTab === 'ai' 
                  ? "bg-white text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('ai')}
            >
              AI-Powered Plan
            </button>
            <button
              className={cn(
                "flex-1 py-2 text-center rounded-md transition-colors",
                activeTab === 'custom' 
                  ? "bg-white text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('custom')}
            >
              Custom Plan
            </button>
          </div>
          
          {/* Card */}
          <div className="bg-card shadow-lg rounded-2xl p-6 animate-fade-in">
            {activeTab === 'ai' ? (
              <div className="space-y-6">
                {/* Trip Types */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium">
                    What type of trip are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tripTypes.map(type => (
                      <button
                        key={type}
                        className={cn(
                          "px-3 py-1.5 text-sm rounded-full transition-colors",
                          selectedTypes.includes(type)
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                        )}
                        onClick={() => toggleTripType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Where do you want to go?
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Any destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      When are you going?
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Add dates"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      How many travelers?
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Add guests"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Budget Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="block text-sm font-medium">
                      What's your budget?
                    </label>
                    <span className="text-sm text-muted-foreground">₹50,000</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    defaultValue="50000"
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Budget</span>
                    <span>Luxury</span>
                  </div>
                </div>
                
                <PrimaryButton 
                  size="lg" 
                  fullWidth 
                  className="mt-4"
                  endIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Generate Trip Plan
                </PrimaryButton>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Departure
                    </label>
                    <div className="relative">
                      <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="City or airport"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Destination
                    </label>
                    <div className="relative">
                      <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="City or airport"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Departure Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Add date"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Return Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Add date"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Travelers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Add guests"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Class
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium">
                      Preferred Airlines (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Any airline"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                <PrimaryButton 
                  size="lg" 
                  fullWidth 
                  className="mt-4"
                  endIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Search Flights
                </PrimaryButton>
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground text-center mt-4">
            Get personalized travel plans in seconds, with the best prices guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;
