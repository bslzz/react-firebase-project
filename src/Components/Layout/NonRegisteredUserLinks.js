import React from 'react';
import { NavLink } from 'react-router-dom';

const NonRegisteredUserLinks = () => {
  return (
    <>
      <li>
        <NavLink activeClassName="activeNav" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeNav" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
};

export default NonRegisteredUserLinks;
