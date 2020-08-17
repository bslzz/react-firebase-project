import React from 'react';
import { NavLink } from 'react-router-dom';
import Firebase from 'firebase';

const RegisteredUserLinks = () => {
  const onLogOut = () => {
    Firebase.auth()
      .signOut()
      .then(
        function () {
          console.log('Signed Out');
        },
        function (error) {
          console.log('Sign Out Error', error);
        }
      );
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
