// src/admin/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, User, BarChart3, BookOpen, Settings, Shield, Save, Trash2, Plus, Edit3, X as XIcon } from 'lucide-react';
import BlackholeBackground from '../components/BlackholeBackground';

// Helper: Simpan data ke localStorage
const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Helper: Ambil data dari localStorage
const getFromStorage = (key, fallback) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

// Helper: Generate ID unik
const generateId = () => Math.random().toString(36).substr(2, 9);

const AdminPanel = ({ onBack }) => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('stats');
  
  // Statistik
  const [stats, setStats] = useState({ total: 0, today: 0, history: [] });
  
  // Maintenance mode
  const [maintenanceMode, setMaintenanceMode] = useState(
    getFromStorage('edulearn_maintenance', {
      about: false,
      astronomy: false,
      history: false,
      mathematics: false,
      science: false
    })
  );
  
  // About content
  const [aboutData, setAboutData] = useState(
    getFromStorage('edulearn_about', {
      ainur: { name: "AINUR ROFIK", age: "15 tahun", role: "Arsitek utama EduLearn..." },
      fauzi: { name: "FAUZI FIRMANSYAH", role: "Sang penjaga semangat..." },
      quote: "Bersama, kami membangun portal edukasi..."
    })
  );
  
  // Materi management
  const [topics, setTopics] = useState({
    astronomy: getFromStorage('edulearn_astronomy', []),
    history: getFromStorage('edulearn_history', []),
    mathematics: getFromStorage('edulearn_math', []),
    science: getFromStorage('edulearn_science', [])
  });
  
  // Form state untuk tambah/edit
  const [editingTopic, setEditingTopic] = useState(null);
  const [form, setForm] = useState({ id: '', title: '', content: '', category: 'astronomy' });
  const [showForm, setShowForm] = useState(false);

  // Load statistik
  useEffect(() => {
    const key = 'edulearn_visitors';
    const now = new Date();
    const today = now.toDateString();
    
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    
    if (data.lastVisit !== today) {
      data.count = (data.count || 0) + 1;
      data.lastVisit = today;
      data.history = data.history || [];
      data.history.push({ date: today, count: 1 });
      localStorage.setItem(key, JSON.stringify(data));
    }
    
    const history = data.history || [];
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayStr = date.toDateString();
      const dayData = history.find(h => h.date === dayStr);
      return {
        date: dayStr,
        count: dayData ? dayData.count : Math.floor(Math.random() * 5) + 1
      };
    }).reverse();

    setStats({
      total: data.count || 1,
      today: data.lastVisit === today ? (data.history?.slice(-1)[0]?.count || 1) : 0,
      history: last30Days
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔑 GANTI PASSWORD DI SINI
    if (password === 'gaga') {
      setAuthenticated(true);
    } else {
      alert('Password salah! Hanya AINUR ROFIK & FAUZI FIRMANSYAH yang boleh masuk!');
    }
  };

  // === MAINTENANCE ===
  const handleToggleMaintenance = (feature) => {
    const newMode = { ...maintenanceMode, [feature]: !maintenanceMode[feature] };
    setMaintenanceMode(newMode);
    saveToStorage('edulearn_maintenance', newMode);
  };

  // === ABOUT ===
  const handleSaveAbout = () => {
    saveToStorage('edulearn_about', aboutData);
    alert('Berhasil menyimpan "Tentang Kami"!');
  };

  // === MATERI MANAGEMENT ===
  const handleAddTopic = () => {
    setEditingTopic(null);
    setForm({ id: '', title: '', content: '', category: 'astronomy' });
    setShowForm(true);
  };

  const handleEditTopic = (category, topic) => {
    setEditingTopic({ category, topic });
    setForm({
      id: topic.id,
      title: topic.title,
      content: topic.content.props.children.props.children,
      category
    });
    setShowForm(true);
  };

  const handleDeleteTopic = (category, id) => {
    if (window.confirm('Hapus materi ini?')) {
      const updated = topics[category].filter(t => t.id !== id);
      const newTopics = { ...topics, [category]: updated };
      setTopics(newTopics);
      saveToStorage(`edulearn_${category}`, updated);
      alert('Materi dihapus!');
    }
  };

  const handleSaveTopic = () => {
    const { id, title, content, category } = form;
    
    // Buat konten JSX sederhana (tanpa React.createElement)
    const contentJSX = (
      <div className="space-y-6">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
    
    const newTopic = {
      id: id || generateId(),
      title,
      content: contentJSX
    };
    
    if (editingTopic) {
      // Update
      const updated = topics[category].map(t => 
        t.id === id ? newTopic : t
      );
      const newTopics = { ...topics, [category]: updated };
      setTopics(newTopics);
      saveToStorage(`edulearn_${category}`, updated);
      alert('Materi diperbarui!');
    } else {
      // Tambah baru
      const updated = [...topics[category], newTopic];
      const newTopics = { ...topics, [category]: updated };
      setTopics(newTopics);
      saveToStorage(`edulearn_${category}`, updated);
      alert('Materi ditambahkan!');
    }
    
    setShowForm(false);
    setForm({ id: '', title: '', content: '', category: 'astronomy' });
  };

  // === RENDER TABS ===
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
                value={aboutData.ainur.name}
                onChange={(e) => setAboutData(prev => ({ ...prev, ainur: { ...prev.ainur, name: e.target.value } }))}
                className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Umur</label>
              <input
                type="text"
                value={aboutData.ainur.age}
                onChange={(e) => setAboutData(prev => ({ ...prev, ainur: { ...prev.ainur, age: e.target.value } }))}
                className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Peran</label>
              <textarea
                rows="3"
                value={aboutData.ainur.role}
                onChange={(e) => setAboutData(prev => ({ ...prev, ainur: { ...prev.ainur, role: e.target.value } }))}
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
                value={aboutData.fauzi.name}
                onChange={(e) => setAboutData(prev => ({ ...prev, fauzi: { ...prev.fauzi, name: e.target.value } }))}
                className="w-full bg-black/50 border border-purple-500/30 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Peran</label>
              <textarea
                rows="4"
                value={aboutData.fauzi.role}
                onChange={(e) => setAboutData(prev => ({ ...prev, fauzi: { ...prev.fauzi, role: e.target.value } }))}
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
          value={aboutData.quote}
          onChange={(e) => setAboutData(prev => ({ ...prev, quote: e.target.value }))}
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
      <p className="text-gray-300">Aktifkan untuk sementara nonaktifkan akses.</p>
      
      {['about', 'astronomy', 'history', 'mathematics', 'science'].map((feature) => (
        <div key={feature} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/30">
          <div>
            <h4 className="font-semibold text-red-200 capitalize">{feature.replace('mathematics', 'Matematika')}</h4>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={maintenanceMode[feature]}
              onChange={() => handleToggleMaintenance(feature)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderMateriManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-green-300">Kelola Materi Edukasi</h3>
        <button
          onClick={handleAddTopic}
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Materi</span>
        </button>
      </div>
      
      {['astronomy', 'history', 'mathematics', 'science'].map((category) => (
        <div key={category} className="bg-black/30 p-4 rounded-xl border border-white/20">
          <h4 className="font-bold text-lg mb-3 capitalize text-cyan-200">
            {category === 'astronomy' ? 'Astronomi' :
             category === 'history' ? 'Sejarah' :
             category === 'mathematics' ? 'Matematika' : 'Sains'}
          </h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {topics[category].length === 0 ? (
              <p className="text-gray-400 text-sm">Belum ada materi</p>
            ) : (
              topics[category].map((topic) => (
                <div key={topic.id} className="flex items-center justify-between p-2 bg-black/40 rounded">
                  <span className="text-white">{topic.title}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditTopic(category, topic)}
                      className="p-1 text-blue-400 hover:text-blue-300"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTopic(category, topic.id)}
                      className="p-1 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
      
      {/* Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 w-full max-w-2xl border border-cyan-500/30 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-4 text-cyan-200">
              {editingTopic ? 'Edit Materi' : 'Tambah Materi Baru'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Kategori</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
                >
                  <option value="astronomy">Astronomi</option>
                  <option value="history">Sejarah</option>
                  <option value="mathematics">Matematika</option>
                  <option value="science">Sains</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Judul</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-300 mb-1">Konten (HTML)</label>
                <textarea
                  rows="10"
                  value={form.content}
                  onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
                  placeholder='<h3 class="text-2xl font-bold">Judul</h3><p>Isi materi...</p>'
                  className="w-full bg-black/50 border border-cyan-500/30 rounded p-2 text-white font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Gunakan HTML biasa. Contoh: &lt;h3 class="text-2xl font-bold"&gt;Contoh&lt;/h3&gt;
                </p>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-700 rounded-lg text-white"
                >
                  Batal
                </button>
                <button
                  onClick={handleSaveTopic}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );

  // === AUTH SCREEN ===
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

  // === MAIN PANEL ===
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

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-8 bg-black/30 p-1 rounded-xl max-w-3xl">
          {[
            { id: 'stats', label: 'Statistik', icon: BarChart3 },
            { id: 'about', label: 'Tentang Kami', icon: User },
            { id: 'materi', label: 'Materi', icon: BookOpen },
            { id: 'maintenance', label: 'Maintenance', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
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
            {activeTab === 'materi' && renderMateriManagement()}
            {activeTab === 'maintenance' && renderMaintenance()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
