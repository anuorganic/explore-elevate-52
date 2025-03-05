
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe, User } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Trip Planner', path: '/planner' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            wander<span className="font-light">trip</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-secondary transition-colors">
            <Search className="h-5 w-5 text-foreground/80" />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary transition-colors">
            <Globe className="h-5 w-5 text-foreground/80" />
          </button>
          <PrimaryButton>
            <User className="h-4 w-4 mr-2" />
            Sign In
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-dark absolute top-full left-0 right-0 overflow-hidden animate-fade-in">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground/90 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-2">
                <button className="p-2 rounded-full hover:bg-secondary/30 transition-colors">
                  <Search className="h-5 w-5 text-foreground/80" />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary/30 transition-colors">
                  <Globe className="h-5 w-5 text-foreground/80" />
                </button>
              </div>
              <PrimaryButton fullWidth size="lg" className="mt-2">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </PrimaryButton>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
