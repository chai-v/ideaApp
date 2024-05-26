import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login.tsx'
import Signup from './pages/signup/Signup.tsx'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Home from './pages/home/Home.tsx'
import Posts from './pages/posts/Posts.tsx'
import Profile from './pages/profile/Profile.tsx'

import { AuthProvider } from './utils/UserContext.tsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/home',
    element: <Home/>,
    children: [
      {
        path: '/home/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/home/profile',
        element: <Profile/>
      },
      {
        path: '/home/feed',
        element: <Posts/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}/>
    </AuthProvider>
  </React.StrictMode>,
)
