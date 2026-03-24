// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaDev } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <section id="contact" style={{ padding: '6rem 0 4rem', position: 'relative' }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: '400px',
        background: 'radial-gradient(circle at center, rgba(168,85,247,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-header">
        <span className="section-tag">Chapter 07</span>
        <h2 className="section-title font-heading">☕ Brew a Chat</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
          Drop me a line — whether it&apos;s a project quest or just coffee talk
        </p>
        <div className="section-divider" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
        {/* Left — Form */}
        <div className="brew-card" style={{ padding: '2rem' }}>
          <p className="font-heading font-bold text-lg text-[#f5e6d3] mb-6">📝 Order Your Project</p>
          <ContactForm />
        </div>

        {/* Right — Info */}
        <div className="lg:pl-10">
          <div className="brew-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <p className="font-heading font-bold text-lg text-[#f5e6d3] mb-6">📍 Café Information</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1c1007] border border-[#c8956c33] flex items-center justify-center text-[#c8956c] transition-colors duration-300 group-hover:border-[#c8956c] group-hover:bg-[#c8956c22]">
                  <MdAlternateEmail size={18} />
                </div>
                <span className="text-[#d3d8e8] text-sm md:text-base">{personalData.email}</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1c1007] border border-[#c8956c33] flex items-center justify-center text-[#c8956c] transition-colors duration-300 group-hover:border-[#c8956c] group-hover:bg-[#c8956c22]">
                  <IoMdCall size={18} />
                </div>
                <span className="text-[#d3d8e8] text-sm md:text-base">{personalData.phone}</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#1c1007] border border-[#c8956c33] flex items-center justify-center text-[#c8956c] transition-colors duration-300 group-hover:border-[#c8956c] group-hover:bg-[#c8956c22]">
                  <CiLocationOn size={20} />
                </div>
                <span className="text-[#d3d8e8] text-sm md:text-base">{personalData.address}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '0 1rem' }}>
            <p className="text-[0.65rem] font-bold text-[#c8956c] uppercase tracking-widest mb-4">Connect with the Barista</p>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { href: personalData.github, Icon: IoLogoGithub },
                { href: personalData.linkedIn, Icon: BiLogoLinkedin },
                { href: personalData.twitter, Icon: FaXTwitter },
                { href: personalData.stackOverflow, Icon: FaStackOverflow },
                { href: personalData.facebook, Icon: FaFacebook },
                { href: personalData.leetcode, Icon: SiLeetcode },
                { href: `https://dev.to/${personalData.devUsername}`, Icon: FaDev },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#1c1007] border border-[#c8956c33] flex items-center justify-center text-[#c8956c] transition-all duration-300 hover:scale-110 hover:border-[#c8956c] hover:bg-[#c8956c22]"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;