// controllers/projectController.js
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}); // Sabhi projects find karein
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a new project
// @route   POST /api/projects
const addProject = async (req, res) => {
  try {
    // req.body se data nikalenge (yeh data admin panel se aayega)
    const { projectName, projectDescription, projectImage } = req.body;

    // Ek naya project object banayein
    const project = new Project({
      projectName,
      projectDescription,
      projectImage,
    });

    // Database mein save karein
    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProjects,
  addProject,
};