'use client';
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 relative">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Moinul Islam
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`
            absolute top-20 left-0 w-full bg-[#001428] shadow flex flex-col space-y-2 transition-all duration-300 ease-in-out z-50
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            md:static md:opacity-100 md:visible md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:w-auto md:p-0 md:flex
          `}
          id="navbar-default"
        >
          {[
            { label: "ABOUT", href: "#about" },
            { label: "EXPERIENCE", href: "#experience" },
            { label: "SKILLS", href: "#skills" },
            { label: "EDUCATION", href: "#education" },
            { label: "BLOGS", href: "#blogs" },
            { label: "PROJECTS", href: "#projects" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
              >
                <div className="dark:text-gray-300 text-sm text-gray-700 transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                  {item.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
