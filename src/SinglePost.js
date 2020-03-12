import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';

function SinglePost({ posts, update, remove, add, setPosts }) {
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);

  console.log('postId',postId)
  console.log('posts', posts)
  console.log('singlePost', Object.entries(posts).find(p => postId === p[0]))
  let post = Object.entries(posts).find(p => postId === p[0])

  return (
    <div className="SinglePost">
      {editing ?
        <PostForm
          posts={posts}
          post={post}
          postId={postId}
          update={update}
          editing={editing} 
          setEditing={setEditing} />
        : <PostView
          posts={posts}
          post={post}
          setEditing={setEditing}
          remove={remove}
          add={add}
          setPosts={setPosts} />}
    </div>
  );
}
export default SinglePost;
