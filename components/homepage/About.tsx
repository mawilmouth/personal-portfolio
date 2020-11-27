import React from 'react';
import { connect } from 'react-redux';
import handleViewport from 'react-in-viewport';
import { AboutProps, BioProps } from '../../types/pages/HomepageTypes';
import { addNavSectionListeners, removeNavSectionListeners } from '../../helpers/layout/navHelpers';

const About: React.FC<AboutProps> = (props) => {
  const sectionId: string = 'about';

  React.useEffect(() => {
    addNavSectionListeners(sectionId, props.dispatch);

    return removeNavSectionListeners(sectionId, props.dispatch);
  });

  return (
    <div id={sectionId} className="homepage-about-container">
      <div className="row wrapper">
        <div className="columns">
          <h2 className="about-heading">about me</h2>
          <img
            className="portrate-img"
            src={props.portrateImg}
            alt="Michael Wilmouth portrate"
          />
          <Bio bio={props.bio} />
        </div>
      </div>
    </div>
  );
}

const Bio = handleViewport((props: BioProps) => {
  const { bio, inViewport, forwardedRef } = props;
  const bioClassName: string = inViewport ? ' animate__fadeIn' : '';

  return (
    <div ref={forwardedRef} className="bio-container">
      <p className={`bio animate__animated${bioClassName}`}>{bio}</p>
    </div>
  );
});

export default connect()(About);