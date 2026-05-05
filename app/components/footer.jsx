// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="animate-slide-in-bottom" style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(13,7,0,0.4)',
      padding: '3rem 0 2rem',
      marginTop: '4rem',
    }}>
      <div className="mx-auto px-8">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Logo / Sign-off */}
          <div className="animate-pop-in" style={{ textAlign: 'center' }}>
            <Link href="/" className="no-underline hover:scale-105 transition-transform duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: 'var(--cream)', display: 'inline-block' }}>
              ☕ Moinul<span style={{ color: 'var(--latte)' }}>.dev</span>
            </Link>
            <p className="animate-fade-up text-animate-glow" style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
              Hand-brewed with caffeine and stubbornness.
            </p>
          </div>

          <div className="section-divider animate-scale-in" style={{ width: '40px', opacity: 0.3 }} />

          {/* Social / Links summary */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.75rem' }}>
            {[
              { href: personalData.github, label: 'GitHub' },
              { href: personalData.linkedIn, label: 'LinkedIn' },
              { href: personalData.twitter, label: 'X / Twitter' },
              { href: personalData.facebook, label: 'Facebook' },
              { href: personalData.leetcode, label: 'LeetCode' },
              { href: personalData.stackOverflow, label: 'StackOverflow' },
              { href: `https://dev.to/${personalData.devUsername}`, label: 'Dev.to' },
            ].map((link, idx) => (
              <Link 
                key={link.label}
                href={link.href} 
                target="_blank" 
                className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors animate-slide-in-bottom hover-glow hover:scale-110"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="animate-slide-in-bottom stagger-5" style={{ color: 'var(--text-dim)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} MOINUL ISLAM — QUEST LOG UPDATED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
