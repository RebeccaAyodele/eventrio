import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Auth from './layouts/Auth'
import LoginPage from './pages/login'
import Regsiter from './pages/register'
import Dashboard from './pages/Dashboard'

function App() {
  const _route = createBrowserRouter(
    [
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <LoginPage />
          },
          {
            path: "register",
            element: <Regsiter />
          },
          {
            path: "dashboard",
            element: <Dashboard />
          }
        ]
      },
      { path: "", element: <Navigate to="/auth/login" /> },
      { path: "*", element: <div>404 page not found it seems you are lost</div> },
    ]
  )
  return <RouterProvider router={_route} />
}

export default App