// @flow strict
import * as React from 'react';

function ProjectCard({ project }) {
  console.log(project);
  return (
    <div class="card">
      <div class="card__border"></div>
      <div className="w-full h-[14rem]"><img className="w-full h-full rounded-lg" src={project.image.src} alt="" /></div>
      <div class="card_title__container">
        <span class="card_title">{project.name}</span>
        <p class="card_paragraph">
          {project.tools}
        </p>
      </div>
      <hr class="line" />
      <ul class="card__list">
        {
          project.shortDescripton.map((tool) => (
            <li class="card__list_item">
              <span class="check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="check_svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span class="list_text">{tool}</span>
            </li>
          ))
        }
      </ul>
      <button class="button">Click for Blow!</button>
    </div>

  );
};

export default ProjectCard;