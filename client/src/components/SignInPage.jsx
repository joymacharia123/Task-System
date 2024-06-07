import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      localStorage.setItem("token", data.session);
      navigate('/tasks')
    } else {
      console.error(data);
    }
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
        <button type="submit" className="btn btn-primary" style={styles.button}>
          Sign In
        </button>
      </form>
      <Link className="link" to="/register">Don't have an Account? Sign Up</Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "black",
    padding: "100px",
    borderRadius: "10px",
    color: "white",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#8E44AD",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    color: "#8E44AD",
  },
  input: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #8E44AD",
    borderRadius: "5px",
    padding: "10px",
  },
  button: {
    backgroundColor: "#8E44AD",
    borderColor: "#8E44AD",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    color: "#8E44AD",
    textDecoration: "none",
    textDecoration: "underline" /* Optional: Removes the underline from the link */
  },
  

};

export default SignInPage;
