// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const {
  getProjects,
  addProject,
} = require('../controllers/projectController');

// Jab GET request /api/projects par aaye, toh getProjects chalao
router.route('/').get(getProjects);

// Jab POST request /api/projects par aaye, toh addProject chalao
router.route('/').post(addProject);

module.exports = router;