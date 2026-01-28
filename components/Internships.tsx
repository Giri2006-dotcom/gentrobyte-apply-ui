import React from 'react';
import InternshipCard from './InternshipCard';

const Internships: React.FC = () => {
  const internships = [
    {
      title: 'Software Engineering Intern 2026',
      description:
        'Work on production-grade applications, learn from industry mentors, and launch your tech career. Contribute to full-stack features and agile workflows.',
      duration: '12 weeks',
      location: 'Global',
      stipend: '$500 - $800 / month',
      startDate: 'June 2026',
      mode: 'Remote / Hybrid',
      skills: ['React', 'TypeScript', 'Node.js', 'Git', 'Tailwind CSS'],
      benefits: [
        'Certificate of completion',
        'Letter of Recommendation',
        'Direct mentorship from senior engineers',
        'Real-world project exposure',
        'Potential full-time offer',
      ],
      type: 'frontend' as const,
    },
    {
      title: 'Backend Systems Intern',
      description:
        'Focus on scalable architecture, API design, and database optimization. Learn to build robust services that power our core platform.',
      duration: '16 weeks',
      location: 'Remote',
      stipend: '$600 - $900 / month',
      startDate: 'July 2026',
      mode: 'Remote',
      skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'],
      benefits: [
        'System design workshops',
        'Code reviews from experts',
        'Cloud deployment experience',
        'Monthly learning stipend',
        'Flexible working hours',
      ],
      type: 'backend' as const,
    },
    {
      title: 'UI/UX Design Intern',
      description:
        'Create intuitive user experiences and beautiful interfaces. Work closely with product managers and engineers to bring designs to life.',
      duration: '12 weeks',
      location: 'Hybrid',
      stipend: '$400 - $700 / month',
      startDate: 'June 2026',
      mode: 'Hybrid',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      benefits: [
        'Build a professional portfolio',
        'Design thinking training',
        'Collaborative workspace',
        'Industry networking',
        'Soft skills workshops',
      ],
      type: 'design' as const,
    },
  ];

  return (
    <section className="py-24 bg-navy-50 relative overflow-hidden" id="internships">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-6 tracking-tight">
            Internship <span className="text-primary-600">Opportunities</span>
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed font-medium">
            Explore our diverse range of internship positions and find the
            perfect role to kickstart your career in tech.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {internships.map((internship, index) => (
            <div key={index} className="transform hover:-translate-y-2 transition-all duration-500">
              <InternshipCard {...internship} />
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-24 bg-white p-10 rounded-3xl shadow-2xl shadow-navy-900/5 border border-navy-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
          
          <h3 className="text-3xl font-black text-navy-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-accent-500 rounded-full"></span>
            What to Expect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group/item">
              <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl group-hover/item:scale-125 transition-transform">✨</span>
                Learning & Development
              </h4>
              <p className="text-navy-600 leading-relaxed">
                Access to training resources, workshops, and mentorship programs
                to enhance your skills and industry knowledge.
              </p>
            </div>
            <div className="group/item">
              <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl group-hover/item:scale-125 transition-transform">🤝</span>
                Collaboration
              </h4>
              <p className="text-navy-600 leading-relaxed">
                Work alongside experienced professionals in a supportive and
                collaborative environment that values your input.
              </p>
            </div>
            <div className="group/item">
              <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl group-hover/item:scale-125 transition-transform">🚀</span>
                Real Projects
              </h4>
              <p className="text-navy-600 leading-relaxed">
                Contribute to live projects that impact real users. Your work won't just be a simulation; it will make a difference.
              </p>
            </div>
            <div className="group/item">
              <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2 text-lg">
                <span className="text-2xl group-hover/item:scale-125 transition-transform">📈</span>
                Career Growth
              </h4>
              <p className="text-navy-600 leading-relaxed">
                High-performing interns receive full-time offers and long-term
                career opportunities within the Gentrobyte ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
