import React, { useState } from 'react';
import api from '../api/axiosConfig';
import './ContactForm.css'; // Hum yeh file abhi banayenge

const ContactForm = () => {
  // Form ke data ko state mein rakhein
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
  });

  const [message, setMessage] = useState(''); // Success ya error message ke liye

  // Jab user input field mein type kare
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Jab form submit ho
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page ko reload hone se rokein
    setMessage(''); // Purana message clear karein

    try {
      // Backend API ko POST request bhejein
      const response = await api.post('/api/contact', formData);
      
      setMessage('Thank you! We will get back to you soon.');
      console.log('Form submitted:', response.data);

      // Form ko clear karein
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        city: '',
      });

    } catch (error) {
      setMessage('Error submitting form. Please try again.');
      console.error('Submit Error:', error);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Get a Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="Area, City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Get Quick Quote
          </button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </section>
  );
};

export default ContactForm;