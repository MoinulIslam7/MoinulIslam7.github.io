// @flow strict
import { personalData } from "@/utils/data/personal-data";

const stats = [
  { icon: '☕', label: 'Coffee Consumed', value: '4K+' },
  { icon: '🐛', label: 'Bugs Squashed', value: '∞' },
  { icon: '📦', label: 'Projects Shipped', value: '30+' },
  { icon: '⚡', label: 'Years in the Game', value: '3+' },
];

const achievements = [
  { icon: '🏆', label: 'Bug Squasher Pro' },
  { icon: '☕', label: 'Coffee Adept' },
  { icon: '⚡', label: 'Speed-Runner' },
  { icon: '🧠', label: 'Self-Taught Wizard' },
  { icon: '🌐', label: 'Open to Quests' },
];

function AboutSection() {
  return (
    <section id="about" className="section-aurora section-aurora--about animate-slide-in-bottom" style={{ padding: '5rem 0 4rem', position: 'relative' }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(200,149,108,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div className="section-header animate-fade-up">
        <span className="section-tag animate-pop-in">Chapter 01</span>
        <h2 className="section-title font-heading text-shimmer">📖 Origin Story</h2>
        <div className="section-divider animate-scale-in stagger-2" />
      </div>

      <div className="availability-strip animate-slide-in-top stagger-1">
        <span className="signal-dot" aria-hidden="true" />
        <span className="availability-text">Available for new quests</span>
        <span className="expertise-pill">Full-stack delivery · React / Next / Node</span>
      </div>

      <div
        className="grid gap-10"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}
      >
        {/* Left — Bio quest card */}
        <div
          className="brew-card card-hover-lift animate-slide-in-left hover-glow transition-all duration-300"
          style={{
            padding: '2rem',
            borderLeft: '3px solid var(--latte)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative corner */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: 0, right: 0,
            width: '80px', height: '80px',
            background: 'radial-gradient(circle at top right, rgba(200,149,108,0.12), transparent)',
          }} />

          <div className="quest-badge animate-pop-in" style={{ marginBottom: '1.2rem' }}>
            🎯 Quest: Know the Developer
          </div>

          <p className="text-animate-glow" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--cream)', marginBottom: '1rem' }}>
            Who am I?
          </p>

          <p className="animate-slide-in-top stagger-1" style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.92rem' }}>
            {personalData.description}
          </p>

          {/* Achievement chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            {achievements.map((a, idx) => (
              <span 
                key={a.label} 
                className="brew-badge animate-scale-in hover-scale"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {a.icon} {a.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Stat panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {/* Character card */}
          <div className="brew-card animate-slide-in-right card-hover-lift hover-glow transition-all duration-300" style={{ padding: '1.5rem' }}>
            <p className="section-tag animate-pop-in" style={{ marginBottom: '1rem' }}>📋 Character Sheet</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Class',   value: 'Full Stack Developer' },
                { label: 'Realm',   value: 'Dhaka, Bangladesh' },
                { label: 'Guild',   value: 'Gigalogy' },
                { label: 'Status',  value: '✅ Open to Quests' },
                { label: 'Spec',    value: 'Python / JavaScript / Node / Vue / React' },
              ].map((row, idx) => (
                <div key={row.label} className="animate-slide-in-right hover-scale transition-all duration-300" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', animationDelay: `${idx * 0.05}s` }}>
                  <span style={{ color: 'var(--latte)', fontWeight: 600, minWidth: '80px' }}>{row.label}</span>
                  <span style={{ color: 'var(--text-muted)' }}>→</span>
                  <span style={{ color: 'var(--cream)' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem' }}>
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="brew-card animate-scale-bounce card-hover-lift hover-glow"
                style={{ 
                  padding: '1rem', 
                  textAlign: 'center',
                  animationDelay: `${idx * 0.08}s`,
                }}
              >
                <div className="animate-bounce-gentle text-animate-glow" style={{ fontSize: '1.5rem', marginBottom: '0.3rem', animationDelay: `${idx * 0.08}s` }}>{s.icon}</div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800, fontSize: '1.3rem',
                  color: 'var(--latte)',
                }}>{s.value}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
