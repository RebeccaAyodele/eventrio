// App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Auth from './layouts/Auth'
import DashboardLayout from './pages/Dashboard'
import LoginPage from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/onboarding'
import Attendees from './pages/Attendees'
import Home from './pages/Home'

function App() {
  const _route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'onboarding',
          element: <Onboarding />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        // {
        //   path: ' create',
        //   element: <Create />,
        // },
        {
          path: 'attendees',
          element: <Attendees />,
        },
      ],
    },
    {
      path: '*',
      element: <div>404 - Page not found. It seems you are lost.</div>,
    },
  ])

  return <RouterProvider router={_route} />
}

export default App
