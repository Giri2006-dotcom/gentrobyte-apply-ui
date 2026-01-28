import Hero from '@/components/Hero';
import About from '@/components/About';
import Internships from '@/components/Internships';
import Achievements from '@/components/Achievements';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      
      {/* Program Highlights - Core Objectives */}
      <section className="py-24 bg-navy-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-navy-100 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  Flagship Program
                </div>
                <h2 className="text-4xl font-black text-navy-900 mb-6 tracking-tight leading-tight">Software Engineering <br/><span className="text-primary-600">Internship 2026</span></h2>
                <p className="text-lg text-navy-600 mb-10 leading-relaxed font-medium">
                  Our 12-week Software Engineering Internship offers hands-on experience in full-stack development. 
                  Interns will collaborate with experienced engineers, contribute to real client projects, and build 
                  industry-relevant skills in a fast-paced corporate environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-50 p-2 rounded-lg">
                      <span className="text-primary-600 text-xl font-bold">✓</span>
                    </div>
                    <span className="font-bold text-navy-900 text-sm">12-Week Intensive</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-50 p-2 rounded-lg">
                      <span className="text-primary-600 text-xl font-bold">✓</span>
                    </div>
                    <span className="font-bold text-navy-900 text-sm">Paid Stipend</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-50 p-2 rounded-lg">
                      <span className="text-primary-600 text-xl font-bold">✓</span>
                    </div>
                    <span className="font-bold text-navy-900 text-sm">Remote/Hybrid</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-50 p-2 rounded-lg">
                      <span className="text-primary-600 text-xl font-bold">✓</span>
                    </div>
                    <span className="font-bold text-navy-900 text-sm">Certificate & LOR</span>
                  </div>
                </div>
              </div>
              <div className="bg-navy-900 p-12 lg:p-20 text-white flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h3 className="text-3xl font-black mb-8 tracking-tight">Program Goals</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4 group">
                    <span className="bg-white/10 rounded-full p-1.5 mt-0.5 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">✓</span>
                    <span className="text-navy-100 font-medium">Bridge the gap between academic theory and industry practice.</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <span className="bg-white/10 rounded-full p-1.5 mt-0.5 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">✓</span>
                    <span className="text-navy-100 font-medium">Develop production-ready features using React & Node.js.</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <span className="bg-white/10 rounded-full p-1.5 mt-0.5 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">✓</span>
                    <span className="text-navy-100 font-medium">Experience Agile workflows and professional code reviews.</span>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <span className="bg-white/10 rounded-full p-1.5 mt-0.5 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">✓</span>
                    <span className="text-navy-100 font-medium">Gain confidence to launch your professional tech career.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gain Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-6 tracking-tight leading-tight">
              What You Will <span className="text-accent-500">Gain</span>
            </h2>
            <p className="text-xl text-navy-600 leading-relaxed font-medium">
              We offer a comprehensive learning path designed to prepare you for the highest levels of software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-navy-50 p-10 rounded-[2rem] border border-navy-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform">🚀</div>
              <h3 className="text-2xl font-black text-navy-900 mb-4 tracking-tight">
                Real Projects
              </h3>
              <p className="text-navy-600 leading-relaxed mb-6 font-medium">
                Work on production-level code and contribute to projects that
                impact real users.
              </p>
              <Link
                href="/internships"
                className="text-primary-600 font-black flex items-center space-x-2 group/btn"
              >
                <span>Explore Roles</span>
                <HiArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="bg-navy-900 p-10 rounded-[2rem] border border-navy-800 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 group text-white">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">👥</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                Expert Mentorship
              </h3>
              <p className="text-navy-300 leading-relaxed mb-6 font-medium">
                Learn from industry experts and receive personalized guidance
                throughout your journey.
              </p>
              <Link
                href="/about"
                className="text-accent-500 font-black flex items-center space-x-2 group/btn"
              >
                <span>Learn More</span>
                <HiArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="bg-navy-50 p-10 rounded-[2rem] border border-navy-100 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group">
              <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform">📈</div>
              <h3 className="text-2xl font-black text-navy-900 mb-4 tracking-tight">
                Career Growth
              </h3>
              <p className="text-navy-600 leading-relaxed mb-6 font-medium">
                95% of our interns receive full-time offers or advance to top
                tech companies.
              </p>
              <Link
                href="/achievements"
                className="text-primary-600 font-black flex items-center space-x-2 group/btn"
              >
                <span>See Success Stories</span>
                <HiArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 bg-navy-50 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-16 h-1 bg-accent-500 mb-6 rounded-full"></div>
              <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-8 tracking-tight">Who Can <span className="text-primary-600">Apply?</span></h2>
              <p className="text-xl text-navy-600 mb-10 leading-relaxed font-medium">
                We are looking for passionate individuals who are ready to learn and contribute to production-grade software.
              </p>
              <ul className="space-y-5">
                {[
                  'Pursuing B.E./B.Tech/B.Sc. in Computer Science or related field',
                  'Basic knowledge of HTML, CSS, JavaScript & TypeScript',
                  'Familiarity with Git and Agile development',
                  'Strong problem-solving and communication skills',
                  'Available for a 12-16 week full-time commitment',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4 text-navy-800">
                    <div className="bg-primary-500 text-white rounded-full p-1 mt-1 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-900 p-12 lg:p-16 rounded-[2.5rem] border border-navy-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-600/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
              <h3 className="text-3xl font-black text-white mb-10 tracking-tight">Quick Expectations</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between group/line">
                  <div>
                    <div className="text-xs font-black text-primary-500 uppercase tracking-widest mb-1">Duration</div>
                    <div className="text-xl text-white font-bold">12 - 16 Weeks</div>
                  </div>
                  <div className="h-px bg-navy-700 flex-grow mx-6 group-hover/line:bg-primary-500 transition-colors"></div>
                </div>
                <div className="flex items-center justify-between group/line">
                  <div>
                    <div className="text-xs font-black text-accent-500 uppercase tracking-widest mb-1">Stipend</div>
                    <div className="text-xl text-white font-bold">$500 - $900/mo</div>
                  </div>
                  <div className="h-px bg-navy-700 flex-grow mx-6 group-hover/line:bg-accent-500 transition-colors"></div>
                </div>
                <div className="flex items-center justify-between group/line">
                  <div>
                    <div className="text-xs font-black text-primary-500 uppercase tracking-widest mb-1">Weekly Commitment</div>
                    <div className="text-xl text-white font-bold">40 Hours</div>
                  </div>
                  <div className="h-px bg-navy-700 flex-grow mx-6 group-hover/line:bg-primary-500 transition-colors"></div>
                </div>
                <div className="pt-8 mt-4">
                  <div className="bg-navy-800/50 p-6 rounded-2xl border border-navy-700 group-hover:border-accent-500 transition-all">
                    <div className="text-xs font-black text-accent-500 uppercase tracking-widest mb-2">Application Deadline</div>
                    <div className="text-2xl text-white font-black underline decoration-accent-500 underline-offset-8">March 31, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-6 tracking-tight">
              Our Selection <span className="text-primary-600">Process</span>
            </h2>
            <p className="text-xl text-navy-600 font-medium">
              A transparent, merit-based journey to join our elite team.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-navy-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Application Review', desc: 'Our team reviews your resume and portfolio.' },
                { step: '02', title: 'Screening Test', desc: 'A short technical assessment to evaluate core skills.' },
                { step: '03', title: 'Interview Stage', desc: '1-on-1 discussion with our senior engineers.' },
                { step: '04', title: 'Final Offer', desc: 'Results shared within 7-10 business days.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-navy-50 p-8 rounded-[2rem] border border-navy-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group">
                  <div className="text-4xl font-black text-primary-600 mb-4 group-hover:scale-110 transition-transform">{item.step}</div>
                  <h3 className="text-xl font-black text-navy-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-navy-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-transparent to-accent-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
            Ready to Start Your <br/><span className="text-primary-50">Professional Journey?</span>
          </h2>
          <p className="text-xl text-navy-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join hundreds of successful interns who have launched their careers
            with Gentrobyte. Your future starts today.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center space-x-3 bg-primary-600 text-white hover:bg-primary-700 px-12 py-6 rounded-full font-black text-xl transition-all duration-500 shadow-2xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 active:scale-95"
          >
            <span>Apply Now</span>
            <HiArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
