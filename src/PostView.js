import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { useParams, useHistory } from "react-router-dom";
// import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './actions';

function PostView({ setEditing, setPosts, post }) { //update??
  const { postId } = useParams();
  const history = useHistory();
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const { title, description, body, comments } = store[postId];


  console.log('PostView: ', post)
  const handleEdit = () => {
    setEditing(true);
  };

  const handleRemove = () => {
    dispatch(deletePost(postId));
    history.push('/');
  };

  const removeComment = comment => {
    let newCommentsArr = comments.filter(c => c !== comment);
    setPosts(posts => {
      let postCopy = { ...posts };
      postCopy[postId].comments = newCommentsArr;
      return postCopy
    });
  };
  
  return (
    <div>
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{body}</p>
          <button onClick={handleEdit}>Edit Form</button>
          <button onClick={handleRemove}>Delete</button>
        </div>
        <div>
          <h2>Comments</h2>
          {console.log(store)}
          {comments.map(c => <Comment key={c.id} comment={c.comment} id={c.id} remove={removeComment} postId={postId} />)}
          <CommentForm post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostView;