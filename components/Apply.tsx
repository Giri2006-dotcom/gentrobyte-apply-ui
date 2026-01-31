'use client';

import React, { useState } from 'react';
import {
  HiUser,
  HiCode,
  HiDocumentText,
  HiCheckCircle,
  HiArrowLeft,
  HiArrowRight,
} from 'react-icons/hi';

interface FormData {
  // Step 1: Personal Info
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone: string;
  college: string;
  degree: string;
  graduationYear: string;
  // Step 2: Skills & Experience
  skills: string;
  githubUrl: string;
  portfolioUrl: string;
  whyApply: string;
  // Step 3: Resume
  resume: File | null;
  // Step 4: Consent
  consent: boolean;
}

const Apply: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '+91',
    college: '',
    degree: '',
    graduationYear: '',
    skills: '',
    githubUrl: '',
    portfolioUrl: '',
    whyApply: '',
    resume: null,
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const countWords = (str: string) => {
    if (!str) return 0;
    const words = str.trim().match(/\S+/g);
    return words ? words.length : 0;
  };

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Emails do not match';
      if (!/^\+91\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be +91 followed by 10 digits';
      if (!formData.college.trim()) newErrors.college = 'College name is required';
      if (!formData.degree.trim()) newErrors.degree = 'Degree program is required';
      const year = parseInt(formData.graduationYear);
      if (!/^\d{4}$/.test(formData.graduationYear)) {
        newErrors.graduationYear = 'Year must be 4 digits';
      } else if (year > 2029) {
        newErrors.graduationYear = 'Graduation year cannot be greater than 2029';
      }
    }

    if (step === 2) {
      if (countWords(formData.skills) < 120) newErrors.skills = `Minimum 120 words required (current: ${countWords(formData.skills)})`;
      if (!validateUrl(formData.githubUrl)) newErrors.githubUrl = 'Valid GitHub URL is required';
      if (!validateUrl(formData.portfolioUrl)) newErrors.portfolioUrl = 'Valid Portfolio URL is required';
      if (countWords(formData.whyApply) < 60) newErrors.whyApply = `Minimum 60 words required (current: ${countWords(formData.whyApply)})`;
    }

    if (step === 3) {
      if (!formData.resume) newErrors.resume = 'Resume upload is required';
    }

    if (step === 4) {
      if (!formData.consent) newErrors.consent = 'You must consent to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'phone') {
      // Ensure +91 prefix stays and only digits follow
      let val = value;
      if (!val.startsWith('+91')) {
        val = '+91' + val.replace(/^\+?91?/, '');
      }
      const digits = val.slice(3).replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: '+91' + digits }));
    } else if (name === 'graduationYear') {
      const val = value.replace(/\D/g, '').slice(0, 4);
      setFormData((prev) => ({ ...prev, [name]: val }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB.');
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: <HiUser className="h-6 w-6" /> },
    { number: 2, title: 'Skills', icon: <HiCode className="h-6 w-6" /> },
    {
      number: 3,
      title: 'Resume',
      icon: <HiDocumentText className="h-6 w-6" />,
    },
    { number: 4, title: 'Review', icon: <HiCheckCircle className="h-6 w-6" /> },
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10">
          <div className="bg-navy-50 rounded-[2.5rem] shadow-2xl p-12 text-center border border-navy-100 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            <div className="flex justify-center mb-10">
              <div className="bg-primary-500 text-white rounded-2xl p-6 shadow-xl shadow-primary-500/20 transform group-hover:scale-110 transition-transform duration-500">
                <HiCheckCircle className="h-20 w-20" />
              </div>
            </div>
            <h2 className="text-4xl font-black text-navy-900 mb-6 tracking-tight">
              Application <span className="text-primary-600">Successful!</span>
            </h2>
            <p className="text-lg text-navy-600 mb-10 font-medium leading-relaxed">
              Thank you for applying to Gentrobyte. We've received your
              application and will review it shortly. You'll hear from us within
              5-7 business days.
            </p>
            <div className="bg-white border border-navy-100 rounded-2xl p-8 mb-10 text-left shadow-inner">
              <p className="text-sm text-navy-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-primary-500"></span>
                Submission Details
              </p>
              <div className="space-y-3">
                <p className="text-sm text-navy-700">
                  <strong className="text-navy-900">Application ID:</strong> <span className="font-mono bg-navy-50 px-2 py-1 rounded">GEN-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                </p>
                <p className="text-sm text-navy-700">
                  <strong className="text-navy-900">Email:</strong> <span className="underline decoration-primary-200">{formData.email}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  confirmEmail: '',
                  phone: '+91',
                  college: '',
                  degree: '',
                  graduationYear: '',
                  skills: '',
                  githubUrl: '',
                  portfolioUrl: '',
                  whyApply: '',
                  resume: null,
                  consent: false,
                });
                setErrors({});
              }}
              className="w-full bg-navy-900 hover:bg-navy-800 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-2xl shadow-navy-900/20 active:scale-95"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-7xl font-black text-navy-900 mb-6 tracking-tighter">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Future</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to kickstart your career? Complete the multi-step application below to join Gentrobyte's elite internship program.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-20">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center flex-1 relative group">
                  <div
                    className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center border-2 transition-all duration-500 transform ${
                      currentStep === step.number
                        ? 'bg-primary-500 border-primary-500 text-white scale-110 shadow-2xl shadow-primary-500/30'
                        : currentStep > step.number
                        ? 'bg-primary-500 border-primary-500 text-white'
                        : 'bg-white border-navy-100 text-navy-300 group-hover:border-primary-200 group-hover:text-primary-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="mt-5 text-center">
                    <div
                      className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                        currentStep >= step.number
                          ? 'text-primary-600'
                          : 'text-navy-300'
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 px-4 mb-10">
                    <div
                      className={`h-1 rounded-full transition-all duration-700 ${
                        currentStep > step.number
                          ? 'bg-primary-500'
                          : 'bg-navy-100'
                      }`}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-navy-900/10 overflow-hidden border border-navy-50">
          <div className="bg-navy-900 px-10 py-5 flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent"></div>
            <span className="text-navy-400 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Step {currentStep} of {totalSteps}</span>
            <span className="text-primary-400 text-sm font-bold relative z-10">{steps[currentStep-1].title}</span>
          </div>
          
          <div className="p-6 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-navy-900 mb-2">
                        First Name <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.firstName ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="e.g. John"
                      />
                      {errors.firstName && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><span>⚠</span> {errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-navy-900 mb-2">
                        Last Name <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.lastName ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="e.g. Doe"
                      />
                      {errors.lastName && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><span>⚠</span> {errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">
                        Email Address <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.email ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><span>⚠</span> {errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="confirmEmail" className="block text-sm font-bold text-navy-900 mb-2">
                        Confirm Email Address <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.confirmEmail ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="john@example.com"
                      />
                      {errors.confirmEmail && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><span>⚠</span> {errors.confirmEmail}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-navy-900 mb-2">
                      Phone Number (India) <span className="text-accent-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-bold tracking-widest placeholder:text-navy-300 ${errors.phone ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="+91XXXXXXXXXX"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <span className="text-xs font-bold text-navy-400 bg-navy-100 px-2 py-1 rounded">IND</span>
                      </div>
                    </div>
                    {errors.phone && <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1"><span>⚠</span> {errors.phone}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="college" className="block text-sm font-bold text-navy-900 mb-2">
                        College / University <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.college ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="University of..."
                      />
                      {errors.college && <p className="mt-2 text-xs font-bold text-red-500"> {errors.college}</p>}
                    </div>
                    <div>
                      <label htmlFor="degree" className="block text-sm font-bold text-navy-900 mb-2">
                        Degree Program <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.degree ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="B.E. Computer Science"
                      />
                      {errors.degree && <p className="mt-2 text-xs font-bold text-red-500">{errors.degree}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="graduationYear" className="block text-sm font-bold text-navy-900 mb-2">
                      Graduation Year <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                      maxLength={4}
                      className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-bold placeholder:text-navy-300 ${errors.graduationYear ? 'border-red-500' : 'border-transparent'}`}
                      placeholder="e.g. 2026"
                    />
                    <p className="mt-2 text-[10px] text-navy-400 font-medium italic">Must be between current year and 2029</p>
                    {errors.graduationYear && <p className="mt-2 text-xs font-bold text-red-500">{errors.graduationYear}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Skills & Experience */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <label
                      htmlFor="skills"
                      className="block text-sm font-bold text-navy-900 mb-3 flex justify-between items-end"
                    >
                      <span>Technical Skills & Proficiency <span className="text-accent-500">*</span></span>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter ${countWords(formData.skills) < 120 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {countWords(formData.skills)} / 120 words
                      </span>
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 resize-none ${errors.skills ? 'border-red-500' : 'border-transparent'}`}
                      placeholder="List your core technologies, languages, and any significant projects you've worked on..."
                    />
                    {errors.skills && <p className="mt-2 text-xs font-bold text-red-500"> {errors.skills}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="githubUrl" className="block text-sm font-bold text-navy-900 mb-2">
                        GitHub Profile URL <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.githubUrl ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="https://github.com/yourusername"
                      />
                      {errors.githubUrl && <p className="mt-2 text-xs font-bold text-red-500"> {errors.githubUrl}</p>}
                    </div>
                    <div>
                      <label htmlFor="portfolioUrl" className="block text-sm font-bold text-navy-900 mb-2">
                        Portfolio / Website URL <span className="text-accent-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 ${errors.portfolioUrl ? 'border-red-500' : 'border-transparent'}`}
                        placeholder="https://yourportfolio.com"
                      />
                      {errors.portfolioUrl && <p className="mt-2 text-xs font-bold text-red-500"> {errors.portfolioUrl}</p>}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="whyApply"
                      className="block text-sm font-bold text-navy-900 mb-3 flex justify-between items-end"
                    >
                      <span>Why Gentrobyte? <span className="text-accent-500">*</span></span>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter ${countWords(formData.whyApply) < 60 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                        {countWords(formData.whyApply)} / 60 words
                      </span>
                    </label>
                    <textarea
                      id="whyApply"
                      name="whyApply"
                      value={formData.whyApply}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-5 py-4 bg-navy-50 border-2 rounded-xl focus:ring-0 focus:border-primary-500 transition-all outline-none text-navy-900 font-medium placeholder:text-navy-300 resize-none ${errors.whyApply ? 'border-red-500' : 'border-transparent'}`}
                      placeholder="Explain your motivation and what you hope to achieve during this internship..."
                    />
                    {errors.whyApply && <p className="mt-2 text-xs font-bold text-red-500"> {errors.whyApply}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Resume */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="text-center max-w-lg mx-auto mb-8">
                    <h4 className="text-xl font-bold text-navy-900 mb-2">Upload Your CV</h4>
                    <p className="text-navy-500 text-sm">Please provide your latest resume in PDF or Word format.</p>
                  </div>
                  
                  <div 
                    className={`relative group cursor-pointer border-3 border-dashed rounded-3xl p-12 transition-all duration-300 flex flex-col items-center justify-center ${
                      errors.resume 
                        ? 'border-red-500 bg-red-50' 
                        : formData.resume 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-navy-100 bg-navy-50 hover:border-primary-400 hover:bg-white'
                    }`}
                  >
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <HiDocumentText className={`h-12 w-12 ${errors.resume ? 'text-red-500' : 'text-primary-600'}`} />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-lg font-bold text-navy-900">
                        {formData.resume ? 'File Selected!' : 'Drop your resume here'}
                      </p>
                      <p className="text-navy-400 text-sm mt-1">
                        {formData.resume ? formData.resume.name : 'or click to browse from your computer'}
                      </p>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-navy-100">PDF</span>
                      <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-navy-100">DOCX</span>
                      <span className="text-[10px] font-bold text-navy-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-navy-100">Max 10MB</span>
                    </div>
                  </div>
                  {errors.resume && <p className="mt-4 text-center text-sm font-bold text-red-500">{errors.resume}</p>}
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-navy-50 p-6 rounded-2xl border border-navy-100">
                      <h4 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        Personal Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-xs text-navy-400 font-bold uppercase">Name</span>
                          <span className="text-sm text-navy-900 font-bold">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-xs text-navy-400 font-bold uppercase">Email</span>
                          <span className="text-sm text-navy-900 font-bold">{formData.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-navy-100 pb-2">
                          <span className="text-xs text-navy-400 font-bold uppercase">Phone</span>
                          <span className="text-sm text-navy-900 font-bold">{formData.phone}</span>
                        </div>
                        <div className="flex flex-col pt-2">
                          <span className="text-xs text-navy-400 font-bold uppercase mb-1">Education</span>
                          <span className="text-sm text-navy-900 font-bold">{formData.degree}</span>
                          <span className="text-xs text-navy-600">{formData.college} ({formData.graduationYear})</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-navy-50 p-6 rounded-2xl border border-navy-100">
                      <h4 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                        Professional Links
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs text-navy-400 font-bold uppercase block mb-1">GitHub</span>
                          <span className="text-sm text-navy-900 font-bold break-all">{formData.githubUrl}</span>
                        </div>
                        <div>
                          <span className="text-xs text-navy-400 font-bold uppercase block mb-1">Portfolio</span>
                          <span className="text-sm text-navy-900 font-bold break-all">{formData.portfolioUrl}</span>
                        </div>
                        <div className="pt-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-navy-400 font-bold uppercase">Skills Analysis</span>
                            <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded uppercase">Verified</span>
                          </div>
                          <div className="w-full bg-navy-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary-500 h-full w-[100%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border-2 transition-all ${errors.consent ? 'bg-red-50 border-red-200' : 'bg-primary-50/50 border-primary-100'}`}>
                    <label className="flex items-start space-x-4 cursor-pointer">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          required
                          className="peer h-6 w-6 opacity-0 absolute cursor-pointer"
                        />
                        <div className="h-6 w-6 border-2 border-navy-200 rounded-lg peer-checked:bg-primary-500 peer-checked:border-primary-500 transition-all flex items-center justify-center">
                          <HiCheckCircle className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <span className="text-sm text-navy-700 font-medium leading-relaxed">
                        I hereby declare that the information provided is true and accurate. I consent to the storage and processing of my data by <span className="text-navy-900 font-bold">Gentrobyte</span> for the purpose of internship evaluation. <span className="text-accent-500 font-bold">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="mt-3 text-xs font-bold text-red-500 ml-10"> {errors.consent}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Buttons - Sticky on Mobile */}
              <div className="sticky bottom-0 sm:static bg-white/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none -mx-6 sm:mx-0 px-6 sm:px-0 py-4 sm:py-0 mt-8 sm:mt-12 border-t border-navy-50 sm:border-t-0 z-20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-navy-50 text-navy-200 cursor-not-allowed border border-transparent'
                        : 'bg-white text-navy-600 border-2 border-navy-100 hover:border-navy-900 hover:text-navy-900'
                    }`}
                  >
                    <HiArrowLeft className="h-5 w-5" />
                    <span>Previous</span>
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-navy-900 hover:bg-navy-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-navy-900/10"
                    >
                      <span>Continue</span>
                      <HiArrowRight className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-primary-600/20"
                    >
                      <span>Finalize Application</span>
                      <HiCheckCircle className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
