import React from 'react';
import { Link } from 'react-router-dom';

function TitleList({ posts }) {

  return (
    <div className="TitleList">
      <Link to={`/${posts.id}`}>
      <h3>{posts.title}</h3>
      </Link>
      <h4>{posts.description}</h4>
      
    </div>
  );
}

export default TitleList;