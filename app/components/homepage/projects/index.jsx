"use client";
import { projectsData } from "@/utils/data/projects-data";
import { useState } from "react";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNodeModules, setShowNodeModules] = useState(false);
  
  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tools.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const randomSize = (Math.random() * 5 + 2).toFixed(1);
  
  return (
    <div id="projects" className="my-12 lg:my-24">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="terminal-title">projects.sh</span>
        </div>
        
        <div className="terminal-body">
          <div className="mb-4">
            <p className="text-[var(--success-green)]">$ find ./projects -name "*{searchTerm || ''}*"</p>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-[#464c6a] rounded px-3 py-1 mt-1 text-white"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-folder group">
                <div className="folder-icon">
                  <span className="folder-tab"></span>
                  <div className="folder-content">
                    {project.tools.split(',').slice(0, 4).map(tech => (
                      <span key={tech} className="file"></span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-[var(--syntax-purple)] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm text-gray-300 text-center mb-4">
                  {project.shortDescripton[0]}
                </p>
                
                <div className="flex justify-center gap-3">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="demo-link text-sm bg-[var(--debug-blue)] hover:bg-[var(--debug-blue)] text-white px-3 py-1 rounded transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      npm run start
                    </a>
                  )}
                  
                  {project.code && (
                    <a 
                      href={project.code} 
                      className="code-link text-sm bg-[var(--syntax-purple)] hover:bg-[var(--syntax-purple)] text-white px-3 py-1 rounded transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      view-source
                    </a>
                  )}
                </div>
                
                <div className="mt-3 text-xs text-center text-gray-400">
                  {project.tools.split(',').slice(0, 3).join(' • ')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button 
              onClick={() => setShowNodeModules(!showNodeModules)}
              className="text-[var(--warning-yellow)] hover:text-[var(--error-red)] transition-colors text-sm"
            >
              {showNodeModules ? "Hide node_modules" : "Show node_modules (warning: large)"}
            </button>
            
            {showNodeModules && (
              <div className="node-modules-size mt-2">
                <p className="text-[var(--error-red)]">Warning: This folder is {randomSize}TB</p>
                <p className="text-sm text-gray-400 mt-1">
                  Contains: 42,000 dependencies, 3 actual project files
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-6 p-3 bg-[#2a2a2a] rounded text-sm">
            <p className="text-[var(--success-green)]">$ npm run stats</p>
            <p className="text-white">
              Total projects: {projectsData.length} | 
              Displayed: {filteredProjects.length} | 
              Hidden: {projectsData.length - filteredProjects.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;