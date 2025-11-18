// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const {
  getContacts,
  addContact,
} = require('../controllers/contactController');

// /api/contact
router.route('/').get(getContacts).post(addContact);

module.exports = router;