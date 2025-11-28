// components/ArcadeNavbar.jsx
'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Player Profile", href: "#about" },
    { label: "High Scores", href: "#experience" },
    { label: "Power Ups", href: "#skills" },
    { label: "Game Library", href: "#projects" },
    { label: "Achievements", href: "#education" },
    { label: "Insert Coin", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[rgba(26,26,46,0.9)] py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="arcade-container flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-bold">
          <span className="text-3xl mr-2">🕹️</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--arcade-yellow)] to-[var(--arcade-pink)]">
            MOINUL ARCADE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-wider hover:text-[var(--arcade-yellow)] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-[var(--arcade-light)]"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[var(--arcade-blue)] absolute top-full left-0 right-0 py-4 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-center uppercase hover:text-[var(--arcade-yellow)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}