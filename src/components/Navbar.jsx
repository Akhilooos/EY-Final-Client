// Navbar component
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const logout = () => {
    // Your logout logic here
  };

  return (
    <nav>
      {isAuthenticated? (
        <>
          <Link to="/">Home</Link>
          <button onClick={logout}>Logout</button>
          <span>Welcome, User Name</span> {/* Replace with actual user name */}
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
