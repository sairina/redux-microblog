import React from 'react';
import { Link } from 'react-router-dom';


function TitleList({ post }) {
  
  return (
    <div className="TitleList">
      <Link to={`/posts/${post[0]}`}>
        <h4>Post: {post[1].title}</h4>
      </Link>
      <h5>Description: {post[1].description}</h5>
    </div>
  );
}

export default TitleList;