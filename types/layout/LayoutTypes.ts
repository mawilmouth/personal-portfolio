
export interface BasicLayoutProps {
  clearNav: boolean;
  headTitle?: string;
  children: React.ReactNode;
}

export interface TopNavProps {
  clearNav: boolean;
  links: NavLinkProps[];
}

export interface NavLinkProps {
  route: string;
  text: string;
}