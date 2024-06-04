import React, { useState } from 'react';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, password });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'black',
    padding: '40px',
    borderRadius: '10px',
    color: 'white',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#7767D8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    color: '#7767D8',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #7767D8',
    borderRadius: '5px',
    padding: '10px',
  },
  button: {
    backgroundColor: '#7767D8',
    borderColor: '#7767D8',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default SignInPage;
