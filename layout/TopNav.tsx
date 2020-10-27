import React from 'react';
import Link from 'next/link';
import { TopNavProps, NavLinkProps } from '../types/layout/LayoutTypes';
import { buildNavLinks } from '../helpers/layout/topNavHelpers';
import { slide as Menu } from 'react-burger-menu'

const TopNav: React.FC<TopNavProps> = (props) => {
  const [navActive, setNavActive] = React.useState(false);
  const [clearActive, setClearActive] = React.useState(false);
  const transparentClass: string = props.clearNav && clearActive ? ' transparent' : '';
  const burgerActiveClass: string = navActive ? ' active' : '';
  const navLinks: React.ReactNode [] = buildNavLinks(props.links);

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
  return (
    <div className="link-container">
      <Link href={props.route}>
        <a className="link">{props.text}</a>
      </Link>
    </div>
  );
}

export default TopNav;