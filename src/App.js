import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Star, History, Calculator, FlaskConical, ChevronLeft, Sparkles, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔥 IMPOR DATA
import quotes from './data/quotes.json';
import { astronomyTopics } from './data/astronomyTopics';
import { historyTopics } from './data/historyTopics';
import { mathTopics } from './data/mathTopics';
import { scienceTopics } from './data/scienceTopics';

// 🔥 IMPOR KOMPONEN BARU
import BlackholeBackground from './components/BlackholeBackground';
import AdminPanel from './admin/AdminPanel';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isAdminPanel, setIsAdminPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [aboutData, setAboutData] = useState(null);
  const [maintenanceMode, setMaintenanceMode] = useState({
    about: false
  });

  useEffect(() => {
    // Load about data from localStorage
    const saved = localStorage.getItem('edulearn_about');
    if (saved) {
      setAboutData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: 'astronomy',
      title: 'Astronomi',
      icon: Star,
      color: 'from-purple-600 to-blue-600',
      description: 'Jelajahi alam semesta, bintang, galaksi, dan misteri kosmik',
      topics: astronomyTopics,
    },
    {
      id: 'history',
      title: 'Sejarah',
      icon: History,
      color: 'from-amber-600 to-orange-600',
      description: 'Telusuri peradaban kuno hingga peristiwa modern',
      topics: historyTopics,
    },
    {
      id: 'mathematics',
      title: 'Matematika',
      icon: Calculator,
      color: 'from-green-600 to-emerald-600',
      description: 'Pelajari konsep matematika dari dasar hingga lanjut',
      topics: mathTopics,
    },
    {
      id: 'science',
      title: 'Sains',
      icon: FlaskConical,
      color: 'from-red-600 to-pink-600',
      description: 'Eksplorasi dunia sains dari fisika hingga biologi',
      topics: scienceTopics,
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedTopic(null);
    if (isMobile) setIsOpen(false);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else if (isAboutPage) {
      setIsAboutPage(false);
    } else if (isAdminPanel) {
      setIsAdminPanel(false);
    }
  };

  const handleSaveAbout = (data) => {
    setAboutData(data);
  };

  const handleToggleMaintenance = (feature) => {
    setMaintenanceMode(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const renderHomeContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-12"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block mb-8"
      >
        <BookOpen className="w-24 h-24 mx-auto text-purple-400" />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
      >
        Selamat Datang di EduLearn!
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Platform edukasi interaktif yang dirancang untuk membuat belajar menjadi pengalaman yang menyenangkan, 
        mendalam, dan menginspirasi. Di sini, setiap pengetahuan dijelaskan dari akar hingga puncaknya.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mb-8"
      >
        <button
          onClick={() => setIsAboutPage(true)}
          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-indigo-700 rounded-full font-semibold text-white hover:from-cyan-500 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center space-x-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>Tentang Kami</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-3xl p-8 border border-purple-500/50 max-w-4xl mx-auto mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
          <h3 className="text-2xl font-bold text-yellow-300">Kata-Kata Motivasi</h3>
        </div>
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-center text-gray-100 italic"
        >
          "{quotes[currentQuote]}"
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 cursor-pointer transition-all duration-300"
              onClick={() => handleCategoryClick(category)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mx-auto mb-4 flex items-center justify-center`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <p className="text-sm text-gray-300 text-center">{category.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );

  const renderAboutPage = () => {
    if (maintenanceMode.about) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center text-center p-8"
        >
          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-md rounded-3xl p-12 border border-red-500/50 max-w-2xl">
            <div className="text-5xl mb-6">🔧</div>
            <h2 className="text-3xl font-bold text-orange-300 mb-4">SEDANG PERAWATAN</h2>
            <p className="text-lg text-gray-200">
              Halaman ini sedang diperbarui oleh tim EduLearn.  
              Silakan kunjungi lagi nanti!
            </p>
          </div>
        </motion.div>
      );
    }

    const data = aboutData || {
      ainur: { name: "AINUR ROFIK", age: "15 tahun", role: "Arsitek utama EduLearn..." },
      fauzi: { name: "FAUZI FIRMANSYAH", role: "Sang penjaga semangat..." },
      quote: "Bersama, kami membangun portal edukasi..."
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen overflow-hidden"
      >
        <BlackholeBackground />
        <div className="relative z-10 container mx-auto px-4 py-12 text-white">
          <div className="flex items-center mb-8">
            <button
              onClick={handleBack}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors mr-4"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              🌌 Tim EduLearn
            </h1>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <p className="text-gray-300">
              Dua explorer muda yang menjelajahi alam semesta ilmu pengetahuan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30"
            >
              <div className="text-cyan-300 font-bold text-xl mb-3">{data.ainur.name}</div>
              <div className="text-sm text-gray-400 mb-4">{data.ainur.age} 🧠</div>
              <p className="text-gray-300 text-sm">{data.ainur.role}</p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
            >
              <div className="text-purple-300 font-bold text-xl mb-3">{data.fauzi.name}</div>
              <div className="text-sm text-gray-400 mb-4">Support System 🛸</div>
              <p className="text-gray-300 text-sm">{data.fauzi.role}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-gray-400 italic">"{data.quote}"</p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderCategoryContent = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedCategory.color}`}>
            <selectedCategory.icon className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{selectedCategory.title}</h2>
            <p className="text-purple-200 mt-1">{selectedCategory.description}</p>
          </div>
        </div>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Kembali</span>
        </button>
      </div>

      <div className="grid gap-6">
        {selectedCategory.topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer"
            onClick={() => handleTopicClick(topic)}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-4 h-4 rounded-full mt-2 bg-gradient-to-r ${selectedCategory.color}`} />
              <div>
                <h3 className="font-semibold text-lg mb-2 hover:text-purple-300 transition-colors">{topic.title}</h3>
                <p className="text-gray-300 text-sm">
                  Klik untuk mempelajari materi lengkap dengan penjelasan mendalam dari akar hingga puncak.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderTopicContent = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-3xl font-bold">{selectedTopic.title}</h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
      >
        {selectedTopic.content}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EduLearn
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Tombol Admin — hanya muncul di desktop */}
            <button
              onClick={() => setIsAdminPanel(true)}
              className="hidden lg:flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-white hover:from-gray-600 hover:to-gray-700 transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-80 ${isOpen ? 'block' : 'hidden'} lg:block`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <h2 className="text-xl font-semibold mb-6 text-center text-purple-300">
                Pilih Materi Belajar
              </h2>
              <nav className="space-y-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedCategory?.id === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' shadow-lg shadow-purple-500/20'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6" />
                        <span className="font-medium">{category.title}</span>
                      </div>
                    </motion.button>
                  );
                })}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (maintenanceMode.about) return;
                    setIsAboutPage(true);
                    if (isMobile) setIsOpen(false);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    isAboutPage
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-700 shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-6 h-6" />
                    <span className="font-medium">Tentang Kami</span>
                  </div>
                </motion.button>

                {/* Tombol Admin di sidebar (mobile & desktop) */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsAdminPanel(true);
                    if (isMobile) setIsOpen(false);
                  }}
                  className="w-full p-4 rounded-xl text-left bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
                >
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">Admin Control</span>
                </motion.button>
              </nav>
            </motion.div>
          </div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              {!selectedCategory && !selectedTopic && !isAboutPage && !isAdminPanel && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderHomeContent()}
                </motion.div>
              )}
              
              {selectedCategory && !selectedTopic && (
                <motion.div
                  key={`category-${selectedCategory.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderCategoryContent()}
                </motion.div>
              )}
              
              {selectedTopic && (
                <motion.div
                  key={`topic-${selectedTopic.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderTopicContent()}
                </motion.div>
              )}

              {isAboutPage && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderAboutPage()}
                </motion.div>
              )}

              {isAdminPanel && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AdminPanel
                    onBack={() => setIsAdminPanel(false)}
                    onSaveAbout={handleSaveAbout}
                    maintenanceMode={maintenanceMode}
                    onToggleMaintenance={handleToggleMaintenance}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {!isAboutPage && !isAdminPanel && (
        <footer className="mt-12 py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2025 EduLearn. Platform edukasi yang membuat belajar menjadi menyenangkan dan mendalam.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
