import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
