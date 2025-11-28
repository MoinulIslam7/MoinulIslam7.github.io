"use client";
import { timeConverter } from '@/utils/time-converter';
import Link from 'next/link';
import { BsHeartFill, BsBookmarkFill } from 'react-icons/bs';
import { FaCommentAlt, FaRegLaughSquint } from 'react-icons/fa';
import { useState } from 'react';

function BlogCard({ blog }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showReaction, setShowReaction] = useState(false);
  
  const reactions = ["😂", "😮", "👍", "❤️", "👏", "🎉"];

  return (
    <div 
      className="blog-card border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg relative">
        <img
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full object-cover group-hover:scale-110 transition-all duration-300'
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button 
              onClick={() => setShowReaction(true)}
              className="bg-[var(--syntax-purple)] text-white px-4 py-2 rounded-full hover:bg-[var(--debug-blue)] transition-colors flex items-center gap-1"
            >
              <FaRegLaughSquint /> React
            </button>
          </div>
        )}
      </div>
      
      {showReaction && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 z-10">
          <p className="text-lg mb-4">How did this post make you feel?</p>
          <div className="flex gap-3 text-2xl">
            {reactions.map((reaction, i) => (
              <button 
                key={i}
                onClick={() => setShowReaction(false)}
                className="hover:scale-125 transition-transform"
              >
                {reaction}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowReaction(false)}
            className="mt-4 text-sm bg-[#2a2a2a] px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      )}
      
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
            <BsBookmarkFill className="text-[var(--warning-yellow)]" />
          </div>
        </div>
        
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg sm:text-xl font-medium hover:text-violet-500 line-clamp-2'>
            {blog.title}
          </p>
        </Link>
        
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
          {blog.reading_time_minutes > 5 && (
            <span className="text-xs text-gray-400 ml-2">(Bring coffee)</span>
          )}
        </p>
        
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;