// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaDev, FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdArrowUpward } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  { href: personalData.github, label: 'GitHub', Icon: BsGithub },
  { href: personalData.linkedIn, label: 'LinkedIn', Icon: BsLinkedin },
  { href: personalData.twitter, label: 'X / Twitter', Icon: FaXTwitter },
  { href: personalData.facebook, label: 'Facebook', Icon: FaFacebook },
  { href: personalData.leetcode, label: 'LeetCode', Icon: SiLeetcode },
  { href: personalData.stackOverflow, label: 'Stack Overflow', Icon: FaStackOverflow },
  { href: `https://dev.to/${personalData.devUsername}`, label: 'Dev.to', Icon: FaDev },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner mx-auto px-8 lg:max-w-[1240px]">
        <div className="footer-row">
          <div className="footer-brand">
            <Link href="/" className="footer-brand__name">Moinul Islam</Link>
            <span className="footer-status"><span className="footer-status__dot" /> Available</span>
          </div>

          <div className="footer-socials">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="me noopener noreferrer" aria-label={label} title={label}>
                <Icon size={15} />
              </a>
            ))}
          </div>

          <a href="#hero" className="footer-top" aria-label="Back to top" title="Back to top">
            <MdArrowUpward size={16} />
          </a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Moinul Islam <span aria-hidden="true">·</span> Built with Next.js &amp; ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
