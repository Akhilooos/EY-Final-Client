import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/Authcontext';// Adjust the path as necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext); // Use the login function from AuthContext
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password); // Log username and password
    try {
      const response = await fetch('http://localhost:5500/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Response not OK');
      }

      const data = await response.json();
      console.log("Response data:", data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // Save user info
      login(data.user); // Call the login function from AuthContext
      navigate("/"); // Use navigate to redirect without reloading
    } catch (err) {
      setErrorMessage(err.message || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

