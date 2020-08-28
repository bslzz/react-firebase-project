// const initialState = {
//   posts: [
//     {
//       title: 'hello',
//       content: 'test',
//     },
//   ],
//   userData: {},
// };

// const rootReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CREATE_NEW_POST':
//       return {
//         ...state,
//         posts: [...state.posts, action.post],
//       };
//     case 'REMOVE_ALL_POSTS':
//       return {
//         ...state,
//         posts: [],
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducers;

import { combineReducers } from 'redux';
import posts from './posts';
import inputs from './inputs';

export default combineReducers({
  posts,
  inputs,
});
