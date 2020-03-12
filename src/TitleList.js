import React from 'react';
import { Link } from 'react-router-dom';

function TitleList({ post }) {

  return (
    <div className="TitleList">
      <Link to={`/posts/${post[0]}`}>
        <h3>{post[1].title}</h3>
      </Link>
      <h4>{post[1].description}</h4>

    </div>
  );
}

export default TitleList;