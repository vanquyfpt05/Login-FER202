"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { AuthMode, User } from './types';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard';
import NewCard from './NewCard';
import { ChevronLeft, ChevronRight, Sidebar, Lock, Download, Share2, Plus, Copy } from 'lucide-react';
import "./styles/page.css";

const BrowserTopBar: React.FC = () => {
  return (
    <div className="w-full h-11 flex items-center px-4 gap-4">
      {/* Traffic Lights */}
      <div className="flex gap-4 mr-2 translate-x-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
      </div>

      {/* Nav Controls */}
      <div className="flex items-center gap-3 text-white/40 translate-x-2">
        <button className="hover:text-white transition-colors">
          <Sidebar size={16} />
        </button>
        <div className="flex gap-1.5 ml-2">
          <button className="hover:text-white transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="hover:text-white transition-colors opacity-30 cursor-not-allowed">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Address Bar */}
      <div className="flex-1 max-w-[500px] mx-auto">
        <div className="bg-black/20 border border-white/5 rounded-lg h-7 flex items-center px-3 gap-2 group hover:bg-black/40 hover:border-white/10 transition-all cursor-default">
          <Lock size={10} className="text-[#27C93F]" />
          <span className="text-[12px] text-white/40 group-hover:text-white/70 transition-colors truncate">lumina.io/auth-secure</span>
        </div>
      </div>

      {/* Right Utilities */}
      <div className="flex items-center gap-3.5 text-white/40">
        <button className="hover:text-white transition-colors">
          <Download size={16} />
        </button>
        <button className="hover:text-white transition-colors">
          <Share2 size={16} />
        </button>
        <button className="hover:text-white transition-colors">
          <Plus size={18} />
        </button>
        <button className="hover:text-white transition-colors">
          <Copy size={16} />
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.LOGIN);

  const handleLogin = (email: string) => {
    setCurrentUser({
      email,
      name: email.split('@')[0] || 'User'
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setAuthMode(AuthMode.LOGIN);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover scale-105"
          style={{
            filter: 'brightness(0.6) contrast(1.1)'
          }}
        />
      </div>

      {/* Main Layout Wrapper */}
      <div className="relative z-10 w-[96vw] h-[94vh] flex flex-col gap-3">

        {/* Standalone Browser Top Bar Container */}
        <div className="w-full shrink-0 glass rounded-2xl browser-top-bar">
          <BrowserTopBar />
        </div>

        {/* Standalone Main Content Container */}
        <div className="login-container flex-1 w-full glass overflow-hidden relative backdrop-blur-[4px]">
          <div className="absolute inset-0 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-start md:justify-center p-4 md:p-8 overflow-y-auto custom-scrollbar">
            {!currentUser ? (
              <><NewCard /><LoginScreen
                mode={authMode}
                setMode={setAuthMode}
                onLogin={handleLogin} /></>
            ) : (
              <Dashboard user={currentUser} onLogout={handleLogout} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
