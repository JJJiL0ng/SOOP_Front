import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

function HomePage() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/welcome`);
        setWelcomeMessage(response.data.message);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch welcome message');
        setLoading(false);
      }
    };

    fetchWelcomeMessage();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <h1>Welcome to Our Website</h1>
      <p>{welcomeMessage}</p>
      {currentUser ? (
        <p>Hello, {currentUser.name}! Thanks for logging in.</p>
      ) : (
        <p>Please log in to access all features.</p>
      )}
    </div>
  );
}

export default HomePage;