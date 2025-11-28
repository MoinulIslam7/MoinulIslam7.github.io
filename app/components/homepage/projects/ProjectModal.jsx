"use client";
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const [showFunFact, setShowFunFact] = useState(false);
  
  const funFacts = [
    "This project was built in one caffeine-fueled weekend",
    "The original design looked much worse",
    "Contains at least 3 bugs I'm aware of",
    "I learned 5 new technologies while building this",
    "The backend is held together with duct tape",
    "The client changed requirements 12 times"
  ];

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#1a1443] to-[#2c0f4a] rounded-2xl p-6 shadow-xl border border-purple-500 text-white overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-pink-400 transition"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold mb-3 text-purple-300 flex items-center gap-2">
          {project.name}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm">
              <FaExternalLinkAlt className="hover:text-[var(--debug-blue)]" />
            </a>
          )}
        </h2>

        <img
          src={project.image.src}
          alt={project.name}
          className="w-full h-60 object-cover rounded-xl mb-4 border border-purple-600"
        />

        <div className="space-y-3 text-sm text-purple-100">
          <p><strong className="text-purple-400">Role:</strong> {project.role || "Full Stack Developer"}</p>
          
          <p><strong className="text-purple-400">Tech Stack:</strong></p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tools.split(',').map(tool => (
              <span key={tool} className="px-2 py-1 bg-purple-900 bg-opacity-50 rounded text-xs">
                {tool.trim()}
              </span>
            ))}
          </div>
          
          <p className="whitespace-pre-line">
            <strong className="text-purple-400">Description:</strong><br />
            {project.description || "No description provided. Probably because I was too busy coding."}
          </p>
          
          <div className="mt-4">
            <button 
              onClick={() => setShowFunFact(!showFunFact)}
              className="text-xs text-[var(--warning-yellow)] hover:text-[var(--error-red)]"
            >
              {showFunFact ? "Hide fun fact" : "Show fun fact about this project"}
            </button>
            
            {showFunFact && (
              <div className="mt-2 p-2 bg-[#2a2a2a] rounded text-sm">
                {funFacts[Math.floor(Math.random() * funFacts.length)]}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-sm transition flex items-center gap-2"
            >
              Live Demo <FaExternalLinkAlt size={12} />
            </a>
          )}
          
          {project.code && (
            <a 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm transition flex items-center gap-2"
            >
              Source Code <FaGithub size={12} />
            </a>
          )}
        </div>
        
        <div className="mt-4 text-xs text-gray-400 italic">
          Note: Actual results may vary. No developers were harmed in the making of this project.
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;