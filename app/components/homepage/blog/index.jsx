// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  return (
    <section id="blogs" className="animate-slide-in-bottom" style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(200,149,108,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-header animate-fade-up">
        <span className="section-tag animate-pop-in">Chapter 06</span>
        <h2 className="section-title font-heading text-shimmer">📖 The Blog</h2>
        <p className="animate-slide-in-top stagger-1" style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
          Freshly brewed insights — served hot from the dev machine
        </p>
        <div className="section-divider animate-scale-in stagger-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.slice(0, 6).map((blog, i) => (
          blog?.cover_image && <BlogCard blog={blog} key={i} delay={i * 0.1} />
        ))}
      </div>

      <div className="flex justify-center mt-12 animate-slide-in-bottom stagger-5">
        <Link
          href="https://dev.to/MoinulIslam7"
          target="_blank"
          className="btn-outline btn-hover-glow group flex items-center gap-2 no-underline hover:scale-105 transition-all"
        >
          <span>📜 View All Specials</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
        </Link>
      </div>
    </section>
  );
}

export default Blog;
