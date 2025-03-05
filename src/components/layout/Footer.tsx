
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', path: '/help' },
        { name: 'Safety Center', path: '/safety' },
        { name: 'Community Guidelines', path: '/guidelines' },
        { name: 'COVID-19 Updates', path: '/covid' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Accessibility', path: '/accessibility' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, path: '#' },
    { icon: Twitter, path: '#' },
    { icon: Facebook, path: '#' },
    { icon: Youtube, path: '#' }
  ];

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                wander<span className="font-light">trip</span>
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Experience travel like never before with AI-powered personalized itineraries and hidden gem destinations.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@wandertrip.com" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                info@wandertrip.com
              </a>
              <a href="tel:+919876543210" className="block inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </a>
              <div className="inline-flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Bengaluru, India
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} WanderTrip. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.path} 
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
