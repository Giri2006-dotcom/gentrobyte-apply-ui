import React from 'react';
import Link from 'next/link';
import { HiClock, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

interface InternshipCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  stipend: string;
  startDate: string;
  mode: string;
  skills: string[];
  benefits: string[];
  type: 'frontend' | 'backend' | 'marketing' | 'design' | 'other';
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  description,
  duration,
  location,
  stipend,
  startDate,
  mode,
  skills,
  benefits,
  type,
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'frontend':
        return 'bg-primary-50 text-primary-700 border-primary-100';
      case 'backend':
        return 'bg-navy-100 text-navy-700 border-navy-200';
      case 'marketing':
        return 'bg-accent-50 text-accent-700 border-accent-100';
      case 'design':
        return 'bg-primary-100 text-primary-800 border-primary-200';
      default:
        return 'bg-navy-50 text-navy-600 border-navy-100';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'frontend':
        return '💻';
      case 'backend':
        return '⚙️';
      case 'marketing':
        return '📢';
      case 'design':
        return '🎨';
      default:
        return '🚀';
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-navy-100 hover:border-primary-300 hover:-translate-y-2 flex flex-col h-full">
      {/* Card Header */}
      <div className="p-8 border-b border-navy-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div className="flex items-center space-x-4">
            <div className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{getTypeIcon()}</div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 group-hover:text-primary-600 transition-colors tracking-tight">
                {title}
              </h3>
              <span
                className={`inline-block px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mt-2 border ${getTypeColor()}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <p className="text-navy-600 leading-relaxed font-medium text-sm opacity-90">{description}</p>
      </div>

      {/* Card Body */}
      <div className="p-8 space-y-8 flex-grow">
        {/* Key Details Grid */}
        <div className="grid grid-cols-2 gap-6 text-xs uppercase tracking-widest font-bold">
          <div className="flex items-center space-x-3 text-navy-500 group-hover:text-navy-700 transition-colors">
            <HiClock className="h-5 w-5 text-primary-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-3 text-navy-500 group-hover:text-navy-700 transition-colors">
            <HiLocationMarker className="h-5 w-5 text-primary-500" />
            <span>{mode}</span>
          </div>
          <div className="flex items-center space-x-3 text-navy-500 group-hover:text-navy-700 transition-colors">
            <span className="text-xl">💰</span>
            <span>{stipend}</span>
          </div>
          <div className="flex items-center space-x-3 text-navy-500 group-hover:text-navy-700 transition-colors">
            <span className="text-xl">📅</span>
            <span>Starts: {startDate}</span>
          </div>
        </div>

        {/* Skills Required */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-navy-400 mb-4 flex items-center">
            <span className="w-8 h-px bg-navy-200 mr-2"></span>
            Technical Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-navy-50 text-navy-700 rounded-lg text-[10px] font-bold uppercase border border-navy-100 group-hover:border-primary-200 group-hover:bg-primary-50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-navy-400 mb-4 flex items-center">
            <span className="w-8 h-px bg-navy-200 mr-2"></span>
            Perks & Benefits
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-sm text-navy-600 font-medium group/item hover:text-navy-900 transition-colors duration-300"
              >
                <span className="text-accent-500 font-bold group-hover/item:scale-125 transition-transform">✓</span>
                <span className="group-hover/item:translate-x-1 transition-transform duration-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-8 pb-8 mt-auto">
        <Link
          href="/apply"
          className="group/btn w-full bg-navy-900 hover:bg-primary-600 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-navy-900/10 hover:shadow-primary-600/30 active:scale-95"
        >
          <span className="uppercase tracking-widest text-xs">Apply for this Role</span>
          <HiArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform text-accent-400" />
        </Link>
      </div>
    </div>
  );
};

export default InternshipCard;
