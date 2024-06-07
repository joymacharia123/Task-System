import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
    });

    if (response.ok) {
      console.log(await response.json());
      navigate("/signin")
    } else {
      console.error(await response.json());
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
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
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn btn-primary" style={styles.button}>Register</button>
        </form>
      </div>
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
    width: '100%',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#8E44AD',
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
    color: '#8E44AD',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid #8E44AD',
    borderRadius: '5px',
    padding: '10px',
  },
  button: {
    backgroundColor: '#8E44AD',
    borderColor: '#8E44AD',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default RegisterPage;
