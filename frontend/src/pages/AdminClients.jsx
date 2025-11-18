import React, { useState } from 'react';
import api from '../api/axiosConfig';
import './AdminForm.css'; // Wahi common admin form styling

const AdminClients = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientDescription: '',
    clientImage: '', // Hum yahan image ka URL lenge
    clientDesignation: '',
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
      const response = await api.post('/api/clients', formData);
      
      setMessage('Client added successfully!');
      console.log('Client added:', response.data);

      // Form ko clear karein
      setFormData({
        clientName: '',
        clientDescription: '',
        clientImage: '',
        clientDesignation: '',
      });

    } catch (error) {
      setMessage('Error adding client. Please try again.');
      console.error('Submit Error:', error);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Client Management</h2>
      <p>Add a new client testimonial to the landing page.</p>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clientDesignation">Client Designation</label>
          <input
            type="text"
            id="clientDesignation"
            name="clientDesignation"
            placeholder="e.g., CEO, FounTech"
            value={formData.clientDesignation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clientDescription">Client Description (Testimonial)</label>
          <textarea
            id="clientDescription"
            name="clientDescription"
            rows="4"
            value={formData.clientDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="clientImage">Client Image (URL)</label>
          <input
            type="text"
            id="clientImage"
            name="clientImage"
            placeholder="e.g., /images/client-photo.svg"
            value={formData.clientImage}
            onChange={handleChange}
            required
          />
          <small>
            Note: Add image to `public/images/` folder and use the path 
            (e.g., `/images/client-name.png`).
          </small>
        </div>

        <button type="submit" className="admin-submit-btn">
          Add Client
        </button>
      </form>

      {message && <p className="admin-form-message">{message}</p>}
    </div>
  );
};

export default AdminClients;