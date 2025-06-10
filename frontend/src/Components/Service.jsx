import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Service.css';

function Service() {
  const services = [
    {
      title: 'App Development',
      desc: `✔️ Bootstrap-powered responsive design
✔️ Cross-platform compatibility
✔️ Performance optimization`,
    },
    {
      title: 'Web Development',
      desc: `✔️ MERN Stack & Tailwind CSS styling
✔️ Bootstrap-powered responsive design
✔️ Express.js & Next.js & SQL`,
    },
    {
      title: 'UI/UX Design',
      desc: `✔️ User-centered design
✔️ Interactive prototypes
✔️ Modern aesthetics`,
    },
    {
      title: 'API Integration',
      desc: `✔️ RESTful APIs
✔️ Third-party integration
✔️ Custom API development`,
    },
  ];

  return (
    
    <div className="service-section py-5" id="service">
      <Container>
        <div className='head-service'>
           <h2 className="text-center mb-4 fw-bold text-info  ">Our Services</h2>
        <p className="text-center text-light mb-5">
          Comprehensive digital solutions tailored to transform your business with cutting-edge technologies and innovative approaches
        </p>

        </div>
       
        <Row>
          {services.map((service, index) => (
            <Col md={6} key={index} className="mb-4">
              <div className="service-card">
                <h5 className="service-title">{service.title}</h5>
                <p className="service-desc">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Service;
