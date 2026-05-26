'use client';
// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import dynamic from 'next/dynamic';
const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

const tiers = [
  {
    key: 'espresso',
    label: '☕ Espresso — Languages & Fundamentals',
    desc: 'The foundation. Strong, concentrated, non-negotiable.',
    skills: ['Python', 'Javascript', 'Typescript', 'C++', 'C', 'HTML', 'CSS', 'DSA'],
    color: 'var(--latte)',
  },
  {
    key: 'latte',
    label: '🥛 Latte — Frontend Sorcery',
    desc: 'Smooth and crowd-pleasing. Makes everything look good.',
    skills: ['React', 'Next JS', 'Vue', 'jQuery', 'Tailwind', 'Bootstrap', 'MaterialUI', 'Redux', 'Socket.io'],
    color: 'var(--pink)',
  },
  {
    key: 'cold',
    label: '🧊 Cold Brew — Backend & Infrastructure',
    desc: 'Slow-brewed power. Handles the heavy lifting overnight.',
    skills: ['Node JS', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Docker', 'Nginx', 'Puppeteer', 'Fastify', 'REST APIs'],
    color: 'var(--matcha)',
  },
  {
    key: 'barista',
    label: '🎨 Barista Pick — Tools & Deployment',
    desc: 'The craftsmanship layer. Every barista has their secret tools.',
    skills: ['Git', 'GitHub', 'Netlify', 'Vercel', 'Figma', 'Postman', 'Chrome Dev Tools'],
    color: 'var(--violet)',
  },
];

function SkillChip({ skill, accentColor, delay = 0 }) {
  const img = skillsImage(skill);
  return (
    <div
      className="skill-chip animate-scale-in hover-scale"
      style={{ 
        '--chip-accent': accentColor,
        animationDelay: `${delay}s`,
      }}
      title={skill}
    >
      {img?.src ? (
        <Image
          src={img.src}
          alt={skill}
          width={20}
          height={20}
          className="rounded"
          style={{ width: 20, height: 20, objectFit: 'contain' }}
        />
      ) : (
        <span style={{ fontSize: '0.8rem' }}>💎</span>
      )}
      <span>{skill}</span>
      <span style={{
        fontSize: '0.55rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        color: accentColor,
        opacity: 0.7,
      }}>✓</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-aurora section-aurora--skills animate-slide-in-top" style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(200,149,108,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="skill-radar" aria-hidden="true" />

      <div className="section-header animate-fade-up">
        <span className="section-tag animate-pop-in">Chapter 03</span>
        <h2 className="section-title font-heading text-shimmer">🎯 Skill Tree</h2>
        <p className="animate-slide-in-top stagger-1" style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
          What&apos;s in the grinder — served by categorical mastery
        </p>
        <div className="section-divider animate-scale-in stagger-2" />
      </div>

      <div className="expertise-strip animate-fade-up stagger-1">
        <span className="expertise-pill">Full-stack delivery ready</span>
        <span className="expertise-pill">React + Next.js depth</span>
        <span className="expertise-pill">Backend & infra mastery</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {tiers.map((tier, tierIdx) => (
          <div key={tier.key} className="animate-slide-in-left" style={{ animationDelay: `${tierIdx * 0.1}s` }}>
            <div className="skill-tier-title hover-glow transition-all duration-300" style={{ color: tier.color }}>
              {tier.label}
              <span style={{ color: 'var(--text-dim)', fontWeight: 400, fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, fontSize: '0.7rem' }}>
                — {tier.desc}
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {tier.skills.map((skill, skillIdx) => (
                <SkillChip 
                  key={skill} 
                  skill={skill} 
                  accentColor={tier.color}
                  delay={tierIdx * 0.08 + skillIdx * 0.04}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee remains as a nice extra footer for the section */}
      <div style={{ marginTop: '3rem' }}>
        <p className="animate-slide-in-bottom stagger-1" style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-dim)',
          textAlign: 'center',
          marginBottom: '1rem',
        }}>
          + global pantry
        </p>
        <div className="hover-glow transition-all duration-300" style={{
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '0.5rem 0',
          background: 'rgba(255,255,255,0.015)',
        }}>
          <Marquee gradient={false} speed={45} pauseOnHover direction="left">
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="hover-scale"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0 1.2rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                {skillsImage(skill)?.src && (
                  <Image src={skillsImage(skill).src} alt={skill} width={16} height={16} style={{ opacity: 0.7 }} />
                )}
                {skill}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;
