import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = {};
// data structure of the store.
// { postId: {
//     body: "body string", 
//     title: "title string", 
//     description: "description string",
//     comments: [
//       {id: commentId, comment: "comment string"}
//      ] 
//    }
// }

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_POST:
      console.log("ADD POST PAYLOAD", action.payload)

      return { ...state, [action.payload.id]: action.payload };

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
        [action.payload.postId]:
        {
          ...state[action.payload.postId],
          comments: [...state[action.payload.postId].comments,
          {
            comment: action.payload.comment,
            id: action.payload.id
          }]
        }
      }

    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postId]:
        {
          ...state[action.payload.postId],
          comments: [...state[action.payload.postId].comments.filter(c => {
            // console.log("C.ID", c)
            // console.log("Action.payload.Id", action.payload)
            return c.id !== action.payload.id
          })]
        }
      }

    default:
      console.warn("Unable to find action type: ", action.type)
      return state;
  }
}

export default rootReducer;