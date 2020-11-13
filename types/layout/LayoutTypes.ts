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
}

export interface NavLinkProps {
  route: string;
  text: string;
  external?: boolean;
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