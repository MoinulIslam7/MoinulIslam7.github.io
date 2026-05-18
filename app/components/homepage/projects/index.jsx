'use client';
import { projectsData } from "@/utils/data/projects-data";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew, MdClose } from "react-icons/md";

const questTiers = ['☕ Main Quest', '⚔️ Main Quest', '🔥 Legendary', '🌟 Epic'];
const tierColors = [
  { bg: 'rgba(22,242,179,0.08)', border: 'rgba(22,242,179,0.25)', text: 'var(--matcha)' },
  { bg: 'rgba(200,149,108,0.1)',  border: 'rgba(200,149,108,0.3)',  text: 'var(--latte)' },
  { bg: 'rgba(251,191,36,0.1)',   border: 'rgba(251,191,36,0.3)',   text: 'var(--gold)' },
  { bg: 'rgba(168,85,247,0.1)',   border: 'rgba(168,85,247,0.3)',   text: 'var(--violet)' },
];

const projectQuips = [
  'Built with love, caffeine, and an OpenAI API key.',
  'Scraped the web so you don\'t have to. You\'re welcome.',
  'Revamped a whole site. They gave me coffee. Fair trade.',
  'Task management for teams that actually communicate.',
];

function GalleryModal({ images, onClose, projectName }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(13,7,0,0.95)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      <div
        className="brew-card"
        style={{
          width: '100%', maxWidth: '900px', maxHeight: '90vh',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          background: 'var(--bg-deep)', border: '1px solid var(--border-accent)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ padding: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
          <h3 className="font-heading text-xl text-[#f5e6d3]">📸 {projectName} Gallery</h3>
          <button onClick={onClose} className="text-[#9ca3af] hover:text-[#f5e6d3] transition-colors">
            <MdClose size={24} />
          </button>
        </div>
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', height: '200px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-4xl">📸</span>
              <span style={{ position: 'absolute', bottom: '10px', fontSize: '0.6rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Dummy Screenshot {i}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
          <p className="text-[0.65rem] text-[#9ca3af] uppercase tracking-widest">☕ More artifact captures brewing...</p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpenGallery }) {
  const [flipped, setFlipped] = useState(false);
  const tier = tierColors[index % tierColors.length];
  const tierLabel = questTiers[index % questTiers.length];
  const tools = typeof project.tools === 'string'
    ? project.tools.split(',').map(t => t.trim()).slice(0, 5)
    : (project.tools || []).slice(0, 5);

  return (
    <div
      style={{ perspective: '1000px', cursor: 'pointer', height: '440px' }}
      onClick={() => setFlipped(!flipped)}
      title="Click to flip"
    >
      <div
        style={{
          position: 'relative', width: '100%', height: '100%',
          transformStyle: 'preserve-3d', transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="brew-card group"
          style={{
            position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '12px', right: '12px', zIndex: 2,
            background: tier.bg, border: `1px solid ${tier.border}`,
            color: tier.text, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em',
            padding: '0.22rem 0.6rem', borderRadius: '4px', backdropFilter: 'blur(8px)',
          }}>
            {tierLabel}
          </div>

          <div style={{
            height: '180px', flexShrink: 0, overflow: 'hidden', background: '#000',
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div className="w-full h-full bg-gradient-to-br from-[#1c0e05] to-[#2a1509] flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110">
              {['🤖', '🕷️', '🌐', '📋'][index % 4]}
            </div>
            <span style={{ position: 'absolute', bottom: '8px', right: '10px', fontSize: '0.55rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>[ Image Placeholder ]</span>
          </div>

          <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 className="font-heading font-bold text-[#f5e6d3] text-lg leading-tight uppercase group-hover:text-[#c8956c] transition-colors">
              {project.name}
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
              {projectQuips[index % projectQuips.length]}
            </p>
            <span className="brew-badge" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>🎭 {project.role || 'Developer'}</span>
            <p style={{ fontSize: '0.6rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>🔄 Click to reveal details</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="brew-card"
          style={{
            position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '0.8rem',
            borderColor: tier.border, boxShadow: `0 0 40px ${tier.bg}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="quest-badge">🏅 QUEST COMPLETE</span>
            <span style={{ fontSize: '0.6rem', color: tier.text, fontWeight: 700 }}>{tierLabel}</span>
          </div>

          <h3 className="font-heading font-bold text-[#f5e6d3] text-lg">{project.name}</h3>

          {project.shortDescripton && (
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.shortDescripton.slice(0, 3).map((desc, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  <span style={{ color: tier.text, flexShrink: 0 }}>›</span> {desc}
                </li>
              ))}
            </ul>
          )}

          <div>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {tools.map(tool => (
                <span key={tool} style={{ fontSize: '0.62rem', fontWeight: 600, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', padding: '0.15rem 0.55rem', borderRadius: '4px' }}>{tool}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {project.url && (
                <a href={project.url} target="_blank" onClick={e => e.stopPropagation()} className="btn-outline" style={{ fontSize: '0.65rem', padding: '0.5rem', flex: 1, justifyContent: 'center' }}><BsGithub size={14} /> Code</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" onClick={e => e.stopPropagation()} className="btn-primary" style={{ fontSize: '0.65rem', padding: '0.5rem', flex: 1, justifyContent: 'center' }}><MdOpenInNew size={14} /> Live</a>
              )}
            </div>
            <button
              onClick={e => { e.stopPropagation(); onOpenGallery(project.name); }}
              className="btn-outline"
              style={{ fontSize: '0.65rem', padding: '0.5rem', width: '100%', justifyContent: 'center', borderColor: 'var(--gold)', color: 'var(--gold)', background: 'rgba(251,191,36,0.05)' }}
            >
              📸 View Gallery
            </button>
          </div>
          <p style={{ fontSize: '0.6rem', color: 'var(--text-dim)', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>🔄 Click to flip back</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [galleryProject, setGalleryProject] = useState(null);

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="section-header">
        <span className="section-tag">Chapter 04</span>
        <h2 className="section-title font-heading">🗺️ Artifacts</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>Click any quest card to reveal lore and view captures</p>
        <div className="section-divider" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpenGallery={(name) => setGalleryProject(name)} />
        ))}
      </div>

      {galleryProject && (
        <GalleryModal
          projectName={galleryProject}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
