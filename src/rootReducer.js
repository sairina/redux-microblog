import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = {};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_POST:
      // console.log(action.payload)
      return { ...state, [action.payload.id]: action.payload };;

    case UPDATE_POST:
      return {
        ...state, [action.payload.id]: {
          ...action.payload,
          comments: state[action.payload.id].comments
        }
      };

    case DELETE_POST:
      let stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;

    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.id]:
        {
          ...state[action.payload.id],
          comments: [...state[action.payload.id].comments, action.payload.formData]
        }
      }

    case DELETE_COMMENT:
      console.log('payload id', action.payload.id)
      console.log('payload postid', action.payload.postId)
      console.log('state comments', state[action.payload.postId].comments)
      return {
        ...state,
        [action.payload.postId]:
        {
          ...state[action.payload.postId],
          comments: [...state[action.payload.postId].comments.filter(c => c.id !== action.payload.id)]
        }
      }

    default:
      console.warn("Unable to find action type: ", action.type)
      return state;
  }
}

export default rootReducer;