import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

const INITIAL_POSTS_STATE = {};

function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS_STATE); //move lower

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes posts={posts} setPosts={setPosts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
