'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Internships', href: '/internships' },
    { name: 'Achievements', href: '/achievements' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/90 backdrop-blur-md shadow-xl py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500 transition-all duration-300 shadow-lg shrink-0">
              <Image 
                src="/logo.png" 
                alt="Gentrobyte Logo" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-navy-900'}`}>
              Gentrobyte
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-navy-100 hover:text-accent-400' 
                    : 'text-navy-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Apply Now Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/apply"
              className="bg-accent-600 hover:bg-accent-700 text-white px-7 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-accent-600/20 hover:shadow-accent-600/40 hover:-translate-y-1 active:scale-95 flex items-center group"
            >
              <span>Apply Now</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-white hover:text-accent-400' : 'text-navy-900 hover:text-primary-600'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 animate-fade-in">
            <div className={`flex flex-col space-y-4 p-6 rounded-2xl shadow-2xl border ${isScrolled ? 'bg-navy-800 border-navy-700' : 'bg-white border-navy-100'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bold transition-colors duration-200 text-lg py-2 ${
                    isScrolled ? 'text-white hover:text-accent-400' : 'text-navy-900 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/apply"
                className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-200 text-center shadow-lg shadow-accent-600/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
