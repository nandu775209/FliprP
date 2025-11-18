// routes/subscriptionRoutes.js
const express = require('express');
const router = express.Router();
const {
  getSubscriptions,
  addSubscription,
} = require('../controllers/subscriptionController');

// /api/subscribe
router.route('/').get(getSubscriptions).post(addSubscription);

module.exports = router;