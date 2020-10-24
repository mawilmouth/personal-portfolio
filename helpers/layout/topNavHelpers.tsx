import { NavLinkProps } from '../../types/layout/LayoutTypes';
import { NavLink } from '../../layout/TopNav';

export function buildNavLinks(links: NavLinkProps[]): React.ReactNode[] {
  return links.map((link, index) => (
    <NavLink
      text={link.text}
      route={link.route}
      key={`nav-link-${index}`}
    />
  ));
}