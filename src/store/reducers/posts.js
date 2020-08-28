import actionTypes from '../actionTypes';

const initialState = {
  posts: [],
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    //   const posts = [...state.posts];
    //   posts.push(action.post);
    //   return {
    //     posts,
    //   };
    // }
    case actionTypes.UPDATE_POST: {
      const { index, post } = action;
      const posts = [...state.posts];
      posts[index] = post;
      return {
        posts,
      };
    }
    case actionTypes.DELETE_POST: {
      const { index } = action;
      const posts = [];
      state.posts.forEach((post, i) => {
        if (index !== i) {
          posts.push(post);
        }
      });
      return {
        posts,
      };
    }
    default:
      return state;
  }
};
