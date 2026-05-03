// @flow strict
import * as React from 'react';

function ProjectCard({ project, onViewDetails, delay = 0 }) {
  return (
    <div 
      className="card flex flex-col justify-between h-full card-hover-lift animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div>
        <div className="card__border"></div>
        <div className="w-full h-[9rem] overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
          <img 
            className="w-full h-full object-cover rounded-lg" 
            src={project.image.src} 
            alt={project.name}
          />
        </div>
        <div className="card_title__container mt-4">
          <span className="card_title text-animate-glow">{project.name}</span>
          <p className="card_paragraph">{project.tools}</p>
        </div>
        <hr className="line" />
        <ul className="card__list">
          {project.shortDescripton.map((tool, index) => (
            <li key={index} className="card__list_item animate-slide-in-left" style={{ animationDelay: `${index * 0.05}s` }}>
              <span className="check">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="list_text">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
      <button 
        className="button mt-4 btn-hover-glow transition-all duration-300 hover:scale-105" 
        onClick={() => onViewDetails(project)}
      >
        Click for Blow!
      </button>
    </div>
  );
}

export default ProjectCard;
