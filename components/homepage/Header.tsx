import React from 'react';
import { ChevronIcon } from '../../modules/Icons';
import { HeroHeaderProps } from '../../types/pages/HomepageTypes';

const HeroHeader: React.FC<HeroHeaderProps> = (props) => {
  return (
    <div className="homepage-header-container">
      <img className="header-img" src="/images/city-header.jpg" />
      <div className="heading-container">
        <h1 className="heading">{props.heading}</h1>
        <h2 className="subheading">{props.subheading}</h2>
      </div>
      <div className="down-icon-container">
        <ChevronIcon className="icon" />
      </div>
    </div>
  );
}

export default HeroHeader;