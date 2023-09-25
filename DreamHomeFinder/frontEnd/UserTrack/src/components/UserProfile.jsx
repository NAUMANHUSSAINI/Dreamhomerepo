// UserProfile.js
import React from 'react';

function UserProfile({ userName, userEmail }) {
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {userName}
      </div>
      <div>
        <strong>Email:</strong> {userEmail}
      </div>
      {/* You can add more profile information here */}
    </div>
  );
}

export default UserProfile;
