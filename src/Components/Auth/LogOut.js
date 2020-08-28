import React from 'react';

const LogOut = ({ uid }) => {
  return (
    <div>
      {uid ? <p>Something is wrong </p> : <p>You have been logged out</p>}
    </div>
  );
};

export default LogOut;
