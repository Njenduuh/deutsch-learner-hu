import React, { useState } from 'react';
import { BookOpen, Users, MessageCircle, Award, Clock, Target, CheckCircle, Mail, Phone, MessageSquare, ArrowRight, Menu, X, Moon, Sun, ChevronUp, Globe, Video } from 'lucide-react';

const DeutschLearnerHub = () => {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currency, setCurrency] = useState('KSH');

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900/70 border-slate-700/50' 
        : 'bg-white/70 border-slate-200/50'
    } backdrop-blur-xl border-b shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-2 ring-amber-400/30">
              <img 
                src="/logo.jpg" 
                alt="DLH Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`text-sm sm:text-lg font-light ${darkMode ? 'text-white' : 'text-slate-900'} tracking-wide`}>
              Deutsch Learners Hub
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['home', 'courses', 'about', 'pricing', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize text-sm tracking-wide transition-all duration-200 ${
                  activePage === page
                    ? 'text-amber-500 font-medium'
                    : darkMode ? 'text-slate-300 hover:text-amber-400 font-light' : 'text-slate-500 hover:text-amber-500 font-light'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full transition-all duration-200 ${
                darkMode 
                  ? 'bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm shadow-lg' 
                  : 'bg-slate-100/80 hover:bg-slate-200/80 backdrop-blur-sm shadow-lg'
              }`}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-white/50 backdrop-blur-sm">
          <div className="w-full h-1/3 bg-black"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
          <div className="w-full h-1/3 bg-yellow-400"></div>
        </div>
        <div className="absolute -top-12 right-0 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Deutsch Learners Hub
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}>
        <div className={`absolute top-0 right-0 w-96 h-96 ${
          darkMode ? 'bg-amber-500/5' : 'bg-amber-400/10'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 ${
          darkMode ? 'bg-red-500/5' : 'bg-red-400/10'
        } rounded-full blur-3xl animate-pulse`}></div>
      </div>

      <section className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif ${darkMode ? 'text-white' : 'text-slate-900'} mb-8 leading-tight`}>
                Learn German Online
                <span className="block mt-2 bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">— Now</span>
                <span className="block bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">— Anytime</span>
                <span className="block bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">— From Anywhere</span>
              </h1>
              
              <div className={`space-y-6 text-lg font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                <p className={`text-xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  Welcome to our page for online German lessons!
                </p>
                <p>Would you like to learn German? Do you need German for your job, for your studies or for your visit in Germany? Then you are right here!</p>
                <p>We will accompany you in all learning phases and support you in using the German language in conversation.</p>
              </div>

              <div className={`mt-8 p-6 rounded-2xl backdrop-blur-lg border ${
                darkMode 
                  ? 'bg-white/5 border-white/10 shadow-xl' 
                  : 'bg-white/60 border-white/40 shadow-2xl'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Live Online Classes
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'} mb-3`}>
                      <span className="font-medium">Google Meet oder Zoom</span>
                    </p>
                    <div className="flex items-center space-x-2">
                      <Clock className={`w-4 h-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                      <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        2 hours 30 minutes daily
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setActivePage('contact')}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium px-8 py-4 rounded-full text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className={`w-full max-w-md aspect-square rounded-3xl shadow-2xl flex items-center justify-center p-12 backdrop-blur-xl border ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10' 
                  : 'bg-gradient-to-br from-white/80 to-slate-50/80 border-white/40'
              }`}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
                    <img 
                      src="/logo.jpg" 
                      alt="Deutsch Learners Hub Logo" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  <h3 className={`text-2xl font-serif ${darkMode ? 'text-slate-200' : 'text-slate-800'} mb-2`}>Deutsch Learners Hub</h3>
                  <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'} tracking-wide`}>Excellence in German Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-extralight text-center ${darkMode ? 'text-white' : 'text-slate-900'} mb-4 tracking-tighter`}>
            Why Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-20"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Live Classes', desc: 'Interactive sessions every day' },
              { icon: BookOpen, title: 'Structured', desc: 'Step-by-step curriculum' },
              { icon: MessageCircle, title: 'Support', desc: 'Daily WhatsApp assistance' },
              { icon: Award, title: 'Exam Ready', desc: 'Certification preparation' }
            ].map((benefit, idx) => (
              <div key={idx} className={`text-center group p-6 rounded-2xl backdrop-blur-lg border transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/60 border-white/40 hover:bg-white/80'
              }`}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg font-medium mb-3 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{benefit.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{benefit.desc}</p>
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
              { icon: Clock, title: 'Flexible', desc: '2.5 hours daily sessions' },
              { icon: CheckCircle, title: 'Results', desc: 'Students achieve their goals' }
            ].map((feature, idx) => (
              <div key={idx} className={`p-10 rounded-2xl backdrop-blur-lg border transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-amber-500/50' 
                  : 'bg-white/60 border-white/40 hover:border-amber-400/50'
              } shadow-xl`}>
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{feature.title}</h3>
                <p className={`text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const CoursesPage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}></div>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className={`inline-block mb-6 px-4 py-1.5 rounded-full backdrop-blur-lg border ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-white/40'
            }`}>
              <span className="text-xs font-light text-amber-600 tracking-widest uppercase">Our Programme</span>
            </div>
            <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>Our Courses</h1>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} font-light leading-relaxed`}>
              Complete German language programme
            </p>
          </div>

          <div className={`rounded-3xl backdrop-blur-lg border shadow-2xl overflow-hidden ${
            darkMode 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/60 border-white/40'
          }`}>
            <div className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 p-2">
              <div className={`${darkMode ? 'bg-slate-800/90' : 'bg-white/90'} backdrop-blur-xl rounded-2xl p-12 md:p-16`}>
                <h2 className={`text-5xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-8`}>A1 — B2 Complete</h2>

                <div className={`mb-12 p-6 rounded-xl backdrop-blur-lg border ${
                  darkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-slate-50/60 border-slate-200/40'
                }`}>
                  <div className="flex items-start space-x-4">
                    <Video className={`w-6 h-6 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <div>
                      <h3 className={`text-base font-medium mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Live Online Classes via Google Meet oder Zoom
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Clock className={`w-4 h-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          2 hours 30 minutes daily sessions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActivePage('contact')}
                  className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20 relative">
      <div className={`fixed inset-0 -z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
      }`}></div>

      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tighter`}>About Us</h1>
          </div>
          
          <div className={`space-y-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'} font-light leading-loose text-lg`}>
            <p>This German programme was started with one goal: to make learning German easier for beginners.</p>
            <p>We teach A1 to B2 German using step-by-step methods, live classes via Google Meet oder Zoom, and daily support through WhatsApp.</p>
          </div>
        </div>
      </section>
    </div>
  );

