// src/components/Projects.js
import React, { useState, useEffect } from 'react';

//import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import axios from 'axios';
import './OurProjects.css';

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "MERN Stack + Next.js",
//     tags: ["React", "Node.js", "MongoDB"],
//     color: "primary",
//     icon: "🌐",
//   },
//   {
//     title: "Fitness Tracking App",
//     description: "Mobile App Development",
//     tags: ["React Native", "Firebase", "Bootstrap"],
//     color: "danger",
//     icon: "📱",
//   },
//   {
//     title: "SaaS Dashboard",
//     description: "UI/UX Design & Development",
//     tags: ["Tailwind", "Next.js", "Figma"],
//     color: "success",
//     icon: "✏️",
//   },
//   {
//     title: "Analytics Platform",
//     description: "Data Visualization",
//     tags: ["D3.js", "Express", "Redis"],
//     color: "warning",
//     icon: "📊",
//   },
//   {
//     title: "API Integration Hub",
//     description: "Backend Development",
//     tags: ["GraphQL", "REST", "Node.js"],
//     color: "danger",
//     icon: "🔌",
//   },
//   {
//     title: "Market Research Tool",
//     description: "Data Analysis Platform",
//     tags: ["Python", "React", "AWS"],
//     color: "info",
//     icon: "🛒",
//   },
// ];

const OurProjects = () => {
    const [projects, setProjects] = useState([]);
  
 

  const fetchProjects = async () => {
    const res = await axios.get('http://localhost:5000/api/projects');
    setProjects(res.data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <Container className="my-5  ">
      <div className="text-center mb-5  head-projects">
        <h2 className="fw-bold text-purple  ">Our Projects</h2>
        <p className="text-muted">Explore the cutting-edge projects we've delivered using modern technologies.</p>
      </div>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6}  lg={4} className="mb-4">
            <Card className={`h-100 text-white bg-gradient bg-${project.color}`}>
              <Card.Body>
                <div className="fs-2 mb-2">{project.icon}</div>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                

                <div>
                  {project.tags.map((tag, i) => (
                    <Badge bg="dark" pill className="me-2 mt-2" key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurProjects;
