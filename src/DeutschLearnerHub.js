import React, { useState } from 'react';
import { BookOpen, Users, MessageCircle, Award, Clock, Target, CheckCircle, Mail, Phone, MessageSquare, ArrowRight, Menu, X, Moon, Sun, ChevronUp } from 'lucide-react';

const DeutschLearnerHub = () => {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavBar = () => (
    <nav className={`fixed top-0 w-full ${darkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-md border-b ${darkMode ? 'border-slate-700' : 'border-slate-100'} z-50 transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center">
              <img 
                src="/logo.jpg" 
                alt="DLH Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className={`text-sm sm:text-lg font-light ${darkMode ? 'text-white' : 'text-slate-900'} tracking-wide`}>Deutsch Learner Hub</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {['home', 'courses', 'about', 'pricing', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize text-sm tracking-wide ${
                  activePage === page
                    ? 'text-amber-600 font-normal'
                    : darkMode ? 'text-slate-300 hover:text-white font-light' : 'text-slate-500 hover:text-slate-900 font-light'
                } transition-colors`}
              >
                {page}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'} hover:text-slate-900`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <div className="flex flex-col space-y-3">
              {['home', 'courses', 'about', 'pricing', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setActivePage(page);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize text-left px-4 py-2 rounded-lg ${
                    activePage === page
                      ? 'text-amber-600 bg-amber-50 font-normal'
                      : darkMode ? 'text-slate-300 hover:bg-slate-800 font-light' : 'text-slate-700 hover:bg-slate-50 font-light'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const GermanFlagIcon = () => (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 group cursor-pointer">
      <div className="relative">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden border-2 border-white">
          <div className="w-full h-1/3 bg-black"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
          <div className="w-full h-1/3 bg-yellow-400"></div>
        </div>
        <div className="absolute -top-12 right-0 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Deutsch Learner Hub
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="pt-20">
      {/* Hero Section - Two Column Layout */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif ${darkMode ? 'text-white' : 'text-slate-900'} mb-8 leading-tight`}>
                Learn German Online
                <span className="block mt-2 text-amber-600">— Now</span>
                <span className="block text-amber-600">— Anytime</span>
                <span className="block text-amber-600">— From Anywhere</span>
              </h1>
              
              <div className={`space-y-6 text-lg font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                <p className={`text-xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  Welcome to our page for online German lessons!
                </p>
                
                <p>
                  Would you like to learn German? Do you need German for your job, for your studies or for your visit in Germany? Then you are right here!
                </p>
                
                <p>
                  We will accompany you in all learning phases of German lessons and support you in using the German language in conversation in order to achieve your perfect language competence as quickly as possible.
                </p>
                
                <p className={`italic ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  "German language — difficult language?", so many people believe, but that's not true.
                </p>
                
                <p>
                  We will show you how you can understand German easily, learn it quickly and effectively and communicate with confidence in German.
                </p>
                
                <p>
                  We will help you to improve your listening, reading, speaking and writing skills in German and, if you wish, to prepare you for German exams.
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setActivePage('contact')}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-light px-8 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className="flex items-center justify-center">
              <div className={`w-full max-w-md aspect-square ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'} rounded-3xl shadow-2xl flex items-center justify-center ${darkMode ? 'border border-slate-700' : 'border border-slate-200'} p-12`}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
                    <img 
                      src="/logo.jpg" 
                      alt="Deutsch Learner Hub Logo" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  <h3 className={`text-2xl font-serif ${darkMode ? 'text-slate-200' : 'text-slate-800'} mb-2`}>Deutsch Learner Hub</h3>
                  <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'} tracking-wide`}>Excellence in German Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-24 px-6 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-extralight text-center ${darkMode ? 'text-white' : 'text-slate-900'} mb-4 tracking-tighter`}>
            Why Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-20"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Users, title: 'Live Classes', desc: 'Interactive Zoom sessions every day' },
              { icon: BookOpen, title: 'Structured', desc: 'Step-by-step curriculum design' },
              { icon: MessageCircle, title: 'Support', desc: 'Daily WhatsApp assistance' },
              { icon: Award, title: 'Exam Ready', desc: 'Focused certification preparation' }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-200 transition-all">
                  <benefit.icon className="w-8 h-8 text-amber-700" strokeWidth={1} />
                </div>
                <h3 className={`text-lg font-light mb-3 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{benefit.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'} leading-relaxed`}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Clear Path', desc: 'Proven methodology from beginner to advanced' },
              { icon: Clock, title: 'Flexible', desc: 'Evening sessions for busy schedules' },
              { icon: CheckCircle, title: 'Results', desc: 'Students achieve their language goals' }
            ].map((feature, idx) => (
              <div key={idx} className={`${darkMode ? 'bg-slate-800 border-slate-700 hover:border-amber-600' : 'bg-white border-slate-100 hover:border-amber-200'} p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all border group`}>
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center group-hover:from-amber-100 group-hover:to-amber-200 transition-all">
                  <feature.icon className="w-6 h-6 text-amber-700" strokeWidth={1} />
                </div>
                <h3 className={`text-xl font-light mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{feature.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'} leading-relaxed`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const CoursesPage = () => (
    <div className="pt-20">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
              <span className="text-xs font-light text-amber-700 tracking-widest uppercase">Our Programme</span>
            </div>
            <h1 className="text-6xl font-extralight text-slate-900 mb-6 tracking-tighter">Our Courses</h1>
            <p className="text-slate-500 font-light leading-relaxed">
              Complete German language programme from beginner to intermediate
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-2">
              <div className="bg-white rounded-2xl p-12 md:p-16">
                <div className="flex items-baseline space-x-4 mb-2">
                  <h2 className="text-5xl font-extralight text-slate-900 tracking-tighter">A1 — B2</h2>
                  <span className="text-xs font-light text-amber-600 tracking-widest uppercase bg-amber-50 px-3 py-1 rounded-full">Complete</span>
                </div>
                <p className="text-sm font-light text-slate-500 mb-12">Full Programme</p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-lg font-light text-slate-800 mb-6 flex items-center">
                      <span className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent mr-3"></span>
                      What You'll Learn
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'German grammar and syntax',
                        'Everyday communication skills',
                        'Reading and writing proficiency',
                        'Listening comprehension',
                        'Professional vocabulary',
                        'Cultural understanding',
                        'Exam preparation strategies',
                        'Fluent conversation practice'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5"></div>
                          <span className="text-sm font-light text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-8 grid md:grid-cols-3 gap-8 text-sm font-light text-slate-600">
                    <div>
                      <p className="text-slate-400 mb-2">Duration</p>
                      <p>Per niveau/level</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-2">Schedule</p>
                      <p>Every day of the week</p>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-2">Format</p>
                      <p>Live Zoom sessions</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setActivePage('contact')}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-light px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-light text-slate-800">A1 & A2 — Beginner</h3>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm font-light group-hover:scale-110 transition-transform">
                  A
                </div>
              </div>
              <p className="text-sm font-light text-slate-600 leading-relaxed">
                Perfect for complete beginners. Learn basics, build vocabulary, and gain confidence in everyday conversations.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-light text-slate-800">B1 & B2 — Intermediate</h3>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-light group-hover:scale-110 transition-transform">
                  B
                </div>
              </div>
              <p className="text-sm font-light text-slate-600 leading-relaxed">
                Advance your skills with complex grammar, professional vocabulary, and fluent communication for work and study.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20">
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
              <span className="text-xs font-light text-amber-700 tracking-widest uppercase">Our Story</span>
            </div>
            <h1 className="text-6xl font-extralight text-slate-900 tracking-tighter">About Us</h1>
          </div>
          
          <div className="space-y-8 text-slate-600 font-light leading-loose text-lg">
            <p>
              This German programme was started with one goal: to make learning German easier for beginners. 
              Many students struggle with confusing materials, lack of support or expensive private lessons — 
              so we created a simple, affordable and effective learning system.
            </p>
            
            <p>
              We teach A1 to B2 German using step-by-step methods, live Zoom classes, speaking practice and 
              exam-focused training. Every learner receives notes, assignments, corrections and daily support 
              through WhatsApp, making it easier to stay consistent and improve.
            </p>
            
            <p>
              Whether you're preparing for exams, visa interviews, travelling, or just starting your language 
              journey, our programme is designed to guide you confidently from the basics.
            </p>
          </div>

          <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 text-center shadow-xl">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <h2 className="text-3xl font-extralight mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg font-light text-slate-300 leading-relaxed">
              To help anyone — even complete beginners — learn German in an organized, 
              supportive and affordable way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const PricingPage = () => (
    <div className="pt-20">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
            <span className="text-xs font-light text-amber-700 tracking-widest uppercase">Investment</span>
          </div>
          <h1 className="text-6xl font-extralight text-slate-900 mb-6 tracking-tighter">Pricing</h1>
          <p className="text-xl font-light text-slate-500 mb-20 leading-relaxed">
            Personalized packages tailored to your goals
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16 mb-12 border border-slate-100">
            <h2 className="text-3xl font-extralight text-slate-900 mb-3 tracking-tight">What's Included</h2>
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left">
              {[
                'Live Zoom instruction',
                'Comprehensive study materials',
                'Assignment feedback',
                'Speaking practice',
                'Mock examinations',
                'WhatsApp support group',
                'Completion certificate',
                'Flexible payment plans'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span className="text-sm font-light text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 md:p-16 shadow-xl">
            <h2 className="text-4xl font-extralight mb-6 tracking-tight">Get Custom Pricing</h2>
            <p className="text-lg font-light text-slate-300 mb-10 leading-relaxed">
              Contact us for pricing details tailored to your learning path
            </p>
            <button
              onClick={() => setActivePage('contact')}
              className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-amber-50 font-light px-8 py-4 rounded-full transition-all shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Replace with your actual Formspree form ID
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnnezdve';

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            message: formData.message
          })
        });

        if (response.ok) {
          alert('Thank you for your message! We will contact you soon via WhatsApp.');
          setFormData({ name: '', email: '', whatsapp: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again or contact us directly on WhatsApp.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="pt-20">
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
                <span className="text-xs font-light text-amber-700 tracking-widest uppercase">Contact</span>
              </div>
              <h1 className="text-6xl font-extralight text-slate-900 mb-6 tracking-tighter">Get In Touch</h1>
              <p className="text-slate-500 font-light leading-relaxed">
                Ready to begin your German learning journey?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl shadow-sm p-10">
                <h2 className="text-2xl font-light mb-10 text-slate-900">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-slate-600 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 font-light text-slate-800 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-600 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 font-light text-slate-800 transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-600 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 font-light text-slate-800 transition-colors"
                      placeholder="+254 740 891 695"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-600 mb-2">Message</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-3.5 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400 font-light text-slate-800 transition-colors resize-none"
                      placeholder="Your learning goals..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-light py-4 rounded-xl transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900 text-white rounded-3xl p-10">
                  <h2 className="text-2xl font-light mb-8">Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MessageSquare className="w-5 h-5 mt-1 text-slate-400" strokeWidth={1.5} />
                      <div>
                        <p className="font-light text-slate-400 text-sm mb-1">WhatsApp</p>
                        <p className="font-light">+254 740 891 695</p>
                        <p className="font-light mt-1">+254 701 483 998</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 mt-1 text-slate-400" strokeWidth={1.5} />
                      <div>
                        <p className="font-light text-slate-400 text-sm mb-1">Email</p>
                        <p className="font-light">info@deutschlearnerhub.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 mt-1 text-slate-400" strokeWidth={1.5} />
                      <div>
                        <p className="font-light text-slate-400 text-sm mb-1">Phone</p>
                        <p className="font-light">+254 740 891 695</p>
                        <p className="font-light mt-1">+254 701 483 998</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-10">
                  <h3 className="text-xl font-light mb-4 text-slate-900">Quick Response</h3>
                  <p className="text-sm font-light text-slate-600 mb-6 leading-relaxed">
                    We respond within 24 hours. For immediate help, reach us on WhatsApp.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/254740891695"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-light px-6 py-3 rounded-full transition-colors shadow-sm w-full justify-center"
                    >
                      <MessageSquare size={18} strokeWidth={1.5} />
                      <span>WhatsApp: +254 740 891 695</span>
                    </a>
                    <a
                      href="https://wa.me/254701483998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-light px-6 py-3 rounded-full transition-colors shadow-sm w-full justify-center"
                    >
                      <MessageSquare size={18} strokeWidth={1.5} />
                      <span>WhatsApp: +254 701 483 998</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'} transition-colors`}>
      <NavBar />
      {activePage === 'home' && <HomePage />}
      {activePage === 'courses' && <CoursesPage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'pricing' && <PricingPage />}
      {activePage === 'contact' && <ContactPage />}
      <GermanFlagIcon />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-40 p-3 rounded-full ${
            darkMode ? 'bg-amber-600 hover:bg-amber-500' : 'bg-slate-900 hover:bg-slate-800'
          } text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} strokeWidth={2} />
        </button>
      )}

      <footer className={`${darkMode ? 'bg-slate-950' : 'bg-slate-50'} py-12 transition-colors`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>© 2024 Deutsch Learner Hub</p>
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-2`}>Making German accessible for everyone</p>
        </div>
      </footer>
    </div>
  );
};

export default DeutschLearnerHub;