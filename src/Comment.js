import React from 'react';

function Comment({ comment, remove }) {
  
  const handleCommentDelete = () => { //added function use delete button on comment
    remove(comment);
  };

  return (
    <div className="Comment">
      <div>{comment}</div>
      <button onClick={handleCommentDelete}>Delete</button>
    </div>
  );
}

export default Comment;