import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';

const INITIAL_POSTS_STATE = {};

function SinglePost() {
  const [posts, setPosts] = useState(INITIAL_POSTS_STATE);
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);
  
  const post = useSelector(st => st[postId]);
  // let post = Object.entries(posts).find(p => postId === p[0])
  console.log('posts', posts)
  console.log('postId', postId)
  // console.log('Object.entries(posts)', Object.entries(posts))
  console.log('SinglePost post', post)
  //pass down an object instead (post[1])

  return (
    <div className="SinglePost">
      {editing ?
        <PostForm
          post={post}
          postId={postId}
          editing={editing} 
          setEditing={setEditing} />
        : <PostView
          post={post}
          setEditing={setEditing}
          setPosts={setPosts} />}
    </div>
  );
}
export default SinglePost;
