// controllers/clientController.js
const Client = require('../models/Client');

// @desc    Get all clients
// @route   GET /api/clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a new client
// @route   POST /api/clients
const addClient = async (req, res) => {
  try {
    const { clientName, clientDescription, clientImage, clientDesignation } =
      req.body;

    const client = new Client({
      clientName,
      clientDescription,
      clientImage,
      clientDesignation,
    });

    const createdClient = await client.save();
    res.status(201).json(createdClient);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getClients,
  addClient,
};