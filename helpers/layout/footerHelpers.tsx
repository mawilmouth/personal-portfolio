import React from 'react';
import { SocialMediaLinkProps } from '../../types/layout/LayoutTypes';
import { SocialMediaLink } from '../../layout/Footer';
import {
  LinkedInIcon,
  GitHubIcon,
  PDFIcon
} from '../../modules/Icons';

export function buildFooterLinks(links: SocialMediaLinkProps[]): React.ReactNode[] {
  return links.map((link, index) => {
    let icon: React.ReactNode =
      link.gitHub ? <GitHubIcon className="icon" /> :
      link.linkedIn ? <LinkedInIcon className="icon" /> :
      link.resume ? <PDFIcon className="icon" /> : null;


    return (
      <SocialMediaLink
        key={`footer-icon-${index}`}
        href={link.href}
        icon={icon}
      />
    );
  });
}