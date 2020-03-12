import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

function PostView({ posts, remove, update, setEditing }) {
  const { postId } = useParams();
  const history = useHistory();


  let post = Object.entries(posts).find(p => postId === p[0])

  const handleEdit = () => {
    setEditing(true);
  };

  function handleRemove() {
    remove(postId)
    history.push('/');
  }

  return (
    <div>
      {!post ? history.push("/") :
        <div>
    <h2>{post[1].title}</h2>
          <p>{post[1].description}</p>
          <p>{post[1].body}</p>
          <button onClick={handleEdit}>Edit Form</button>
          <button onClick={handleRemove}>Delete</button>
        </div>}
    </div>
  );
}

export default PostView;