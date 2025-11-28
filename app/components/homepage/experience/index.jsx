"use client";
import { experiences } from "@/utils/data/experience";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '/public/lottie/code.json';
import { useState } from "react";

function Experience() {
  const [showFunFacts, setShowFunFacts] = useState([]);
  
  const toggleFunFact = (id) => {
    setShowFunFacts(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const funFacts = [
    "First job: Made coffee for the team (and occasionally wrote some code)",
    "Once fixed a bug by turning it off and on again",
    "Celebrated when my code worked on the first try (only happened once)",
    "Spent 3 days debugging only to find a missing semicolon",
    "Convinced a client that 'it's not a bug, it's a feature'",
    "Accidentally pushed to production on a Friday (never again)"
  ];

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">experience.log</span>
        </div>
        
        <div className="terminal-body">
          <p className="text-[var(--success-green)]">$ git log --oneline --reverse</p>
          
          {experiences.map((exp, i) => (
            <div key={exp.id} className="commit-message">
              <div className="flex items-center">
                <span className="commit-hash">#{i.toString(16).padStart(6, '0')}</span>
                <span className="commit-date">{exp.duration}</span>
              </div>
              <p className="commit-title">
                <span className="text-[var(--syntax-purple)]">feat:</span> {exp.title} @ {exp.company}
              </p>
              <p className="commit-description">
                {exp.description || "Implemented stuff. Fixed bugs. Drank coffee."}
              </p>
              
              {exp.tech && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {exp.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="skill-pill bg-[var(--success-green)] bg-opacity-20 text-[var(--success-green)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <button 
                onClick={() => toggleFunFact(exp.id)}
                className="mt-2 text-sm text-[var(--warning-yellow)] hover:text-[var(--error-red)] transition-colors"
              >
                {showFunFacts.includes(exp.id) ? "Hide fun fact" : "Reveal fun fact"}
              </button>
              
              {showFunFacts.includes(exp.id) && (
                <div className="mt-1 p-2 bg-[#2a2a2a] rounded text-sm text-[var(--warning-yellow)]">
                  {funFacts[i % funFacts.length]}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-4 p-2 bg-[#2a2a2a] rounded text-sm">
            <p className="text-[var(--success-green)]">$ git status</p>
            <p className="text-white">Currently employed at {experiences[0].company}</p>
            <p className="text-[var(--warning-yellow)]">On the lookout for new challenges!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;