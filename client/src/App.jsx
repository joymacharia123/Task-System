import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import backgroundImage from './assets/image.webp'; // I

function App() {
  const [isRegistered, setIsRegistered] = useState(null);

  const year = new Date().getFullYear()

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Welcome to Nexta</h1>
        <p style={styles.welcomeText}>
          Your ultimate task management solution. Stay organized, stay productive!
        </p>
      </header>
      <main style={styles.main}>
        {isRegistered === null ? (
          <div style={styles.prompt}>
            <p style={styles.question}>Are you registered with us?</p>
            <button style={styles.button} onClick={() => setIsRegistered(true)}>Yes</button>
            <button style={styles.button} onClick={() => setIsRegistered(false)}>No</button>
          </div>
        ) : isRegistered ? (
          <div style={styles.action}>
            <p style={styles.info}>Welcome back! Please sign in to continue.</p>
            <Link to="/signin" className="link" style={styles.link}>Sign In</Link>
          </div>
        ) : (
          <div style={styles.action}>
            <p style={styles.info}>Join us today and start managing your tasks efficiently!</p>
            <Link to="/register" className="link" style={styles.link}>Register</Link>
          </div>
        )}
      </main>
      <footer style={styles.footer}>
        <p>&copy; { year } Nexta. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    padding: '100px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    maxWidth: '800px',
    margin: '50px auto',
    animation: 'fadeIn 1s ease-in-out',
    position: 'relative',
  },
  header: {
    marginBottom: '30px',
  },
  heading: {
    color: '#8e44ad',
    fontSize: '48px',
    marginBottom: '10px',
    textShadow: '2px 2px 4px #000000',
    animation: 'zoomIn 1s ease-in-out',
  },
  welcomeText: {
    color: 'white',
    fontSize: '24px',
    margin: '0 20px 20px 20px',
    lineHeight: '1.5',
    animation: 'slideIn 1s ease-in-out',
  },
  main: {
    margin: '20px 0',
  },
  prompt: {
    animation: 'fadeInUp 1s ease-in-out',
  },
  question: {
    fontSize: '24px',
    margin: '20px 0',
  },
  action: {
    animation: 'fadeInUp 1s ease-in-out',
  },
  info: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  link: {
    color: '#8e44ad',
    textDecoration: 'none',
    fontSize: '20px',
    padding: '10px 20px',
    border: '2px solid #8e44ad',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
    margin: '10px',
  },
  linkHover: {
    backgroundColor: '#8e44ad',
    color: 'white',
    transform: 'scale(1.05)',
  },
  button: {
    backgroundColor: '#8e44ad',
    borderColor: '#8e44ad',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '18px',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#888',
  },
};

export default App;
