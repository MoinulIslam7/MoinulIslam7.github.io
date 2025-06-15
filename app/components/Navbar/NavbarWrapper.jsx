'use client';

import { useEffect, useState } from 'react';
import Navbar from './navbar';

export default function NavbarWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#001428] shadow' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <Navbar />
      </div>
    </div>
  );
}
