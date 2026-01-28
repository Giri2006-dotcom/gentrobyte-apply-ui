import React from 'react';
import { HiLightBulb, HiEye, HiTrendingUp, HiUsers, HiArrowRight } from 'react-icons/hi';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Gentrobyte was established with a vision to innovate.',
    },
    {
      year: '2021',
      title: 'First Internship Program',
      description: 'Launched our inaugural internship cohort with 10 interns.',
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded Best Tech Startup by Innovation Council.',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Partnered with 15+ universities across 5 countries.',
    },
    {
      year: '2026',
      title: 'Continued Growth',
      description: 'Expanding our internship program to 100+ positions.',
    },
  ];

  const partners = [
    { name: 'Tech University', logo: '🎓' },
    { name: 'Innovation Hub', logo: '💡' },
    { name: 'Startup Accelerator', logo: '🚀' },
    { name: 'Global Institute', logo: '🌍' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-navy-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-8 tracking-tight">
            About Gentrobyte
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed mb-12 font-medium">
            We're on a mission to empower the next generation of tech leaders
            through innovative internship programs and real-world experience.
          </p>
          <a
            href="https://www.gentrobyte.com/"
            className="inline-flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-primary-600/20 hover:shadow-primary-600/40 hover:-translate-y-1"
          >
            <span className="uppercase tracking-widest text-sm">To Explore More</span>
            <HiArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {[
            {
              title: 'Our Mission',
              desc: 'To bridge the gap between academic learning and industry demands by providing hands-on experience in cutting-edge technologies.',
              icon: <HiLightBulb className="h-8 w-8" />,
              color: 'from-primary-500 to-primary-600',
              bg: 'bg-primary-50'
            },
            {
              title: 'Our Vision',
              desc: "To become the world's leading platform for tech internships, fostering innovation and creating opportunities globally.",
              icon: <HiEye className="h-8 w-8" />,
              color: 'from-navy-600 to-navy-800',
              bg: 'bg-navy-50'
            },
            {
              title: 'Our Values',
              desc: 'Excellence, Innovation, Collaboration, and Continuous Learning drive everything we do at Gentrobyte.',
              icon: <HiTrendingUp className="h-8 w-8" />,
              color: 'from-accent-500 to-accent-600',
              bg: 'bg-accent-50'
            }
          ].map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-3xl border border-navy-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`${item.bg} text-navy-900 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <div className="text-navy-700">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                {item.title}
              </h3>
              <p className="text-navy-600 leading-relaxed font-medium opacity-80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-navy-900 rounded-[3rem] p-12 lg:p-24 mb-32 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {[
              { label: 'Projects Completed', value: '500+', color: 'text-primary-400' },
              { label: 'Team Members', value: '50+', color: 'text-accent-400' },
              { label: 'Partner Universities', value: '15+', color: 'text-primary-400' },
              { label: 'Success Rate', value: '98%', color: 'text-accent-400' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-5xl lg:text-6xl font-black mb-4 ${stat.color}`}>{stat.value}</div>
                <div className="text-navy-200 font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-3xl sm:text-5xl font-black text-navy-900 mb-4 uppercase tracking-tighter">
              Our Journey
            </h3>
            <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-100 rounded-full"></div>

            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:px-12 w-full">
                    <div
                      className={`bg-white p-10 rounded-[2.5rem] shadow-xl border border-navy-50 hover:border-primary-200 transition-all duration-500 group ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <div className="text-accent-600 font-black text-3xl mb-3 font-mono">
                        {milestone.year}
                      </div>
                      <h4 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">
                        {milestone.title}
                      </h4>
                      <p className="text-navy-600 leading-relaxed font-medium opacity-80">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-10 h-10 bg-white rounded-full border-4 border-primary-600 shadow-2xl z-10 group-hover:scale-125 transition-transform"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="pt-24 border-t border-navy-100">
          <h3 className="text-3xl font-black text-navy-900 text-center mb-20 uppercase tracking-widest">
            Trusted By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-navy-50/50 p-12 rounded-[2rem] border border-navy-100 hover:border-primary-400 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center group"
              >
                <div className="text-7xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 filter drop-shadow-xl">{partner.logo}</div>
                <div className="font-bold text-navy-900 uppercase tracking-widest text-xs">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
