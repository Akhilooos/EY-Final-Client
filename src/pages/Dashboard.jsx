// Dashboard component
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../contexts/Authcontext'; // Make sure the path is correct

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default Dashboard;
