'use client';
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaDev, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-24 animate-slide-in-left"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-80px', left: '-100px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(200,149,108,0.09) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '-60px', right: '-80px',
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* LEFT — Text content */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10" style={{ maxWidth: '600px' }}>

        {/* Level badge */}
        <div className="level-chip mb-5 animate-pop-in" itemProp="jobTitle">
          ⚔️ &nbsp;LVL 3 &nbsp;·&nbsp; SOFTWARE ENGINEER
        </div>

        {/* Main H1 - SEO Critical */}
        <h1
          className="font-heading animate-slide-in-top stagger-1"
          itemProp="name"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            color: 'var(--cream)',
            marginBottom: '0.5rem',
          }}
        >
          Hi, I&rsquo;m{' '}
          <span
            className="text-shimmer"
            style={{
              background: 'linear-gradient(90deg, var(--latte), var(--pink), var(--latte))',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Moinul Islam
          </span>
          <span style={{ color: 'var(--matcha)' }}>.</span>
        </h1>

        {/* Subtitle - SEO Keywords */}
        <p
          className="animate-slide-in-top stagger-2"
          itemProp="description"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.
        </p>

        {/* XP Bar */}
        <div className="xp-bar-container mb-7 w-full animate-slide-in-top stagger-3" style={{ maxWidth: '380px' }}>
          <div className="xp-labels">
            <span>⚡ XP — 3 Years Production Experience</span>
            <span style={{ color: 'var(--matcha)' }}>72%</span>
          </div>
          <div className="xp-track">
            <div className="xp-fill" />
          </div>
        </div>

        {/* Social icons with rel attributes for SEO */}
        <div className="flex flex-wrap items-center gap-5 mb-8 animate-slide-in-top stagger-4" aria-label="Social media links">
          {[
            { href: personalData.github, Icon: BsGithub, label: 'GitHub', rel: 'me noopener noreferrer' },
            { href: personalData.linkedIn, Icon: BsLinkedin, label: 'LinkedIn', rel: 'me noopener noreferrer' },
            { href: personalData.twitter, Icon: FaXTwitter, label: 'Twitter', rel: 'me noopener noreferrer' },
            { href: personalData.facebook, Icon: FaFacebook, label: 'Facebook', rel: 'me noopener noreferrer' },
            { href: personalData.leetcode, Icon: SiLeetcode, label: 'LeetCode', rel: 'noopener noreferrer' },
            { href: personalData.stackOverflow, Icon: FaStackOverflow, label: 'StackOveflow', rel: 'noopener noreferrer' },
            { href: `https://dev.to/${personalData.devUsername}`, Icon: FaDev, label: 'Dev.to', rel: 'noopener noreferrer' },
          ].map(({ href, Icon, label, rel }, idx) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel={rel}
              aria-label={`Visit ${label} profile`}
              className="text-[#c8956c] transition-all duration-300 hover:text-pink-500 hover:scale-125 hover-glow"
              style={{ animationDelay: `${0.05 + idx * 0.05}s` }}
              title={`${label} Profile`}
            >
              <Icon size={26} />
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-slide-in-top stagger-5">
          <Link href="#contact" className="btn-primary btn-hover-glow" title="Contact Moinul Islam">
            <RiContactsFill size={16} />
            <span>☕ Hire Me</span>
          </Link>
          <Link href={personalData.resume} target="_blank" rel="noopener noreferrer" className="btn-outline btn-hover-glow" title="Download Moinul Islam's Resume">
            <MdDownload size={16} />
            <span>📜 Get Resume</span>
          </Link>
        </div>
      </div>

      {/* RIGHT — Profile image */}
      <div
        className="flex-shrink-0 flex items-center justify-center z-10 animate-float animate-slide-in-right"
        style={{ width: 'clamp(200px, 30vw, 340px)', height: 'clamp(200px, 30vw, 340px)' }}
      >
        <div
          className="animate-pulse-glow"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, var(--latte), var(--pink), var(--violet))',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--bg-deep)',
            }}
          >
            <img
              src={personalData.profile}
              alt="Moinul Islam — Full Stack Software Developer based in Dhaka, Bangladesh"
              itemProp="image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="priority"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
