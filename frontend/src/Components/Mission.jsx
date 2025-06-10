import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Mission() {
  return (
    <Container className="py-5" id="mission">
      <h2 className="text-center mb-4 text-primary">Our Mission & Vision</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To empower and unite the Bharaywat community through education, support, and collaboration.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To build a future where every community member feels valued and connected globally.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Mission;
