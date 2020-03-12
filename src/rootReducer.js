import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = {};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      // console.log(action.payload)
      return { ...state, [action.payload.id]: action.payload };;
    case UPDATE_POST:
      console.log('action payload', action.payload)
      console.log('action payload id', action.payload.id)
      return {
        ...state, [action.payload.id]: {
          ...action.payload,
          comments: state[action.payload.id].comments
        }
      };
    // case DELETE_POST:
    //   return;
    // case ADD_COMMENT:
    //   return;
    // case DELETE_COMMENT:
    //   return;
    default:
      console.warn("Unable to find action type: ", action.type)
      return state;


  }
}

export default rootReducer;