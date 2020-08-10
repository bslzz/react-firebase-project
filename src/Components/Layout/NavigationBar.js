import React from 'react';
import Logo from '../Auth/Logo';

const NavigationBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper flow-text">
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down flow-text">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
