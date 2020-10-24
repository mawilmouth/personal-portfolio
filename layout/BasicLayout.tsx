import React from 'react';
import Head from 'next/head';
import TopNav from './TopNav';
import Footer from './Footer';
import { BasicLayoutProps } from '../types/layout/LayoutTypes';
import { topNavData } from '../staticData/TopNav';
import { footerData } from '../staticData/Footer';

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { clearNav, headTitle, children } = props;
  const title: string = headTitle ? ` | ${headTitle}` : '';

  return (
    <React.Fragment>
      <Head>
        <title>Wilmouth Works{title}</title>
      </Head>
      <div className="layout-container">
        <TopNav clearNav={clearNav} links={topNavData.links} />
        {children}
        <Footer socialMediaLinks={footerData.socialMediaLinks} />
      </div>
    </React.Fragment>
  );
}

export default BasicLayout;