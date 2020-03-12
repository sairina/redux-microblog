import React from 'react';
import TitleList from './TitleList';
import {useSelector} from 'react-redux';

function Home() {
const store = useSelector(store => store); 

const singlePost = Object.entries(store).map(p => <TitleList post={p} key={p[0]} />);

// console.log(Object.entries(store)) // [[key:{}], [key:{}]]

  return (
    <div className="Home">
      <h3>Welcome to Microblog, our innovative site for communicating on the information superhighway.</h3>
      {singlePost}
    </div>
  );
}

export default Home;