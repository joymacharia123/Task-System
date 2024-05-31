import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {

  return (
    <>
      <h1>Task App</h1>
      <Link to="/">Home</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/register">Register</Link>
      <Link to="/tasks">Tasks</Link>
    </>
  )
}

export default App