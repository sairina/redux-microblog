import React, {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import PostForm from './PostForm';


function PostView( {posts, remove, update} ){
  const { postId } = useParams();
  const [editing, setEditing] = useState(false);
  const history = useHistory();


  let post = Object.entries(posts).find(p => postId === p[0])
 
  function handleRemove(){
    remove(postId)
    history.push('/');
  }

  return(
    <div>
    {!post ? history.push("/") :
    <div>POST VIEW
    <h2>{post[1].title}</h2>
    <p>{post[1].description}</p>
    <p>{post[1].body}</p>
    <button onClick={() => setEditing(true)}>Edit Form</button>
    <button onClick={handleRemove}>Delete</button>
    {editing ? 
    <PostForm  title={post[1].title} 
    description={post[1].description} 
    body={post[1].body}
    update={update}
    id={postId}
    />
    : null
}
    </div>}
    </div>
);
}

export default PostView;