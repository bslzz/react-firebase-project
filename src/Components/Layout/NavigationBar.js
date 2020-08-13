import React from 'react';
import Logo from '../Auth/Logo';
import { NavLink } from 'react-router-dom';
import RegisteredUserLinks from './RegisteredUserLinks';
import NonRegisteredUserLinks from './NonRegisteredUserLinks';

const NavigationBar = () => {
  const M = window.M;
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  });

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-wrapper flow-text">
            <NavLink
              to="/"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </NavLink>
            <Logo />

            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down flow-text"
            >
              <NonRegisteredUserLinks />
              <RegisteredUserLinks />
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav toggleBar" id="mobile-demo">
        <NonRegisteredUserLinks />
        <RegisteredUserLinks />
      </ul>
    </>
  );
};

export default NavigationBar;
