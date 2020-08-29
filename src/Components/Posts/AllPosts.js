import React, { useEffect } from 'react';
import PostSummary from './PostSummary';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postAction';

const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts
        ? posts.map((postItem, index) => (
            <PostSummary key={index} postItem={postItem} />
          ))
        : 'Loading....'}
    </>
  );
};

export default AllPosts;
