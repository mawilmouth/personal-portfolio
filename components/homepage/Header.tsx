import React from 'react';
import Link from 'next/link';
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
        <Link href={`#${props.jumpTo}`}>
          <a>
            <ChevronIcon className="icon" /> 
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HeroHeader;