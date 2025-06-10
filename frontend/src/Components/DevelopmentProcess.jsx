import React from "react";
import "./DevelopmentProcess.css";
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const processSteps = [
  {
    title: "1. Planning",
    desc: "Understanding requirements and setting goals.",
    icon: "💡",
  },
  {
    title: "2. Design",
    desc: "Creating wireframes and prototypes.",
    icon: "🎨",
  },
  {
    title: "3. Development",
    desc: "Building the app with latest tech stack.",
    icon: "💻",
  },
  {
    title: "4. Testing",
    desc: "Ensuring quality with rigorous testing.",
    icon: "🔧",
  },
  {
    title: "5. Deployment",
    desc: "Launching the product to the world.",
    icon: "🚀",
  },
  {
    title: "6. Maintenance & Support",
    desc: "Support and updates that never stop.",
    icon: "🛠️",
  },
];

const DevelopmentProcess = () => {
  return (
    <div className="development-process-section py-5">
      <Container>
        <h2 className="text-center mb-5 fw-bold text-success">Our Development Process</h2>

        {/* Grid View for medium and large screens */}
        <Row className="d-none d-md-flex justify-content-center">
          {processSteps.map((step, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="process-card text-center">
                <div className="process-icon">{step.icon}</div>
                <h5 className="process-title">{step.title}</h5>
                <p className="process-desc">{step.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Carousel for small screens */}
        <div className="d-block d-md-none text-center">
          <Carousel
           // indicators={false}
            interval={null}
            controls={false}
            className="w-75 mx-auto"
          >
            {processSteps.map((step, index) => (
              <Carousel.Item key={index}>
                <div className="process-card text-center py-4">
                  <div className="process-icon">{step.icon}</div>
                  <h5 className="process-title">{step.title}</h5>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default DevelopmentProcess;
