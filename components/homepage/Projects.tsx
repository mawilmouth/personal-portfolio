import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { PlayIcon, CloseIcon } from '../../modules/Icons';
import { addNavSectionListeners, removeNavSectionListeners } from '../../helpers/layout/navHelpers';
import { ProjectsProps, ProjectType, ProjectProps } from '../../types/pages/HomepageTypes';

const Projects: React.FC<ProjectsProps> = (props) => {
  const sectionId: string = 'projects';

  React.useEffect(() => {
    addNavSectionListeners(sectionId, props.dispatch);

    return removeNavSectionListeners(sectionId, props.dispatch);
  });

  function renderProjects(): React.ReactNode[] {
    return props.projects.map((item, index) => (
      <Project key={`project-${index + 1}`} project={item} index={index} />
    ));
  }

  return (
    <div id={sectionId} className="homepage-projects-container">
      <div className="row projects-row">
        {renderProjects()}
      </div>
    </div>
  );
}

const Project: React.FC<ProjectProps> = (props) => {
  const {project, index} = props;
  const [modalOpen, setModalOpen] = React.useState(false);
  const reverseClass: string = index % 2 != 0 ? ' reverse' : '';

  function renderPreview(): React.ReactNode {
    const { location, embed, img, name } = project;
    if (!location && !embed) return null;

    const projectImg: React.ReactNode = <img src={img} alt={name}/>;

    if (location) {
      if (location.external) {
         return (
          <a href={location.url} target="_blank" className="project-link">
            {projectImg}
          </a>
        );
      } else {
        return (
          <Link href={location.url}>
            <a>{projectImg}</a>
          </Link>
        );
      }
    } else if (embed) {
      return (
        <div className="project-link" onClick={() => setModalOpen(true)}>
          <div className="wrapper">
            {projectImg}
            <div className="play-icon-container">
              <PlayIcon className="play-icon" />
            </div>
          </div>
        </div>
      );
    }
  }

  function renderModal(): React.ReactNode {
    if (!project.embed) return null;

    function closeModal(): void {
      setModalOpen(false);
    }

    const modalOptions = {
      src: project.embed.url,
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true
    };

    return (
      <Modal isOpen={modalOpen}  onRequestClose={closeModal} className="project-modal">
        <div className="modal-container">
          <div className="modal-content-wrapper">
            <div className="video-wrapper">
              <iframe {...modalOptions} />
            </div>
          </div>
          <div className="modal-close" onClick={closeModal}>
            <CloseIcon className="close-icon" />
          </div>
        </div>
      </Modal>
    );
  }

  const tech = project.tech.map((tech, index) => (
    <p className="tech" key={`${project.name}-tech-${index}`}>{tech}</p>
  ));

  return (
    <div className={`columns project${reverseClass} small-12`}>
      {renderPreview()}
      <div className="project-info-container">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="tech-container">{tech}</div>
      </div>
      {renderModal()}
    </div>
  );
}

export default connect()(Projects);