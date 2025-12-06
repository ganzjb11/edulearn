import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Star, History, Calculator, FlaskConical, ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isAboutPage, setIsAboutPage] = useState(false); // 👈 state baru
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const inspirationalQuotes = [
    "Ilmu pengetahuan adalah kekuatan terbesar yang pernah dimiliki umat manusia.",
    "Setiap pertanyaan yang kamu ajukan membawamu selangkah lebih dekat ke kebenaran.",
    "Dunia ini penuh dengan keajaiban yang menunggu untuk ditemukan oleh pikiran yang ingin tahu.",
    "Jangan takut untuk tidak tahu, takutlah jika berhenti ingin tahu.",
    "Setiap ahli pernah menjadi pemula. Setiap penemuan dimulai dari rasa penasaran.",
    "Otakmu seperti otot - semakin kamu latih, semakin kuat ia menjadi."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
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
      topics: [
        {
          id: 'stars',
          title: 'Bintang: Api Kosmik yang Menyala Abadi',
          content: (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300">Bagaimana Bintang Terbentuk?</h3>
              <p className="text-lg leading-relaxed">
                Bintang terbentuk dalam awan molekul raksasa yang disebut <strong>nebula</strong>. Ketika bagian dari nebula ini runtuh di bawah pengaruh gravitasinya sendiri, materi mulai berkumpul membentuk bola gas yang sangat panas dan padat di pusatnya.
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
                <h4 className="font-semibold text-xl mb-3 text-purple-200">Proses Pembentukan Bintang:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li><strong>Nebula</strong> - Awan gas dan debu raksasa di ruang angkasa</li>
                  <li><strong>Kolaps Gravitasi</strong> - Materi mulai berkumpul karena gaya gravitasi</li>
                  <li><strong>Protobintang</strong> - Bola gas panas yang belum melakukan fusi nuklir</li>
                  <li><strong>Fusi Nuklir</strong> - Ketika suhu mencapai 10 juta Kelvin, hidrogen berubah menjadi helium</li>
                  <li><strong>Bintang Utama</strong> - Bintang mencapai keseimbangan dan mulai bersinar</li>
                </ol>
              </div>
              <p className="text-lg leading-relaxed">
                Bintang seperti matahari kita menghabiskan 90% hidupnya dalam tahap <strong>deret utama</strong>, di mana ia melakukan fusi hidrogen menjadi helium. Ketika bahan bakar hidrogen habis, bintang akan berevolusi menjadi raksasa merah, dan akhirnya menjadi katai putih, bintang neutron, atau lubang hitam tergantung pada massanya.
              </p>
            </div>
          )
        },
        {
          id: 'galaxies',
          title: 'Galaksi: Kota Kosmik yang Luar Biasa',
          content: (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300">Struktur dan Jenis Galaksi</h3>
              <p className="text-lg leading-relaxed">
                Galaksi adalah sistem gravitasi yang terdiri dari miliaran bintang, gas, debu, dan materi gelap. Galaksi Bima Sakti kita sendiri berisi sekitar 100-400 miliar bintang dan memiliki diameter sekitar 100.000 tahun cahaya.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-lg mb-2 text-purple-200">Jenis Galaksi:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Spiral (seperti Bima Sakti)</li>
                    <li>• Elips</li>
                    <li>• Tak Beraturan</li>
                    <li>• Spiral Batang</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-lg mb-2 text-purple-200">Fakta Menarik:</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Ada 2 triliun galaksi di alam semesta</li>
                    <li>• Galaksi Andromeda akan bertabrakan dengan Bima Sakti dalam 4 miliar tahun</li>
                    <li>• Lubang hitam supermasif ada di pusat setiap galaksi besar</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'history',
      title: 'Sejarah',
      icon: History,
      color: 'from-amber-600 to-orange-600',
      description: 'Telusuri peradaban kuno hingga peristiwa modern',
      topics: [
        {
          id: 'philosophers',
          title: 'Filsuf Besar dan Warisan Pemikiran Mereka',
          content: (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300">Dari Yunani Kuno hingga Abad Pencerahan</h3>
              <p className="text-lg leading-relaxed">
                Filsafat adalah ibu dari semua ilmu pengetahuan. Para filsuf kuno tidak hanya bertanya "apa itu?", tetapi juga "mengapa?" dan "bagaimana kita tahu?". Mereka meletakkan fondasi bagi pemikiran rasional dan ilmiah yang kita gunakan hari ini.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
                  <h4 className="font-semibold text-xl mb-2 text-amber-200">Socrates (469-399 SM)</h4>
                  <p className="text-gray-300">
                    Metode Socratic: Bertanya untuk mengungkap kebenaran melalui dialog. "Aku tahu bahwa aku tidak tahu apa-apa" - prinsip kerendahan hati intelektual.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
                  <h4 className="font-semibold text-xl mb-2 text-amber-200">Aristoteles (384-322 SM)</h4>
                  <p className="text-gray-300">
                    Sistematisasi pengetahuan, logika formal, dan observasi empiris. Karyanya menjadi dasar ilmu pengetahuan selama 2000 tahun.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
                  <h4 className="font-semibold text-xl mb-2 text-amber-200">Immanuel Kant (1724-1804)</h4>
                  <p className="text-gray-300">
                    "Dare to know!" - Pencerahan adalah keluar dari ketidakdewasaan. Etika deontologis dan kritik terhadap rasionalisme murni.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Warisan para filsuf ini masih hidup dalam setiap eksperimen ilmiah, setiap sistem hukum, dan setiap diskusi etis yang kita lakukan hari ini.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: 'mathematics',
      title: 'Matematika',
      icon: Calculator,
      color: 'from-green-600 to-emerald-600',
      description: 'Pelajari konsep matematika dari dasar hingga lanjut',
      topics: [
        {
          id: 'calculus',
          title: 'Kalkulus: Bahasa Perubahan dan Gerak',
          content: (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-300">Dari Archimedes hingga Newton dan Leibniz</h3>
              <p className="text-lg leading-relaxed">
                Kalkulus adalah cabang matematika yang mempelajari perubahan dan gerak. Dua konsep utamanya adalah <strong>turunan</strong> (rates of change) dan <strong>integral</strong> (akumulasi).
              </p>
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
                <h4 className="font-semibold text-xl mb-4 text-green-200">Rumus Dasar Kalkulus:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">d/dx [x^n] = n·x^(n-1)</code>
                    <span className="text-gray-300">Aturan Pangkat untuk Turunan</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">∫ x^n dx = x^(n+1)/(n+1) + C</code>
                    <span className="text-gray-300">Aturan Pangkat untuk Integral</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">d/dx [sin(x)] = cos(x)</code>
                    <span className="text-gray-300">Turunan Fungsi Trigonometri</span>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Kalkulus digunakan di mana-mana: dari memprediksi gerakan planet, merancang pesawat terbang, hingga memodelkan penyebaran penyakit. Isaac Newton mengembangkan kalkulus untuk memahami hukum gerak dan gravitasi, sementara Gottfried Leibniz mengembangkan notasi yang kita gunakan hari ini.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: 'science',
      title: 'Sains',
      icon: FlaskConical,
      color: 'from-red-600 to-pink-600',
      description: 'Eksplorasi dunia sains dari fisika hingga biologi',
      topics: [
        {
          id: 'quantum',
          title: 'Fisika Kuantum: Dunia yang Melawan Akal Sehat',
          content: (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pink-300">Ketika Partikel Bisa Berada di Dua Tempat Sekaligus</h3>
              <p className="text-lg leading-relaxed">
                Fisika kuantum menggambarkan perilaku materi dan energi pada skala atom dan subatomik. Di dunia ini, hukum klasik tidak berlaku, dan realitas menjadi probabilistik.
              </p>
              <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
                <h4 className="font-semibold text-xl mb-3 text-pink-200">Prinsip-Prinsip Kunci:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Dualitas Gelombang-Partikel</strong>: Partikel seperti elektron juga berperilaku sebagai gelombang</li>
                  <li><strong>Prinsip Ketidakpastian Heisenberg</strong>: Tidak mungkin mengetahui posisi dan momentum secara bersamaan dengan presisi sempurna</li>
                  <li><strong>Superposisi Kuantum</strong>: Sistem kuantum dapat berada dalam beberapa keadaan sekaligus</li>
                  <li><strong>Keterkaitan Kuantum</strong>: Partikel yang terkait dapat mempengaruhi satu sama lain secara instan, terlepas dari jarak</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed">
                Meskipun tampak aneh, fisika kuantum adalah teori paling akurat yang pernah dikembangkan manusia. Tanpa pemahaman kuantum, kita tidak akan memiliki laser, transistor, MRI, atau komputer kuantum masa depan.
              </p>
            </div>
          )
        }
      ]
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
    }
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

      {/* Tombol About Me — pindah ke halaman penuh */}
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
          "{inspirationalQuotes[currentQuote]}"
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

  // ✨ HALAMAN TENTANG KAMI — DENGAN BLACKHOLE BACKGROUND DINAMIS
  const renderAboutPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* BLACKHOLE BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
          {/* Cincin luar */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse"></div>
          {/* Cincin dalam */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/40 animate-spin" style={{ animationDuration: '40s' }}></div>
          {/* Lubang hitam inti */}
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 to-black rounded-full blur-sm"></div>
          {/* Partikel bintang kecil */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                top: `${50 + 200 * Math.sin(i * 0.3)}%`,
                left: `${50 + 200 * Math.cos(i * 0.3)}%`,
                animation: `float ${10 + i}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content overlay */}
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
            <div className="text-cyan-300 font-bold text-xl mb-3">AINUR ROFIK</div>
            <div className="text-sm text-gray-400 mb-4">Umur: 15 tahun 🧠</div>
            <p className="text-gray-300 text-sm">
              Arsitek utama EduLearn. Pencinta astronomi, matematika, dan sejarah. Percaya bahwa ilmu adalah cahaya di tengah kegelapan kosmos.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
          >
            <div className="text-purple-300 font-bold text-xl mb-3">FAUZI FIRMANSYAH</div>
            <div className="text-sm text-gray-400 mb-4">Support System 🛸</div>
            <p className="text-gray-300 text-sm">
              Sang penjaga semangat. Selalu siap memberi dorongan, ide, dan energi positif. Tanpanya, misi ini tak akan berjalan.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-400 italic">
            "Bersama, kami membangun portal edukasi yang menginspirasi — seperti dua bintang yang saling mengorbit, menciptakan cahaya bersama."
          </p>
        </motion.div>
      </div>

      {/* Custom animation keyframes for stars */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EduLearn
            </h1>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
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
                {/* Tombol About di sidebar juga */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
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
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {!selectedCategory && !selectedTopic && !isAboutPage && (
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
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer — hanya muncul di halaman utama & kategori */}
      {!isAboutPage && (
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
