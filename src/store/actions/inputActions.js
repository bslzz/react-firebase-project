import actionTypes from '../actionTypes';

export default {
  setInputTitle: (title) => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),

  setInputContent: (content) => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  }),
};
