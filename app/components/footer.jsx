"use client";
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FaRegLaughSquint } from 'react-icons/fa';
import { useState } from 'react';

function Footer() {
  const [showFunFact, setShowFunFact] = useState(false);
  
  const funFacts = [
    "This footer took longer to center than the rest of the page",
    "I almost forgot to add a copyright notice",
    "The gradient was carefully chosen to match my mood",
    "This is the only part of the site that doesn't have bugs (probably)",
    "I considered adding a 'Made with ❤️' but it felt too cliché",
    "The year in the copyright will auto-update (if I remember to fix it)"
  ];

  return (
    <div className="footer relative border-t bg-[#0d1224] border-[#353951]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <Link target="_blank" href="https://www.linkedin.com/in/moinulislam7/" className="text-[#16f2b3] hover:underline">Moinul Islam</Link>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-sm flex items-center gap-1 text-[var(--warning-yellow)] hover:text-[var(--error-red)]"
            >
              <FaRegLaughSquint />
              {showFunFact ? "Hide fun fact" : "Footer fun fact"}
            </button>
            
            <Link
              target="_blank"
              href="https://github.com/moinulislam7/portfolio"
              className="flex items-center gap-1 text-sm hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            
            <Link
              target="_blank"
              href="https://github.com/moinulislam7/portfolio/fork"
              className="flex items-center gap-1 text-sm hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
        
        {showFunFact && (
          <div className="mt-4 p-3 bg-[#2a2a2a] rounded text-sm text-center">
            {funFacts[Math.floor(Math.random() * funFacts.length)]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;