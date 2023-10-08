import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand >React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/profile' className='custom-link'>Profile</Link></Nav.Link>
              <Nav.Link ><Link to='/create-blog' className='custom-link'>Create-blog</Link></Nav.Link>
              <NavDropdown title="Login/Logout" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to='/login' className='custom-link'>Login</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/' className='custom-link'>Home</Link></NavDropdown.Item>
                              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
