import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Welcome from './pages/Welcome.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
import Tasks from './pages/Tasks.jsx'



const paths = createBrowserRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "",
    element: <Welcome/>
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/tasks",
    element: <Tasks/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>,
)