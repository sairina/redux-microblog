import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
  
  return(
    <div className="NavBar">
      <h1>Microblog</h1>
      <h3> Get in the Rithm of blogging!</h3>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/new">Add a new post</NavLink>
    </div>
  );
}

export default NavBar;