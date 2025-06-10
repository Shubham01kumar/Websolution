// MyNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MyNavbar.css';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="md" sticky="top">
      <Container>
<Navbar.Brand as={Link} to="/" className="websolution-brand  fw-bold  shadow-sm">
  <span className="color1 ">W</span>
  <span className="color2  ">e</span>
  <span className="color3 ">b</span>
  <span className="color4 ">S</span>
  <span className="color1 ">o</span>
  <span className="color2">l</span>
  <span className="color3">u</span>
  <span className="color4">t</span>
  <span className="color1">i</span>
  <span className="color2">o</span>
  <span className="color3">n</span>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  fw-bold l-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Service">Service</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
