import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import './AdminTable.css'; // Common table styling

const ViewSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        // Backend se /api/subscribe ko call karein
        const response = await api.get('/api/subscribe');
        setSubscriptions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching subscriptions.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []); // [] matlab yeh sirf ek baar run hoga

  if (loading) {
    return <h2>Loading subscriptions...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return (
    <div className="admin-table-container">
      <h2>Newsletter Subscriptions</h2>
      <p>Total Subscribers: {subscriptions.length}</p>

      {subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Email Address</th>
              <th>Subscribed On</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub._id}>
                <td>{sub.email}</td>
                <td>{new Date(sub.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewSubscriptions;