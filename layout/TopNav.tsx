import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu'
import { ApplicationState } from '../types/state/StoreTypes';
import { setNavActiveLink } from '../state/actions/navActions';
import { TopNavProps, NavLinkProps } from '../types/layout/LayoutTypes';

const TopNav: React.FC<TopNavProps> = (props) => {
  const [navActive, setNavActive] = React.useState(false);
  const [clearActive, setClearActive] = React.useState(false);
  const transparentClass: string = props.clearNav && clearActive ? ' transparent' : '';
  const burgerActiveClass: string = navActive ? ' active' : '';

  const menuOptions = {
    left: true,
    pageWrapId: 'contentWrapper',
    outerContainer: 'layoutContainer',
    customBurgerIcon: false,
    customCrossIcon: false,
    className: navActive ? 'active' : '',
    width: '300px',
    isOpen: navActive,
    onClose: () => setNavActive(!navActive)
  };

  function renderNavLinks(): React.ReactNode[] {
    return props.links.map((link, index) => (
      <NavLink
        text={link.text}
        route={link.route}
        external={link.external}
        key={`nav-link-${index}`}
        active={props.activeSection}
        dispatch={props.dispatch}
      />
    ));
  }

  function handleBurgerClick(): void {
    setNavActive(!navActive);
  }

  function handleClearNav(): void {
    const pos: number = window.pageYOffset;
    if (pos < 150 && !navActive) {
      setClearActive(true);
    } else {
      setClearActive(false);
    }
  }

  React.useEffect(() => {
    handleClearNav();
    document.addEventListener('scroll', handleClearNav);

    return () => {
      document.removeEventListener('scroll', handleClearNav);
    };
  });

  const navLinks: React.ReactNode[] = renderNavLinks();
  
  return (
    <React.Fragment>
      <div className={`nav-container${transparentClass}`}>
        <div className="row">
          <div className="burger-container">
            <div className={`burger${burgerActiveClass}`} onClick={handleBurgerClick} >
              <div className="layer"></div>
              <div className="layer"></div>
              <div className="layer"></div>
            </div>
          </div>
          <div className="columns logo-container">
            <Link href="/">
              <a>
                <img className="logo" alt="Wilmouth Works" src="/images/ww-logo-white.png"/>
              </a>
            </Link>
          </div>
          <div className="columns links-container">
            {navLinks}
          </div>
        </div>
      </div>
      <Menu {...menuOptions}>
        <div className="responsive-menu" tabIndex={-1}>
          {navLinks}
        </div>
      </Menu>
    </React.Fragment>
  );
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { active, route, text, external, dispatch } = props;

  function handleClick(e): void {
    e.preventDefault();
    const sectionId: string = route.replace('#', '');
    const section: HTMLElement = document.getElementById(sectionId);
    const topYCords: number = section.offsetTop;
    const screenMid: number = window.innerHeight / 2 - 100;
    window.scrollTo(0, topYCords - screenMid);
    dispatch(setNavActiveLink(sectionId));
  }

  const linkClass: string = `#${active}` === route ? ' active' : '';
  let link: React.ReactNode = (
    <a className="link" href={route} target="_blank" onClick={handleClick}>{text}</a>
  );

  if (!external) {
    link = (
      <Link href={route}>
        <a className={`link${linkClass}`} onClick={handleClick}>{text}</a>
      </Link>
    );
  }

  return (
    <div className="link-container">{link}</div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  activeSection: state.nav.active
});

export default connect(mapStateToProps)(TopNav);