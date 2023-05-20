// Where we will define all of our components for our application
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button'; // Import the Button component
import './App.css'; // Import custom CSS file
// routing for our navbar 
import {Link,NavLink} from 'react-router-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


export function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='px-5' id = 'nav' fixed='top'>
      <Navbar.Brand href="#home" className='fs-1' as={Link} to='/'>Aaron Dangc</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav"/>
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className='fs-2 mr-3' as= {NavLink} to='/about'>About</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/resume'>Resume</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/projects'>Projects</Nav.Link>
          <Nav.Link className='fs-2'  as= {NavLink} to='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}




