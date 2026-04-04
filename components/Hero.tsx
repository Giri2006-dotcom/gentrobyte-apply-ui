'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';

const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary-200/40 via-white to-transparent blur-3xl" />
        <div className="absolute -bottom-48 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-accent-200/40 via-white to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-100/20 via-white to-accent-100/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-navy-50 border border-navy-100 text-primary-700 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-10 animate-fade-in shadow-sm">
            <HiSparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent-500" />
            <span className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              Now Accepting Applications for 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-navy-900 mb-4 sm:mb-8 leading-[1.2] sm:leading-[1.1] animate-fade-in-up tracking-tight px-2 sm:px-0">
            Gentrobyte Internships —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">
              Build, Learn, Achieve
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-2xl text-navy-600 mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 font-medium px-4 sm:px-0">
            Join our mission to innovate and grow with real-world projects.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center animate-fade-in-up animation-delay-400 px-4 sm:px-0">
            <Link
              href="/internships"
              className="group bg-navy-900 hover:bg-navy-800 text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold text-base sm:text-xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 shadow-2xl shadow-navy-900/20 hover:shadow-navy-900/40 hover:-translate-y-1 active:scale-95 w-full sm:w-auto justify-center max-w-sm sm:max-w-none"
            >
              <span>Explore Opportunities</span>
              <HiArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12 max-w-5xl mx-auto animate-fade-in-up animation-delay-600 px-4 sm:px-0">
            {[
              { label: 'Interns Hired', value: '50+' },
              { label: 'Live Projects', value: '15+' },
              { label: 'Satisfaction Rate', value: '95%' },
              { label: 'Partner Companies', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl sm:text-5xl font-black text-navy-900 mb-1 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-navy-400 font-bold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-xs leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-7 h-12 border-2 border-navy-700 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
