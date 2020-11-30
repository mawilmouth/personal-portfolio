import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import { BasicLayoutProps } from '../types/layout/LayoutTypes';
import { topNavData } from '../staticData/TopNav';
import { footerData } from '../staticData/Footer';
import HeadContent from './HeadContent';

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { clearNav, children } = props;

  return (
    <React.Fragment>
      <HeadContent {...props.seo}/>
      <div className="layout-container">
        <TopNav clearNav={clearNav} links={topNavData.links} />
        {children}
        <Footer socialMediaLinks={footerData.socialMediaLinks} />
      </div>
    </React.Fragment>
  );
}

export default BasicLayout;