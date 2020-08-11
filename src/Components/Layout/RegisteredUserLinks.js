import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisteredUserLinks = () => {
  return (
    <li>
      <NavLink activeClassName="activeNav" to="/logout">
        Logout
      </NavLink>
    </li>
  );
};

export default RegisteredUserLinks;
