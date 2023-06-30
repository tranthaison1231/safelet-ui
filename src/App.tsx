import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'
import Maintenance from '@/pages/maintenance'
import Register from '@/pages/register'

const router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login'
  },
  {
    element: <Register />,
    path: '/register'
  },
  {
    element: <Maintenance />,
    path: '/maintenance'
  },
  {
    element: <Dashboard />,
    path: '/'
  },
  {
    element: <div>404</div>,
    path: '*'
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
