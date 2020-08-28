import React from 'react';
import { NavLink } from 'react-router-dom';
import Firebase from 'firebase';

const RegisteredUserLinks = () => {
  const onLogOut = () => {
    Firebase.auth()
      .signOut()
      .then((resp) => {
        console.log('User has been logged out');
      })
      .catch((err) => {
        console.log('Some error has occurred while logging out', err);
      });
  };

  return (
    <>
      <li>
        <NavLink activeClassName="activeNav" to="/create">
          Create New Post
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onLogOut} to="/logout">
          Logout
        </NavLink>
      </li>
    </>
  );
};

export default RegisteredUserLinks;
