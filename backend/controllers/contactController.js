// controllers/contactController.js
const Contact = require('../models/Contact');

// @desc    Get all contact submissions
// @route   GET /api/contact
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a new contact submission
// @route   POST /api/contact
const addContact = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, city } = req.body;

    const contact = new Contact({
      fullName,
      email,
      mobileNumber,
      city,
    });

    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getContacts,
  addContact,
};