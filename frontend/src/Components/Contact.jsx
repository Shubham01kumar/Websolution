import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Contact.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);

      setStatus(res.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <div className="contact-section py-5" id="contact">
      <Container>
        <h2 className="text-center mb-5 fw-bold text-black">Contact Us</h2>
        <Row className="justify-content-center">
          {/* Form Section */}
          <Col md={6}>
            <Form className="contact-form p-5   rounded shadow-lg bg-dark text-white" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 " controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formService">
                <Form.Label>Service Interest</Form.Label>
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="design">UI/UX Design</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 btn-3d ">
                Send Message
              </Button>
              {status && <p className="mt-3 text-info">{status}</p>}
            </Form>
          </Col>

          {/* Contact Info Section */}
          <Col md={6}>
            <Card className="bg-dark text-white  mb-3 p-3 info-s">
              <Card.Body>
                <Card.Title><FaMapMarkerAlt className="me-2 text-danger" /> Our Location</Card.Title>
                <Card.Text className='text-info' >Siwan, Bihar, India</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-dark text-white mb-3 p-3">
              <Card.Body>
                <Card.Title><FaPhoneAlt className="me-2 text-pink" /> Phone Number</Card.Title>
                <Card.Text className='text-info'>+91 7857090127</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-dark text-white mb-3 p-3">
              <Card.Body>
                <Card.Title><FaEnvelope className="me-2 " /> Email Address</Card.Title>
                <Card.Text className='text-info'>WebSolutionpvtltd@gmail.com</Card.Text>
              </Card.Body>
            </Card>

            <Card className="bg-dark text-white p-3">
              <Card.Body>
                <Card.Title>Follow Us</Card.Title>
                <div className="d-flex gap-3 fs-4 mt-2">
                  <a href="#" className="text-white"><FaLinkedin /></a>
                  <a href="#" className="text-white"><FaInstagram /></a>
                  <a href="#" className="text-white"><FaFacebook /></a>
                  <a href="#" className="text-white"><FaTwitter /></a>
                  <a href="#" className="text-white"><FaWhatsapp /></a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
