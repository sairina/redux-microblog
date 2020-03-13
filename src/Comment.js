import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteComment} from './actions';

function Comment({ comment, id, postId }) {
  const dispatch = useDispatch();

  const handleCommentDelete = () => {
    dispatch(deleteComment(id, postId));
  };

  return (
    <div className="Comment">
      <div>{comment}</div>
      <button onClick={handleCommentDelete}>Delete</button>
    </div>
  );
}

export default Comment;