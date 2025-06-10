import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>WebSolution</h5>
            <p>Connecting community, preserving culture, and building a brighter future together.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Email: info@WebSolution.org</p>
            <p>Phone: +91 7857090127</p>
            <p>Location: Bihar, India</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} WebSolution. All rights reserved.</p>
      {/* <Link to="/admin/contacts">Admin Contact Submissions</Link> */}

      </Container>
    </footer>
  );
}

export default Footer;
