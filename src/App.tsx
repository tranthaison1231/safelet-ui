import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    element: <Login />,
    path: '/login'
  },
  {
    element: <div>Sign Up</div>,
    path: '/sign-up'
  },
  {
    element: <div>home</div>,
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
