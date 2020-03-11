import React from 'react';
import TitleList from './TitleList';

function Home({ posts }) {

  const singlePost = Object.entries(posts).map(p => <TitleList posts={p} key={p[0]} />
  );

  return (
    <div className="Home">
      <h3>Welcome to Microblog, our innovative site for communicating on the information superhighway.</h3>
      {singlePost}
    </div>
  );
}

export default Home;