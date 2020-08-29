import Firebase from 'firebase';

import { GET_POSTS, CREATE_POST } from './types';

// get all posts
export const getPosts = () => async (dispatch) => {
  const snapshot = await Firebase.firestore().collection('posts').get();
  const result = await snapshot.docs.map((doc) => doc.data());
  dispatch({
    type: GET_POSTS,
    payload: result,
  });
};

// create a post
export const createPost = (post) => async (dispatch) => {
  await Firebase.firestore()
    .collection('posts')
    .add(post)
    .then(() => {
      dispatch({
        type: CREATE_POST,
        payload: post,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
