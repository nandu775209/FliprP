// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientDescription: {
      type: String,
      required: true,
    },
    clientImage: {
      type: String, // Image ka URL
      required: true,
    },
    clientDesignation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;