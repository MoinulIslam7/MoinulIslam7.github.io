"use client";
import Link from 'next/link';
import { FaArrowRight, FaRegLaughSquint } from 'react-icons/fa';
import BlogCard from './blog-card';
import { useState } from 'react';

function Blog({ blogs }) {
  const [showFunFact, setShowFunFact] = useState(false);
  
  const funFacts = [
    "I write blogs to remember what I learned",
    "Half my blogs start with 'I was struggling with...'",
    "My most popular blog is about a simple typo",
    "I often write blogs about problems I created myself",
    "My readers seem to enjoy my terrible jokes",
    "I once published a blog with a critical error (fixed it later)"
  ];

  return (
    <div id='blogs' className="relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">blogs.sh</span>
        </div>
        
        <div className="terminal-body">
          <p className="text-[var(--success-green)]">$ ls -la ./blog_posts/</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10 mt-4">
            {blogs.slice(0, 6).map((blog, i) => (
              blog?.cover_image &&
              <BlogCard blog={blog} key={i} />
            ))}
          </div>
          
          <div className="mt-6">
            <button 
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-sm text-[var(--warning-yellow)] hover:text-[var(--error-red)] flex items-center gap-1"
            >
              <FaRegLaughSquint />
              {showFunFact ? "Hide writing fun fact" : "Show writing fun fact"}
            </button>
            
            {showFunFact && (
              <div className="mt-2 p-3 bg-[#2a2a2a] rounded text-sm">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-5 lg:mt-8">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              href="https://dev.to/moinulislam7"
              target='_blank'
            >
              <span>View More</span>
              <FaArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;