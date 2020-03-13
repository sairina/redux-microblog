import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SinglePost() {
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);

  const post = useSelector(st => st[postId]);

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
