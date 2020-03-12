import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';

function PostView({ posts, remove, update, setEditing, setPosts, post, add }) {
  const { postId } = useParams();
  const history = useHistory();
  const commentsArr = post[1].comments;

  const handleEdit = () => {
    setEditing(true);
  };

  const handleRemove = () => {
    remove(postId)
    history.push('/');
  };

  const removeComment = comment => {
    let newCommentsArr = commentsArr.filter(c => c !== comment);
    setPosts(posts => {
      let postCopy = { ...posts };
      postCopy[postId].comments = newCommentsArr;
      return postCopy
    });
  };

  return (
    <div>
      {!post ? history.push("/") :
        <div>
          <div>
            <h2>{post[1].title}</h2>
            <p>{post[1].description}</p>
            <p>{post[1].body}</p>
            <button onClick={handleEdit}>Edit Form</button>
            <button onClick={handleRemove}>Delete</button>
          </div>
          <div>
            <h2>Comments</h2>
            {commentsArr.map(c => <Comment key={uuid()} comment={c} remove={removeComment} />)}
            <CommentForm post={post} add={add} />
          </div>
        </div>}
    </div>
  );
}

export default PostView;