// ========== END OF PART 1 ==========

// ========== PART 2 OF 3 ==========

  const PricingPage = () => {
    const pricingData = [
      { 
        level: 'A1', 
        title: 'Beginner I', 
        ksh: '11,000', 
        usd: '95',
        color: 'from-emerald-400 to-emerald-600',
        features: ['Basic vocabulary', 'Simple conversations', 'Present tense', 'Self-introduction']
      },
      { 
        level: 'A2', 
        title: 'Beginner II', 
        ksh: '12,000', 
        usd: '105',
        color: 'from-green-400 to-green-600',
        features: ['Expanded vocabulary', 'Past tense', 'Daily routines', 'Shopping & travel']
      },
      { 
        level: 'B1', 
        title: 'Intermediate I', 
        ksh: '16,000', 
        usd: '135',
        color: 'from-blue-400 to-blue-600',
        features: ['Complex grammar', 'Opinion expression', 'Work vocabulary', 'Longer texts']
      },
      { 
        level: 'B2', 
        title: 'Intermediate II', 
        ksh: '18,000', 
        usd: '145',
        color: 'from-indigo-400 to-indigo-600',
        features: ['Advanced fluency', 'Professional German', 'Exam preparation', 'Academic writing'],
        popular: true
      }
    ];

    return (
      <div className="pt-20 relative">
        <div className={`fixed inset-0 -z-10 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
        }`}>
          <div className={`absolute top-20 right-20 w-96 h-96 ${
            darkMode ? 'bg-amber-500/5' : 'bg-amber-400/10'
          } rounded-full blur-3xl animate-pulse`}></div>
        </div>

        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className={`inline-block mb-6 px-4 py-1.5 rounded-full backdrop-blur-lg border ${
                darkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <span className="text-xs font-light text-amber-600 tracking-widest uppercase">Investment</span>
              </div>
              <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>Pricing</h1>
              <p className={`text-xl font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Transparent pricing for every level
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className={`inline-flex rounded-full p-1 backdrop-blur-lg border shadow-lg ${
                darkMode 
                  ? 'bg-slate-800/60 border-slate-700/50' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <button
                  onClick={() => setCurrency('KSH')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    currency === 'KSH' 
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg' 
                      : darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  🇰🇪 Local (KSH)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                    currency === 'USD' 
                      ? 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg' 
                      : darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <Globe size={16} />
                  <span>International (USD)</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pricingData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`relative backdrop-blur-lg border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-slate-800/40 border-slate-700/50' 
                      : 'bg-white/60 border-white/40'
                  } ${
                    item.popular ? 'ring-2 ring-amber-400 scale-105' : ''
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-400 to-red-500 text-white text-xs font-medium px-4 py-1 rounded-full shadow-xl">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl font-medium mb-6 shadow-xl`}>
                    {item.level}
                  </div>
                  
                  <h3 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{item.title}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {currency === 'KSH' ? item.ksh : `$${item.usd}`}
                      </span>
                      <span className={`ml-2 text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {currency === 'KSH' ? 'KSH' : 'USD'}
                      </span>
                    </div>
                    <p className={`text-xs font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-1`}>
                      per level
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {item.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start space-x-2">
                        <CheckCircle className={`w-4 h-4 mt-0.5 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                        <span className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActivePage('contact')}
                    className={`w-full text-white font-medium py-3 rounded-xl transition-all shadow-lg hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500' 
                        : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>

            <div className={`rounded-3xl p-12 text-center backdrop-blur-lg border shadow-2xl ${
              darkMode 
                ? 'bg-slate-800/40 border-slate-700/50' 
                : 'bg-white/60 border-white/40'
            }`}>
              <h2 className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>What's Included</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                  'Google Meet oder Zoom',
                  'Study materials',
                  'Assignment feedback',
                  '2.5 hours daily',
                  'Mock examinations',
                  'WhatsApp support',
                  'Certificate',
                  'Flexible payments'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-left">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <span className={`text-sm font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

// ========== END OF PART 2 ==========

// ========== PART 3 OF 3 ==========

  const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
      setIsSubmitting(true);

      try {
        const response = await fetch('https://formspree.io/f/mnnezdve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            message: formData.message
          })
        });

        if (response.ok) {
          alert('Thank you! We will contact you soon via WhatsApp.');
          setFormData({ name: '', email: '', whatsapp: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="pt-20 relative">
        <div className={`fixed inset-0 -z-10 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-amber-50/30 via-white to-red-50/20'
        }`}></div>

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h1 className={`text-6xl font-extralight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 tracking-tighter`}>Get In Touch</h1>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} font-light`}>
                Ready to begin your German learning journey?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className={`rounded-3xl backdrop-blur-lg border shadow-2xl p-10 ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700/50' 
                  : 'bg-white/60 border-white/40'
              }`}>
                <h2 className={`text-2xl font-medium mb-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Send a Message</h2>
                <div className="space-y-6">
                  <div>
                    <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                        darkMode 
                          ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                          : 'border-slate-200/50 bg-white/50 text-slate-800'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                        darkMode 
                          ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                          : 'border-slate-200/50 bg-white/50 text-slate-800'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm transition-all ${
                        darkMode 
                          ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                          : 'border-slate-200/50 bg-white/50 text-slate-800'
                      }`}
                      placeholder="+254 740 891 695"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-light ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-2`}>Message</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-light backdrop-blur-sm resize-none transition-all ${
                        darkMode 
                          ? 'border-slate-700/50 bg-slate-900/50 text-white' 
                          : 'border-slate-200/50 bg-white/50 text-slate-800'
                      }`}
                      placeholder="Your learning goals..."
                      required
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 via-red-500 to-amber-600 hover:from-amber-600 hover:via-red-600 hover:to-amber-700 text-white font-medium py-4 rounded-xl transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`rounded-3xl p-10 backdrop-blur-lg border shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50' 
                    : 'bg-gradient-to-br from-amber-50/80 to-red-50/80 border-white/40'
                }`}>
                  <h2 className={`text-2xl font-medium mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MessageSquare className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                      <div>
                        <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>WhatsApp</p>
                        <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 740 891 695</p>
                        <p className={`font-light mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 701 483 998</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                      <div>
                        <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Email</p>
                        <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>deutschlhub12@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className={`w-5 h-5 mt-1 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} strokeWidth={1.5} />
                      <div>
                        <p className={`font-light text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Phone</p>
                        <p className={`font-light ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 740 891 695</p>
                        <p className={`font-light mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>+254 701 483 998</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`rounded-3xl p-10 backdrop-blur-lg border shadow-2xl ${
                  darkMode 
                    ? 'bg-slate-800/40 border-slate-700/50' 
                    : 'bg-white/60 border-white/40'
                }`}>
                  <h3 className={`text-xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Quick Response</h3>
                  <p className={`text-sm font-light mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    We respond within 24 hours. For immediate help, reach us on WhatsApp.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/254740891695"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
                    >
                      <MessageSquare size={18} strokeWidth={1.5} />
                      <span>WhatsApp: +254 740 891 695</span>
                    </a>
                    <a
                      href="https://wa.me/254701483998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg w-full justify-center hover:scale-105"
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
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <NavBar />
      {activePage === 'home' && <HomePage />}
      {activePage === 'courses' && <CoursesPage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'pricing' && <PricingPage />}
      {activePage === 'contact' && <ContactPage />}
      <GermanFlagIcon />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-40 p-3 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-lg ${
            darkMode 
              ? 'bg-amber-600/80 hover:bg-amber-500/90 border border-amber-400/30' 
              : 'bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600'
          }`}
        >
          <ChevronUp size={24} strokeWidth={2} />
        </button>
      )}

      <footer className={`py-12 transition-all backdrop-blur-lg border-t ${
        darkMode 
          ? 'bg-slate-950/80 border-slate-800/50' 
          : 'bg-slate-50/80 border-slate-200/50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2025 Deutsch Learners Hub
          </p>
          <p className={`text-sm font-light ${darkMode ? 'text-slate-500' : 'text-slate-400'} mt-2`}>
            Making German accessible for everyone
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DeutschLearnerHub;

// ========== END OF PART 3 - COMPLETE! ==========