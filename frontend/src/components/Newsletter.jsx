import React, { useState } from 'react';
import api from '../api/axiosConfig';
import './Newsletter.css'; // Hum yeh file abhi banayenge

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // Backend API ko POST request bhejein
      const response = await api.post('/api/subscribe', { email });
      
      setMessage('Successfully Subscribed!');
      console.log('Subscribed:', response.data);
      setEmail(''); // Input field clear karein

    } catch (error) {
      // Backend se 400 'Email already subscribed' error handle karein
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error subscribing. Please try again.');
      }
      console.error('Subscribe Error:', error);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Subscribe Us</h2>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;