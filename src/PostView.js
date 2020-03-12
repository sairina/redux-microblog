import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useParams, useHistory } from "react-router-dom";

function PostView({ posts, remove, update, setEditing, post, add }) {
  const { postId } = useParams();
  const history = useHistory();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleRemove = () => {
    remove(postId)
    history.push('/');
  };

  return (
    <div>
      {!post ? history.push("/") :
        <div>
          <h2>{post[1].title}</h2>
          <p>{post[1].description}</p>
          <p>{post[1].body}</p>
          <button onClick={handleEdit}>Edit Form</button>
          <button onClick={handleRemove}>Delete</button>
          <h3>Comments</h3>
          <Comment post={post} />
          <CommentForm post={post} add={add} />
        </div>}
    </div>
  );
}

export default PostView;