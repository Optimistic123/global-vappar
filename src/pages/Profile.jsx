import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user, error } = useSelector((state) => state.user);

  return (
    <div>
      {user ? <h1>Welcome, {user.name}</h1> : <h1>Please log in</h1>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Profile;
