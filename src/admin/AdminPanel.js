// src/admin/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, User, BarChart3, Settings, Shield, Save } from 'lucide-react';
import BlackholeBackground from '../components/BlackholeBackground';
import { getVisitorStats } from '../utils/visitorCounter';

const AdminPanel = ({ onBack, onSaveAbout, maintenanceMode, onToggleMaintenance }) => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('stats');
  const [ainurName, setAinurName] = useState('');
  const [ainurAge, setAinurAge] = useState('');
  const [ainurRole, setAinurRole] = useState('');
  const [fauziName, setFauziName] = useState('');
  const [fauziRole, setFauziRole] = useState('');
  const [quote, setQuote] = useState('');
  const [stats, setStats] = useState({ total: 0, today: 0, history: [] });

  // Load data about
  useEffect(() => {
    const saved = localStorage.getItem('edulearn_about');
    if (saved) {
      const data = JSON.parse(saved);
      setAinurName(data.ainur.name);
      setAinurAge(data.ainur.age);
      setAinurRole(data.ainur.role);
      setFauziName(data.fauzi.name);
      setFauziRole(data.fauzi.role);
      setQuote(data.quote);
    } else {
      // Default
      setAinurName("AINUR ROFIK");
      setAinurAge("15 tahun");
      setAinurRole("Arsitek utama EduLearn...");
      setFauziName("FAUZI FIRMANSYAH");
      setFauziRole("Sang penjaga semangat...");
      setQuote("Bersama, kami membangun portal edukasi...");
    }
    
    const savedStats = getVisitorStats();
    setStats(savedStats);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔑 GANTI PASSWORD DI SINI
    if (password === 'edulearn2025') {
      setAuthenticated(true);
    } else {
      alert('Password salah! Hanya AINUR ROFIK & FAUZI FIRMANSYAH yang boleh masuk!');
    }
  };

  const handleSaveAbout = () => {
    const newData = {
      ainur: { name: ainurName, age: ainurAge, role: ainurRole },
      fauzi: { name: fauziName, role: fauziRole },
      quote
    };
    localStorage.setItem('edulearn_about', JSON.stringify(newData));
    onSaveAbout(newData);
    alert('Berhasil menyimpan perubahan "Tentang Kami"!');
  };

  const renderStats = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-6 h-6 text-cyan-300" />
            <h3 className="text-xl font-bold text-cyan-200">Total Pengunjung</h3>
          </div>
          <p className="text-3xl font-bold text-white">{stats.total}</p>
        </div>
        <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 p-6 rounded-xl border border-green-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-emerald-300" />
            <h3 className="text-xl font-bold text-emerald-200">Hari Ini</h3>
          </div>
          <p className="text-3xl font-bold text-white">{stats.today}</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-200 mb-4">Grafik 30 Hari Terakhir</h3>
        <div className="h-64 flex items-end space-x-1">
          {stats.history.map((day, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center w-full max-w-3"
              title={`${day.date}: ${day.count} pengunjung`}
            >
              <div 
                className="w-full bg-gradient-to-t from-purple-500 to-cyan-400 rounded-t"
                style={{ height: `${Math.max(10, (day.count / 10) * 100)}%` }}
              />
              <span className="text-xs text-gray-400 mt-1">{new Date(day.date).getDate()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutEdit = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-cyan-300">Edit Halaman Tentang Kami</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/30 p-6 rounded-xl border border-cyan-500/30">
          <h4 className="font-bold text-lg mb-3 text-cyan-200">AINUR ROFIK</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Nama</label>
              <input
                type="text"
                value={ainurName}
                onChange={(e) => setAinurName(e.target.value)}
                className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Umur</label>
              <input
                type="text"
                value={ainurAge}
                onChange={(e) => setAinurAge(e.target.value)}
                className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Peran</label>
              <textarea
                rows="3"
                value={ainurRole}
                onChange={(e) => setAinurRole(e.target.value)}
                className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-bold text-lg mb-3 text-purple-200">FAUZI FIRMANSYAH</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Nama</label>
              <input
                type="text"
                value={fauziName}
                onChange={(e) => setFauziName(e.target.value)}
                className="w-full bg-black/50 border border-purple-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Peran</label>
              <textarea
                rows="4"
                value={fauziRole}
                onChange={(e) => setFauziRole(e.target.value)}
                className="w-full bg-black/50 border border-purple-500/30 rounded p-2 text-white"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-black/30 p-6 rounded-xl border border-yellow-500/30">
        <label className="block text-sm text-gray-300 mb-2">Kutipan Inspiratif</label>
        <textarea
          rows="2"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="w-full bg-black/50 border border-yellow-500/30 rounded p-2 text-white"
        />
      </div>
      
      <button
        onClick={handleSaveAbout}
        className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white flex items-center space-x-2"
      >
        <Save className="w-5 h-5" />
        <span>Simpan Perubahan</span>
      </button>
    </div>
  );

  const renderMaintenance = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-red-300">Mode Maintenance</h3>
      <p className="text-gray-300">
        Aktifkan mode maintenance untuk sementara menonaktifkan akses ke fitur tertentu.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/30">
          <div>
            <h4 className="font-semibold text-red-200">Tentang Kami</h4>
            <p className="text-sm text-gray-400">Halaman profil tim</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={maintenanceMode.about}
              onChange={() => onToggleMaintenance('about')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
          </label>
        </div>
      </div>
      
      {maintenanceMode.about && (
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-4 rounded-xl border border-red-500/50">
          <p className="text-orange-300 italic">
            "Tentang Kami" sedang dalam perawatan. Pengunjung akan melihat halaman maintenance.
          </p>
        </div>
      )}
    </div>
  );

  if (!authenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6"
      >
        <div className="max-w-md mx-auto mt-20">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-red-400" />
            <h1 className="text-2xl font-bold">Admin Control</h1>
          </div>
          <p className="text-gray-300 mb-6">
            Hanya untuk AINUR ROFIK & FAUZI FIRMANSYAH. Masukkan password rahasia.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password rahasia..."
              className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Masuk ke Admin Panel
            </button>
          </form>
          <button
            onClick={onBack}
            className="mt-4 flex items-center text-gray-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Kembali ke EduLearn
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative"
    >
      <BlackholeBackground />
      <div className="relative z-10 container mx-auto px-4 py-8 text-white">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Admin Control
            </h1>
          </div>
          <div className="text-sm text-gray-400">Selamat datang, Admin!</div>
        </div>

        <div className="flex space-x-1 mb-8 bg-black/30 p-1 rounded-xl max-w-2xl">
          {[
            { id: 'stats', label: 'Statistik', icon: BarChart3 },
            { id: 'about', label: 'Tentang Kami', icon: User },
            { id: 'maintenance', label: 'Maintenance', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'stats' && renderStats()}
            {activeTab === 'about' && renderAboutEdit()}
            {activeTab === 'maintenance' && renderMaintenance()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
