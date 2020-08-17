import React from 'react';
import Logo from '../Auth/Logo';
import { NavLink } from 'react-router-dom';
import RegisteredUserLinks from './RegisteredUserLinks';
import NonRegisteredUserLinks from './NonRegisteredUserLinks';

const NavigationBar = ({ uid }) => {
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
            {uid ? (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <RegisteredUserLinks />
              </ul>
            ) : (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <NonRegisteredUserLinks />
              </ul>
            )}
          </div>
        </div>
      </nav>
      {uid ? (
        <ul className="sidenav toggleBar" id="mobile-demo">
          <RegisteredUserLinks />
        </ul>
      ) : (
        <ul className="sidenav toggleBar" id="mobile-demo">
          <NonRegisteredUserLinks />
        </ul>
      )}
    </>
  );
};

export default NavigationBar;
