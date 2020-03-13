import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

  return (
    <NavBar bg="light" expand="lg">
      <NavBar.Brand>Microblog</NavBar.Brand>
      <Nav className="mr-auto">Get in the Rithm of blogging!</Nav>
      <Nav className="mr-sm-2">
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/new">Add a new post</NavLink>
      </Nav>
    </NavBar>
  );
}

export default Navigation;