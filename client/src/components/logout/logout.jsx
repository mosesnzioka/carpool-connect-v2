import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        localStorage.removeItem('authToken');
        alert('Logout successful!');
        navigate('/signin');
      } else {
        const error = await response.json();
        console.error('Logout failed:', error.message);
        alert(`Logout failed: ${error.message}`);
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Logout failed: Unauthorized');
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}

export default Logout;
