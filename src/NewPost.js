import React from 'react';
import PostForm from './PostForm';

function NewPost() {

  return (
    <div className="NewPost" style={{ marginTop: '40px' }}>
      <h2>New Post</h2>
      <PostForm />
    </div>
  );
}

export default NewPost;