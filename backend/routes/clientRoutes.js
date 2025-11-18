// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const {
  getClients,
  addClient,
} = require('../controllers/clientController');

// /api/clients
router.route('/').get(getClients).post(addClient);

module.exports = router;