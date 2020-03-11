import React from 'react';
import TitleList from './TitleList';
import { v4 as uuid } from 'uuid';


function Home({ posts }) {

  const singlePost = posts.map(p => <TitleList posts={p} key={uuid} />
  );

  return (
    <div className="Home">
      <h3>Welcome to Microblog, our innovative site for communicating on the information superhighway.</h3>
      {singlePost}
    </div>
  );
}

export default Home;