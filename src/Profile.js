import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
    const location = useLocation();
    const { user } = location.state || {}; // Access the user object from state
  
    return (
      <div>
        <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
        <p>Email: {user ? user.email : ''}</p>
      </div>
    );
  }
  
  export default Profile;
  
