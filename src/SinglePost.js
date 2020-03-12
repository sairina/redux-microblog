import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostView from './PostView';
import PostForm from './PostForm';

function SinglePost({ posts, update, remove }) {
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);

  return (
    <div className="SinglePost">
      {editing ? <PostForm posts={posts} postId={postId} update={update} editing={editing} setEditing={setEditing} /> : <PostView posts={posts} setEditing={setEditing} remove={remove}/>}
    </div>
  );
}
export default SinglePost;
