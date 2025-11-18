// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true, // Faltu spaces hata dega
    },
    projectDescription: {
      type: String,
      required: true,
    },
    projectImage: {
      type: String, // Hum image ka URL save karenge
      required: true,
    },
    // Reference image mein 'Read More' button hai,
    // but humara model sirf data store karega.
  },
  {
    timestamps: true, // 'createdAt' aur 'updatedAt' fields automatically add karega
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;