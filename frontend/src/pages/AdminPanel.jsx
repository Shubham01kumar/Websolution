import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminContacts from './AdminContacts';
import AdminProjects from './AdminProjects';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Card, Carousel,Button } from 'react-bootstrap';





const processSteps = [
  {
    title: " View Client Details",
    path: "/admin/contacts", // Link path
    icon: "📬",
    
  },
  {
    title: " Add Project & Manages",
    path: "/admin/projects",
    icon: "📁",
  },
 
];




const AdminPanel = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      navigate('/admin');
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // ❌ Remove token
    navigate('/admin'); // 🔁 Redirect to login page
  };

  if (loading) {
    return <div className="text-center mt-5">Checking authentication...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <hr />
           


             <Row className="  justify-content-center">
                      {processSteps.map((step, index) => (
                        <Col key={index} md={12} lg={4} className="mb-4">
                          <div className="process-card text-center">
                            <div className="process-icon">{step.icon}</div>
                            <h5 className="process-title">{step.title}</h5>
                            <Link to={step.path}>
                            <Button variant="primary">Open Now</Button>
                            </Link>
                            </div>
                        </Col>
                      ))}                                                                                                                                                                                                                                                                                                     
                      </Row>



      {/* <div className="mb-5">
        <h4>📬 Contact Submissions</h4>
        <AdminContacts />
      </div>

      <div>
        <h4>📁 Project Management</h4>
        <AdminProjects />
      </div> */}
    </div>
  );
};

export default AdminPanel;
