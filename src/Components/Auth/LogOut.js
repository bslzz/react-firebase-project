import React from 'react';
import { useHistory } from 'react-router-dom';

const LogOut = ({ uid }) => {
  const history = useHistory();
  return <div>{uid ? <p>Something is wrong </p> : history.push('/login')}</div>;
};

export default LogOut;
