import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import HeroHeader from '../components/homepage/Header';
import About from '../components/homepage/About';
import Passions from '../components/homepage/Passions';
import HistoryCard from '../components/homepage/History';
import Projects from '../components/homepage/Projects';

import { headerData } from '../staticData/Header';
import { aboutData } from '../staticData/About';
import { passionsData } from '../staticData/Passions';
import { projectsData } from '../staticData/Projects';

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
        <Projects projects={projectsData} />
      </div>
    </BasicLayout>
  )
}

export const getStaticProps = async ()  => ({
  props: {}
});

export default Homepage;