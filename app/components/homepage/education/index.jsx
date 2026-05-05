// @flow strict
import { educations } from "@/utils/data/educations";

const scrollIcons = ['🎓', '📚', '✏️'];

function Education() {
  return (
    <section id="education" className="animate-slide-in-bottom" style={{ padding: '5rem 0', position: 'relative' }}>
      {/* Ambient */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-40px', bottom: '10%',
        width: '280px', height: '280px',
        background: 'radial-gradient(circle, rgba(22,242,179,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-header animate-fade-up">
        <span className="section-tag animate-pop-in">Chapter 05</span>
        <h2 className="section-title font-heading text-shimmer">📜 Lore Scrolls</h2>
        <p className="animate-slide-in-top stagger-1" style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>
          The Academic Arc — formal training before going feral in the industry
        </p>
        <div className="section-divider animate-scale-in stagger-2" />
      </div>

      <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {educations.map((edu, i) => (
          <div
            key={edu.id}
            className="brew-card card-hover-lift animate-scale-in hover-glow transition-all duration-300"
            style={{
              padding: '1.5rem 1.8rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.2rem',
              position: 'relative',
              overflow: 'hidden',
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {/* Decorative icon */}
            <div className="animate-pop-in hover-scale" style={{
              width: '44px', height: '44px', flexShrink: 0,
              background: 'rgba(200,149,108,0.1)',
              border: '1px solid rgba(200,149,108,0.2)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem',
              cursor: 'pointer',
              animationDelay: `${i * 0.1 + 0.05}s`,
            }}>
              {scrollIcons[i % scrollIcons.length]}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                <span className="text-animate-glow" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: '0.95rem',
                  color: 'var(--cream)', lineHeight: 1.3,
                }}>
                  {edu.title}
                </span>
                <span className="animate-slide-in-right" style={{
                  fontSize: '0.65rem', fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: 'var(--matcha)',
                  background: 'rgba(22,242,179,0.08)',
                  border: '1px solid rgba(22,242,179,0.2)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.06em',
                  animationDelay: `${i * 0.1 + 0.1}s`,
                }}>
                  v{edu.duration.replace(' - ', '–')}
                </span>
              </div>

              <p className="hover-scale transition-all duration-300" style={{ color: 'var(--latte)', fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer' }}>
                {edu.institution}
              </p>

              {i === 0 && (
                <p className="animate-slide-in-bottom stagger-1" style={{ color: 'var(--text-dim)', fontSize: '0.72rem', fontStyle: 'italic', marginTop: '0.4rem', animationDelay: `${i * 0.1 + 0.15}s` }}>
                  ☕ This is where semesters were survived on bad cafeteria coffee and GitHub commits.
                </p>
              )}
            </div>

            {/* Corner flair */}
            <div aria-hidden style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '80px', height: '80px',
              background: 'radial-gradient(circle at bottom right, rgba(200,149,108,0.06), transparent)',
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
