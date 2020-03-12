import { ADD_POST } from './actionTypes';

const INITIAL_STATE = { };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      console.log(action.payload)
      return { ...state, [action.payload.id]: action.payload}
      
    default:
      console.warn("Unable to find action type: ", action.type)
      return state;


  }
}

  export default rootReducer;