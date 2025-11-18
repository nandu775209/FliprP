import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import './AdminTable.css'; // Common table styling

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        // Backend se /api/contact ko call karein
        const response = await api.get('/api/contact');
        setContacts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching contact submissions.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []); // [] matlab yeh sirf ek baar run hoga

  if (loading) {
    return <h2>Loading contact submissions...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <div className="admin-table-container">
      <h2>Contact Form Submissions</h2>
      <p>Total Submissions: {contacts.length}</p>

      {contacts.length === 0 ? (
        <p>No contact submissions found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>City</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.mobileNumber}</td>
                <td>{contact.city}</td>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewContacts;