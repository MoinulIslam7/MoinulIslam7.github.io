// @flow strict
import * as React from 'react';

function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="card flex flex-col justify-between h-full">
      <div>
        <div className="card__border"></div>
        <div className="w-full h-[14rem]">
          <img className="w-full h-full object-cover rounded-lg" src={project.image.src} alt="" />
        </div>
        <div className="card_title__container">
          <span className="card_title">{project.name}</span>
          <p className="card_paragraph">{project.tools}</p>
        </div>
        <hr className="line" />
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
      </div>
      <button className="button mt-4" onClick={() => onViewDetails(project)}>Click for Blow!</button>
    </div>
  );
}

export default ProjectCard;
