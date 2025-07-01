"use client";

import React, { useState } from 'react';
import ProjectCard from './project-card';
import { projectsData } from '@/utils/data/projects-data';
import Modal from './ProjectModal';

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} onViewDetails={setSelectedProject} />
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default ProjectsGrid;
