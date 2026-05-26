'use client';
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaDev, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const orbitBands = [
  { size: '440px', radius: '176px', speed: '30s', delay: '-8s', reverse: false, color: 'rgba(200,149,108,0.18)' },
  { size: '340px', radius: '136px', speed: '24s', delay: '-4s', reverse: true, color: 'rgba(244,114,182,0.20)' },
  { size: '260px', radius: '102px', speed: '18s', delay: '-11s', reverse: false, color: 'rgba(168,85,247,0.22)' },
  { size: '180px', radius: '72px', speed: '14s', delay: '-6s', reverse: true, color: 'rgba(22,242,179,0.20)' },
];

const focusFragments = [
  { angle: '-40deg', distance: '150px', size: '10px', delay: '0s' },
  { angle: '-10deg', distance: '182px', size: '8px', delay: '0.08s' },
  { angle: '18deg', distance: '168px', size: '12px', delay: '0.12s' },
  { angle: '56deg', distance: '144px', size: '9px', delay: '0.18s' },
  { angle: '120deg', distance: '176px', size: '11px', delay: '0.1s' },
  { angle: '162deg', distance: '138px', size: '7px', delay: '0.16s' },
  { angle: '208deg', distance: '158px', size: '10px', delay: '0.22s' },
  { angle: '270deg', distance: '192px', size: '8px', delay: '0.14s' },
];

function HeroSection() {
  const heroRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const node = heroRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFocused(true);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section-bleed relative"
      style={{ minHeight: 'calc(100vh - 80px)', overflow: 'hidden' }}
    >
      {/* Animated background constellation */}
      <div aria-hidden="true" className={`hero-background-animation${isFocused ? ' hero-background-animation--active' : ''}`}>
        <div className="hero-background-core" />
        <div className="hero-background-mesh" />
        {isFocused && (
          <>
            <div className="hero-focus-sweep" />
            <div className="hero-focus-ring" />
            <div className="hero-focus-ring hero-focus-ring--inner" />
            {focusFragments.map((fragment, idx) => (
              <span
                key={`fragment-${idx}`}
                className="hero-focus-fragment"
                style={{
                  '--fragment-angle': fragment.angle,
                  '--fragment-distance': fragment.distance,
                  '--fragment-size': fragment.size,
                  '--fragment-delay': fragment.delay,
                }}
              />
            ))}
          </>
        )}
        {orbitBands.map((orbit, idx) => (
          <div
            key={`orbit-${idx}`}
            className={`hero-background-orbit hero-background-orbit--${idx}${orbit.reverse ? ' hero-background-orbit--reverse' : ''}`}
            style={{
              '--orbit-size': orbit.size,
              '--orbit-duration': orbit.speed,
              '--orbit-delay': orbit.delay,
              '--orbit-color': orbit.color,
              '--node-radius': orbit.radius,
            }}
          >
            <span className="hero-background-orbit-node" />
          </div>
        ))}
      </div>

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

      <div className="hero-section-shell mx-auto px-8 lg:max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-24 animate-slide-in-left">
        {/* LEFT — Text content */}
        <div className="hero-content-panel flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10" style={{ maxWidth: '600px' }}>

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
        <div className="hero-socials flex flex-wrap items-center gap-5 mb-8 animate-slide-in-top stagger-4" aria-label="Social media links">
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
        <div className="hero-cta-group flex flex-wrap items-center gap-4 animate-slide-in-top stagger-5">
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
          className="hero-profile-shell flex-shrink-0 flex items-center justify-center z-10 animate-float animate-slide-in-right"
          style={{ width: 'clamp(180px, 30vw, 340px)', height: 'clamp(180px, 30vw, 340px)' }}
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
      </div>
    </section>
  );
}

export default HeroSection;
