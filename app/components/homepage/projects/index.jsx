'use client';
import { projectsData } from "@/utils/data/projects-data";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew, MdClose, MdChevronLeft, MdChevronRight, MdCheckCircle, MdArrowForward } from "react-icons/md";

const accents = [
  { bg: 'rgba(22,242,179,0.08)', border: 'rgba(22,242,179,0.3)',  text: 'var(--matcha)', rgb: '22,242,179' },
  { bg: 'rgba(200,149,108,0.1)', border: 'rgba(200,149,108,0.35)', text: 'var(--latte)',  rgb: '200,149,108' },
  { bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.35)',  text: 'var(--gold)',   rgb: '251,191,36' },
  { bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.35)',  text: 'var(--violet)', rgb: '168,85,247' },
];

const toolList = (tools) => typeof tools === 'string'
  ? tools.split(',').map(t => t.trim()).filter(Boolean)
  : (tools || []);

const projectImages = (project) => project.gallery?.length ? project.gallery : (project.image ? [project.image] : []);

const labelStyle = { fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.5rem' };

function Gallery({ images, projectName }) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (step) => setActive(i => (i + step + count) % count);

  useEffect(() => {
    if (count < 2) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setActive(i => (i + 1) % count);
      else if (e.key === 'ArrowLeft') setActive(i => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  const navBtn = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(13,7,0,0.75)', border: '1px solid var(--border-accent)', color: '#f5e6d3', backdropFilter: 'blur(6px)',
  };

  return (
    <div>
      <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: '#000' }}>
        <img src={images[active].src} alt={`${projectName} screenshot`} style={{ width: '100%', display: 'block' }} />
        {count > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="Previous screenshot" style={{ ...navBtn, left: '10px' }}><MdChevronLeft size={24} /></button>
            <button onClick={() => go(1)} aria-label="Next screenshot" style={{ ...navBtn, right: '10px' }}><MdChevronRight size={24} /></button>
          </>
        )}
      </div>
      {count > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.7rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1}`}
              style={{
                flex: '0 0 auto', width: '92px', height: '56px', padding: 0, borderRadius: '6px', overflow: 'hidden',
                border: i === active ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
                opacity: i === active ? 1 : 0.5, transition: 'opacity 0.2s',
              }}
            >
              <img src={img.src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoBlock({ icon, title, children, accent }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1rem 1.1rem' }}>
      <p style={{ ...labelStyle, color: accent.text }}>{icon} {title}</p>
      <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}>{children}</p>
    </div>
  );
}

function ProjectDetails({ project, accent, onClose }) {
  const closeRef = useRef(null);
  const images = projectImages(project);
  const tools = toolList(project.tools);
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(13,7,0,0.92)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
        className="brew-card project-details"
        style={{
          width: '100%', maxWidth: '920px', maxHeight: '92vh',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          background: 'var(--bg-deep)', border: `1px solid ${accent.border}`, transform: 'none',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1rem 1.25rem', display: 'flex', gap: '0.9rem', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{project.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ ...labelStyle, color: accent.text, marginBottom: '0.15rem' }}>{project.category}</p>
            <h3 id="project-details-title" className="font-heading text-lg md:text-xl font-bold text-[#f5e6d3]" style={{ lineHeight: 1.25 }}>{project.name}</h3>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="text-[#9ca3af] hover:text-[#f5e6d3] transition-colors" style={{ flexShrink: 0 }}>
            <MdClose size={26} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-primary)', margin: 0 }}>{project.summary}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
            {project.problem && <InfoBlock icon="💡" title="Why it exists" accent={accent}>{project.problem}</InfoBlock>}
            {project.audience && <InfoBlock icon="👥" title="Who it's for" accent={accent}>{project.audience}</InfoBlock>}
            {project.contribution && <InfoBlock icon="🛠️" title="My part" accent={accent}>{project.contribution}</InfoBlock>}
          </div>

          {images.length > 0 && (
            <div>
              <p style={labelStyle}>Screenshots</p>
              <Gallery images={images} projectName={project.name} />
            </div>
          )}

          {project.shortDescripton?.length > 0 && (
            <div>
              <p style={labelStyle}>What it can do</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem 1.2rem' }}>
                {project.shortDescripton.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.55rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    <MdCheckCircle size={17} style={{ color: accent.text, flexShrink: 0, marginTop: '0.12rem' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tools.length > 0 && (
            <div>
              <p style={labelStyle}>Built with</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {tools.map(tool => (
                  <span key={tool} style={{ fontSize: '0.7rem', fontWeight: 600, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{tool}</span>
                ))}
              </div>
            </div>
          )}

          {project.description && (
            <div>
              <button
                onClick={() => setShowStory(s => !s)}
                aria-expanded={showStory}
                style={{ ...labelStyle, marginBottom: 0, display: 'flex', alignItems: 'center', gap: '0.35rem', color: accent.text }}
              >
                {showStory ? '▾' : '▸'} The full technical story
              </button>
              {showStory && (
                <p className="whitespace-pre-line" style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '0.6rem' }}>{project.description}</p>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {(project.demo || project.url || project.code) && (
          <div style={{ padding: '0.9rem 1.25rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.72rem', padding: '0.6rem 1.3rem' }}><MdOpenInNew size={15} /> Visit live site</a>
            )}
            {(project.url || project.code) && (
              <a href={project.url || project.code} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.72rem', padding: '0.55rem 1.3rem' }}><BsGithub size={15} /> View code</a>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

function ProjectCard({ project, index, accent, onOpen }) {
  const open = () => onOpen(project);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${project.name}: open details`}
      onClick={open}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
      className="artifact-card animate-fade-up"
      style={{ '--accent': accent.rgb, animationDelay: `${index * 0.08}s` }}
    >
      <div className="artifact-media">
        {project.image?.src ? (
          <img src={project.image.src} alt={`${project.name} screenshot`} loading="lazy" />
        ) : (
          <div className="artifact-placeholder" aria-hidden="true">{project.emoji}</div>
        )}
      </div>

      <div className="artifact-body">
        <span className="artifact-category">{project.category}</span>
        <h3 className="artifact-title">{project.name}</h3>
        <p className="artifact-summary">{project.summary}</p>
        <span className="artifact-link">View project <MdArrowForward size={15} /></span>
      </div>
    </article>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="section-aurora section-aurora--projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="section-header animate-fade-up">
        <span className="section-tag animate-pop-in">Chapter 04</span>
        <div className="section-title-wrap">
          <h2 className="section-title font-heading text-shimmer">🗺️ Artifacts</h2>
          <p className="animate-slide-in-top stagger-1" style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.3rem' }}>Things I&apos;ve built. Tap any project to see what it does, who it helps, and screenshots.</p>
        </div>
      </div>

      <div className="artifact-grid">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} accent={accents[i % accents.length]} onOpen={setSelected} />
        ))}
      </div>

      {selected && (
        <ProjectDetails
          project={selected}
          accent={accents[projectsData.indexOf(selected) % accents.length]}
          onClose={close}
        />
      )}
    </section>
  );
}

export default Projects;
