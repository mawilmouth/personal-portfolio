import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import HeroHeader from '../components/homepage/Header';
import About from '../components/homepage/About';
import Passions from '../components/homepage/Passions';

import { headerData } from '../staticData/Header';
import { aboutData } from '../staticData/About';
import { passionsData } from '../staticData/Passions';

const Homepage: React.FC = () => {
  return (
    <BasicLayout clearNav headTitle="Home">
      <div className="homepage-container">
        <HeroHeader
          heading={headerData.heading} 
          subheading={headerData.subheading}
          jumpTo={headerData.jumpTo}
        />
        <About
          portrateImg={aboutData.portrateImg}
          bio={aboutData.bio}
        />
        <Passions passions={passionsData.passions} />
      </div>
    </BasicLayout>
  )
}

export default Homepage;