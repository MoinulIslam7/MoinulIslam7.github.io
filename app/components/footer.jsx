// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(13,7,0,0.4)',
      padding: '3rem 0 2rem',
      marginTop: '4rem',
    }}>
      <div className="container mx-auto px-6">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Logo / Sign-off */}
          <div style={{ textAlign: 'center' }}>
            <Link href="/" className="no-underline" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: 'var(--cream)' }}>
              ☕ Moinul<span style={{ color: 'var(--latte)' }}>.dev</span>
            </Link>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
              Hand-brewed with caffeine and stubbornness.
            </p>
          </div>

          <div className="section-divider" style={{ width: '40px', opacity: 0.3 }} />

          {/* Social / Links summary */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.75rem' }}>
            <Link href={personalData.github} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">GitHub</Link>
            <Link href={personalData.linkedIn} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">LinkedIn</Link>
            <Link href={personalData.twitter} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">X / Twitter</Link>
            <Link href={personalData.facebook} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">Facebook</Link>
            <Link href={personalData.leetcode} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">LeetCode</Link>
            <Link href={personalData.stackOverflow} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">StackOverflow</Link>
            <Link href={`https://dev.to/${personalData.devUsername}`} target="_blank" className="no-underline text-[#9ca3af] hover:text-[#c8956c] transition-colors">Dev.to</Link>
          </div>

          {/* Copyright */}
          <p style={{ color: 'var(--text-dim)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} MOINUL ISLAM — QUEST LOG UPDATED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;