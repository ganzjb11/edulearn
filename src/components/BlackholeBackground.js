// src/components/BlackholeBackground.js
import React from 'react';

const BlackholeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradien latar belakang galaksi */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black"></div>
      
      {/* Blackhole utama */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
        {/* Cincin luar — berputar lambat */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-pulse"></div>
        
        {/* Cincin dalam — berputar cepat */}
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/40"
          style={{
            animation: 'spin 40s linear infinite'
          }}
        ></div>
        
        {/* Lubang hitam inti */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 to-black rounded-full blur-sm"></div>
        
        {/* Partikel bintang mengorbit */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${50 + 200 * Math.sin(i * 0.3)}%`,
              left: `${50 + 200 * Math.cos(i * 0.3)}%`,
              animation: `float ${10 + i}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Keyframes CSS untuk animasi partikel */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg) translate(-50%, -50%); }
          to { transform: rotate(360deg) translate(-50%, -50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BlackholeBackground;
