import React from 'react';

function Comment({ comment }) {
  return (
    <div className="Comment">
      <div>{comment}</div>
    </div>
  );
}

export default Comment;