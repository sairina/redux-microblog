import React from 'react';
import { useParams } from "react-router-dom";


function PostView(){
  const { postId } = useParams();
  
  console.log(postId)

  return(
    <div>POST VIEW
    <h2>blog title</h2>
    <p>description</p>
    <p>body</p>
    <button>Edit Form</button>
    <button>Delete / redirect to home and delete post</button>
    </div>
  );
}

export default PostView;