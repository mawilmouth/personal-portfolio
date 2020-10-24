import React from 'react';
import Link from 'next/link'
import { FooterProps, SocialMediaLinkProps } from '../types/layout/LayoutTypes';
import { buildFooterLinks } from '../helpers/layout/footerHelpers';

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer-container">
      <div className="row footer-row">
        <div className="columns small-12 links-container">
          {buildFooterLinks(props.socialMediaLinks)}
        </div>
        <div className="columns small-12 logo-container">
          <Link href="/">
            <a>
              <img className="logo" alt="Wilmouth Works" src="/images/ww-logo-white.png"/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = (props) => {
  if (!props.icon) return null;
  return (
    <div className="social-media-link">
      <a href={props.href} target="_blank" className="link">
        {props.icon}
      </a>
    </div>
  );
};

export default Footer;