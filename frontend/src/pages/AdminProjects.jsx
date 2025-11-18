import React, { useState } from 'react';
import api from '../api/axiosConfig';
import './AdminForm.css'; // Common admin form styling

const AdminProjects = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectImage: '', // Hum yahan image ka URL lenge
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // Backend API ko POST request bhejein
      const response = await api.post('/api/projects', formData);
      
      setMessage('Project added successfully!');
      console.log('Project added:', response.data);

      // Form ko clear karein
      setFormData({
        projectName: '',
        projectDescription: '',
        projectImage: '',
      });

    } catch (error) {
      setMessage('Error adding project. Please try again.');
      console.error('Submit Error:', error);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Project Management</h2>
      <p>Add a new project to the landing page.</p>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows="4"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="projectImage">Project Image (URL)</label>
          <input
            type="text"
            id="projectImage"
            name="projectImage"
            placeholder="e.g., /images/project-image.svg"
            value={formData.projectImage}
            onChange={handleChange}
            required
          />
          <small>
            Note: Add image to `public/images/` folder and use the path 
            (e.g., `/images/my-project.png`).
          </small>
        </div>

        <button type="submit" className="admin-submit-btn">
          Add Project
        </button>
      </form>

      {message && <p className="admin-form-message">{message}</p>}
    </div>
  );
};

export default AdminProjects;