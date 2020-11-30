import { Dispatch } from "redux";

// Basic Layout
export interface BasicLayoutProps {
  clearNav: boolean;
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}


// Head Content
export interface HeadContentProps {
  title: string;
  description: string;
  keywords: string[];
  children?: React.ReactNode;
}


// TopNav
export interface TopNavProps {
  clearNav: boolean;
  links: NavLinkProps[];
  activeSection: string;
  dispatch: Dispatch;
}

export interface NavLinkProps {
  active: string;
  route: string;
  text: string;
  external?: boolean;
  dispatch: Dispatch;
}


// Footer
export interface FooterProps {
  socialMediaLinks: SocialMediaLinkProps[];
}

export interface SocialMediaLinkProps {
  href: string;
  gitHub?: boolean;
  linkedIn?: boolean;
  resume?: boolean;
  icon?: React.ReactNode;
}