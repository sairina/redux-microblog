import React from 'react';
import { Link } from 'react-router-dom';

function TitleList({ posts }) {

  
  return (
    <div className="TitleList">
      <Link to={`/${posts[0]}`}>
      <h3>{posts[1].title}</h3>
      </Link>
      <h4>{posts[1].description}</h4>
      
    </div>
  );
}

export default TitleList;