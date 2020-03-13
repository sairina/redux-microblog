import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPostFromAPI } from './actions';

function SinglePost() {
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const post = useSelector(st => st[postId]);

  useEffect(() => {
    async function getPost() {
      dispatch(getPostFromAPI(postId))
    }
    getPost();
  }, [dispatch, postId]);

  return (
    <div className="SinglePost">
      {post
        ? editing
          ? <PostForm post={post} postId={postId} editing={editing} setEditing={setEditing} />
          : <PostView setEditing={setEditing} />
        : <Redirect to='/' />}
    </div>
  );
}

export default SinglePost;
