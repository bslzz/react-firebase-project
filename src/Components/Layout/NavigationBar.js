import React from 'react';
import Logo from '../Auth/Logo';
import RegisteredUserLinks from './RegisteredUserLinks';
import NonRegisteredUserLinks from './NonRegisteredUserLinks';

const NavigationBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper flow-text">
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down flow-text">
            <NonRegisteredUserLinks />
            <RegisteredUserLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
