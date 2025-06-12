import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hero from '../assets/slider2.jpg';
                  

function Home() {
  return (
    <div className="bg-light  py-3" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={12} lg={6} className="text-Right text-start">
            <h1 className=" fw-bold" style={{ fontSize: '3.7rem' }}>
              <span style={{ color: '#ff6600', fontWeight: 'bold' }}>Empowering</span> Your Ideas with{' '}
              <span style={{ color: '#007bff', fontWeight: 'bold' }}>Exceptional</span> App and Web Solutions
            </h1>


            <p className="lead">
              Your goals are our highest priority. We collaborate closely to understand your needs
              and provide customized solutions that align with your objectives. Together, we’ll
              transform your vision into actionable results, driving success at every stage.
            </p>
            <Button variant="primary" size="lg" href="#about">
              Learn More
            </Button>
          </Col>
          <Col md={12} lg={6} className="text-center  mt-md-0     ">
         <img 
         src={hero} 
         alt="Home"  
         style={{ width: "100%", marginTop: "3.5px", height: "60%", objectFit: "cover" }} 
         />

              {/* <img
              src="https://assets.zyrosite.com/Aq20eV79zLfpXV6b/bb375cdd655184ca2715ac5059e73651-YX4ZEeZEvbhrMMZa.gif"
              alt="Gradient GIF"
              className="img-fluid"
            /> */}




          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
