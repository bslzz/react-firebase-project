import { GET_POST, CREATE_POST, GET_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case CREATE_POST:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };

    default:
      return state;
  }
};
