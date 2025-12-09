import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CarFront, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600";
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
          <CarFront className="w-8 h-8 text-blue-600" />
          <span>RafalSky Motors</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/vehicles" className={isActive('/vehicles')}>Vehicles</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className={isActive('/')} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/vehicles" 
              className={isActive('/vehicles')} 
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicles
            </Link>
            <Link 
              to="/contact" 
              className={isActive('/contact')} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};