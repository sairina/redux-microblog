import { ADD_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    payload: post
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}

  export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}
  export function deleteComment(id, postId) {
  return {
    type: DELETE_COMMENT,
    payload: {id, postId}
  }
}



