import React from 'react';
import { HiStar, HiUserGroup, HiLightningBolt, HiBadgeCheck } from 'react-icons/hi';

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
      image: '👩‍💻',
      quote:
        'My internship at Gentrobyte was transformative. I learned more in 3 months than I did in my entire final year at university. The mentorship and real-world projects prepared me for my career.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Backend Engineer',
      company: 'Now at Amazon',
      image: '👨‍💻',
      quote:
        'The hands-on experience with modern technologies and working on production-level code was invaluable. The team was supportive, and I grew both technically and professionally.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      company: 'Now at Meta',
      image: '👩‍🎨',
      quote:
        'Gentrobyte gave me the opportunity to work on real client projects and build a portfolio that helped me land my dream job. The design mentorship was world-class.',
      rating: 5,
    },
  ];

  const companyAwards = [
    { title: 'Top 10 Startups 2023', icon: '🏆' },
    { title: 'Best Workplace Culture', icon: '🌟' },
    { title: 'Innovation Excellence', icon: '💡' },
    { title: 'Employee Choice Award', icon: '❤️' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-6 tracking-tight">
            Our <span className="text-primary-600">Achievements</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed font-medium">
            Celebrating our milestones and the success stories of our incredible
            interns and team members.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12 uppercase tracking-widest">
            Milestones & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative bg-navy-50 rounded-2xl shadow-sm border border-navy-100 p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${achievement.color} rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`bg-gradient-to-r ${achievement.color} text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-black text-navy-200 group-hover:text-primary-200 transition-colors">
                    {achievement.year}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                  {achievement.title}
                </h4>
                <p className="text-navy-600 text-sm font-medium leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Awards */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12 uppercase tracking-widest">
            Recognition & Honors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyAwards.map((award, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-navy-100 text-center hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 group"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-md">{award.icon}</div>
                <div className="font-bold text-navy-900 tracking-tight">{award.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12 uppercase tracking-widest">
            Intern Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] shadow-xl shadow-navy-900/5 border border-navy-100 p-10 hover:shadow-2xl transition-all duration-500 relative group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-accent-500 rounded-l-[2rem] transition-all duration-500 group-hover:w-3"></div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-accent-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-navy-800 leading-relaxed mb-8 italic text-lg font-medium">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 border-t border-navy-50 pt-6">
                  <div className="text-5xl filter drop-shadow-sm">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-navy-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-navy-500 font-bold">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary-600 font-black uppercase tracking-widest mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-24 bg-navy-900 rounded-[3rem] p-16 text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-transparent to-accent-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-4xl font-black mb-3 tracking-tight">Impact by Numbers</h3>
            <p className="text-navy-300 font-medium">
              Our commitment to excellence reflected in results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            <div className="text-center">
              <div className="text-6xl font-black mb-3 text-primary-400">250+</div>
              <div className="text-navy-200 font-bold uppercase tracking-widest text-[10px]">Interns Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-3 text-accent-400">95%</div>
              <div className="text-navy-200 font-bold uppercase tracking-widest text-[10px]">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-3 text-primary-400">20+</div>
              <div className="text-navy-200 font-bold uppercase tracking-widest text-[10px]">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-3 text-accent-400">4.9/5</div>
              <div className="text-navy-200 font-bold uppercase tracking-widest text-[10px]">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
