'use client';
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaDev, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";
import { MdArrowForward, MdDownload } from "react-icons/md";

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

// First production role (Core Devs internship) — drives the experience badge.
const CAREER_START = new Date(2023, 1, 17);
const yearsOfExperience = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000));
const careerYears = Array.from(
  { length: new Date().getFullYear() - CAREER_START.getFullYear() + 1 },
  (_, i) => CAREER_START.getFullYear() + i
);

const typedWords = [
  'scalable REST APIs',
  'microservices',
  'cloud-native backends',
  'AI-powered systems',
  'Next.js frontends',
];

// Icons that circle the profile photo, spaced evenly around the ring.
const orbitIcons = [
  { Icon: SiReact, label: 'React', color: '#61dafb' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
  { Icon: SiNextdotjs, label: 'Next.js', color: '#f5e6d3' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4f8fd6' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5fa04e' },
  { Icon: SiMysql, label: 'MySQL', color: '#e48e00' },
  { Icon: SiPython, label: 'Python', color: '#ffd43b' },
].map((icon, i, all) => ({ ...icon, angle: -90 + (360 / all.length) * i }));

function TypedWord() {
  const [text, setText] = useState(typedWords[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typedWords[wordIndex];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === word) delay = 1600;
    else if (deleting && text === '') delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex(i => (i + 1) % typedWords.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <span className="hero-typed">
      {text}<span className="hero-caret" aria-hidden="true" />
    </span>
  );
}

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

  const spotFrame = useRef(0);

  // Batch spotlight updates to one per frame so mouse moves never block input handling.
  const handlePointerMove = (e) => {
    const node = e.currentTarget;
    const { clientX, clientY } = e;
    if (spotFrame.current) return;
    spotFrame.current = requestAnimationFrame(() => {
      spotFrame.current = 0;
      const rect = node.getBoundingClientRect();
      node.style.setProperty('--spot-x', `${clientX - rect.left}px`);
      node.style.setProperty('--spot-y', `${clientY - rect.top}px`);
    });
  };

  useEffect(() => () => cancelAnimationFrame(spotFrame.current), []);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handlePointerMove}
      className="hero-section-bleed relative flex items-center"
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

      <div aria-hidden="true" className="hero-spotlight" />

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

      <div className="hero-section-shell mx-auto px-8 lg:max-w-[1240px] w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-12 lg:py-16">
        {/* LEFT — Text content */}
        <div className="hero-content-panel flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10" style={{ maxWidth: '600px' }}>

        {/* Status line */}
        <p className="hero-status animate-pop-in">
          <span className="hero-status__dot" aria-hidden="true" />
          <span>Available for work</span>
          <span className="hero-status__role">
            <span className="hero-status__sep" aria-hidden="true">/</span>
            <span itemProp="jobTitle">Software Engineer</span>
          </span>
          <span className="hero-status__sep" aria-hidden="true">/</span>
          <span>Remote<span className="hero-status__loc"> &middot; Dhaka, BD</span></span>
        </p>

        {/* Main H1 - SEO Critical */}
        <h1 className="hero-title font-heading" itemProp="name">
          <span className="hero-title__hello">Hi, I&rsquo;m</span>{' '}
          <span className="hero-title__name">
            Moinul Islam<span className="hero-title__dot">.</span>
            <svg className="hero-title__swash" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="hero-swash" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#c8956c" />
                  <stop offset="60%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#16f2b3" />
                </linearGradient>
              </defs>
              <path d="M3 10 C 70 2, 160 2, 297 7" />
            </svg>
          </span>
        </h1>

        <span className="sr-only">I build {typedWords.join(', ')}</span>
        <div className="hero-terminal" aria-hidden="true">
          <span className="hero-terminal__dots"><i /><i /><i /></span>
          <code>
            <span className="hero-terminal__prompt"><span className="hero-terminal__path">~/moinul </span>$</span> build <TypedWord />
          </code>
        </div>

        {/* Subtitle - SEO Keywords */}
        <p className="hero-lede animate-slide-in-top stagger-2" itemProp="description">
          I&rsquo;m a full stack engineer who ships fast and breaks nothing. I build reliable APIs, microservices and
          AI features with <strong>Python</strong> and <strong>Node.js</strong>, then turn them into clean, polished
          products with <strong>React</strong> and <strong>Next.js</strong>.
        </p>

        {/* Experience badge */}
        <div className="hero-exp animate-slide-in-top stagger-3">
          <div className="hero-exp__head">
            <span className="hero-exp__num">{yearsOfExperience}<span aria-hidden="true">+</span></span>
            <span className="hero-exp__copy">
              <strong>Years of experience</strong>
              <span>Shipping production software since {CAREER_START.getFullYear()}</span>
            </span>
          </div>
          <ol className="hero-exp__timeline" aria-hidden="true">
            {careerYears.map((year, i) => (
              <li key={year} className={i === careerYears.length - 1 ? 'is-now' : undefined}>
                {i === careerYears.length - 1 ? 'Now' : year}
              </li>
            ))}
          </ol>
        </div>

        {/* Social dock with rel attributes for SEO */}
        <nav className="hero-dock animate-slide-in-top stagger-4" aria-label="Social media links">
          {[
            { href: personalData.github, Icon: BsGithub, label: 'GitHub', rel: 'me noopener noreferrer' },
            { href: personalData.linkedIn, Icon: BsLinkedin, label: 'LinkedIn', rel: 'me noopener noreferrer' },
            { href: personalData.twitter, Icon: FaXTwitter, label: 'Twitter', rel: 'me noopener noreferrer' },
            { href: personalData.facebook, Icon: FaFacebook, label: 'Facebook', rel: 'me noopener noreferrer' },
            { href: personalData.leetcode, Icon: SiLeetcode, label: 'LeetCode', rel: 'noopener noreferrer' },
            { href: personalData.stackOverflow, Icon: FaStackOverflow, label: 'Stack Overflow', rel: 'noopener noreferrer' },
            { href: `https://dev.to/${personalData.devUsername}`, Icon: FaDev, label: 'Dev.to', rel: 'noopener noreferrer' },
          ].map(({ href, Icon, label, rel }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel={rel}
              aria-label={`Visit ${label} profile`}
              className="hero-dock__link"
              data-label={label}
            >
              <Icon size={18} title={label} />
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hero-cta-group flex flex-wrap items-center gap-3 animate-slide-in-top stagger-5">
          <Link href="#contact" className="hero-btn hero-btn--primary" title="Contact Moinul Islam">
            <span>Let&rsquo;s brew something</span>
            <MdArrowForward size={18} aria-hidden="true" />
          </Link>
          <Link href={personalData.resume} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--ghost" title="Download Moinul Islam's Resume">
            <MdDownload size={18} aria-hidden="true" />
            <span>Resume</span>
          </Link>
        </div>
      </div>

        {/* RIGHT — Profile image */}
        <div
          className="hero-profile-shell relative flex-shrink-0 flex items-center justify-center z-10 animate-float animate-slide-in-right"
          style={{ width: 'clamp(220px, 34vw, 440px)', height: 'clamp(220px, 34vw, 440px)' }}
        >
          <div aria-hidden="true" className="hero-orbit">
            {orbitIcons.map(({ Icon, label, color, angle }) => (
              <span
                key={label}
                className="hero-orbit-icon"
                title={label}
                style={{
                  left: `${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                  color,
                }}
              >
                <Icon title={label} />
              </span>
            ))}
          </div>

          <div className="hero-photo-ring animate-pulse-glow">
            <div className="hero-photo">
              <img
                src="/Moinul-Islam.webp"
                alt="Moinul Islam — Full Stack Software Developer based in Dhaka, Bangladesh"
                itemProp="image"
                width={600}
                height={770}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="Scroll to the about section">
        <span className="hero-scroll-mouse"><span className="hero-scroll-dot" /></span>
        <span>Scroll</span>
      </a>
    </section>
  );
}

export default HeroSection;
