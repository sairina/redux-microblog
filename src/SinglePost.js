import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';

function SinglePost({ posts, setPosts }) {
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);

  let post = Object.entries(posts).find(p => postId === p[0])

  return (
    <div className="SinglePost">
      {editing ?
        <PostForm
          posts={posts}
          post={post}
          postId={postId}
          editing={editing} 
          setEditing={setEditing} />
        : <PostView
          posts={posts}
          post={post}
          setEditing={setEditing}
          setPosts={setPosts} />}
    </div>
  );
}
export default SinglePost;
