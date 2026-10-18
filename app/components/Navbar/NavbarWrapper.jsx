'use client';

import { useEffect, useState } from 'react';
import Navbar from './navbar';

export default function NavbarWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Single full-width bar owns the background so there are no mismatched side panels.
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[rgba(13,7,0,0.92)] backdrop-blur-lg border-[rgba(200,149,108,0.15)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <Navbar />
      </div>
    </div>
  );
}
