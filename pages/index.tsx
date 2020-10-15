import React from 'react';
import BasicLayout from '../layout/BasicLayout';

const Homepage: React.FC = () => {
  return (
    <BasicLayout clearNav headTitle="Home">
      <div className="homepage-container">homepage</div>
    </BasicLayout>
  )
}

export default Homepage;