import React from 'react';
import PostForm from './PostForm';

function NewPost({ add }) {

  return (
    <div className="NewPost">
      <h2>New Post</h2>
      <PostForm 
      // add={add}
       />
    </div>
  );
}

export default NewPost;