import React from 'react';

const UserDisplay = ({ user }) => {
  if (user) {
    return <p>Logged in as: {user.username}</p>;
  }
  return <p>Please log in.</p>;
};

export default UserDisplay;
