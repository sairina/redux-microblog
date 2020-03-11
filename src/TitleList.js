import React from 'react';

function TitleList({ posts }) {

  return (
    <div className="TitleList">
      <h3>{posts.title}</h3>
      <h4>{posts.description}</h4>
    </div>
  );
}

export default TitleList;