import React from 'react';
import Link from 'next/link';
import { ProjectsProps } from '../../types/pages/HomepageTypes';

const Projects: React.FC<ProjectsProps> = (props) => {

  function renderProjects(): React.ReactNode[] {
    return props.projects.map((item, index) => {
      const reverseClass: string = index % 2 != 0 ? ' reverse' : '';

      const tech = item.tech.map((tech, index) => (
        <p className="tech" key={`${item.name}-tech-${index}`}>{tech}</p>
      ));

      let link: React.ReactNode;
      const projectImg: React.ReactNode = <img src={item.img} alt={item.name}/>;

      if (item.location.external) {
        link = (
          <a href={item.location.url} target="_blank" className="project-link">
            {projectImg}
          </a>
        );
      } else {
        link = (
          <Link href={item.location.url}>
            <a>{projectImg}</a>
          </Link>
        );
      }

      return (
        <div key={`project-${++index}`} className={`columns project${reverseClass} small-12`}>
          {link}
          <div className="project-info-container">
            <h3 className="project-name">{item.name}</h3>
            <p className="project-desc">{item.description}</p>
            <div className="tech-container">{tech}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div id="projects" className="homepage-projects-container">
      <div className="row projects-row">
        {renderProjects()}
      </div>
    </div>
  );
}

export default Projects;