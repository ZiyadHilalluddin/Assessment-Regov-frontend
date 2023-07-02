import React from 'react';

function Profile(props) {
  const { user } = props;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Logout</p>
      {/* Display user picture */}
    </div>
  );
}

export default Profile;
