import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import HeroHeader from '../components/homepage/Header';

import { headerData } from '../staticData/Header';

const Homepage: React.FC = () => {
  return (
    <BasicLayout clearNav headTitle="Home">
      <div className="homepage-container">
        <HeroHeader
          heading={headerData.heading} 
          subheading={headerData.subheading}
        />
      </div>
    </BasicLayout>
  )
}

export default Homepage;