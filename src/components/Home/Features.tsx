
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div 
        className={cn(
          'w-14 h-14 rounded-xl mb-5 flex items-center justify-center shadow-md',
          color
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Why Choose WanderTrip"
          subtitle="Our AI-powered platform offers unique features to make your travel experience seamless and memorable."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="AI-Powered Trip Planning"
            description="Our AI creates personalized itineraries based on your preferences, travel trends, weather, and crowd analysis."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            }
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          
          <FeatureCard
            title="Hidden Gem Finder"
            description="Discover unexplored locations tailored to your interests, away from the tourist crowds and Instagram hotspots."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            color="bg-gradient-to-br from-indigo-500 to-indigo-600"
          />
          
          <FeatureCard
            title="Dynamic Pricing Insights"
            description="Get alerts on price drops and the best booking times, ensuring you always get the best deals for your trip."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          
          <FeatureCard
            title="EMI Payment Integration"
            description="Book your dream trips on easy installments via third-party financing, making luxury travel more accessible."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            }
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          
          <FeatureCard
            title="Seamless Booking"
            description="Book flights, hotels, and activities directly through our platform with one-click checkout and instant confirmations."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
            color="bg-gradient-to-br from-yellow-500 to-yellow-600"
          />
          
          <FeatureCard
            title="Social Media Integration"
            description="Share your itineraries and experiences directly to social media, and discover trips based on influencer recommendations."
            icon={
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            }
            color="bg-gradient-to-br from-red-500 to-red-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
