import React from 'react';
import { Redirect } from 'react-router-dom';
import AllPosts from '../Posts/AllPosts';

const Feeds = ({ uid }) => {
  return <>{uid ? <AllPosts /> : <Redirect to="/login" />}</>;
};

export default Feeds;
