import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import HeroHeader from '../components/homepage/Header';
import About from '../components/homepage/About';
import Passions from '../components/homepage/Passions';
import HistoryCard from '../components/homepage/History';

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
        <HistoryCard />
      </div>
    </BasicLayout>
  )
}

export const getStaticProps = async ()  => ({
  props: {}
});

export default Homepage;