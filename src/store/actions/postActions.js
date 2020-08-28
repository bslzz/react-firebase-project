// import Firebase from 'firebase';

// export const createPost = (post) => {
//   return (dispatch) => {
//     Firebase.firestore()
//       .collection('posts')
//       .add(post)
//       .then(() => {
//         dispatch({ type: 'CREATE_POST_SUCCESSFUL' });
//       })
//       .catch((err) => {
//         dispatch({ type: 'CREATE_POST_ERROR' }, err);
//       });
//   };
// };

import actionTypes from '../actionTypes';
import Firebase from 'firebase';

export default {
  addPost: (post) => ({
    type: actionTypes.ADD_POST,

    post: Firebase.firestore()
      .collection('posts')
      .add({
        title: post.title,
        content: post.content,
      })
      .then(() => {
        console.log('Added posts to DB');
      })
      .catch((err) => console.error({ err: err })),
  }),
};
