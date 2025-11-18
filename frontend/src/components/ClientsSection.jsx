import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
// CSS ko main.jsx mein import kar liya gaya hai

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/clients');
        setClients(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching clients.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return <div className="clients-section"><h2>Loading Clients...</h2></div>;
  }

  if (error) {
    return <div className="clients-section"><h2>{error}</h2></div>;
  }

  return (
    <section className="clients-section">
      <h2>Happy Clients</h2>
      <div className="client-grid">
        {clients.map((client) => (
          <div key={client._id} className="client-card">
            <img src={client.clientImage} alt={client.clientName} className="client-image" />
            <p className="client-desc">{client.clientDescription}</p>
            <h3 className="client-name">{client.clientName}</h3>
            <p className="client-designation">{client.clientDesignation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;