import React from 'react';
import { HiStar, HiUserGroup, HiLightningBolt, HiBadgeCheck, HiUser, HiHeart, HiSparkles, HiLightBulb } from 'react-icons/hi';

const Achievements: React.FC = () => {
  const achievements = [
    {
      year: '2021',
      icon: <HiBadgeCheck className="h-8 w-8" />,
      title: 'Best Startup Award',
      description: 'Recognized by Tech Innovation Council for excellence in technology.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      year: '2022',
      icon: <HiUserGroup className="h-8 w-8" />,
      title: '100+ Interns Trained',
      description: 'Successfully mentored over 100 interns with 95% placement rate.',
      color: 'from-accent-400 to-accent-600',
    },
    {
      year: '2023',
      icon: <HiLightningBolt className="h-8 w-8" />,
      title: 'Product Launch Success',
      description: 'Launched 5 major products with intern contributions.',
      color: 'from-primary-500 to-navy-600',
    },
    {
      year: '2024',
      icon: <HiStar className="h-8 w-8" />,
      title: 'Industry Excellence Award',
      description: 'Awarded for outstanding contribution to tech education.',
      color: 'from-accent-500 to-navy-800',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'Now at Google',
      image: <HiUser className="h-10 w-10 text-primary-500" />,
      quote:
        'My internship at Gentrobyte was transformative. I learned more in 3 months than I did in my entire final year at university. The mentorship and real-world projects prepared me for my career.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Backend Engineer',
      company: 'Now at Amazon',
      image: <HiUserGroup className="h-10 w-10 text-accent-500" />,
      quote:
        'The hands-on experience with modern technologies and working on production-level code was invaluable. The team was supportive, and I grew both technically and professionally.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      company: 'Now at Meta',
      image: <HiSparkles className="h-10 w-10 text-primary-600" />,
      quote:
        'Gentrobyte gave me the opportunity to work on real client projects and build a portfolio that helped me land my dream job. The design mentorship was world-class.',
      rating: 5,
    },
  ];

  const companyAwards = [
    { title: 'Top 10 Startups 2023', icon: <HiBadgeCheck className="h-8 w-8" /> },
    { title: 'Best Workplace Culture', icon: <HiSparkles className="h-8 w-8" /> },
    { title: 'Innovation Excellence', icon: <HiLightBulb className="h-8 w-8" /> },
    { title: 'Employee Choice Award', icon: <HiHeart className="h-8 w-8" /> },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-5xl font-black text-navy-900 mb-4 sm:mb-6 tracking-tight">
            Our <span className="text-primary-600">Achievements</span>
          </h2>
          <p className="text-base sm:text-xl text-navy-600 leading-relaxed font-medium">
            Celebrating our milestones and the success stories of our incredible
            interns and team members.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16 sm:mb-24 px-4 sm:px-0">
          <h3 className="text-xl sm:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12 uppercase tracking-wider sm:tracking-widest">
            Milestones & Awards
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative bg-navy-50 rounded-xl sm:rounded-2xl shadow-sm border border-navy-100 p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r ${achievement.color} rounded-t-xl sm:rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div
                    className={`bg-gradient-to-r ${achievement.color} text-white w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-navy-200 group-hover:text-primary-200 transition-colors">
                    {achievement.year}
                  </div>
                </div>
                <h4 className="text-base sm:text-xl font-bold text-navy-900 mb-2 tracking-tight">
                  {achievement.title}
                </h4>
                <p className="text-navy-600 text-[11px] sm:text-sm font-medium leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Awards */}
        <div className="mb-16 sm:mb-24 px-4 sm:px-0">
          <h3 className="text-xl sm:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12 uppercase tracking-wider sm:tracking-widest">
            Recognition & Honors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {companyAwards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-navy-100 text-center hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-6xl mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-md">{award.icon}</div>
                <div className="font-bold text-navy-900 tracking-tight text-[10px] sm:text-base leading-tight">{award.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="px-4 sm:px-0">
          <h3 className="text-xl sm:text-3xl font-bold text-navy-900 text-center mb-8 sm:mb-12 uppercase tracking-wider sm:tracking-widest">
            Intern Success Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-navy-900/5 border border-navy-100 p-6 sm:p-10 hover:shadow-2xl transition-all duration-500 relative group"
              >
                <div className="absolute top-0 left-0 w-1.5 sm:w-2 h-full bg-accent-500 rounded-l-[1.5rem] sm:rounded-l-[2rem] transition-all duration-500 group-hover:w-2.5 sm:w-3"></div>
                {/* Stars */}
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-navy-800 leading-relaxed mb-4 sm:mb-8 italic text-[13px] sm:text-lg font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 sm:space-x-4 border-t border-navy-50 pt-3 sm:pt-6">
                  <div className="text-2xl sm:text-5xl filter drop-shadow-sm">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-navy-900 text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-[11px] sm:text-sm text-navy-500 font-bold">
                      {testimonial.role}
                    </div>
                    <div className="text-[9px] sm:text-xs text-primary-600 font-black uppercase tracking-wider sm:tracking-widest mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 sm:mt-24 bg-navy-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-white relative overflow-hidden group shadow-2xl mx-4 sm:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-transparent to-accent-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="text-center mb-6 sm:mb-12 relative z-10">
            <h3 className="text-xl sm:text-4xl font-black mb-2 tracking-tight">Impact by Numbers</h3>
            <p className="text-navy-300 font-medium text-sm sm:text-base">
              Our commitment to excellence reflected in results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12 relative z-10">
            <div className="text-center">
              <div className="text-3xl sm:text-6xl font-black mb-1 text-primary-400">250+</div>
              <div className="text-navy-200 font-bold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] leading-tight">Interns Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-6xl font-black mb-1 text-accent-400">95%</div>
              <div className="text-navy-200 font-bold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] leading-tight">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-6xl font-black mb-1 text-primary-400">20+</div>
              <div className="text-navy-200 font-bold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] leading-tight">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-6xl font-black mb-1 text-accent-400">4.9/5</div>
              <div className="text-navy-200 font-bold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] leading-tight">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
