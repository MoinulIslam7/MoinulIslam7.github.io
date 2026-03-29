'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "🧭 Quest Log", href: "#about" },
  { label: "⚔️ Battle Record", href: "#experience" },
  { label: "🎯 Skill Tree", href: "#skills" },
  { label: "🗺️ Artifacts", href: "#projects" },
  { label: "📜 Lore", href: "#education" },
  { label: "📖 The Blog", href: "#blogs" },
  { label: "☕ Brew a Chat", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      style={{
        background: scrolled
          ? 'rgba(13,7,0,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,149,108,0.15)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="flex items-center justify-between py-4 relative px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 no-underline"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: 'var(--latte)' }}
        >
          <span
            className="group-hover:animate-bounce inline-block"
            style={{ fontSize: '1.4rem', lineHeight: 1, display: 'inline-block', transition: 'transform 0.3s' }}
          >
            ☕
          </span>
          <span style={{ color: 'var(--cream)' }}>Moinul</span>
          <span style={{ color: 'var(--latte)' }}>.dev</span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none"
          style={{ color: 'var(--cream)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <ul
          className={`
            absolute top-20 left-0 w-full flex flex-col gap-1 p-4 z-50 shadow-2xl
            transition-all duration-300 ease-in-out
            md:static md:flex-row md:w-auto md:gap-0 md:p-0 md:shadow-none md:bg-transparent
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
          `}
          style={{
            background: 'rgba(13,7,0,0.97)',
            backdropFilter: 'blur(20px)',
          }}
          id="navbar-default"
        >
          {navItems.map((item) => (
            <li key={item.label} style={{ listStyle: 'none' }}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block no-underline text-[#9ca3af] transition-all duration-200 hover:text-[#c8956c] whitespace-nowrap px-3 py-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
