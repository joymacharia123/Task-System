import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
  <div className="container">
    <h1>Welcome to Task Manager</h1>
    <Link to="/signin" className="btn btn-primary">Sign In</Link>
    <Link to="/register" className="btn btn-secondary">Register</Link>
  </div>
);

export default WelcomePage;
