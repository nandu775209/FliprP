// controllers/subscriptionController.js
const Subscription = require('../models/Subscription');

// @desc    Get all subscribed emails
// @route   GET /api/subscribe
const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({});
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a new subscription
// @route   POST /api/subscribe
const addSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    // Check karo kahin email pehle se toh nahi hai
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new Subscription({
      email,
    });

    const createdSubscription = await subscription.save();
    res.status(201).json(createdSubscription);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getSubscriptions,
  addSubscription,
};