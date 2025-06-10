import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, Table, Button, Form, Modal, Badge,
} from 'react-bootstrap';

const API = 'http://localhost:5000/api/projects';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: '', description: '', tags: '', color: '', icon: '',
  });
  const [editId, setEditId] = useState(null);

  const fetchProjects = async () => {
    const res = await axios.get(API);
    setProjects(res.data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleShow = (project = null) => {
    if (project) {
      setForm({
        title: project.title,
        description: project.description,
        tags: project.tags.join(','),
        color: project.color,
        icon: project.icon,
      });
      setEditId(project.id);
    } else {
      setForm({ title: '', description: '', tags: '', color: '', icon: '' });
      setEditId(null);
    }
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      tags: form.tags.split(',').map(t => t.trim()),
    };

    if (editId) {
      await axios.put(`${API}/${editId}`, payload);
    } else {
      await axios.post(API, payload);
    }

    fetchProjects();
    handleClose();
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`${API}/${id}`);
      fetchProjects();
    }
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Admin Panel – Manage Projects</h2>
      <Button className="mb-3" onClick={() => handleShow()}>+ Add Project</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Color</th>
            <th>Icon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(proj => (
            <tr key={proj.id}>
              <td>{proj.title}</td>
              <td>{proj.description}</td>
              <td>{proj.tags.map((tag, i) => <Badge key={i} bg="dark" className="me-1">{tag}</Badge>)}</td>
              <td>{proj.color}</td>
              <td>{proj.icon}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleShow(proj)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(proj.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Form */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Edit Project' : 'Add Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" value={form.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" value={form.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tags (comma-separated)</Form.Label>
              <Form.Control name="tags" value={form.tags} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Color (e.g. primary, danger)</Form.Label>
              <Form.Control name="color" value={form.color} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Icon (emoji)</Form.Label>
              <Form.Control name="icon" value={form.icon} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminProjects;
