"use client";

import React, { useRef } from 'react';

function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

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
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-3 text-purple-300">{project.name}</h2>

        <img
          src={project.image.src}
          alt={project.name}
          className="w-full h-60 object-cover rounded-xl mb-4 border border-purple-600"
        />

        <div className="space-y-3 text-sm text-purple-100">
          <p><strong className="text-purple-400">Role:</strong> {project.role}</p>
          <p><strong className="text-purple-400">Tools:</strong> {project.tools}</p>
          <p className="whitespace-pre-line"><strong className="text-purple-400">Description:</strong><br />{project.description || "No description provided."}</p>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-sm transition">
              Live Demo
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm transition">
              Source Code
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-full text-sm transition">
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
