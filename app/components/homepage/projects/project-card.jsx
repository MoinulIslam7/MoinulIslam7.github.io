"use client";
import { useState } from 'react';
import imageD from '../../../../public/png/placeholder.png';

function ProjectCard({ project, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  
  const warnings = [
    "Warning: May contain bugs",
    "Experimental technology",
    "Works on my machine",
    "Not tested in production",
    "Documentation missing",
    "Needs refactoring"
  ];

  return (
    <div 
      className="card flex flex-col justify-between h-full relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card__border"></div>
      
      <div className="w-full h-[9rem] relative overflow-hidden">
        <img 
          className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} 
          src={project?.image?.src || imageD} 
          alt={project.name}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button 
              onClick={() => {
                onViewDetails(project);
                setShowWarning(true);
              }}
              className="bg-[var(--syntax-purple)] text-white px-4 py-2 rounded-full hover:bg-[var(--debug-blue)] transition-colors"
            >
              View Details
            </button>
          </div>
        )}
      </div>
      
      <div className="card_title__container mt-4">
        <span className="card_title text-lg font-bold">{project.name}</span>
        <p className="card_paragraph text-sm text-gray-400">{project.tools}</p>
      </div>
      
      <hr className="line my-2" />
      
      <ul className="card__list">
        {project.shortDescripton.map((tool, index) => (
          <li key={index} className="card__list_item">
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
      
      <button 
        className="button mt-4 hover:bg-[var(--debug-blue)] transition-colors"
        onClick={() => {
          onViewDetails(project);
          setShowWarning(true);
        }}
      >
        Click for Blow!
      </button>
      
      {showWarning && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-[var(--terminal-bg)] p-4 rounded-lg border border-[var(--error-red)] max-w-xs">
            <p className="text-[var(--error-red)] font-bold mb-2">Warning:</p>
            <p className="text-sm mb-3">
              {warnings[Math.floor(Math.random() * warnings.length)]}
            </p>
            <div className="flex justify-between">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWarning(false);
                }}
                className="text-sm px-3 py-1 bg-[var(--terminal-header)] rounded"
              >
                Proceed Anyway
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWarning(false);
                }}
                className="text-sm px-3 py-1 bg-[var(--error-red)] rounded"
              >
                Abort
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;