import React from 'react';
import handleViewport from 'react-in-viewport';
import { AboutProps, BioProps } from '../../types/pages/HomepageTypes';

const About: React.FC<AboutProps> = (props) => {
  return (
    <div id="about" className="homepage-about-container">
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

export default About;