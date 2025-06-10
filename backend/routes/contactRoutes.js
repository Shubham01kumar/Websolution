const express = require('express');
const router = express.Router();
const { submitContactForm, getAllContacts, deleteContact } = require('../controllers/contactController');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// ✅ POST route for user submission
router.post('/contact', submitContactForm);
router.get('/admin/contacts', getAllContacts);
router.delete('/admin/contacts/:id', deleteContact);

// ✅ Protected GET route for admin to fetch all contacts
//router.get('/admin', verifyAdminToken, getAllContacts);

// ✅ Protected DELETE route for admin to delete contact by ID
//router.delete('/admin/contacts/:id', verifyAdminToken, deleteContact);

module.exports = router;
