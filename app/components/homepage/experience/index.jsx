// @flow strict
import { experiences } from "@/utils/data/experience";

const arcLabels = ['Arc I', 'Arc II', 'Arc III', 'Arc IV', 'Arc V'];

function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Ambient */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-60px', top: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div className="section-header">
        <span className="section-tag">Chapter 02</span>
        <h2 className="section-title font-heading">⚔️ Battle Record</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
          The Grind Log — every arc that shaped the developer
        </p>
        <div className="section-divider" />
      </div>

      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div className="timeline-track">
          {experiences.map((exp, i) => {
            const isCurrent = exp.duration.toLowerCase().includes('present');
            return (
              <div key={exp.id} className="timeline-item">
                <div
                  className="brew-card"
                  style={{
                    padding: '1.5rem',
                    marginLeft: '0.5rem',
                    borderLeft: isCurrent ? '3px solid var(--matcha)' : '1px solid var(--border-subtle)',
                    background: isCurrent ? 'rgba(22,242,179,0.03)' : 'var(--bg-card)',
                    position: 'relative',
                  }}
                >
                  {/* Arc label & highlight */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span className="level-chip" style={{ fontSize: '0.6rem' }}>
                        {arcLabels[experiences.length - 1 - i] || `Arc ${experiences.length - i}`}
                      </span>
                      {isCurrent && (
                        <span className="quest-badge" style={{ background: 'rgba(22,242,179,0.1)', color: 'var(--matcha)', borderColor: 'rgba(22,242,179,0.3)', fontSize: '0.55rem' }}>
                          ⚡ CURRENT QUEST
                        </span>
                      )}
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: isCurrent ? 'var(--matcha)' : 'var(--text-dim)',
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: isCurrent ? 'rgba(22,242,179,0.08)' : 'rgba(200,149,108,0.05)',
                      border: isCurrent ? '1px solid rgba(22,242,179,0.2)' : '1px solid rgba(200,149,108,0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                    }}>
                      {exp.duration}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--cream)',
                    marginBottom: '0.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}>
                    {exp.title}
                  </p>

                  <p style={{ color: 'var(--latte)', fontWeight: 600, fontSize: '0.88rem' }}>
                    @ {exp.company}
                  </p>

                  {/* Coffee-flavored quip per role */}
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginTop: '0.6rem', fontStyle: 'italic', lineHeight: 1.4 }}>
                    {exp.id === 1 && '🚀 Current arc. Brewing enterprise-grade solutions and architecting the future.'}
                    {exp.id === 2 && '🔧 Levelled up to Developer. Optimized the battlefield for high-performance deployments.'}
                    {exp.id === 3 && '⚡ Junior arc. Successfully transitioned from learning to executing mission-critical features.'}
                    {exp.id === 4 && '☕ The Origin. Where the journey began — intern-grade coffee, senior-grade hustle.'}
                  </p>

                  {/* Highlight marker Dot */}
                  <div style={{
                    position: 'absolute', left: '-13px', top: '24px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: isCurrent ? 'var(--matcha)' : 'var(--latte)',
                    border: '3px solid var(--bg-deep)',
                    boxShadow: isCurrent ? '0 0 10px var(--matcha)' : 'none',
                    zIndex: 2,
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;