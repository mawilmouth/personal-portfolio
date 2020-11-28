import { NavState } from "../state/reducers/NavReducerTypes";
import { Dispatch } from "redux";

// Basic Layout
export interface BasicLayoutProps {
  clearNav: boolean;
  headTitle?: string;
  children: React.ReactNode;
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