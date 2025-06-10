import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './About.css';

import shubham from '../assets/shubham3.jpg';
import shahwej from '../assets/shahwej.jpg';

const teamMembers = [
  {
    name: "Shubham Kumar",
    role: "Full Stack Developer",
    image: shubham,
  },
  {
    name: ". Kumar",
    role: "Android Developer & Cloud",
    image: "https://via.placeholder.com/300x350?text= +Kumar",
  },
  {
    name: "Shahwej Ali",
    role: "Data Analytics",
    image: shahwej,
  },
];

function About() {
  return (
    <div className="about-section py-5" id="about">
      <Container>
        {/* About Section */}
        <Row className="align-items-center mb-5 about-highlight-section">
          <Col md={6}> 
            <h1 className="section-title text-warning">Welcome to WebSolution</h1>
            <p className="section-description">
              <span className="text-gradient">WebSolution</span> is a dynamic freelancing agency committed to delivering exceptional solutions to clients worldwide.
              Our mission is to turn ideas into reality, driven by innovation, creativity, and expertise.
            </p>
          </Col>
        </Row>

        {/* Core Values Section */}
        <h1 className="text-center text-white">Our Core Values</h1>
        <Row className="text-center mt-4">
          <Col md={4} className="mb-4">
            <Card className="value-card h-100">
              <Card.Body>
                <Card.Title>🚀 Innovation</Card.Title>
                <Card.Text>
                  We embrace cutting-edge technologies to deliver forward-thinking solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="value-card h-100">
              <Card.Body>
                <Card.Title>🤝 Commitment</Card.Title>
                <Card.Text>
                  Our team is dedicated to achieving excellence in every project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="value-card h-100">
              <Card.Body>
                <Card.Title>🔍 Transparency</Card.Title>
                <Card.Text>
                  Open and honest communication builds trust and long-lasting relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold text-black">
            Meet <span className="text-purple">Our Team</span>
          </h2>
        </div>

        {/* Carousel for small screens */}
        <div className="d-block d-md-none text-center">
          <Carousel data-bs-theme="dark" className="w-75 mx-auto" 
          indicators={false} // 👈 Extra cursor (dots) removed
    
          interval={null}    // 👈 Optional: stops auto slide
          >  
          {teamMembers.map((member, idx) => (
              <Carousel.Item key={idx}>
                <Card className="shadow border-0" style={{ width: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                    style={{ height: '350px', objectFit: 'cover' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text className="text-primary fw-semibold">{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Grid for medium and larger screens */}
        <Row className="d-none d-md-flex">
          {teamMembers.map((member, idx) => (
            <Col key={idx} md={4} lg={4} className="mb-4 d-flex justify-content-center">
              <Card className="shadow border-0" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={member.image}
                  alt={member.name}
                  style={{ height: '350px', objectFit: 'cover', padding: '1rem' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-primary fw-semibold">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;
