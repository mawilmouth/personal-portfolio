import React from 'react';
import Head from 'next/head';
import { defaultSeo } from '../staticData/Seo';
import { HeadContentProps } from '../types/layout/LayoutTypes';

const HeadContent: React.FC<HeadContentProps> = (props) => {
  const { title, description, keywords, children } = props;

  const seoTitle: string = `Wilmouth Works | ${title || defaultSeo.title}`;
  const seoDesc: string = description || defaultSeo.description;
  const seoKeywords: string = keywords?.length ? keywords.join(', ') : defaultSeo.keywords.join(', ');

  return (
    <Head>
      <title>{seoTitle}</title>

      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />

      <meta name="og:title" content={seoTitle} />
      <meta name="og:description" content={seoDesc} />
      <meta name="og:url" content="https://wilmouthworks.herokuapp.com" />
      <meta name="og:type" content="website" />
      <meta name="og:image" content="/images/ww-logo-black.png" />

      <meta name="robots" content="index, follow" />
      <link rel = "icon" href="/images/code-white.png" type="image/x-icon" /> 

      {children}
    </Head>
  );
}

export default HeadContent;