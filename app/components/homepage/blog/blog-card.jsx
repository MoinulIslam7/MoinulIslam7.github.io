'use client';
// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog, delay = 0 }) {
  return (
    <div
      className="brew-card group animate-scale-in card-hover-lift"
      style={{ 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column',
        animationDelay: `${delay}s`,
      }}
    >
      {/* Image */}
      <div style={{
        height: '160px', flexShrink: 0, overflow: 'hidden',
        position: 'relative',
      }}>
        {blog?.cover_image ? (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1c0e05] to-[#2a1509] flex items-center justify-center text-4xl">
            ☕
          </div>
        )}
        {/* "Fresh Brew" overlay */}
        <div className="animate-pop-in" style={{
          position: 'absolute', top: '10px', left: '10px',
          fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em',
          background: 'rgba(200,149,108,0.15)',
          border: '1px solid rgba(200,149,108,0.3)',
          color: 'var(--latte)',
          padding: '0.2rem 0.55rem', borderRadius: '4px',
          textTransform: 'uppercase', backdropFilter: 'blur(8px)',
        }}>
          🍵 Fresh Brew
        </div>
      </div>

      <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Date & stats */}
        <div className="animate-slide-in-bottom stagger-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>
            {timeConverter(blog.published_at)}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', color: 'var(--matcha)' }}>
            <span className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
              <BsHeartFill /> {blog.public_reactions_count}
            </span>
            {blog.comments_count > 0 && (
              <span className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>
                <FaCommentAlt /> {blog.comments_count}
              </span>
            )}
          </div>
        </div>

        <Link href={blog.url} target="_blank" className="no-underline animate-slide-in-bottom stagger-2">
          <h3 className="font-heading font-bold text-[1rem] text-[#f5e6d3] leading-tight transition-colors duration-200 group-hover:text-[#c8956c] text-animate-glow">
            {blog.title}
          </h3>
        </Link>

        <p className="text-[0.75rem] text-[#9ca3af] leading-relaxed line-clamp-2 animate-slide-in-bottom stagger-3">
          {blog.description}
        </p>

        {/* CTA */}
        <div className="animate-slide-in-bottom stagger-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--matcha)', fontWeight: 600 }}>
            ⏱ {blog.reading_time_minutes} min read
          </span>
          <Link href={blog.url} target="_blank" className="no-underline text-[0.68rem] font-bold text-[#c8956c] flex items-center gap-1 transition-colors duration-200 group-hover:text-pink-500 btn-hover-glow">
            ☕ Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
