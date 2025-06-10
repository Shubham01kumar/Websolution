import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Spinner, Alert, Card } from 'react-bootstrap';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ Fetch contacts without token
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/contacts');
        setContacts(response.data);
      } catch (err) {
        console.error('Error fetching contacts:', err.message);
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // ✅ Delete contact without token
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this contact?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/admin/contacts/${id}`);
      setContacts(prev => prev.filter(contact => contact.id !== id));
    } catch (err) {
      console.error('Delete failed:', err.message);
      setError('Failed to delete contact.');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Contact Submissions</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : contacts.length === 0 ? (
        <Alert variant="info">No contact submissions found.</Alert>
      ) : (
        <Card className="shadow-lg p-4">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.service}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm rounded-pill"
                      onClick={() => handleDelete(contact.id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </Container>
  );
};

export default AdminContacts;
