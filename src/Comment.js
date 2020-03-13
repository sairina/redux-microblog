import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from './actions';
import Button from 'react-bootstrap/Button';

function Comment({ comment, id, postId }) {
  const dispatch = useDispatch();

  const handleCommentDelete = () => {
    dispatch(deleteComment(id, postId));
  };

  return (
    <div className="Comment">
      <p>{comment}</p>
      <Button variant="danger" onClick={handleCommentDelete}>Delete</Button>
    </div>
  );
}

export default Comment;