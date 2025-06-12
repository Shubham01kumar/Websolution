// MyNavbar.jsx
import React, { useState } from 'react';


import { Navbar, Nav, Container, Collapse} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MyNavbar.css';

function MyNavbar() {
   const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

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


{/* Toggle Button */}
        <button
          aria-controls="basic-navbar-nav"
          aria-expanded={expanded}
          onClick={toggleNavbar}
          className="navbar-toggler border-0"
          type="button"
        >
          <span style={{ fontSize: '1.8rem' }}>
            {expanded ? '❌' : '☰'}
          </span>
        </button>
        <Navbar.Collapse in={expanded}  >
          <div id="basic-navbar-nav">

          <Nav className="ms-auto  fw-bold l-nav"  onClick={closeNavbar}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Service">Service</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
