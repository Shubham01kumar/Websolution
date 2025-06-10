const pool = require('../config/db');

// Save contact form
const submitContactForm = async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO contact_form (name, email, service, message) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, service, message]
    );

    res.status(201).json({ message: 'Message sent successfully!', data: result.rows[0] });
  } catch (err) {
    console.error('Error saving contact:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// ✅ Add GET function for admin
const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_form ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching contacts:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// DELETE a contact by ID
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM contact_form WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error('Error deleting contact:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
  deleteContact,
};