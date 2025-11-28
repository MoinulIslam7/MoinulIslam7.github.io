'use client';

import { useEffect, useState } from 'react';
import { FaCoffee, FaCode, FaBug, FaLaptopCode } from 'react-icons/fa';

const loadingMessages = [
  "Booting up developer environment...",
  "Initializing caffeine levels...",
  "Downloading dependencies...",
  "Compiling components...",
  "Linting everything...",
  "Checking for syntax errors...",
  "Running tests (hopefully they pass)...",
  "Optimizing performance...",
  "Warming up the CPU...",
  "Preparing dad jokes..."
];

const loadingIcons = [
  <FaCoffee className="text-[var(--warning-yellow)]" />,
  <FaCode className="text-[var(--debug-blue)]" />,
  <FaBug className="text-[var(--error-red)]" />,
  <FaLaptopCode className="text-[var(--success-green)]" />
];

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 2000);
    
    // Cycle through loading icons
    const iconInterval = setInterval(() => {
      setIconIndex(prev => (prev + 1) % loadingIcons.length);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
      clearInterval(iconInterval);
    };
  }, []);

  return loading ? (
    <div className="loading-screen">
      <div className="loading-terminal">
        <div className="loading-header">
          <span>npm run dev</span>
        </div>
        <div className="loading-content">
          <div className="flex items-center gap-3 mb-4">
            {loadingIcons[iconIndex]}
            <p>{loadingMessages[messageIndex]}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--success-green)] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[var(--debug-blue)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[var(--syntax-purple)] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="blinking-cursor mt-4">$ Starting development server...</p>
        </div>
      </div>
    </div>
  ) : null;
}

export default LoadingScreen;